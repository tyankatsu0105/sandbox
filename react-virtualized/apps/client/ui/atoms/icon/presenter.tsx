import * as CSS from 'csstype';
import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as Checked } from './assets/checked.svg';
import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as UnChecked } from './assets/un-checked.svg';

// ----------------------------------------
// setups
// ----------------------------------------

export const icons = {
  checked: Checked,
  close: Close,
  unChecked: UnChecked,
};

// ----------------------------------------
// props
// ----------------------------------------

type Props = {
  color?: CSS.Property.Color;
  icon: keyof typeof icons;
  size?: number;
};
// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.VFC<Props> = (props) => {
  const size = props.size || 24;
  const Icon = icons[props.icon];

  return (
    <Wrap size={props.size}>
      <Icon color={props.color} />
    </Wrap>
  );
};

// ----------------------------------------
// styles
// ----------------------------------------
type WrapProps = {
  size: Props['size'];
};
const Wrap = styled.span<WrapProps>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  & > svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
  }
`;
