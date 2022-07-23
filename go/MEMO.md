# MEMO

## 全体

- [50 Shades of Go: Traps, Gotchas, and Common Mistakes for New Golang Devs](http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/index.html)
- [A Tour of Go](https://go-tour-jp.appspot.com/list)
- [Introduction · Build web application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/ja/?q=)

## docker

### env

[docker\-compose から環境変数を Dockerfile に渡す方法 \- Qiita](https://qiita.com/Targityen/items/2717511ca9f12c1c667f)
docker にわたす環境変数は
.env => docker-compose.yml 内で${}
.env => docker-compose.ymlでargsに渡す => Dockerfile内でARGにキー名を渡して${}

### マルチステージビルド

[マルチステージビルドの利用 \| Docker ドキュメント](https://matsuand.github.io/docs.docker.jp.onthefly/develop/develop-images/multistage-build/)

## 開発環境

- [VSCode に Go の開発環境を整える \- iriya\-ufo's blog](https://iriya-ufo.net/blog/2019/12/08/go-env-in-vscode/)
- [tools/user\.md at master · golang/tools](https://github.com/golang/tools/blob/master/gopls/doc/user.md)
- [VSCode で Go の Language Server である gopls を有効にする \- Qiita](https://qiita.com/ryysud/items/1cf66ee4363aec22394a)
- [Error installing tools when using Go version managers \(asdf\-vm\) · Issue \#3087 · microsoft/vscode\-go](https://github.com/microsoft/vscode-go/issues/3087)
  - [all: cleanup use of \`go\.goroot\` · Issue \#146 · golang/vscode\-go](https://github.com/golang/vscode-go/issues/146)
- [【golang 環境構築】Modules で package 管理をする \- Qiita](https://qiita.com/fox777/items/a8cb025df5439902b6c4)
- [GOPATH モードからモジュール対応モードへ移行せよ \- Qiita](https://qiita.com/spiegel-im-spiegel/items/5cb1587cb55d6f6a34d7)

## test

- [go test する時にサブディレクトリ込みでテストをまとめて実行する方法 \| さにあらず](https://blog.satotaichi.info/running-go-test-recursively/)
- [go test \-v \./\.\.\.](https://qiita.com/tmzkysk/items/8bb37795ac223664d682)
  - `go test -v ./...`

## string

- rune は unicode のこと
  - 文字列カウントは `utf8.RuneCountInString(str)`

## naming convention

- [CodeReviewComments・golang / go Wiki](https://github.com/golang/go/wiki/CodeReviewComments#variable-names)
- [What's in a name?](https://talks.golang.org/2014/names.slide#3)

## ポインタ

- [Golang のポインタ渡し初心者を卒業した \- Qiita](https://qiita.com/kotaonaga/items/4a93ec40718c279154f5)
- [Go で学ぶポインタとアドレス \- Qiita](https://qiita.com/Sekky0905/items/447efa04a95e3fec217f)
- [ポインタ変数とは｜「分かりそう」で「分からない」でも「分かった」気になれる IT 用語辞典](https://wa3.i-3-i.info/word12814.html)

## nil

- [null と nil の違い \- 紺屋高尾](http://kouyatakao.hatenablog.com/entry/2013/12/30/135026)

## interface

- [初心者に送りたい interface の使い方\[Golang\] \- Since I want to start “blog” that looks like men do, I do start\. \- Medium](https://medium.com/since-i-want-to-start-blog-that-looks-like-men-do/%E5%88%9D%E5%BF%83%E8%80%85%E3%81%AB%E9%80%81%E3%82%8A%E3%81%9F%E3%81%84interface%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9-golang-48eba361c3b4)

## 配列

- [Go の array と slice を理解するときがきた \- Qiita](https://qiita.com/seihmd/items/d9bc98a4f4f606ecaef7)

## iota

- [Golang の const 識別子 iota の紹介 \- Qiita](https://qiita.com/curepine/items/2ae2f6504f0d28016411)

## goroutine

- [Go 言語の目玉、マルチスレッドの Goroutine と Channel を最もシンプルな例で学ぶ \| cloud\.config Tech Blog](https://tech-blog.cloud-config.jp/2019-10-18-golang-goroutine-example/)

## Tips

- [他言語から来た人が Go を使い始めてすぐハマったこととその答え \- Qiita](https://qiita.com/mumoshu/items/0d2f2a13c6e9fc8da2a4)
- [Go Tips 101 \- Go 101: an online Go programming book \+ knowledge base](https://go101.org/article/tips.html)

# 疑問

- 型変換はなんのためにあるの？
