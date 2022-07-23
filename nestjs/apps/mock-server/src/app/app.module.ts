import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

import * as Resolvers from './resolvers';
import * as Mocks from './mocks';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      resolvers: Resolvers.resolvers,
      mocks: Mocks.mocks,
      typePaths: [
        join(process.cwd(), 'apps/mock-server/src/schema/schema.graphql'),
      ],
      mockEntireSchema: false,
    }),
  ],
})
export class AppModule {}
