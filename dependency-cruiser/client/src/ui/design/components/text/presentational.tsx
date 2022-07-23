import * as React from "react";
import { Types } from "~ui/shared";

import styled from "styled-components";

export type FeatureProps = {};

export const DefaultElement = "p";

export type Props<
  Element extends React.ElementType = typeof DefaultElement,
  Props = Record<string, unknown>
> = Types.Component.PolymorphicPropsWithRef<Props, Element>;

const Presentational = <
  Element extends React.ElementType = typeof DefaultElement
>(
  props: Props<Element, FeatureProps>
) => {
  const { children, component, ...restProps } = props;

  return (
    <Element {...restProps} as={Types.Component.componentToAs(component)}>
      {children}
    </Element>
  );
};

export const Component: Types.Component.PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof DefaultElement
> = React.memo(Presentational);

const Element = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
`;
