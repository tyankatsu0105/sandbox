psql は PostgreSQL の管理用コマンドであり、SQL ではない。
psql コマンドを叩き終わると、そこは database の中なので、psql コマンドは使えない。
使うには一旦外に出る

```bash
exit;
```

## user 切り替え

```sql
psql -U postgres
```

## database 作成

```sql
CREATE DATABASE shop;
```

## database login

```sql
psql -U postgres -d shop
```

## table 作成

```sql
CREATE TABLE IF NOT EXISTS Shohin (
  shohin_id CHAR(4) NOT NULL,
  shohin_mei VARCHAR(100) NOT NULL,
  shohin_bunrui VARCHAR(32) NOT NULL,
  hanbai_tanka INTEGER,
  shiire_tanka INTEGER,
  torokubi DATE,
  PRIMARY KEY (shohin_id));
```

> CHARVAR の「VAR」は「VARYING」の意味で、「変化する」という意味がある。なので可変長文字列

## table 削除

```sql
DROP TABLE Shohin;
```

## table に列追加

```sql
ALTER TABLE Shohin ADD COLUMN shohin_mei_kana VARCHAR(100);
```

## table の列削除

```sql
ALTER TABLE Shohin DROP COLUMN shohin_mei_kana;
```

## データの流し込み

```sql
BEGIN TRANSACTION;

INSERT INTO Shohin VALUES ('0001', 'Tシャツ', '衣服', 1000, 500, '2009-09-20');
INSERT INTO Shohin VALUES ('0002', '穴あけパンチ', '事務用品', 500, 320, '2009-09-11');
INSERT INTO Shohin VALUES ('0003', 'カッターシャツ', '衣服', 4000, 2800, NULL);
INSERT INTO Shohin VALUES ('0004', '包丁', 'キッチン用品', 3000, 2800, '2009-09-20');
INSERT INTO Shohin VALUES ('0005', '圧力鍋', 'キッチン用品', 6800, 5000, '2009-01-15');
INSERT INTO Shohin VALUES ('0006', 'フォーク', 'キッチン用品', 500, NULL, '2009-09-20');
INSERT INTO Shohin VALUES ('0007', 'おろしがね', 'キッチン用品', 880, 790, '2008-04-28');
INSERT INTO Shohin VALUES ('0008', 'ボールペン', '事務用品', 100, NULL, '2009-11-11');

COMMIT;
```

## table の rename

```sql
ALTER TABLE Shohin RENAME TO Hoge;
```

## 列の出力

```sql
SELECT shohin_id, shohin_mei, shiire_tanka FROM Shohin;
```

```bash
 shohin_id |   shohin_mei   | shiire_tanka
-----------+----------------+--------------
 0001      | Tシャツ        |          500
 0002      | 穴あけパンチ   |          320
 0003      | カッターシャツ |         2800
 0004      | 包丁           |         2800
 0005      | 圧力鍋         |         5000
 0006      | フォーク       |
 0007      | おろしがね     |          790
 0008      | ボールペン     |
(8 rows)
```

## 列に別名

```sql
SELECT shohin_id AS id, shohin_mei AS namae, shiire_tanka AS tanka FROM Shohin;
```

```bash
  id  |     namae      | tanka
------+----------------+-------
 0001 | Tシャツ        |   500
 0002 | 穴あけパンチ   |   320
 0003 | カッターシャツ |  2800
 0004 | 包丁           |  2800
 0005 | 圧力鍋         |  5000
 0006 | フォーク       |
 0007 | おろしがね     |   790
 0008 | ボールペン     |
(8 rows)
```

## 列に別名（日本語）

```sql
SELECT shohin_id AS "商品ID", shohin_mei AS namae, shiire_tanka AS tanka FROM Shohin;
```

```bash
   商品ID |     namae      | tanka
--------+----------------+-------
 0001   | Tシャツ        |   500
 0002   | 穴あけパンチ   |   320
 0003   | カッターシャツ |  2800
 0004   | 包丁           |  2800
 0005   | 圧力鍋         |  5000
 0006   | フォーク       |
 0007   | おろしがね     |   790
 0008   | ボールペン     |
(8 rows)
```

## 列に定数

```sql
SELECT '商品' AS mojiretsu, shohin_mei FROM Shohin;
```

