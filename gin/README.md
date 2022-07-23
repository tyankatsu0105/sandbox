## Usage

- Docker
- golang
- postgres

詳細は Makefile を参照
基本 docker container の log を見て開発する

## MEMO

- `psql -U root`
- app から db に繋げる場合は、container 名を host に指定しないとだめなので、container_name で固定しておいたほうが確実に繋げられる
- https://eng-entrance.com/postgresql-role
