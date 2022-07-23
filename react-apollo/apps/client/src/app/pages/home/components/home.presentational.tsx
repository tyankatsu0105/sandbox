import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { ExternalLink } from '@sandbox-react-apollo/components';

type Props = {};

export const HomePresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <p>
        <ExternalLink href="https://www.apollographql.com/docs/react/">
          Apollo client
        </ExternalLink>
        の技術検証用に作ったものです。
      </p>
      <p>以下主な技術スタックです</p>
      <ul>
        <li>
          <ExternalLink href="https://ja.reactjs.org/">React</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.typescriptlang.org/">
            TypeScript
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://material-ui.com/">
            MATERIAL-UI
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/nrwl/nx">Nx</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.apollographql.com/docs/react/api/react-hooks/">
            apollo react hooks
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/apollographql/apollo-tooling">
            apollo-tooling
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://graphql-code-generator.com/">
            GraphQL Code Generator
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/">
            GitHub OAuth
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.netlify.com/">
            Netlify & Netlify Functions
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://sentry.io/">SENTRY</ExternalLink>
        </li>
      </ul>
    </Box>
  );
};
