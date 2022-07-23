import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper as MaterialPaper, PaperProps } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    Paper: {
      padding: theme.spacing(2),
    },
  })
);

type Props = PaperProps;

export const Paper: FunctionComponent<Props> = (props) => {
  const { children, ...restProps } = props;
  const classes = useStyles({});

  return (
    <MaterialPaper {...restProps} className={classes.Paper}>
      {children}
    </MaterialPaper>
  );
};
