import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/link-error';

import { getCookies } from '@sandbox-react-apollo/helpers';

import { Cookies } from '~client/shared/types';

import * as Sentry from '@sentry/browser';
import { Severity } from '@sentry/browser';

import { environment } from '../environments/environment';

const { githubAccessToken } = getCookies<Cookies>();

const httpLink = new HttpLink({ uri: environment.apiEndpoint });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${githubAccessToken}`,
    },
  }));

  return forward(operation);
});

// @see https://www.apollographql.com/docs/link/links/error/#callback
const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations }) => {
      Sentry.withScope((scope) => {
        scope.setTag('kind', 'graphQLError');
        scope.setLevel(Severity.Error);

        scope.setExtra('operationName', operation.operationName);
        scope.setExtra('variables', operation.variables);
        scope.setExtra('message', message);
        scope.setExtra('locations', locations);

        Sentry.captureMessage(message);
      });
    });
  }

  if (networkError) {
    Sentry.withScope((scope) => {
      scope.setTag('kind', 'networkError');
      scope.setLevel(Severity.Error);

      scope.setExtra('name', networkError.name);
      scope.setExtra('message', networkError.message);
      scope.setExtra('stack', networkError.stack);

      Sentry.captureMessage(networkError.message);
    });
  }
});

export const link = ApolloLink.from([authMiddleware, errorLink, httpLink]);
// concat(authMiddleware, httpLink),
