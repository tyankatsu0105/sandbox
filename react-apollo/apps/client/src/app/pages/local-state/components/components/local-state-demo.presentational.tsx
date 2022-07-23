import React, { FunctionComponent } from 'react';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from '@material-ui/core';

import { LocalStateDemoQuery } from '~client/graphql/__generated__/schema';

import { LocalStateDemoEdit } from './components';

type Props = {
  data: LocalStateDemoQuery;
};

export const LocalStateDemoPresentational: FunctionComponent<Props> = (
  props
) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell>年齢</TableCell>
            <TableCell>血液型</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.data.you.name}</TableCell>
            <TableCell>{props.data.you.age}</TableCell>
            <TableCell>{props.data.you.blood}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box marginTop={3}>
        <LocalStateDemoEdit {...props} />
      </Box>
    </>
  );
};
