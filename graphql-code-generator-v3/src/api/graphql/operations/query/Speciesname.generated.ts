import * as Types from '../../__generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const SpeciesnameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Speciesname"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon_v2_pokemonspeciesname"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1661"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language_id"}},{"kind":"Field","name":{"kind":"Name","value":"genus"}},{"kind":"Field","name":{"kind":"Name","value":"pokemon_v2_pokemonspecy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Specy"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Specy"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pokemon_v2_pokemonspecies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_legendary"}}]}}]} as unknown as DocumentNode<Types.SpeciesnameQuery, Types.SpeciesnameQueryVariables>;