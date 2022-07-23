import * as API from "~api/api";
import * as Presenters from "~application/presenters";

type User = API.components["schemas"]["User"];

export const toPresenter = (user: User): Presenters.User => ({
  avatar: user.avatar,
  id: user.id,
  name: user.name,
});
