create database shop;

\c shop

create table Shohin (
  shohin_id char(4) not null,
  shohin_mei varchar(100) not null,
  shohin_bunrui varchar(32) not null,
  hanbai_tanka integer,
  shiire_tanka integer,
  torokubi date,
  primary key (shohin_id));

insert into Shohin values
  ('0001', 'Tシャツ', '衣服', 1000, 500, '2009-09-20'),
  ('0002', '穴あけパンチ', '事務用品', 500, 320, '2009-09-11'),
  ('0003', 'カッターシャツ', '衣服', 4000, 2800, NULL),
  ('0004', '包丁', 'キッチン用品', 3000, 2800, '2009-09-20'),
  ('0005', '圧力鍋', 'キッチン用品', 6800, 5000, '2009-01-15'),
  ('0006', 'フォーク', 'キッチン用品', 500, NULL, '2009-09-20'),
  ('0007', 'おろしがね', 'キッチン用品', 880, 790, '2008-04-28'),
  ('0008', 'ボールペン', '事務用品', 100, NULL, '2009-11-11');


create table Chars (
  chr char(3) not null,
  primary key (chr));

insert into Chars values
  ('1'),
  ('2'),
  ('3'),
  ('10'),
  ('11'),
  ('222');

create table ShohinIns (
  shohin_id char(4) not null,
  shohin_mei varchar(100) not null,
  shohin_bunrui varchar(32) not null,
  hanbai_tanka integer default 0,
  shiire_tanka integer,
  torokubi date,
  primary key (shohin_id));

create table ShohinCopy (
  shohin_id char(4) not null,
  shohin_mei varchar(100) not null,
  shohin_bunrui varchar(32) not null,
  hanbai_tanka integer,
  shiire_tanka integer,
  torokubi date,
  primary key (shohin_id));


create table ShohinBunrui (
  shohin_bunrui varchar(32) not null,
  sum_hanbai_tanka integer,
  sum_shiire_tanka integer,
  primary key (shohin_bunrui));

CREATE View ShohinSum (shohin_bunrui, cnt_shohin) as select shohin_bunrui, count(*) from Shohin group by shohin_bunrui;

create table Shohin2 (
 shohin_id char(4) not null,
  shohin_mei varchar(100) not null,
  shohin_bunrui varchar(32) not null,
  hanbai_tanka integer,
  shiire_tanka integer,
  torokubi date,
  primary key (shohin_id)); 

BEGIN transaction;
insert into Shohin2 VALUES ('0001', 'Tシャツ', '衣服', 1000, 500, '2008-09-20');
insert into Shohin2 VALUES ('0002', '穴あけパンチ', '事務用品', 500, 320, '2008-09-11');
insert into Shohin2 VALUES ('0003', 'カッターシャツ', '衣服', 4000, 2800, NULL);
insert into Shohin2 VALUES ('0009', '手袋', '衣服', 800, 500, NULL);
insert into Shohin2 VALUES ('0010', 'やかん', 'キッチン用品', 2000, 1700, '2009-09-20');
commit;