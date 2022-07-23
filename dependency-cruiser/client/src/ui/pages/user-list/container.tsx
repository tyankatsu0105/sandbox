import * as React from "react";

import { Component } from "./presentational";

import { useUsers } from "./facade";

export const Container = () => {
  const { users } = useUsers();

  return <Component users={users} />;
};
