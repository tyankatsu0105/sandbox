import { getSymbolNames } from "../getSymbolNames";

import path from "path";

const getFixturePath = (fixtureFileName: string) => {
  const fixturePath = path.join(__dirname, "fixtures", fixtureFileName)

  return { fixturePath };
};

describe("getSymbolNames", () => {

  /**
   * https://github.com/microsoft/TypeScript/blob/a027cfa8acbfea3eb3753ef32435f77d3f0a0a23/doc/spec-ARCHIVED.md#11341-export-modifiers
   */
  describe('ExportDeclaration', () => {
    it("VariableStatement", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/VariableStatement.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ["variableStatementVar", 'variableStatementLet', 'variableStatementConst'] });
    });

    it("FunctionDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/FunctionDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['func'] });
    });

    it("ClassDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/ClassDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['User'] });
    });

    it("InterfaceDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/InterfaceDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['Person'] });
    });

    it("TypeAliasDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/TypeAliasDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['Person'] });
    });

    it("EnumDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/EnumDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['Blood'] });
    });

    it("NamespaceDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/NamespaceDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['User'] });
    });

    it("AmbientDeclaration", () => {
      const { fixturePath } = getFixturePath("ExportDeclaration/AmbientDeclaration.ts");
  
      const result = getSymbolNames(fixturePath);
  
      expect(result).toEqual({ symbolNames: ['func'] });
    });

    it.todo("LexicalDeclaration")
    it.todo("GeneratorDeclaration")
    it.todo("ImportAliasDeclaration")
  });

  it.todo('ExportAssignment')
});
