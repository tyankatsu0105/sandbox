[Normalizing State Shape \| Redux](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape#organizing-normalized-data-in-state)
及び、
[Scalable Frontend \#3 — The State Layer – The Miners](https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/)
の
```bash
{
  currentUser: {},
  entities: {
    articles: {},
    authors: {},
  },
  ui: {},
}
```
に影響を受けている

```bash
.
├── domains -> Domainに依存したデータ
├── entities -> Domain dataを正規化したものを入れる。
└── ui -> uiに依存したstate
```

- 正規化には[createEntityAdapter \| Redux Toolkit](https://redux-toolkit.js.org/api/createEntityAdapter)を利用する
- entitiesの各reducerのstate shapeは以下
  - entities -> createEntityAdapterで生成される
  - ids -> createEntityAdapterで生成される
  - status -> Finite State Machineのstateをstatusとして用いる。 詳しいstatusの値に関しては[Scalable Frontend \#3 — The State Layer – The Miners](https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/)のstate machineの画像を参照
  - someData1 -> その他保有したいstate
  - someData2
  - ...
  - someDataN
