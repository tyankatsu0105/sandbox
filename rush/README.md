# MEMO
- sampleがここにある
  - https://github.com/microsoft/rush-example
  - この構成はglobal installしないとできない（npx無理）ので、globalが嫌な人は抵抗ありそう
- rushの構成ファイルがjsonc前提なの多いので、エディタのsettingを変更したほうがやりやすそう
```json
{
  "files.associations": {
    "common/config/rush/*.json": "jsonc",
    "rush.json": "jsonc"
  },
}
```

- もうNode.jsが14をLTSにしたから、`"nodeSupportedVersionRange": ">=12.13.0 <15.0.0",` にしておいてよさそう。
  - defaultは`"nodeSupportedVersionRange": ">=12.13.0 <13.0.0",` になっているので、修正入るかな
- monorepo管理対象のパッケージにscope付ける場合は、rush.jsonのpackageNameにもscopeつけないとエラーになる
- rootにpackage.jsonがないので、CIで動かすときにRushのbin解決どうするのかと思いきや、`rush init`したときにできた、`common/scripts/install-run-rush.js`が
- CIのfetch先がmasterでベタ書きされているので、mainとかがdefaultブランチだったら書き換える必要あり
  - ship.jsみたいに対話的にdefault branch指定できたら良さそう
- common/git-hooksに書いた内容が.git/hooksにコピーされるので、huskyいらない！！！
  - hooksの内容がcommitできるという最高な機能
- rushのautoinstallerでモジュールを自動でインストールさせられる
  - package.json作ったら`rush update-autoinstaller`でpnpm-lock.yamlが作られる
  - hooksと組み合わせることができる
- ensureConsistentVersionsの例外で指定する`allowedAlternativeVersions`は、許可する各バージョンの指定を配列で入れる
  - 例）packageA => typescript: "4.0.2" packageB => typescript: "4.0.2" packageC => typescript: "3.9.3"
  - packageCだけ別バージョン入れたい場合、`"allowedAlternativeVersions": {"typescript": ["3.9.3"]}`
  - 例）packageA => typescript: "4.0.2" packageB => typescript: "4.0.2" packageC => typescript: "^3.9.3"
  - packageCだけ別バージョン入れたい場合、`"allowedAlternativeVersions": {"typescript": ["^3.9.3"]}`

# 流れ
1. rush initでmonorepoの大元を作る
1. パッケージを追加したら`rush update`でプロジェクトを認識。`rush.json`を変更して管理対象プロジェクトの設定。
1. 作業ブランチを作って作業する
   - 作業し終わったら`rush change`でそのcommitをchangelogに出すためのmessageを書く
   - jsonファイルが出るので`rush change`とかcommit message作ってpushする
     - 参考 : https://github.com/microsoft/rushstack/commit/2d611b879f6dee4ba350662002b00d92c3dda530
     - master/mainと差分があったらrush change推奨なので、rush initのときのTravisCIみたいに `rush change -v`してくれるCI環境あると便利
     - pushしてmaster/mainブランチに取り込む
1. master/mainでpullする
1. master/mainで`rush update -a`でchangelog生成する
   -  参考 : https://github.com/microsoft/rushstack/commit/7d86f39411e77087115c71648a5c31ab3a6efd4f
   -  `Deleting change files and updating change logs for package updates.`みたいなcommit messageでpush
2. `rush publish -p -n npmToken --add-commit-details --include-all --set-access-level public`でpublish


# Packages
|Folder|Version|Changelog|Package|
|:--|:--|:--|:--|
|[/tools/my-toolchain](./tools/my-toolchain)|[![npm version](https://badge.fury.io/js/%40tyankatsu0105%2Fmy-toolchain.svg)](https://badge.fury.io/js/@tyankatsu0105/my-toolchain)|[changelog](./tools/my-toolchain/CHANGELOG.md)|[@tyankatsu0105/my-toolchain](https://www.npmjs.com/package/@tyankatsu0105/my-toolchain)|

# LICENSE
MIT