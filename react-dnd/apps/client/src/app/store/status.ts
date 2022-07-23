// SEE: https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/

enum Status {
  /** 未初期化 */
  Pristine,
  /** 正しい時 */
  Valid,
  /** 間違ってる時 */
  Invalid,
  /** 送信中 */
  Submitting,
  /** 成功 */
  Success,
}

export default Status;
