import * as AceBuild from "ace-builds";

declare global {
  interface Window {
    ace: Omit<typeof AceBuild, "Ace"> & {
      acequire: (moduleName: string) => any;
    };
  }
}
