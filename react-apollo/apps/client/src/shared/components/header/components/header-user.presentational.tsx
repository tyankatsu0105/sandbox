import React, { FunctionComponent } from 'react';

import { IconButton, MenuItem, Menu, Link, Avatar } from '@material-ui/core';

import { HeaderUserQuery } from '~client/graphql/__generated__/schema';

type Props = {
  open: boolean;
  handleToggleAnchorEl: (anchorEl: HTMLElement) => void;
  anchorEl: HTMLElement;
  handleLogOut: () => void;
  data: HeaderUserQuery;
};

export const HeaderUserPresentational: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Link href={props.data?.viewer?.url} target="_blank">
        {props.data?.viewer?.name}
      </Link>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(event) => props.handleToggleAnchorEl(event.currentTarget)}
        color="inherit"
      >
        <Avatar
          alt={`${props.data?.viewer?.name}のアバター`}
          src={props.data?.viewer?.avatarUrl}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.open}
        onClose={() => props.handleToggleAnchorEl(null)}
      >
        <li>
          <MenuItem
            component="button"
            type="submit"
            onClick={props.handleLogOut}
          >
            ログアウト
          </MenuItem>
        </li>
      </Menu>
    </>
  );
};
