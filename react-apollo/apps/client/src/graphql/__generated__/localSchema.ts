/* tslint:disable */
/* eslint-disable */
import { InMemoryCache } from '@apollo/client';
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export const BloodTypes = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type BloodTypes = typeof BloodTypes[keyof typeof BloodTypes];
export type Mutation = {
   __typename?: 'Mutation';
  updatePage?: Maybe<Page>;
  updateYou?: Maybe<You>;
};


export type MutationUpdatePageArgs = {
  input: PageInput;
};


export type MutationUpdateYouArgs = {
  input: YouInput;
};

/** ページに関する情報 */
export type Page = {
   __typename?: 'Page';
  heading?: Maybe<Scalars['String']>;
};

export type PageInput = {
  heading?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  page?: Maybe<Page>;
  you?: Maybe<You>;
};

/** LocalDemoで使用する */
export type You = {
   __typename?: 'You';
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  blood?: Maybe<BloodTypes>;
};

export type YouInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  blood?: Maybe<BloodTypes>;
};


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  Page: ResolverTypeWrapper<Page>,
  String: ResolverTypeWrapper<Scalars['String']>,
  You: ResolverTypeWrapper<You>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  BloodTypes: BloodTypes,
  Mutation: ResolverTypeWrapper<{}>,
  PageInput: PageInput,
  YouInput: YouInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Page: Page,
  String: Scalars['String'],
  You: You,
  Int: Scalars['Int'],
  BloodTypes: BloodTypes,
  Mutation: {},
  PageInput: PageInput,
  YouInput: YouInput,
  Boolean: Scalars['Boolean'],
}>;

export type MutationResolvers<ContextType = { cache: InMemoryCache }, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  updatePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationUpdatePageArgs, 'input'>>,
  updateYou?: Resolver<Maybe<ResolversTypes['You']>, ParentType, ContextType, RequireFields<MutationUpdateYouArgs, 'input'>>,
}>;

export type PageResolvers<ContextType = { cache: InMemoryCache }, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type QueryResolvers<ContextType = { cache: InMemoryCache }, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>,
  you?: Resolver<Maybe<ResolversTypes['You']>, ParentType, ContextType>,
}>;

export type YouResolvers<ContextType = { cache: InMemoryCache }, ParentType extends ResolversParentTypes['You'] = ResolversParentTypes['You']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  blood?: Resolver<Maybe<ResolversTypes['BloodTypes']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type Resolvers<ContextType = { cache: InMemoryCache }> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>,
  Page?: PageResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  You?: YouResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = { cache: InMemoryCache }> = Resolvers<ContextType>;


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    