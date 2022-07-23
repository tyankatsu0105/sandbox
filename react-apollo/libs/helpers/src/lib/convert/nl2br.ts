import { createElement } from 'react';

export const nl2br = (str: string) => {
  const newlineRegex = /(\r\n|\r|\n)/g;

  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return createElement('br', { key: index });
    }
    return line;
  });
};