```bash
 mojiretsu |   shohin_mei
-----------+----------------
 商品      | Tシャツ
 商品      | 穴あけパンチ
 商品      | カッターシャツ
 商品      | 包丁
 商品      | 圧力鍋
 商品      | フォーク
 商品      | おろしがね
 商品      | ボールペン
(8 rows)
```

## 列に定数

```sql
SELECT '商品' AS mojiretsu, shohin_mei FROM Shohin;
```

```bash
 mojiretsu |   shohin_mei
-----------+----------------
 商品      | Tシャツ
 商品      | 穴あけパンチ
 商品      | カッターシャツ
 商品      | 包丁
 商品      | 圧力鍋
 商品      | フォーク
 商品      | おろしがね
 商品      | ボールペン
(8 rows)
```

## 重複削除

```sql
SELECT DISTINCT shohin_bunrui FROM Shohin;
```

```bash
  shohin_bunrui
---------------
 キッチン用品
 衣服
 事務用品
(3 rows)
```

## 条件指定

```sql
SELECT shohin_mei FROM Shohin WHERE hanbai_tanka > 500;
```

```bash
   shohin_mei
----------------
 Tシャツ
 カッターシャツ
 包丁
 圧力鍋
 おろしがね
(5 rows)
```

- where は from のあとじゃないと動かない
- sql は記述する順番が決まっている

## コメント

```sql
-- ここはコメント

/*
ここから
ここまで
コメント
*/
```

## 算術演算子

```sql
SELECT shohin_mei, hanbai_tanka, hanbai_tanka * 2 as "hanbai_tanka_X2" FROM Shohin;
```

```bash
   shohin_mei   | hanbai_tanka | hanbai_tanka_X2
----------------+--------------+-----------------
 Tシャツ        |         1000 |            2000
 穴あけパンチ   |          500 |            1000
 カッターシャツ |         4000 |            8000
 包丁           |         3000 |            6000
 圧力鍋         |         6800 |           13600
 フォーク       |          500 |            1000
 おろしがね     |          880 |            1760
 ボールペン     |          100 |             200
(8 rows)
```

## null を含んだ計算

```sql
SELECT shohin_mei, shiire_tanka, shiire_tanka * 2 as "hanbai_tanka_X2" FROM Shohin;
```

```bash
   shohin_mei   | shiire_tanka | hanbai_tanka_X2
----------------+--------------+-----------------
 Tシャツ        |          500 |            1000
 穴あけパンチ   |          320 |             640
 カッターシャツ |         2800 |            5600
 包丁           |         2800 |            5600
 圧力鍋         |         5000 |           10000
 フォーク       |              |
 おろしがね     |          790 |            1580
 ボールペン     |              |
(8 rows)
```

- null が入った計算式は、結果が null になる

## 比較演算子

```sql
SELECT shohin_mei, shohin_bunrui FROM Shohin WHERE shohin_bunrui = '衣服';
```

```bash
   shohin_mei   | shohin_bunrui
----------------+---------------
 Tシャツ        | 衣服
 カッターシャツ | 衣服
(2 rows)
```

```sql
SELECT shohin_mei, shohin_bunrui FROM Shohin WHERE shohin_bunrui <> '衣服';
```

```bash
  shohin_mei  | shohin_bunrui
--------------+---------------
 穴あけパンチ | 事務用品
 包丁         | キッチン用品
 圧力鍋       | キッチン用品
 フォーク     | キッチン用品
 おろしがね   | キッチン用品
 ボールペン   | 事務用品
(6 rows)
```

## 文字列に比較演算子を使う

```sql
SELECT chr FROM Chars WHERE chr > '2';
```

```bash
 chr
-----
 3
 222
(2 rows)
```

- 文字列の順序は「辞書式」なので、数値の大小とは関係ない
- 「'1','2','10'」は「'1','10','2'」になる

## null 判定

```sql
SELECT shohin_mei, shiire_tanka FROM Shohin WHERE shiire_tanka is null;
```

```bash
 shohin_mei | shiire_tanka
------------+--------------
 フォーク   |
 ボールペン |
(2 rows)
```

```sql
SELECT shohin_mei, shiire_tanka FROM Shohin WHERE shiire_tanka is not null;
```

