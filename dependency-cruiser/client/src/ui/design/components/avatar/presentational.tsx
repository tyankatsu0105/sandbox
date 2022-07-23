import * as React from "react";
import styled from "styled-components";
import { Properties } from "csstype";

import { ReactComponent as Avatar } from "./assets/avatar.svg";
import { variant } from "./facade";

type Variant = typeof variant[keyof typeof variant];

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant: Variant;
  size?: Properties["width"] & Properties["height"];
};

const Presentational = (props: Props) => {
  const { className, style, variant, size, ...restProps } = props;

  return (
    <Wrap
      className={className}
      style={style}
      variant={variant}
      size={size || "40px"}
    >
      {props.src ? <Img {...restProps} /> : <Icon />}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
type WrapProps = {
  variant: Props["variant"];
  size: Props["size"];
};
const Wrap = styled.div<WrapProps>`
  border-radius: ${(props) => {
    switch (props.variant) {
      case "rounded":
        return "5px";
      case "circle":
        return "50%";
      case "square":
        return 0;
    }
  }};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: #fff;
  color: #333;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Icon = styled(Avatar)`
  width: 100%;
  height: 100%;
`;
