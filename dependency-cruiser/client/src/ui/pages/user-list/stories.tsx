import { StoryObj } from "@storybook/react";
import * as React from "react";

import { Component } from "./presentational";
import { faker } from "@faker-js/faker";

type StoryMeta = StoryObj<typeof Component>;
type StoryType = StoryObj<React.ComponentProps<typeof Component>>;

export default {
  component: Component,
  title: "Design/Pages/UserList",
} as StoryMeta;

const Template: StoryType = {
  render: (args) => <Component {...args} />,
};

export const Primary: StoryType = {
  ...Template,
  name: "Primary",
  args: {
    users: [
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
    ],
  },
};