```bash
   shohin_mei   | shiire_tanka
----------------+--------------
 Tシャツ        |          500
 穴あけパンチ   |          320
 カッターシャツ |         2800
 包丁           |         2800
 圧力鍋         |         5000
 おろしがね     |          790
(6 rows)
```

## AND は強いので()で条件を書く

```sql
SELECT shohin_mei, shohin_bunrui, torokubi FROM Shohin WHERE shohin_bunrui = '事務用品' and torokubi = '2009-09-11' or torokubi = '2009-09-20';
```

```bash
  shohin_mei  | shohin_bunrui |  torokubi
--------------+---------------+------------
 Tシャツ      | 衣服          | 2009-09-20
 穴あけパンチ | 事務用品      | 2009-09-11
 包丁         | キッチン用品  | 2009-09-20
 フォーク     | キッチン用品  | 2009-09-20
(4 rows)
```

```sql
SELECT shohin_mei, shohin_bunrui, torokubi FROM Shohin WHERE shohin_bunrui = '事務用品' and (torokubi = '2009-09-11' or torokubi = '2009-09-20');
```

```bash
  shohin_mei  | shohin_bunrui |  torokubi
--------------+---------------+------------
 穴あけパンチ | 事務用品      | 2009-09-11
(1 row)
```

- 「A and B or C」は「(A and B) or C」になる

## true, false, unknown の 3 値論理

- 値が null である場合、true false に加えて unknown という値になる
- null は極力値に用いるべきではない

| P       | Q       | P AND Q |
| :------ | :------ | :------ |
| true    | true    | true    |
| true    | false   | false   |
| true    | unknown | unknown |
| false   | true    | false   |
| false   | false   | false   |
| false   | unknown | false   |
| unknown | true    | unknown |
| unknown | false   | false   |
| unknown | unknown | unknown |

| P       | Q       | P OR Q  |
| :------ | :------ | :------ |
| true    | true    | true    |
| true    | false   | true    |
| true    | unknown | true    |
| false   | true    | true    |
| false   | false   | false   |
| false   | unknown | false   |
| unknown | true    | true    |
| unknown | false   | unknown |
| unknown | unknown | unknown |

## 集約関数

- count は\*だと null 考慮した合計数、それ以外 COUNT(hanbai_tanka)とかは null 考慮しない
- 集約関数は計算前に null を弾く。SUM(100,NULL,200)は 100,200 だけに置き換えて計算する

## group by の実行順序

from, where, group by, select

## HAVING と WHERE に書くべきこと

```sql
SELECT shohin_bunrui, COUNT(*) FROM Shohin GROUP BY shohin_bunrui HAVING shohin_bunrui = '衣服';
SELECT shohin_bunrui, COUNT(*) FROM Shohin WHERE shohin_bunrui = '衣服' GROUP BY shohin_bunrui;
```

- ２つは同じ結果になる
- HAVING は「グループ」に対する条件
- WHERE は「行」に対する条件
- HAVING はソートしたあとにデータに条件かけるので負荷高い、WHERE はソート前にデータに条件かけるので軽い

## ORDER BY に SELECT の AS が使える理由

- FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY
- SELECT よりもあとなので AS の値が使える

## default value を create table 時に設定する

```sql
create table ShohinIns (
  shohin_id char(4) not null,
  shohin_mei varchar(100) not null,
  shohin_bunrui varchar(32) not null,
  hanbai_tanka integer default 0,
  shiire_tanka integer,
  torokubi date,
  primary key (shohin_id));
```

## insert 時に copy

```sql
INSERT INTO ShohinCopy (shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi) SELECT shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi FROM Shohin;
```

- values として select 文を書くことで値を参照することができる
- バックアップを取ることが簡単になる

## group by を insert に使う

```sql
INSERT INTO ShohinBunrui (shohin_bunrui, sum_hanbai_tanka, sum_shiire_tanka)
SELECT shohin_bunrui, SUM(hanbai_tanka), SUM(shiire_tanka) FROM Shohin GROUP BY shohin_bunrui;
```

```bash
 shohin_bunrui | sum_hanbai_tanka | sum_shiire_tanka
---------------+------------------+------------------
 キッチン用品  |            11180 |             8590
 衣服          |             5000 |             3300
 事務用品      |              600 |              320
(3 rows)
```

