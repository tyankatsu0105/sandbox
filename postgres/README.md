# sandbox-postgres

PostgreSQL が何もわからないので練習する。

- [SQL 第 2 版 ゼロからはじめるデータベース操作](https://www.amazon.co.jp/dp/B01HD5VWWO/ref=docs-os-doi_0)

## Usage

```bash
make run
```

`db/init/`以下の sql が走り初期データが入る。

```bash
make down
```

container を remove

```bash
make reinit
```

down して data を削除し、再度 run する

### Adminer

http://localhost:8080

| 項目名             | 値                               |
| :----------------- | :------------------------------- |
| データベースの種類 | PostgreSQL                       |
| サーバ             | db                               |
| ユーザ名           | <POSTGRES_USER>                  |
| パスワード         | <POSTGRES_PASSWORD>              |
| データベース       | <POSTGRES_DB> or <POSTGRES_USER> |

### PostgreSQL

```bash
docker exec -it <containerid> /bin/sh
```

```bash
psql -U user
```

### その他

- database client があれば、自由に使っていい
  | 項目名 | 値 |
  | :----------------- | :------------------------------- |
  | host | localhost |
  | user | <POSTGRES_USER> |
  | password | <POSTGRES_PASSWORD> |
  | port | 5432 |
