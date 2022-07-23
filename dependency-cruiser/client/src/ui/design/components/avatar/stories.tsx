import { StoryObj } from "@storybook/react";
import * as React from "react";

import { Component } from "./presentational";

type StoryMeta = StoryObj<typeof Component>;
type StoryType = StoryObj<React.ComponentProps<typeof Component>>;

export default {
  component: Component,
  title: "Design/Components/Avatar",
} as StoryMeta;

const Template: StoryType = {
  render: (args) => <Component {...args} />,
};

export const Primary: StoryType = {
  ...Template,
  args: {
    size: "100px",
  },
  name: "Primary",
};