## data の削除

- drop table
  - table の削除
- delete
  - すべての行の削除

## 探索型 delete

```sql
DELETE FROM Shohin WHERE hanbai_tanka >= 4000;
```

- where で条件を書いて行を探索して delete

## truncate で全行削除

```sql
TRUNCATE Shohin;
```

- 全行削除
- delete よりも処理が早い

## null クリア

- 値を null で set すること
- not null や primary key には利用できない
  - エラーになる

## 複数列 set

```sql
UPDATE Shohin SET torokubi = null, hanbai_tanka = null  WHERE shohin_id = '0008';
```

- ,で set を複数行える

## transaction

- db に対する一つ以上の更新のこと

```sql
begin transaction;

update とか
delete とか
insert とか

commit;
```

## transaction のタイミング

- begin transaction と書かなくても、commit までが transaction とするような、「トランザクションの暗黙の開始」は標準 SQL 企画で決められている。
- 1 つの SQL 文で 1 つのトランザクション
  - 自動コミットモード
- commit または rollback までが 1 つのトランザクション

## table と view の違い

- table は実際のデータを保存している
- view はデータを保存していない
  - select 文を保存している

## view のメリット

- 記憶装置の容量節約
  - 実際にデータを保存しているのは table
  - view は table に select を実行して仮想の table を作っているだけ
  - データを保存していない分容量が空く
- 使い回しが利く
  - 複雑な select を書かないといけないとき、めっちゃ便利
  - データを参照しているだけなので、table の値が変わると view で取得したデータも連動して変わる
    - 最新のデータを取り扱える

## view は重ねない

- view は構文上重ねて使うことができる
- 多段 view という
- しかし、パフォーマンスの低下を招くので、一段だけに極力留める

## サブクエリ

- select を from に持ってきたもの

```sql
CREATE View ShohinSum (shohin_bunrui, cnt_shohin) as select shohin_bunrui, count(*) from Shohin group by shohin_bunrui;

SELECT shohin_bunrui, cnt_shohin FROM (SELECT shohin_bunrui, COUNT(*) as cnt_shohin FROM Shohin GROUP BY shohin_bunrui) as ShohinSum;
```

両方一緒の結果になる

- サブクエリは使い捨てだが、as で名付けが必要

## スカラ・サブクエリ

- スカラは「単一の」という意味
- 単一の値を返すサブクエリを書いて、それを条件に使う

```sql
SELECT shohin_id, shohin_mei, hanbai_tanka FROM Shohin WHERE hanbai_tanka > (SELECT AVG(hanbai_tanka) FROM Shohin);
```

- 複数行を返すサブクエリを書くと、それはスカラ・サブクエリではなくなる
  - =, <>といった演算子が使えなくなる

## 相関サブクエリ

```sql
SELECT shohin_id, shohin_mei, hanbai_tanka
FROM Shohin as S1
WHERE hanbai_tanka > (
  SELECT AVG(hanbai_tanka)
  FROM Shohin as S2
  WHERE S1.shohin_bunrui = S2.shohin_bunrui
  GROUP BY shohin_bunrui
);
```

## union でテーブル足し算

```sql
select shohin_id, shohin_mei from "shohin"
UNION
select shohin_id, shohin_mei from "shohin2" ORDER BY shohin_id;
```

```bash
 shohin_id |   shohin_mei
-----------+----------------
 0001      | Tシャツ
 0002      | 穴あけパンチ
 0003      | カッターシャツ
 0004      | 包丁
 0005      | 圧力鍋
 0006      | フォーク
 0007      | おろしがね
 0008      | ボールペン
 0009      | 手袋
 0010      | やかん
(10 rows)
```

- union は値の重複を削除する

## union all で重複残す

```sql
select shohin_id, shohin_mei from "shohin"
UNION ALL
select shohin_id, shohin_mei from "shohin2" ORDER BY shohin_id;
```

```bash
 shohin_id |   shohin_mei
-----------+----------------
 0001      | Tシャツ
 0001      | Tシャツ
 0002      | 穴あけパンチ
 0002      | 穴あけパンチ
 0003      | カッターシャツ
 0003      | カッターシャツ
 0004      | 包丁
 0005      | 圧力鍋
 0006      | フォーク
 0007      | おろしがね
 0008      | ボールペン
 0009      | 手袋
 0010      | やかん
(13 rows)
```

