import * as React from "react";
import styled from "styled-components";

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  renderBody?: () => React.ReactElement;
  renderFooter?: () => React.ReactElement;
  renderHeader?: () => React.ReactElement;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { renderBody, renderFooter, renderHeader, ...restProps } = props;

  return (
    <Wrap {...restProps}>
      {renderHeader && renderHeader()}
      {renderBody && renderBody()}
      {renderFooter && renderFooter()}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  border-radius: 6px;
  background-color: #ccc;
`;
