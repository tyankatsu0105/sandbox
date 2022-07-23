import * as React from "react";

import { Component } from "./presentational";

import { useStageText } from "./facade";

export const Container = () => {
  const { text } = useStageText();

  return <Component text={text} />;
};
