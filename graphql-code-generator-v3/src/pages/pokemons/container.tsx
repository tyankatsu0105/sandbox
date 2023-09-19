import * as React from "react";
import { useQuery } from "@apollo/client";

import { LanguagesDocument } from "../../api/graphql";

import { Component } from "./presentational";

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

export const Container = () => {
  const { data } = useQuery(LanguagesDocument);
  console.log({ data });

  return <Component />;
};
