import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Page from "./page";

import { Pikachu } from "../../../mocks/handlers";

export default {
  title: "pages/main",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  msw: [
    Pikachu.handler
  ],
};

export const Slow = Template.bind({});
Slow.args = {};
Slow.parameters = {
  msw: [
    Pikachu.handlerSlow
  ],
};
