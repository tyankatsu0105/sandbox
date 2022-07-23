import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { ExternalLink } from '@sandbox-react-apollo/components';

type Props = {};

export const ErrorHandlingPresentational: FunctionComponent<Props> = (
  props
) => {
  return (
    <Box>
      <h2>apollo-link-errorを使う</h2>
      <p>
        apoll-link-errorを使うと、GraphQL
        network関連でエラーのハンドリングが可能になる。
      </p>
      <p>
        エラーが発生すると、onError関数の引数に値が渡されるので、それらを駆使していろいろな処理が可能になる。
      </p>

      <p>例えば、graphQlErrorが発生すると、どこかに飛ばすとか。</p>

      <h2>Sentryと組み合わせる</h2>

      <p>
        apollo-link-errorのonError関数内でSentryを使えばSentryにより詳細なエラーログを送ることが可能なので便利。
      </p>

      <p>
        <ExternalLink href="https://github.com/tyankatsu0105/sandbox-react-apollo/blob/master/apps/client/src/graphql/link.ts" />
      </p>

      <h2>local stateのエラーハンドリングは？</h2>

      <p>apollo-link-errorにエラーが渡せると思ったら現状できなさそう。</p>
    </Box>
  );
};
