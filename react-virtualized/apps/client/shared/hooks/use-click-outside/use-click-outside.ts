import * as React from 'react';

export const useClickOutSide = (props = false) => {
  const [isClickOutside, setIsClickOutside] = React.useState(props);
  const componentWrapRef = React.useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      componentWrapRef.current &&
      !componentWrapRef.current.contains(event.target)
    ) {
      setIsClickOutside(true);
    } else {
      setIsClickOutside(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { componentWrapRef, isClickOutside, setIsClickOutside };
};
