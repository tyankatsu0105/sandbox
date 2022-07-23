import * as React from "react";

type Props = {
  text: string;
};

const Presentational: React.VFC<Props> = (props) => {
  return (
    <>
      <div>home</div>
      <p>{props.text}</p>
    </>
  );
};

export const Component = React.memo(Presentational);
