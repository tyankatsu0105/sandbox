import React, { FunctionComponent, useState, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { deleteCookie } from '@sandbox-react-apollo/helpers';

import { HeaderUserPresentational } from './header-user.presentational';

import { Cookies } from '~client/shared/types';

import { useHeaderUserQuery } from '~client/graphql/__generated__/schema';

type Props = {};

export const HeaderUser: FunctionComponent<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { replace } = useHistory();

  const handleToggleAnchorEl = useCallback((anchorEl: HTMLElement | null) => {
    setAnchorEl(anchorEl);
  }, []);
  const open = Boolean(anchorEl);

  const handleLogOut = useCallback(() => {
    deleteCookie<Cookies>('githubAccessToken');
    replace('/login');
  }, [replace]);

  const { data } = useHeaderUserQuery();

  const headerUserPresentationalProps = {
    handleToggleAnchorEl,
    open,
    anchorEl,
    handleLogOut,
    data,
  };
  return <HeaderUserPresentational {...headerUserPresentationalProps} />;
};
