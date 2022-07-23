import { strings } from '@angular-devkit/core';
import {
  Rule,
  apply,
  applyTemplates,
  mergeWith,
  move,
  url,
} from '@angular-devkit/schematics';

import { Schema } from './schema';

export default function (schema: Schema): Rule {
  const directory = `apps/${schema.project}/src/environments`;
  return () => {
    return mergeWith(
      apply(url('./files'), [
        applyTemplates({
          ...strings,
          env: `'${schema.env}'`,
          apiEndpoint: `'${schema.apiEndpoint}'`,
          sentryDsn: `'${schema.sentryDsn}'`,
          githubOAuthClientId: `'${schema.githubOAuthClientId}'`,
          githubOAuthClientSecret: `'${schema.githubOAuthClientSecret}'`,
        }),
        move(directory),
      ])
    );
  };
}
