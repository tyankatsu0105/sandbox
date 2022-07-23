import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { ExternalLink } from '@sandbox-react-apollo/components';

type Props = {};

export const DxPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      apolloで開発をすすめる上で便利になるツールの概要や所感
      <h2>
        <ExternalLink href="https://github.com/apollographql/apollo-client-devtools">
          apollo-client-devtools
        </ExternalLink>
      </h2>
      <p>
        Apolloとconnectすることで、dev tool
        panelにapolloペインを足して、query,cache,mutation,docsの確認などができるようになる。
      </p>
      <h2>
        <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo">
          VSCode拡張
        </ExternalLink>
      </h2>
      <p>
        rootのapollo.config.jsを読んで、schema情報からgraphql書くときにautocompleteとかvalidationとかしてくれる。
      </p>
      <p>このプロジェクトでも使ってる</p>
      <h2>
        <ExternalLink href="https://github.com/apollographql/apollo-tooling">
          apollo-tooling
        </ExternalLink>
      </h2>
      <p>apolloが作ってる開発ツール</p>
      <p>
        前まで使ってたけど、今は使ってない。
        大雑把に機能がそろってるけど、細かい要望までは叶えてくれない（伸びしろある）感じ。
      </p>
      <h2>
        <ExternalLink href="https://graphql-code-generator.com/">
          GraphQL Code Generator
        </ExternalLink>
      </h2>
      <p>TSの型の生成に注力しているOSSのツール。</p>
      <p>apollo-toolingの上位互換だと思ってる。なんでも揃ってる。大好き。</p>
      <p>詳細はブログに書く予定。</p>
    </Box>
  );
};