## intersect で重なった箇所を抽出する

```sql
select shohin_id, shohin_mei from "shohin"
intersect
select shohin_id, shohin_mei from "shohin2" ORDER BY shohin_id;
```

```bash
 shohin_id |   shohin_mei
-----------+----------------
 0001      | Tシャツ
 0002      | 穴あけパンチ
 0003      | カッターシャツ
(3 rows)
```

## except で集合から最後に書いた select 分を除いた最初の select の値を返す

```sql
select shohin_id, shohin_mei from "shohin"
except
select shohin_id, shohin_mei from "shohin2" ORDER BY shohin_id;
```

```bash
 shohin_id | shohin_mei
-----------+------------
 0004      | 包丁
 0005      | 圧力鍋
 0006      | フォーク
 0007      | おろしがね
 0008      | ボールペン
```

## ウィンドウ関数

- ウィンドウ関数は別名 OLAP 関数と呼ばれる
- 構文は`<ウィンドウ関数> over ([partition by <列リスト>] order by <ソート用列リスト>)`
  - ウィンドウ専用関数はいくつかある

## RANK

```sql
select shohin_mei,
  shohin_bunrui,
  hanbai_tanka,
  rank() over (partition by shohin_bunrui order by hanbai_tanka) as ranking
from Shohin;
```

```bash
   shohin_mei   | shohin_bunrui | hanbai_tanka | ranking
----------------+---------------+--------------+---------
 フォーク       | キッチン用品  |          500 |       1
 おろしがね     | キッチン用品  |          880 |       2
 包丁           | キッチン用品  |         3000 |       3
 圧力鍋         | キッチン用品  |         6800 |       4
 ボールペン     | 事務用品      |          100 |       1
 穴あけパンチ   | 事務用品      |          500 |       2
 Tシャツ        | 衣服          |         1000 |       1
 カッターシャツ | 衣服          |         4000 |       2
(8 rows)
```

## partition by

- 順位をつける対象の範囲

## ウィンドウ

- partition by で区切られたレコードの集合のこと
- 「窓」ではなくて、「範囲」の意味

## ウィンドウ関数の制限

- select 句内でしか使えない
  - dbms 内部で where 区や group by 区による処理が終わった結果に対して作用するように作られているから

## 集約関数をウィンドウ関数として使う

```sql
select shohin_id,
  shohin_mei,
  hanbai_tanka,
  SUM(hanbai_tanka) over (ORDER BY shohin_id) as current_sum
from Shohin;
```

```bash
 shohin_id |   shohin_mei   | hanbai_tanka | current_sum
-----------+----------------+--------------+-------------
 0001      | Tシャツ        |         1000 |        1000
 0002      | 穴あけパンチ   |          500 |        1500
 0003      | カッターシャツ |         4000 |        5500
 0004      | 包丁           |         3000 |        8500
 0005      | 圧力鍋         |         6800 |       15300
 0006      | フォーク       |          500 |       15800
 0007      | おろしがね     |          880 |       16680
 0008      | ボールペン     |          100 |       16780
(8 rows)
```

- 累計の計算になる
- order by で並べた順番の上から合計していく

## フレーム

```sql
select shohin_id,
  shohin_mei,
  hanbai_tanka,
  SUM(hanbai_tanka) over (ORDER BY shohin_id rows 2 preceding) as current_sum
from Shohin;
```

```bash
 shohin_id |   shohin_mei   | hanbai_tanka | current_sum
-----------+----------------+--------------+-------------
 0001      | Tシャツ        |         1000 |        1000
 0002      | 穴あけパンチ   |          500 |        1500
 0003      | カッターシャツ |         4000 |        5500
 0004      | 包丁           |         3000 |        7500
 0005      | 圧力鍋         |         6800 |       13800
 0006      | フォーク       |          500 |       10300
 0007      | おろしがね     |          880 |        8180
 0008      | ボールペン     |          100 |        1480
(8 rows)
```

- ウィンドウの更に細かい範囲で絞り込んだ対象を「フレーム」と呼ぶ
  - `rows 2 preceding`で現在から 2 つ前を含めた 3 つが「フレーム」となる

## grouping 演算子

