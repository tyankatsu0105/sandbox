import * as React from 'react';

import * as ApplicationUtils from '~client/application/utils';

const useIsomorphicEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

type UseKeypressParams = {
  callback: (event: React.KeyboardEvent) => void;
  key: ApplicationUtils.Key.Key;
};
export const useKeypress = (params: UseKeypressParams) => {
  useIsomorphicEffect(() => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === params.key) params.callback(event);
    };
    document.addEventListener('keydown', handleKeyDown as any);
    return () => document.removeEventListener('keydown', handleKeyDown as any);
  }, [params]);
};
