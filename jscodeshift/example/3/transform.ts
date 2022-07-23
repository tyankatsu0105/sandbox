import { Transform, ASTPath, ImportDeclaration } from "jscodeshift";

const transform: Transform = ({source}, { jscodeshift }) => {
  const j = jscodeshift;
  const root = j(source);

  const addNamespaceForReact = (path: ASTPath<ImportDeclaration>) => {
    const restImportSpecifier = path.node.specifiers.filter(specifier => specifier.type !== 'ImportDefaultSpecifier' && specifier.local.name !== 'React')
    
    return j(path).replaceWith(
      j.importDeclaration(
        [
          j.importNamespaceSpecifier(j.identifier('React')),
          ...restImportSpecifier
        ],
        j.literal('react'),
        'value'
      )
    )
  }

  root.find(j.ImportDeclaration, {
    specifiers: [
      {
        type: 'ImportDefaultSpecifier',
        local: {
          type: 'Identifier',
          name: 'React'
        }
      }
    ]
  }).forEach(addNamespaceForReact)

  return root.toSource();
};

export default transform;