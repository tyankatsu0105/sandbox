## 1.1

```sql
CREATE TABLE IF NOT EXISTS Jyushoroku (
  toroku_bango INTEGER NOT NULL,
  namae VARCHAR(128) NOT NULL,
  jyusho VARCHAR(256) NOT NULL,
  tel_no CHAR(10),
  mail_address CHAR(20),
  PRIMARY KEY (toroku_bango)
);

```

## 1.2

```sql
ALTER TABLE Jyushoroku ADD COLUMN yubin_bango CHAR(8) NOT NULL;
```

## 1.3

```sql
DROP TABLE Jyushoroku;
```

## 1.4

```sql

CREATE TABLE IF NOT EXISTS Jyushoroku (
  toroku_bango INTEGER NOT NULL,
  namae VARCHAR(128) NOT NULL,
  jyusho VARCHAR(256) NOT NULL,
  tel_no CHAR(10),
  mail_address CHAR(20),
  yubin_bango CHAR(8) NOT NULL,
  PRIMARY KEY (toroku_bango)
);

```

## 2.1

```sql
SELECT shohin_mei, torokubi FROM Shohin WHERE torokubi > '2009-04-28';
```

## 2.2

null が入った条件式は結果が null なので何も帰らない

## 2.3

```sql
-- SELECT shohin_mei, hanbai_tanka, shiire_tanka FROM Shohin WHERE hanbai_tanka - shiire_tanka >= 500;
SELECT shohin_mei, hanbai_tanka, shiire_tanka FROM Shohin WHERE shiire_tanka + 500 <= hanbai_tanka;
SELECT shohin_mei, hanbai_tanka, shiire_tanka FROM Shohin WHERE hanbai_tanka - 500 >= shiire_tanka;
```

## 2.4

```sql
SELECT shohin_mei, shohin_bunrui, rieki FROM ( SELECT *, (hanbai_tanka * 0.9) - shiire_tanka AS rieki FROM Shohin ) Shohin WHERE hanbai_tanka is not null and shiire_tanka is not null and rieki > 100;
```

## 3.1

- varchar の列に sum は使えない
- group by は where のあとにかく
- group by は select で絞ってない値に使えない

## 3.2

```sql
SELECT shohin_bunrui, SUM(hanbai_tanka), SUM(shiire_tanka) FROM Shohin GROUP BY shohin_bunrui HAVING  SUM(hanbai_tanka) > SUM(shiire_tanka) * 1.5;
```

## 3.3

```sql
SELECT * FROM Shohin ORDER BY torokubi DESC, hanbai_tanka ASC;
```

## 4.1

commit していないので、まだデータが空

## 4.2

primary key がバッティングするはずなので、エラーになる

## 4.3

```sql
begin transaction;

INSERT into ShohinSaeki (shohin_id, shohin_mei, hanbai_tanka, shiire_tanka, saeki)
SELECT shohin_id, shohin_mei, hanbai_tanka, shiire_tanka, hanbai_tanka - shiire_tanka FROM Shohin;

commit;
```

## 4.4

```sql
begin transaction;

UPDATE ShohinSaeki SET hanbai_tanka = 3000 WHERE shohin_mei = 'カッターシャツ';
UPDATE ShohinSaeki SET saeki = hanbai_tanka - shiire_tanka WHERE shohin_mei = 'カッターシャツ';

commit;
```

## 5.1

```sql
create view ViewRenshu5_1 (shohin_mei, hanbai_tanka, torokubi) as select shohin_mei, hanbai_tanka, torokubi from Shohin where hanbai_tanka >= 1000 and torokubi = '2009-09-20';
```

## 5.2

Shohin table にデータが入るが、not null な shohin_id が入ってないのでエラーで終わる

## 5.3

```sql
select shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, (select avg(hanbai_tanka) from Shohin) as hanbai_tanka_all from Shohin;
```

## 5.4

```sql
create view AvgTankaByBunrui as
  select
    shohin_id,
    shohin_mei,
    shohin_bunrui,
    hanbai_tanka,
    (
      select avg(hanbai_tanka)
      from Shohin S2
      where S2.shohin_bunrui = S1.shohin_bunrui
      group by shohin_bunrui
    ) as avg_hanbai_tanka
  from Shohin S1
```

## 6.1

1 は shiire_tanka が 500,2800,5000 ではないものが条件に当てはまる
2 は NOT IN に NULL が含まれていると、中身はからになるので、何も出ない。

## 6.2

```sql
SELECT
  SUM( case when hanbai_tanka <= 1000 then 1 else 0 end) as low_price,
  SUM( case when hanbai_tanka BETWEEN 1001 and 3000 then 1 else 0 end) as mid_price,
  SUM( case when hanbai_tanka >= 3001 then 1 else 0 end) as high_price
FROM Shohin;
```

## 7.1

全部出る

## 7.2

```sql
select coalesce (TS.tenpo_id, '不明') as tenpo_id
  coalesce (TS.tenpo_mei, '不明') as tenpo_mei,
  S.shohin_id,
  S.shohin_mei,
  S.hanbai_tanka
from TenpoShohin TS RIGHT OUTER JOIN Shohin S
  on TS.shohin_id = S.shohin_id
order by tenpo_id;
```

## 8.1

shohin_id で整列されたレコード順に上から現在までの最大数の hanbai_tanka が current_max_tanka として入ってくる。

## 8.2

```sql
select torokubi, hanbai_tanka, SUM(hanbai_tanka) over (order by coalesce(torokubi, cast('0001-01-01' as date))) as current_sum_tanka FROM "shohin";
```
