# 使い方

```bash
npm run start client
npm run netlify-dev
```

# 仕組み
- GitHub OAuthでtokenを取得してheaderのBearerにセットして使う
  - OAuth Apps登録
  - https://github.com/login/oauth/authorize にclient idとscope付けて飛ぶ
  - 認証済んだらリダイレクト先でexpress + superagentでclient idとclient secretとcodeを付けてpostする
    - この時、リダイレクト先を予めwebpack dev serverのproxyで設定しておく
  - 取得したaccess_tokenをcookieにセットして、トップにリダイレクト
  - cookieからtoken取得して、apolloでrequest headerをアップデートする際にBearerにtokenを使用する

# netlify functions
netlify functionsを使ってOauth認証する予定。
localでは、netlify-lambdaを利用したnetlify Dev(beta)を利用する。
```bash
npm run netlify-dev
```
でexpressが起動する。

port9000が暴走したら、
```bash
lsof -i :9000
kill -9 <PID>
```
でkillする

# 型生成
- [apollo-tooling](https://github.com/apollographql/apollo-tooling)の`codegen`にまかせている
  - VSCode拡張との相性がいいため
- [graphql\-code\-generator](https://github.com/dotansimha/graphql-code-generator)も使用する
  - local schema resolverの型を生成したいため

- https://www.youtube.com/watch?v=wcUdBgktd4s&feature=emb_logo
- https://developer.github.com/v4/explorer/
- https://auth0.com/docs/connections/social/github
- https://blog.hiroppy.me/entry/apollo-link-state
- https://itnext.io/managing-local-state-with-apollo-client-and-react-hooks-9ad357e6d649
- https://github.com/dotansimha/graphql-code-generator/issues/3219
- https://github.com/samsarahq/graphql-loader#import-statements-in-graphql-files
- https://github.com/apollographql/apollo/issues/60
- https://github.com/apollographql/apollo/issues/513
- https://github.com/apollographql/apollo-tooling/issues/821
- https://community.netlify.com/t/does-netlify-dev-support-typescript/3842
- https://github.com/netlify/netlify-lambda/issues/196
- https://github.com/visionmedia/superagent/issues/1428
- https://github.com/dotansimha/graphql-code-generator/issues/1849
# environment

```bash
npm run nx workspace-schematic environment
```

- env
  - localの場合はdevelopment
- githubOAuthClientId, githubOAuthClientSecret
  - githubのsettings/Developer settingsから確認
  