- rollup
  - 集約キーの組み合わせが異なる結果を一度に計算する
- cube
- grouping sets

```sql
select shohin_bunrui, SUM(hanbai_tanka) as sum_tanka
FROM "shohin"
GROUP BY rollup(shohin_bunrui);
```

```bash
 shohin_bunrui | sum_tanka
---------------+-----------
               |     16780
 キッチン用品  |     11180
 衣服          |      5000
 事務用品      |       600
(4 rows)
```

```sql
select
  case when grouping(shohin_bunrui) = 1
    then '商品分類 合計'
    else shohin_bunrui end as shohin_bunrui,
  case when grouping(torokubi) = 1
    then '登録日 合計'
    else cast(torokubi as varchar(16)) end as torokubi,
  SUM(hanbai_tanka) as sum_tanka
from Shohin
GROUP BY rollup(shohin_bunrui, torokubi);
```

```bash
 shohin_bunrui |  torokubi   | sum_tanka
---------------+-------------+-----------
 商品分類 合計 | 登録日 合計 |     16780
 衣服          |             |      4000
 キッチン用品  | 2009-01-15  |      6800
 衣服          | 2009-09-20  |      1000
 キッチン用品  | 2008-04-28  |       880
 事務用品      | 2009-11-11  |       100
 事務用品      | 2009-09-11  |       500
 キッチン用品  | 2009-09-20  |      3500
 キッチン用品  | 登録日 合計 |     11180
 衣服          | 登録日 合計 |      5000
 事務用品      | 登録日 合計 |       600
(11 rows)
```

## cube

```sql
select
  case when grouping(shohin_bunrui) = 1
    then '商品分類 合計'
    else shohin_bunrui end as shohin_bunrui,
  case when grouping(torokubi) = 1
    then '登録日 合計'
    else cast(torokubi as varchar(16)) end as torokubi,
  SUM(hanbai_tanka) as sum_tanka
from Shohin
GROUP BY cube(shohin_bunrui, torokubi);
```

```bash
 shohin_bunrui |  torokubi   | sum_tanka
---------------+-------------+-----------
 商品分類 合計 | 登録日 合計 |     16780
 衣服          |             |      4000
 キッチン用品  | 2009-01-15  |      6800
 衣服          | 2009-09-20  |      1000
 キッチン用品  | 2008-04-28  |       880
 事務用品      | 2009-11-11  |       100
 事務用品      | 2009-09-11  |       500
 キッチン用品  | 2009-09-20  |      3500
 キッチン用品  | 登録日 合計 |     11180
 衣服          | 登録日 合計 |      5000
 事務用品      | 登録日 合計 |       600
 商品分類 合計 |             |      4000
 商品分類 合計 | 2009-11-11  |       100
 商品分類 合計 | 2009-09-20  |      4500
 商品分類 合計 | 2009-09-11  |       500
 商品分類 合計 | 2009-01-15  |      6800
 商品分類 合計 | 2008-04-28  |       880
(17 rows)
```

- rollup と違って、`group by CUBE(a,b)`で ` group by ()``group by (a)``group by (b)``group by (a,b) `
  - rollup は` group by ()``group by (a)``group by (a,b) `
- 組み合わせは 2^n
  - 今回は 2^2

## grouping sets

```sql
select
  case when grouping(shohin_bunrui) = 1
    then '商品分類 合計'
    else shohin_bunrui end as shohin_bunrui,
  case when grouping(torokubi) = 1
    then '登録日 合計'
    else cast(torokubi as varchar(16)) end as torokubi,
  SUM(hanbai_tanka) as sum_tanka
from Shohin
GROUP BY grouping sets (shohin_bunrui, torokubi);
```

```bash
 shohin_bunrui |  torokubi   | sum_tanka
---------------+-------------+-----------
 キッチン用品  | 登録日 合計 |     11180
 衣服          | 登録日 合計 |      5000
 事務用品      | 登録日 合計 |       600
 商品分類 合計 |             |      4000
 商品分類 合計 | 2009-11-11  |       100
 商品分類 合計 | 2009-09-20  |      4500
 商品分類 合計 | 2009-09-11  |       500
 商品分類 合計 | 2009-01-15  |      6800
 商品分類 合計 | 2008-04-28  |       880
(9 rows)
```
