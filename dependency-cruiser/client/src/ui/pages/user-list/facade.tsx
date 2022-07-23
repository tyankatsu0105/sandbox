import * as Entities from "~application/entities";

import { faker } from "@faker-js/faker";

import * as Services from "~application/services";

const data: Entities.User[] = Array.from({ length: 50 }).map(() => ({
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
}));

export const useUsers = () => {
  const users = data.map((user) => Services.User.toPresenter(user));

  return {
    users,
  };
};
