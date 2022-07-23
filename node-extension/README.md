https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions  
https://zenn.dev/teppeis/articles/2021-10-typescript-45-esm  
https://www.slideshare.net/teppeis/nodejs-esm-final-season  
https://blog.jxck.io/entries/2017-08-15/universal-mjs-ecosystem.html  
https://quramy.medium.com/typescript-4-7-%E3%81%A8-native-node-js-esm-189753a19ba8
# 本題
- JS界ではCommonJSとESMoudleの２形式でのモジュール解決仕様が存在している
  - `.cjs`はCommonJS
  - `.mjs`はESMoudle
- Node.jsは、node12から、ESMをサポートした
- CJS Interop
  - CJS <=> ESM を担保して、相互にロードできるようにする互換機能
  - あくまでもESM対応してもらうまでのCJS形式のライブラリのための互換機能だったのに、皮肉にも、「CJSでコンパイルしても動くからCJSでコンパイルしてていいじゃん」の理由にもなってしまった
  - `box/`以下にcjs,esmの相互importについては書いてあるので試すといい
- CJS Interopの仕様に、BabelとTypescriptが準拠していない
  - 準拠していないので、トランスパイルされたjsファイルをimportしようとしても、期待したimportができない
    - ex) import xxx from "yyy" としても、xxxの中は`{default: "hello"}`みたいなdefaultが解決されてない
- TypeScriptは`"module": "Node16"`とすることで、以下のような想定でコンパイルするようになった
  - `.ts` => `.js` = cjs
  - `.cts` => `.cjs` = cjs
  - `.mts` => `.mjs` = esm
- package.jsonの`type`フィールドを見て、`.ts`のトランスパイル結果を変えるようになった
  - `"type": "module"` => `.ts` = esm (module: ESNextと一緒)
  - `"type": "commonjs"` => `.ts` = cjs (module: CommonJStと一緒)
- exportsフィールド内の`require`や`import`に`types`, `default`を書くことで、cjsやesmでファイルを扱いたい場合の参照ファイルと型定義を指定できる