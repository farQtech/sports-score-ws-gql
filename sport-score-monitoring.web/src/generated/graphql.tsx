import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Competitors = {
  __typename?: 'Competitors';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  translations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Markets = {
  __typename?: 'Markets';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  selections?: Maybe<Array<Maybe<Selections>>>;
  translations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Payload = {
  __typename?: 'Payload';
  category?: Maybe<Category>;
  competitors?: Maybe<Array<Maybe<Competitors>>>;
  id: Scalars['ID'];
  markets?: Maybe<Array<Maybe<Markets>>>;
  oldMarkets?: Maybe<Array<Maybe<Markets>>>;
  startTime?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  competitors?: Maybe<Competitors>;
  getAllSportsData?: Maybe<Array<Maybe<SportScoreData>>>;
  getSportData?: Maybe<SportScoreData>;
  markets?: Maybe<Markets>;
  payload?: Maybe<Payload>;
  selections?: Maybe<Selections>;
};


export type QueryGetSportDataArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Selections = {
  __typename?: 'Selections';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  odds?: Maybe<Scalars['Float']>;
};

export type SportScoreData = {
  __typename?: 'SportScoreData';
  payload?: Maybe<Payload>;
  type?: Maybe<Scalars['String']>;
};

export type GetAllSportsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSportsDataQuery = { __typename?: 'Query', payload?: { __typename?: 'Payload', category?: { __typename?: 'Category', slug?: string | null } | null, competitors?: Array<{ __typename?: 'Competitors', name?: string | null, score?: number | null } | null> | null, oldMarkets?: Array<{ __typename?: 'Markets', name?: string | null } | null> | null } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  Competitors: ResolverTypeWrapper<Competitors>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Markets: ResolverTypeWrapper<Markets>;
  Payload: ResolverTypeWrapper<Payload>;
  Query: ResolverTypeWrapper<{}>;
  Selections: ResolverTypeWrapper<Selections>;
  SportScoreData: ResolverTypeWrapper<SportScoreData>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Category: Category;
  Competitors: Competitors;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Markets: Markets;
  Payload: Payload;
  Query: {};
  Selections: Selections;
  SportScoreData: SportScoreData;
  String: Scalars['String'];
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompetitorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Competitors'] = ResolversParentTypes['Competitors']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Markets'] = ResolversParentTypes['Markets']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Selections']>>>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  competitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Competitors']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Markets']>>>, ParentType, ContextType>;
  oldMarkets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Markets']>>>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  competitors?: Resolver<Maybe<ResolversTypes['Competitors']>, ParentType, ContextType>;
  getAllSportsData?: Resolver<Maybe<Array<Maybe<ResolversTypes['SportScoreData']>>>, ParentType, ContextType>;
  getSportData?: Resolver<Maybe<ResolversTypes['SportScoreData']>, ParentType, ContextType, Partial<QueryGetSportDataArgs>>;
  markets?: Resolver<Maybe<ResolversTypes['Markets']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType>;
  selections?: Resolver<Maybe<ResolversTypes['Selections']>, ParentType, ContextType>;
};

export type SelectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Selections'] = ResolversParentTypes['Selections']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  odds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportScoreDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportScoreData'] = ResolversParentTypes['SportScoreData']> = {
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Competitors?: CompetitorsResolvers<ContextType>;
  Markets?: MarketsResolvers<ContextType>;
  Payload?: PayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Selections?: SelectionsResolvers<ContextType>;
  SportScoreData?: SportScoreDataResolvers<ContextType>;
};



export const GetAllSportsDataDocument = gql`
    query getAllSportsData {
  payload {
    category {
      slug
    }
    competitors {
      name
      score
    }
    oldMarkets {
      name
    }
  }
}
    `;

/**
 * __useGetAllSportsDataQuery__
 *
 * To run a query within a React component, call `useGetAllSportsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSportsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSportsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSportsDataQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSportsDataQuery, GetAllSportsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSportsDataQuery, GetAllSportsDataQueryVariables>(GetAllSportsDataDocument, options);
      }
export function useGetAllSportsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSportsDataQuery, GetAllSportsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSportsDataQuery, GetAllSportsDataQueryVariables>(GetAllSportsDataDocument, options);
        }
export type GetAllSportsDataQueryHookResult = ReturnType<typeof useGetAllSportsDataQuery>;
export type GetAllSportsDataLazyQueryHookResult = ReturnType<typeof useGetAllSportsDataLazyQuery>;
export type GetAllSportsDataQueryResult = Apollo.QueryResult<GetAllSportsDataQuery, GetAllSportsDataQueryVariables>;