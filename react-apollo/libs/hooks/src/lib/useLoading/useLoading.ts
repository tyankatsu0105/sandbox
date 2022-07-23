import { useState, useEffect, useCallback } from 'react';

type Props = {
  loading: boolean;
  delay?: number;
};

export const useLoading = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // end of loading
    if (!props.loading) {
      setLoaded(true);
    }
  }, [props.loading]);

  const startLoading = () => setLoading(true);

  const finishLoading = useCallback(() => {
    return new Promise((resolve) => {
      if (finishLoading) {
        setTimeout(() => {
          resolve();
          setLoading(false);
        }, props.delay ?? 1000);
      }
    });
  }, [loaded]);

  return { loading, startLoading, finishLoading };
};
