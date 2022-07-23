import * as React from 'react';
import styled from 'styled-components';

import * as Types from '~client/application/types';

// ----------------------------------------
// props
// ----------------------------------------

type Props = {
  headingLevel: Types.HeadingLevel;
};
// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.FC<Props> = (props) => {
  return <Wrapper as={props.headingLevel}>{props.children}</Wrapper>;
};

// ----------------------------------------
// styles
// ----------------------------------------

type WrapperType = {
  as: Types.HeadingLevel;
};
const Wrapper = styled.p<WrapperType>`
  font-weight: bold;
  ${(props) => {
    switch (props.as) {
      case 'h1':
        return 'font-size: 6rem;';
      case 'h2':
        return 'font-size: 3.75rem;';
      case 'h3':
        return 'font-size: 3rem;';
      case 'h4':
        return 'font-size: 2.125rem;';
      case 'h5':
        return 'font-size: 1.5rem;';
      case 'h6':
        return 'font-size: 1.25rem;';
    }
  }}
`;
