/**
 * FIXME: keyかcodeで書き換える
 * keycodeはdeprecatedになっているため
 */
export const key = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  Enter: 'Enter',
  Escape: 'Escape',
  Space: ' ',
} as const;

export type Key = typeof key[keyof typeof key];
