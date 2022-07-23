import * as React from "react";

import { Helmet } from "react-helmet";

import { SITE_NAME } from "~shared/const";

import { Header, Footer } from "./shared/components";

import { Routes } from "./pages/routes";

export const App = () => (
  <>
    <Helmet>
      <title>{SITE_NAME}</title>
    </Helmet>

    <Header />
    <Routes />
    <Footer />
  </>
);
