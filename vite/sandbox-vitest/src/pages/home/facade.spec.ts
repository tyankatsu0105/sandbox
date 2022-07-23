import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import * as Facade from "./facade";

describe("facade", () => {
  describe("useStage", () => {
    it("return test", () => {
      const { result } = renderHook(() => Facade.useStage());

      expect(result.current.stage).toBe("test");
    });
  });

  describe("useStageText", () => {
    it("return string", () => {
      const { result } = renderHook(() => Facade.useStageText());

      expect(result.current.text).toBe("This application's stage is [test]");
    });
  });
});
