import * as TestingLibraryReactHooks from "@testing-library/react-hooks";

import * as Hooks from "./hooks";

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
describe("hooks", () => {
  describe("usePage", () => {
    it("when fetched data, then return data as poke", async () => {
      const {
        result,
        waitForNextUpdate,
      } = TestingLibraryReactHooks.renderHook(() => Hooks.usePage());

      await waitForNextUpdate();

      expect(result.current.poke).toStrictEqual(Pikachu.data);
    });
  });
});
