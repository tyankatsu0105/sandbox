import React, {
  FunctionComponent,
  ComponentType,
  useEffect,
  useState,
} from 'react';
import {
  RouteProps,
  RouteComponentProps,
  Route,
  useHistory,
} from 'react-router-dom';

import { getCookies } from '@sandbox-react-apollo/helpers';

type Cookies = 'githubAccessToken';

type Props = RouteProps & {
  component: ComponentType<RouteComponentProps>;
};

export const Authentication: FunctionComponent<Props> = (props) => {
  const { component: Component, ...restProps } = props;
  const [isLogin, setIsLogin] = useState(false);
  const { replace } = useHistory();

  useEffect(() => {
    const { githubAccessToken } = getCookies<Cookies>();
    if (!githubAccessToken) {
      replace('/login');
    } else {
      setIsLogin(true);
    }
  }, [replace]);

  return (
    <Route
      {...restProps}
      render={(p) => (isLogin ? <Component {...p} /> : null)}
    />
  );
};
