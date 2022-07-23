import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Page from "./page";

import { server } from "../../../mocks/server";

import { Pikachu } from "../../../mocks/handlers";

// ------------------------------------
// Setups
// ------------------------------------

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// ------------------------------------
// Test cases
// ------------------------------------
describe("page", () => {
  it("when renderd, then img has value of src", async () => {
    render(<Page />);

    await waitFor(() => screen.getByText(Pikachu.data.name));

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", Pikachu.data.sprites.front_default);
  });
});
