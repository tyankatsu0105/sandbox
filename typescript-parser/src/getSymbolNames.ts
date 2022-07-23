import * as TSMorph from "ts-morph";

type SymbolNames = ("default" | (string & {}))[]

export const getSymbolNames = (fixturePath: string) => {
  const symbolNames: SymbolNames = [];

  const project = new TSMorph.Project({
    tsConfigFilePath: "tsconfig.json",
  })
  const sourceFile = project.getSourceFileOrThrow(fixturePath)
  console.log({sourceFile});
  
  
  sourceFile.getExportSymbols().forEach(symbol => {        
    symbolNames.push(symbol.getName())
  });
  

  return { symbolNames };
};