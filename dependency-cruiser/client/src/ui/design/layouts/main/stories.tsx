import { StoryObj } from "@storybook/react";
import * as React from "react";

import { Component } from "./presentational";

type StoryMeta = StoryObj<typeof Component>;
type StoryType = StoryObj<React.ComponentProps<typeof Component>>;

export default {
  component: Component,
  title: "Design/Layouts/Main",
} as StoryMeta;

const Template: StoryType = {
  render: () => <Component />,
};

export const Primary: StoryType = {
  ...Template,
  name: "Primary",
};
