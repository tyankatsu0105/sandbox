// // @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';

import {
  useSnackbar as useOriginSnackbar,
  VariantType,
  SnackbarContent,
  OptionsObject,
} from 'notistack';

import { Simple, WithDetails } from './components';

type Props = {
  type: 'simple' | 'withDetails';
} & Omit<OptionsObject, 'content'>;

type SimpleProps = {
  message: string;
  variant: VariantType;
};
type WithDetailsProps = {
  message: string;
  variant: VariantType;
  details: string;
};

type SelectedComponent = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in Props['type']]: any;
};

const selectedComponent: SelectedComponent = {
  simple: Simple,
  withDetails: WithDetails,
};

// @FIXME https://github.com/microsoft/TypeScript/issues/13995
export const useSnackbar = <T extends Props['type']>(props: Props) => {
  const { type, ...snackbarOptions } = props;
  const { enqueueSnackbar } = useOriginSnackbar();

  const showSnackbar = (
    showSnackbarProps: T extends 'withDetails' ? WithDetailsProps : SimpleProps
  ) => {
    const content: SnackbarContent = (key) => {
      const Component = selectedComponent[props.type];

      const componentProps = {
        ...showSnackbarProps,
        // keyをそのまま渡したいが、予約語なのでidに変換
        // @see https://ja.reactjs.org/docs/glossary.html#keys
        id: key,
      };

      return <Component {...componentProps} />;
    };

    return enqueueSnackbar(null, {
      content,
      ...snackbarOptions,
    });
  };

  return { showSnackbar };
};
