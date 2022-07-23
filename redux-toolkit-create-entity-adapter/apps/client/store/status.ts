// SEE: https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/

export enum Status {
  /** 初期 */
  PRISTINE,

  /** 正常 */
  VALID,

  /** 異常 */
  INVALID,

  /** 更新中 */
  SUBMITTING,

  /** 成功 */
  SUCCESS,
}
