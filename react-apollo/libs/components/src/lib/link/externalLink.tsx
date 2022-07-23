import React, { FunctionComponent } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Link, LinkProps } from '@material-ui/core';
import Launch from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) =>
  createStyles({
    ExternalLinkIconWrap: {
      verticalAlign: 'middle',
    },
    ExternalLinkIcon: {
      fontSize: 'inherit',
    },
  })
);

type Props = LinkProps;

export const ExternalLink: FunctionComponent<Props> = (props) => {
  const classes = useStyles({});
  return (
    <Link {...props} target="_blank">
      {props.children || props.href}
      <span className={classes.ExternalLinkIconWrap}>
        <Launch className={classes.ExternalLinkIcon} />
      </span>
    </Link>
  );
};
