[Go プログラミング実践入門 標準ライブラリでゼロから Web アプリを作る \- インプレスブックス](https://book.impress.co.jp/books/1115101145)を解いて Golang に慣れる

- https://github.com/tyankatsu0105/gowebprog

## Usage

`.env.example`をコピーして`.env`にリネーム
WORKDIR をこのプロジェクトをおいているディレクトリに書き換える

### Start

```bash
make up
```

http://localhost:3000/

### Down
```bash
make down
```

### Build
```bash
make build
```

### Down & remove data & build image & start
```bash
make reinit
```