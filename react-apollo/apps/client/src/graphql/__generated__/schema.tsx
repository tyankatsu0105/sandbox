/* tslint:disable */
/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URI: any;
  DateTime: any;
  HTML: any;
  GitObjectID: any;
  GitTimestamp: any;
  GitSSHRemote: any;
  Date: any;
  PreciseDateTime: any;
  X509Certificate: any;
};

export type AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptEnterpriseAdministratorInvitationPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars['String']>;
};

export type AcceptTopicSuggestionInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptTopicSuggestionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
};

export const ActionExecutionCapabilitySetting = {
  Disabled: 'DISABLED',
  AllActions: 'ALL_ACTIONS',
  LocalActionsOnly: 'LOCAL_ACTIONS_ONLY',
  NoPolicy: 'NO_POLICY'
} as const;

export type ActionExecutionCapabilitySetting = typeof ActionExecutionCapabilitySetting[keyof typeof ActionExecutionCapabilitySetting];
export type Actor = {
  avatarUrl: Scalars['URI'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type ActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ActorLocation = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
};

export type AddAssigneesToAssignableInput = {
  assignableId: Scalars['ID'];
  assigneeIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddAssigneesToAssignablePayload = {
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCommentInput = {
  subjectId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  commentEdge?: Maybe<IssueCommentEdge>;
  subject?: Maybe<Node>;
  timelineEdge?: Maybe<IssueTimelineItemEdge>;
};

export type AddedToProjectEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type AddLabelsToLabelableInput = {
  labelableId: Scalars['ID'];
  labelIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddLabelsToLabelablePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type AddProjectCardInput = {
  projectColumnId: Scalars['ID'];
  contentId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddProjectCardPayload = {
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type AddProjectColumnInput = {
  projectId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddProjectColumnPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  columnEdge?: Maybe<ProjectColumnEdge>;
  project?: Maybe<Project>;
};

export type AddPullRequestReviewCommentInput = {
  pullRequestId?: Maybe<Scalars['ID']>;
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  commitOID?: Maybe<Scalars['GitObjectID']>;
  body: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  inReplyTo?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<PullRequestReviewComment>;
  commentEdge?: Maybe<PullRequestReviewCommentEdge>;
};

export type AddPullRequestReviewInput = {
  pullRequestId: Scalars['ID'];
  commitOID?: Maybe<Scalars['GitObjectID']>;
  body?: Maybe<Scalars['String']>;
  event?: Maybe<PullRequestReviewEvent>;
  comments?: Maybe<Array<Maybe<DraftPullRequestReviewComment>>>;
  threads?: Maybe<Array<Maybe<DraftPullRequestReviewThread>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
  reviewEdge?: Maybe<PullRequestReviewEdge>;
};

export type AddPullRequestReviewThreadInput = {
  path: Scalars['String'];
  body: Scalars['String'];
  pullRequestReviewId: Scalars['ID'];
  line: Scalars['Int'];
  side?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  startSide?: Maybe<DiffSide>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPullRequestReviewThreadPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type AddReactionInput = {
  subjectId: Scalars['ID'];
  content: ReactionContent;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddReactionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  reaction?: Maybe<Reaction>;
  subject?: Maybe<Reactable>;
};

export type AddStarInput = {
  starrableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddStarPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  starrable?: Maybe<Starrable>;
};

export type App = Node & {
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logoBackgroundColor: Scalars['String'];
  logoUrl: Scalars['URI'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type AppLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ArchiveRepositoryInput = {
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ArchiveRepositoryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type Assignable = {
  assignees: UserConnection;
};


export type AssignableAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AssignedEvent = Node & {
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type Assignee = Bot | Mannequin | Organization | User;

export type AuditEntry = {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  operationType?: Maybe<OperationType>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type AuditEntryActor = Bot | Organization | User;

export type AuditLogOrder = {
  field?: Maybe<AuditLogOrderField>;
  direction?: Maybe<OrderDirection>;
};

export const AuditLogOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type AuditLogOrderField = typeof AuditLogOrderField[keyof typeof AuditLogOrderField];
export type BaseRefChangedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type BaseRefForcePushedEvent = Node & {
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type Blame = {
  ranges: Array<BlameRange>;
};

export type BlameRange = {
  age: Scalars['Int'];
  commit: Commit;
  endingLine: Scalars['Int'];
  startingLine: Scalars['Int'];
};

export type Blob = Node & GitObject & {
  abbreviatedOid: Scalars['String'];
  byteSize: Scalars['Int'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  isBinary: Scalars['Boolean'];
  isTruncated: Scalars['Boolean'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
  text?: Maybe<Scalars['String']>;
};

export const BloodTypes = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type BloodTypes = typeof BloodTypes[keyof typeof BloodTypes];
export type Bot = Node & Actor & UniformResourceLocatable & {
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type BotAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type BranchProtectionRule = Node & {
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  dismissesStaleReviews: Scalars['Boolean'];
  id: Scalars['ID'];
  isAdminEnforced: Scalars['Boolean'];
  matchingRefs: RefConnection;
  pattern: Scalars['String'];
  pushAllowances: PushAllowanceConnection;
  repository?: Maybe<Repository>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars['String']>>>;
  requiresApprovingReviews: Scalars['Boolean'];
  requiresCodeOwnerReviews: Scalars['Boolean'];
  requiresCommitSignatures: Scalars['Boolean'];
  requiresStatusChecks: Scalars['Boolean'];
  requiresStrictStatusChecks: Scalars['Boolean'];
  restrictsPushes: Scalars['Boolean'];
  restrictsReviewDismissals: Scalars['Boolean'];
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection;
};


export type BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRuleMatchingRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BranchProtectionRuleConflict = {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  conflictingBranchProtectionRule?: Maybe<BranchProtectionRule>;
  ref?: Maybe<Ref>;
};

export type BranchProtectionRuleConflictConnection = {
  edges?: Maybe<Array<Maybe<BranchProtectionRuleConflictEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRuleConflict>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BranchProtectionRuleConflictEdge = {
  cursor: Scalars['String'];
  node?: Maybe<BranchProtectionRuleConflict>;
};

export type BranchProtectionRuleConnection = {
  edges?: Maybe<Array<Maybe<BranchProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BranchProtectionRuleEdge = {
  cursor: Scalars['String'];
  node?: Maybe<BranchProtectionRule>;
};

export type CancelEnterpriseAdminInvitationInput = {
  invitationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelEnterpriseAdminInvitationPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars['String']>;
};

export type ChangeUserStatusInput = {
  emoji?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['ID']>;
  limitedAvailability?: Maybe<Scalars['Boolean']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangeUserStatusPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  status?: Maybe<UserStatus>;
};

export type ClearLabelsFromLabelableInput = {
  labelableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClearLabelsFromLabelablePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type CloneProjectInput = {
  targetOwnerId: Scalars['ID'];
  sourceId: Scalars['ID'];
  includeWorkflows: Scalars['Boolean'];
  name: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloneProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  jobStatusId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type CloneTemplateRepositoryInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  ownerId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  visibility: RepositoryVisibility;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloneTemplateRepositoryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type Closable = {
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
};

export type ClosedEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  closable: Closable;
  closer?: Maybe<Closer>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type CloseIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CloseIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type ClosePullRequestInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ClosePullRequestPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type Closer = Commit | PullRequest;

export type CodeOfConduct = Node & {
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  resourcePath?: Maybe<Scalars['URI']>;
  url?: Maybe<Scalars['URI']>;
};

export const CollaboratorAffiliation = {
  Outside: 'OUTSIDE',
  Direct: 'DIRECT',
  All: 'ALL'
} as const;

export type CollaboratorAffiliation = typeof CollaboratorAffiliation[keyof typeof CollaboratorAffiliation];
export type Comment = {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type CommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export const CommentAuthorAssociation = {
  Member: 'MEMBER',
  Owner: 'OWNER',
  Collaborator: 'COLLABORATOR',
  Contributor: 'CONTRIBUTOR',
  FirstTimeContributor: 'FIRST_TIME_CONTRIBUTOR',
  FirstTimer: 'FIRST_TIMER',
  None: 'NONE'
} as const;

export type CommentAuthorAssociation = typeof CommentAuthorAssociation[keyof typeof CommentAuthorAssociation];
export const CommentCannotUpdateReason = {
  Archived: 'ARCHIVED',
  InsufficientAccess: 'INSUFFICIENT_ACCESS',
  Locked: 'LOCKED',
  LoginRequired: 'LOGIN_REQUIRED',
  Maintenance: 'MAINTENANCE',
  VerifiedEmailRequired: 'VERIFIED_EMAIL_REQUIRED',
  Denied: 'DENIED'
} as const;

export type CommentCannotUpdateReason = typeof CommentCannotUpdateReason[keyof typeof CommentCannotUpdateReason];
export type CommentDeletedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type Commit = Node & GitObject & Subscribable & UniformResourceLocatable & {
  abbreviatedOid: Scalars['String'];
  additions: Scalars['Int'];
  associatedPullRequests?: Maybe<PullRequestConnection>;
  author?: Maybe<GitActor>;
  authoredByCommitter: Scalars['Boolean'];
  authoredDate: Scalars['DateTime'];
  blame: Blame;
  changedFiles: Scalars['Int'];
  comments: CommitCommentConnection;
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  committedDate: Scalars['DateTime'];
  committedViaWeb: Scalars['Boolean'];
  committer?: Maybe<GitActor>;
  deletions: Scalars['Int'];
  deployments?: Maybe<DeploymentConnection>;
  history: CommitHistoryConnection;
  id: Scalars['ID'];
  message: Scalars['String'];
  messageBody: Scalars['String'];
  messageBodyHTML: Scalars['HTML'];
  messageHeadline: Scalars['String'];
  messageHeadlineHTML: Scalars['HTML'];
  oid: Scalars['GitObjectID'];
  onBehalfOf?: Maybe<Organization>;
  parents: CommitConnection;
  pushedDate?: Maybe<Scalars['DateTime']>;
  repository: Repository;
  resourcePath: Scalars['URI'];
  signature?: Maybe<GitSignature>;
  status?: Maybe<Status>;
  statusCheckRollup?: Maybe<StatusCheckRollup>;
  submodules: SubmoduleConnection;
  tarballUrl: Scalars['URI'];
  tree: Tree;
  treeResourcePath: Scalars['URI'];
  treeUrl: Scalars['URI'];
  url: Scalars['URI'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
  zipballUrl: Scalars['URI'];
};


export type CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PullRequestOrder>;
};


export type CommitBlameArgs = {
  path: Scalars['String'];
};


export type CommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitHistoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  author?: Maybe<CommitAuthor>;
  since?: Maybe<Scalars['GitTimestamp']>;
  until?: Maybe<Scalars['GitTimestamp']>;
};


export type CommitParentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CommitSubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitAuthor = {
  id?: Maybe<Scalars['ID']>;
  emails?: Maybe<Array<Scalars['String']>>;
};

export type CommitComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type CommitCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitCommentConnection = {
  edges?: Maybe<Array<Maybe<CommitCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<CommitComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommitCommentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CommitComment>;
};

export type CommitCommentThread = Node & RepositoryNode & {
  comments: CommitCommentConnection;
  commit?: Maybe<Commit>;
  id: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  repository: Repository;
};


export type CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CommitConnection = {
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommitContributionOrder = {
  field: CommitContributionOrderField;
  direction: OrderDirection;
};

export const CommitContributionOrderField = {
  OccurredAt: 'OCCURRED_AT',
  CommitCount: 'COMMIT_COUNT'
} as const;

export type CommitContributionOrderField = typeof CommitContributionOrderField[keyof typeof CommitContributionOrderField];
export type CommitContributionsByRepository = {
  contributions: CreatedCommitContributionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommitContributionOrder>;
};

export type CommitEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Commit>;
};

export type CommitHistoryConnection = {
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ConnectedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type Contribution = {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type ContributionCalendar = {
  colors: Array<Scalars['String']>;
  isHalloween: Scalars['Boolean'];
  months: Array<ContributionCalendarMonth>;
  totalContributions: Scalars['Int'];
  weeks: Array<ContributionCalendarWeek>;
};

export type ContributionCalendarDay = {
  color: Scalars['String'];
  contributionCount: Scalars['Int'];
  date: Scalars['Date'];
  weekday: Scalars['Int'];
};

export type ContributionCalendarMonth = {
  firstDay: Scalars['Date'];
  name: Scalars['String'];
  totalWeeks: Scalars['Int'];
  year: Scalars['Int'];
};

export type ContributionCalendarWeek = {
  contributionDays: Array<ContributionCalendarDay>;
  firstDay: Scalars['Date'];
};

export type ContributionOrder = {
  field?: Maybe<ContributionOrderField>;
  direction: OrderDirection;
};

export const ContributionOrderField = {
  OccurredAt: 'OCCURRED_AT'
} as const;

export type ContributionOrderField = typeof ContributionOrderField[keyof typeof ContributionOrderField];
export type ContributionsCollection = {
  commitContributionsByRepository: Array<CommitContributionsByRepository>;
  contributionCalendar: ContributionCalendar;
  contributionYears: Array<Scalars['Int']>;
  doesEndInCurrentMonth: Scalars['Boolean'];
  earliestRestrictedContributionDate?: Maybe<Scalars['Date']>;
  endedAt: Scalars['DateTime'];
  firstIssueContribution?: Maybe<CreatedIssueOrRestrictedContribution>;
  firstPullRequestContribution?: Maybe<CreatedPullRequestOrRestrictedContribution>;
  firstRepositoryContribution?: Maybe<CreatedRepositoryOrRestrictedContribution>;
  hasActivityInThePast: Scalars['Boolean'];
  hasAnyContributions: Scalars['Boolean'];
  hasAnyRestrictedContributions: Scalars['Boolean'];
  isSingleDay: Scalars['Boolean'];
  issueContributions: CreatedIssueContributionConnection;
  issueContributionsByRepository: Array<IssueContributionsByRepository>;
  joinedGitHubContribution?: Maybe<JoinedGitHubContribution>;
  latestRestrictedContributionDate?: Maybe<Scalars['Date']>;
  mostRecentCollectionWithActivity?: Maybe<ContributionsCollection>;
  mostRecentCollectionWithoutActivity?: Maybe<ContributionsCollection>;
  popularIssueContribution?: Maybe<CreatedIssueContribution>;
  popularPullRequestContribution?: Maybe<CreatedPullRequestContribution>;
  pullRequestContributions: CreatedPullRequestContributionConnection;
  pullRequestContributionsByRepository: Array<PullRequestContributionsByRepository>;
  pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection;
  pullRequestReviewContributionsByRepository: Array<PullRequestReviewContributionsByRepository>;
  repositoryContributions: CreatedRepositoryContributionConnection;
  restrictedContributionsCount: Scalars['Int'];
  startedAt: Scalars['DateTime'];
  totalCommitContributions: Scalars['Int'];
  totalIssueContributions: Scalars['Int'];
  totalPullRequestContributions: Scalars['Int'];
  totalPullRequestReviewContributions: Scalars['Int'];
  totalRepositoriesWithContributedCommits: Scalars['Int'];
  totalRepositoriesWithContributedIssues: Scalars['Int'];
  totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
  totalRepositoriesWithContributedPullRequests: Scalars['Int'];
  totalRepositoryContributions: Scalars['Int'];
  user: User;
};


export type ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


export type ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


export type ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<ContributionOrder>;
};


export type ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


export type ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
};

export type ConvertedNoteToIssueEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type ConvertProjectCardNoteToIssueInput = {
  projectCardId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConvertProjectCardNoteToIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  projectCard?: Maybe<ProjectCard>;
};

export type ConvertToDraftEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type CreateBranchProtectionRuleInput = {
  repositoryId: Scalars['ID'];
  pattern: Scalars['String'];
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBranchProtectionRulePayload = {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatedCommitContribution = Contribution & {
  commitCount: Scalars['Int'];
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedCommitContributionConnection = {
  edges?: Maybe<Array<Maybe<CreatedCommitContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedCommitContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedCommitContributionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CreatedCommitContribution>;
};

export type CreatedIssueContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  issue: Issue;
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedIssueContributionConnection = {
  edges?: Maybe<Array<Maybe<CreatedIssueContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedIssueContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedIssueContributionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CreatedIssueContribution>;
};

export type CreatedIssueOrRestrictedContribution = CreatedIssueContribution | RestrictedContribution;

export type CreatedPullRequestContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedPullRequestContributionConnection = {
  edges?: Maybe<Array<Maybe<CreatedPullRequestContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedPullRequestContributionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CreatedPullRequestContribution>;
};

export type CreatedPullRequestOrRestrictedContribution = CreatedPullRequestContribution | RestrictedContribution;

export type CreatedPullRequestReviewContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  pullRequest: PullRequest;
  pullRequestReview: PullRequestReview;
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedPullRequestReviewContributionConnection = {
  edges?: Maybe<Array<Maybe<CreatedPullRequestReviewContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestReviewContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedPullRequestReviewContributionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CreatedPullRequestReviewContribution>;
};

export type CreatedRepositoryContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  repository: Repository;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type CreatedRepositoryContributionConnection = {
  edges?: Maybe<Array<Maybe<CreatedRepositoryContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedRepositoryContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreatedRepositoryContributionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<CreatedRepositoryContribution>;
};

export type CreatedRepositoryOrRestrictedContribution = CreatedRepositoryContribution | RestrictedContribution;

export type CreateEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  profileName: Scalars['String'];
  billingEmail: Scalars['String'];
  adminLogins: Array<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateEnterpriseOrganizationPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
};

export type CreateIpAllowListEntryInput = {
  ownerId: Scalars['ID'];
  allowListValue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateIpAllowListEntryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type CreateIssueInput = {
  repositoryId: Scalars['ID'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type CreateProjectInput = {
  ownerId: Scalars['ID'];
  name: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  template?: Maybe<ProjectTemplate>;
  repositoryIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type CreatePullRequestInput = {
  repositoryId: Scalars['ID'];
  baseRefName: Scalars['String'];
  headRefName: Scalars['String'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePullRequestPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type CreateRefInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  oid: Scalars['GitObjectID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRefPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
};

export type CreateRepositoryInput = {
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  visibility: RepositoryVisibility;
  template?: Maybe<Scalars['Boolean']>;
  homepageUrl?: Maybe<Scalars['URI']>;
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  teamId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRepositoryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type CreateTeamDiscussionCommentInput = {
  discussionId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTeamDiscussionCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type CreateTeamDiscussionInput = {
  teamId: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  private?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTeamDiscussionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type CrossReferencedEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  referencedAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  source: ReferencedSubject;
  target: ReferencedSubject;
  url: Scalars['URI'];
  willCloseTarget: Scalars['Boolean'];
};



export type DeclineTopicSuggestionInput = {
  repositoryId: Scalars['ID'];
  name: Scalars['String'];
  reason: TopicSuggestionDeclineReason;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeclineTopicSuggestionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
};

export const DefaultRepositoryPermissionField = {
  None: 'NONE',
  Read: 'READ',
  Write: 'WRITE',
  Admin: 'ADMIN'
} as const;

export type DefaultRepositoryPermissionField = typeof DefaultRepositoryPermissionField[keyof typeof DefaultRepositoryPermissionField];
export type Deletable = {
  viewerCanDelete: Scalars['Boolean'];
};

export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteBranchProtectionRulePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteDeploymentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteDeploymentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIpAllowListEntryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type DeleteIssueCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssueCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type DeleteProjectCardInput = {
  cardId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectCardPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  column?: Maybe<ProjectColumn>;
  deletedCardId?: Maybe<Scalars['ID']>;
};

export type DeleteProjectColumnInput = {
  columnId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectColumnPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  deletedColumnId?: Maybe<Scalars['ID']>;
  project?: Maybe<Project>;
};

export type DeleteProjectInput = {
  projectId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  owner?: Maybe<ProjectOwner>;
};

export type DeletePullRequestReviewCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePullRequestReviewCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DeletePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePullRequestReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DeleteRefInput = {
  refId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteRefPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionCommentInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTeamDiscussionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DemilestonedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  milestoneTitle: Scalars['String'];
  subject: MilestoneItem;
};

export type DeployedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  deployment: Deployment;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type DeployKey = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  readOnly: Scalars['Boolean'];
  title: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type DeployKeyConnection = {
  edges?: Maybe<Array<Maybe<DeployKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<DeployKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeployKeyEdge = {
  cursor: Scalars['String'];
  node?: Maybe<DeployKey>;
};

export type Deployment = Node & {
  commit?: Maybe<Commit>;
  commitOid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: Actor;
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latestEnvironment?: Maybe<Scalars['String']>;
  latestStatus?: Maybe<DeploymentStatus>;
  originalEnvironment?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
  repository: Repository;
  state?: Maybe<DeploymentState>;
  statuses?: Maybe<DeploymentStatusConnection>;
  task?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type DeploymentStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DeploymentConnection = {
  edges?: Maybe<Array<Maybe<DeploymentEdge>>>;
  nodes?: Maybe<Array<Maybe<Deployment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeploymentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Deployment>;
};

export type DeploymentEnvironmentChangedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  deploymentStatus: DeploymentStatus;
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type DeploymentOrder = {
  field: DeploymentOrderField;
  direction: OrderDirection;
};

export const DeploymentOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type DeploymentOrderField = typeof DeploymentOrderField[keyof typeof DeploymentOrderField];
export const DeploymentState = {
  Abandoned: 'ABANDONED',
  Active: 'ACTIVE',
  Destroyed: 'DESTROYED',
  Error: 'ERROR',
  Failure: 'FAILURE',
  Inactive: 'INACTIVE',
  Pending: 'PENDING',
  Queued: 'QUEUED',
  InProgress: 'IN_PROGRESS'
} as const;

export type DeploymentState = typeof DeploymentState[keyof typeof DeploymentState];
export type DeploymentStatus = Node & {
  createdAt: Scalars['DateTime'];
  creator: Actor;
  deployment: Deployment;
  description?: Maybe<Scalars['String']>;
  environmentUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  logUrl?: Maybe<Scalars['URI']>;
  state: DeploymentStatusState;
  updatedAt: Scalars['DateTime'];
};

export type DeploymentStatusConnection = {
  edges?: Maybe<Array<Maybe<DeploymentStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeploymentStatusEdge = {
  cursor: Scalars['String'];
  node?: Maybe<DeploymentStatus>;
};

export const DeploymentStatusState = {
  Pending: 'PENDING',
  Success: 'SUCCESS',
  Failure: 'FAILURE',
  Inactive: 'INACTIVE',
  Error: 'ERROR',
  Queued: 'QUEUED',
  InProgress: 'IN_PROGRESS'
} as const;

export type DeploymentStatusState = typeof DeploymentStatusState[keyof typeof DeploymentStatusState];
export const DiffSide = {
  Left: 'LEFT',
  Right: 'RIGHT'
} as const;

export type DiffSide = typeof DiffSide[keyof typeof DiffSide];
export type DisconnectedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type DismissPullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  message: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DismissPullRequestReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DraftPullRequestReviewComment = {
  path: Scalars['String'];
  position: Scalars['Int'];
  body: Scalars['String'];
};

export type DraftPullRequestReviewThread = {
  path: Scalars['String'];
  line: Scalars['Int'];
  side?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  startSide?: Maybe<DiffSide>;
  body: Scalars['String'];
};

export type Enterprise = Node & {
  avatarUrl: Scalars['URI'];
  billingInfo?: Maybe<EnterpriseBillingInfo>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  members: EnterpriseMemberConnection;
  name: Scalars['String'];
  organizations: OrganizationConnection;
  ownerInfo?: Maybe<EnterpriseOwnerInfo>;
  resourcePath: Scalars['URI'];
  slug: Scalars['String'];
  url: Scalars['URI'];
  userAccounts: EnterpriseUserAccountConnection;
  viewerIsAdmin: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type EnterpriseAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type EnterpriseMembersArgs = {
  organizationLogins?: Maybe<Array<Scalars['String']>>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  role?: Maybe<EnterpriseUserAccountMembershipRole>;
  deployment?: Maybe<EnterpriseUserDeployment>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrganizationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseUserAccountsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseAdministratorConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseAdministratorEdge = {
  cursor: Scalars['String'];
  node?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitation = Node & {
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  enterprise: Enterprise;
  id: Scalars['ID'];
  invitee?: Maybe<User>;
  inviter?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitationConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseAdministratorInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseAdministratorInvitationEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseAdministratorInvitation>;
};

export type EnterpriseAdministratorInvitationOrder = {
  field: EnterpriseAdministratorInvitationOrderField;
  direction: OrderDirection;
};

export const EnterpriseAdministratorInvitationOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type EnterpriseAdministratorInvitationOrderField = typeof EnterpriseAdministratorInvitationOrderField[keyof typeof EnterpriseAdministratorInvitationOrderField];
export const EnterpriseAdministratorRole = {
  Owner: 'OWNER',
  BillingManager: 'BILLING_MANAGER'
} as const;

export type EnterpriseAdministratorRole = typeof EnterpriseAdministratorRole[keyof typeof EnterpriseAdministratorRole];
export type EnterpriseAuditEntryData = {
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
};

export type EnterpriseBillingInfo = {
  allLicensableUsersCount: Scalars['Int'];
  assetPacks: Scalars['Int'];
  /** @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC. */
  availableSeats: Scalars['Int'];
  bandwidthQuota: Scalars['Float'];
  bandwidthUsage: Scalars['Float'];
  bandwidthUsagePercentage: Scalars['Int'];
  /** @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC. */
  seats: Scalars['Int'];
  storageQuota: Scalars['Float'];
  storageUsage: Scalars['Float'];
  storageUsagePercentage: Scalars['Int'];
  totalAvailableLicenses: Scalars['Int'];
  totalLicenses: Scalars['Int'];
};

export const EnterpriseDefaultRepositoryPermissionSettingValue = {
  NoPolicy: 'NO_POLICY',
  Admin: 'ADMIN',
  Write: 'WRITE',
  Read: 'READ',
  None: 'NONE'
} as const;

export type EnterpriseDefaultRepositoryPermissionSettingValue = typeof EnterpriseDefaultRepositoryPermissionSettingValue[keyof typeof EnterpriseDefaultRepositoryPermissionSettingValue];
export const EnterpriseEnabledDisabledSettingValue = {
  Enabled: 'ENABLED',
  Disabled: 'DISABLED',
  NoPolicy: 'NO_POLICY'
} as const;

export type EnterpriseEnabledDisabledSettingValue = typeof EnterpriseEnabledDisabledSettingValue[keyof typeof EnterpriseEnabledDisabledSettingValue];
export const EnterpriseEnabledSettingValue = {
  Enabled: 'ENABLED',
  NoPolicy: 'NO_POLICY'
} as const;

export type EnterpriseEnabledSettingValue = typeof EnterpriseEnabledSettingValue[keyof typeof EnterpriseEnabledSettingValue];
export type EnterpriseIdentityProvider = Node & {
  digestMethod?: Maybe<SamlDigestAlgorithm>;
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars['ID'];
  idpCertificate?: Maybe<Scalars['X509Certificate']>;
  issuer?: Maybe<Scalars['String']>;
  recoveryCodes?: Maybe<Array<Scalars['String']>>;
  signatureMethod?: Maybe<SamlSignatureAlgorithm>;
  ssoUrl?: Maybe<Scalars['URI']>;
};


export type EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseMember = EnterpriseUserAccount | User;

export type EnterpriseMemberConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseMember>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseMemberEdge = {
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<EnterpriseMember>;
};

export type EnterpriseMemberOrder = {
  field: EnterpriseMemberOrderField;
  direction: OrderDirection;
};

export const EnterpriseMemberOrderField = {
  Login: 'LOGIN',
  CreatedAt: 'CREATED_AT'
} as const;

export type EnterpriseMemberOrderField = typeof EnterpriseMemberOrderField[keyof typeof EnterpriseMemberOrderField];
export const EnterpriseMembersCanCreateRepositoriesSettingValue = {
  NoPolicy: 'NO_POLICY',
  All: 'ALL',
  Public: 'PUBLIC',
  Private: 'PRIVATE',
  Disabled: 'DISABLED'
} as const;

export type EnterpriseMembersCanCreateRepositoriesSettingValue = typeof EnterpriseMembersCanCreateRepositoriesSettingValue[keyof typeof EnterpriseMembersCanCreateRepositoriesSettingValue];
export const EnterpriseMembersCanMakePurchasesSettingValue = {
  Enabled: 'ENABLED',
  Disabled: 'DISABLED'
} as const;

export type EnterpriseMembersCanMakePurchasesSettingValue = typeof EnterpriseMembersCanMakePurchasesSettingValue[keyof typeof EnterpriseMembersCanMakePurchasesSettingValue];
export type EnterpriseOrganizationMembershipConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseOrganizationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseOrganizationMembershipEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Organization>;
  role: EnterpriseUserAccountMembershipRole;
};

export type EnterpriseOutsideCollaboratorConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseOutsideCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseOutsideCollaboratorEdge = {
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
};


export type EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RepositoryOrder>;
};

export type EnterpriseOwnerInfo = {
  actionExecutionCapabilitySettingOrganizations: OrganizationConnection;
  admins: EnterpriseAdministratorConnection;
  affiliatedUsersWithTwoFactorDisabled: UserConnection;
  affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
  allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection;
  defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;
  defaultRepositoryPermissionSettingOrganizations: OrganizationConnection;
  enterpriseServerInstallations: EnterpriseServerInstallationConnection;
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  ipAllowListEntries: IpAllowListEntryConnection;
  isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
  isUpdatingTwoFactorRequirement: Scalars['Boolean'];
  membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;
  membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection;
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars['Boolean']>;
  membersCanCreateRepositoriesSetting?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteIssuesSettingOrganizations: OrganizationConnection;
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection;
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
  membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection;
  membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection;
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  organizationProjectsSettingOrganizations: OrganizationConnection;
  outsideCollaborators: EnterpriseOutsideCollaboratorConnection;
  pendingAdminInvitations: EnterpriseAdministratorInvitationConnection;
  pendingCollaborators: EnterprisePendingCollaboratorConnection;
  pendingMemberInvitations: EnterprisePendingMemberInvitationConnection;
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  repositoryProjectsSettingOrganizations: OrganizationConnection;
  samlIdentityProvider?: Maybe<EnterpriseIdentityProvider>;
  samlIdentityProviderSettingOrganizations: OrganizationConnection;
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
  teamDiscussionsSettingOrganizations: OrganizationConnection;
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
  twoFactorRequiredSettingOrganizations: OrganizationConnection;
};


export type EnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoAdminsArgs = {
  query?: Maybe<Scalars['String']>;
  role?: Maybe<EnterpriseAdministratorRole>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: DefaultRepositoryPermissionField;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  connectedOnly?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<EnterpriseServerInstallationOrder>;
};


export type EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IpAllowListEntryOrder>;
};


export type EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: OrganizationMembersCanCreateRepositoriesSettingValue;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseMemberOrder>;
  visibility?: Maybe<RepositoryVisibility>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<EnterpriseAdministratorInvitationOrder>;
  role?: Maybe<EnterpriseAdministratorRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<RepositoryInvitationOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: IdentityProviderConfigurationState;
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};


export type EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<OrganizationOrder>;
};

export type EnterprisePendingCollaboratorConnection = {
  edges?: Maybe<Array<Maybe<EnterprisePendingCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterprisePendingCollaboratorEdge = {
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
};


export type EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RepositoryOrder>;
};

export type EnterprisePendingMemberInvitationConnection = {
  edges?: Maybe<Array<Maybe<EnterprisePendingMemberInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalUniqueUserCount: Scalars['Int'];
};

export type EnterprisePendingMemberInvitationEdge = {
  cursor: Scalars['String'];
  isUnlicensed: Scalars['Boolean'];
  node?: Maybe<OrganizationInvitation>;
};

export type EnterpriseRepositoryInfo = Node & {
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
};

export type EnterpriseRepositoryInfoConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseRepositoryInfoEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseRepositoryInfo>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseRepositoryInfoEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseRepositoryInfo>;
};

export type EnterpriseServerInstallation = Node & {
  createdAt: Scalars['DateTime'];
  customerName: Scalars['String'];
  hostName: Scalars['String'];
  id: Scalars['ID'];
  isConnected: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userAccounts: EnterpriseServerUserAccountConnection;
  userAccountsUploads: EnterpriseServerUserAccountsUploadConnection;
};


export type EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountsUploadOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseServerInstallationConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerInstallationEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerInstallation>;
};

export type EnterpriseServerInstallationOrder = {
  field: EnterpriseServerInstallationOrderField;
  direction: OrderDirection;
};

export const EnterpriseServerInstallationOrderField = {
  HostName: 'HOST_NAME',
  CustomerName: 'CUSTOMER_NAME',
  CreatedAt: 'CREATED_AT'
} as const;

export type EnterpriseServerInstallationOrderField = typeof EnterpriseServerInstallationOrderField[keyof typeof EnterpriseServerInstallationOrderField];
export type EnterpriseServerUserAccount = Node & {
  createdAt: Scalars['DateTime'];
  emails: EnterpriseServerUserAccountEmailConnection;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars['ID'];
  isSiteAdmin: Scalars['Boolean'];
  login: Scalars['String'];
  profileName?: Maybe<Scalars['String']>;
  remoteCreatedAt: Scalars['DateTime'];
  remoteUserId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: Maybe<EnterpriseServerUserAccountEmailOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseServerUserAccountConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccount>;
};

export type EnterpriseServerUserAccountEmail = Node & {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userAccount: EnterpriseServerUserAccount;
};

export type EnterpriseServerUserAccountEmailConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmailEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmail>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountEmailEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccountEmail>;
};

export type EnterpriseServerUserAccountEmailOrder = {
  field: EnterpriseServerUserAccountEmailOrderField;
  direction: OrderDirection;
};

export const EnterpriseServerUserAccountEmailOrderField = {
  Email: 'EMAIL'
} as const;

export type EnterpriseServerUserAccountEmailOrderField = typeof EnterpriseServerUserAccountEmailOrderField[keyof typeof EnterpriseServerUserAccountEmailOrderField];
export type EnterpriseServerUserAccountOrder = {
  field: EnterpriseServerUserAccountOrderField;
  direction: OrderDirection;
};

export const EnterpriseServerUserAccountOrderField = {
  Login: 'LOGIN',
  RemoteCreatedAt: 'REMOTE_CREATED_AT'
} as const;

export type EnterpriseServerUserAccountOrderField = typeof EnterpriseServerUserAccountOrderField[keyof typeof EnterpriseServerUserAccountOrderField];
export type EnterpriseServerUserAccountsUpload = Node & {
  createdAt: Scalars['DateTime'];
  enterprise: Enterprise;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars['ID'];
  name: Scalars['String'];
  syncState: EnterpriseServerUserAccountsUploadSyncState;
  updatedAt: Scalars['DateTime'];
};

export type EnterpriseServerUserAccountsUploadConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUploadEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUpload>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseServerUserAccountsUploadEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseServerUserAccountsUpload>;
};

export type EnterpriseServerUserAccountsUploadOrder = {
  field: EnterpriseServerUserAccountsUploadOrderField;
  direction: OrderDirection;
};

export const EnterpriseServerUserAccountsUploadOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type EnterpriseServerUserAccountsUploadOrderField = typeof EnterpriseServerUserAccountsUploadOrderField[keyof typeof EnterpriseServerUserAccountsUploadOrderField];
export const EnterpriseServerUserAccountsUploadSyncState = {
  Pending: 'PENDING',
  Success: 'SUCCESS',
  Failure: 'FAILURE'
} as const;

export type EnterpriseServerUserAccountsUploadSyncState = typeof EnterpriseServerUserAccountsUploadSyncState[keyof typeof EnterpriseServerUserAccountsUploadSyncState];
export type EnterpriseUserAccount = Node & Actor & {
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  enterprise: Enterprise;
  id: Scalars['ID'];
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizations: EnterpriseOrganizationMembershipConnection;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  user?: Maybe<User>;
};


export type EnterpriseUserAccountAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type EnterpriseUserAccountOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrganizationOrder>;
  role?: Maybe<EnterpriseUserAccountMembershipRole>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EnterpriseUserAccountConnection = {
  edges?: Maybe<Array<Maybe<EnterpriseUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnterpriseUserAccountEdge = {
  cursor: Scalars['String'];
  node?: Maybe<EnterpriseUserAccount>;
};

export const EnterpriseUserAccountMembershipRole = {
  Member: 'MEMBER',
  Owner: 'OWNER'
} as const;

export type EnterpriseUserAccountMembershipRole = typeof EnterpriseUserAccountMembershipRole[keyof typeof EnterpriseUserAccountMembershipRole];
export const EnterpriseUserDeployment = {
  Cloud: 'CLOUD',
  Server: 'SERVER'
} as const;

export type EnterpriseUserDeployment = typeof EnterpriseUserDeployment[keyof typeof EnterpriseUserDeployment];
export type ExternalIdentity = Node & {
  guid: Scalars['String'];
  id: Scalars['ID'];
  organizationInvitation?: Maybe<OrganizationInvitation>;
  samlIdentity?: Maybe<ExternalIdentitySamlAttributes>;
  scimIdentity?: Maybe<ExternalIdentityScimAttributes>;
  user?: Maybe<User>;
};

export type ExternalIdentityConnection = {
  edges?: Maybe<Array<Maybe<ExternalIdentityEdge>>>;
  nodes?: Maybe<Array<Maybe<ExternalIdentity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExternalIdentityEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ExternalIdentity>;
};

export type ExternalIdentitySamlAttributes = {
  nameId?: Maybe<Scalars['String']>;
};

export type ExternalIdentityScimAttributes = {
  username?: Maybe<Scalars['String']>;
};

export type FollowerConnection = {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FollowingConnection = {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FollowUserInput = {
  userId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type FollowUserPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type FundingLink = {
  platform: FundingPlatform;
  url: Scalars['URI'];
};

export const FundingPlatform = {
  Github: 'GITHUB',
  Patreon: 'PATREON',
  OpenCollective: 'OPEN_COLLECTIVE',
  KoFi: 'KO_FI',
  Tidelift: 'TIDELIFT',
  CommunityBridge: 'COMMUNITY_BRIDGE',
  Liberapay: 'LIBERAPAY',
  Issuehunt: 'ISSUEHUNT',
  Otechie: 'OTECHIE',
  Custom: 'CUSTOM'
} as const;

export type FundingPlatform = typeof FundingPlatform[keyof typeof FundingPlatform];
export type GenericHovercardContext = HovercardContext & {
  message: Scalars['String'];
  octicon: Scalars['String'];
};

export type Gist = Node & Starrable & UniformResourceLocatable & {
  comments: GistCommentConnection;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<GistFile>>>;
  forks: GistConnection;
  id: Scalars['ID'];
  isFork: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  owner?: Maybe<RepositoryOwner>;
  pushedAt?: Maybe<Scalars['DateTime']>;
  resourcePath: Scalars['URI'];
  stargazers: StargazerConnection;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerHasStarred: Scalars['Boolean'];
};


export type GistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GistFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  oid?: Maybe<Scalars['GitObjectID']>;
};


export type GistForksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GistOrder>;
};


export type GistStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type GistComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  gist: Gist;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GistCommentConnection = {
  edges?: Maybe<Array<Maybe<GistCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<GistComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GistCommentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<GistComment>;
};

export type GistConnection = {
  edges?: Maybe<Array<Maybe<GistEdge>>>;
  nodes?: Maybe<Array<Maybe<Gist>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GistEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Gist>;
};

export type GistFile = {
  encodedName?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  isImage: Scalars['Boolean'];
  isTruncated: Scalars['Boolean'];
  language?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};


export type GistFileTextArgs = {
  truncate?: Maybe<Scalars['Int']>;
};

export type GistOrder = {
  field: GistOrderField;
  direction: OrderDirection;
};

export const GistOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  PushedAt: 'PUSHED_AT'
} as const;

export type GistOrderField = typeof GistOrderField[keyof typeof GistOrderField];
export const GistPrivacy = {
  Public: 'PUBLIC',
  Secret: 'SECRET',
  All: 'ALL'
} as const;

export type GistPrivacy = typeof GistPrivacy[keyof typeof GistPrivacy];
export type GitActor = {
  avatarUrl: Scalars['URI'];
  date?: Maybe<Scalars['GitTimestamp']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type GitHubMetadata = {
  gitHubServicesSha: Scalars['GitObjectID'];
  gitIpAddresses?: Maybe<Array<Scalars['String']>>;
  hookIpAddresses?: Maybe<Array<Scalars['String']>>;
  importerIpAddresses?: Maybe<Array<Scalars['String']>>;
  isPasswordAuthenticationVerifiable: Scalars['Boolean'];
  pagesIpAddresses?: Maybe<Array<Scalars['String']>>;
};

export type GitObject = {
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
};


export type GitSignature = {
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export const GitSignatureState = {
  Valid: 'VALID',
  Invalid: 'INVALID',
  MalformedSig: 'MALFORMED_SIG',
  UnknownKey: 'UNKNOWN_KEY',
  BadEmail: 'BAD_EMAIL',
  UnverifiedEmail: 'UNVERIFIED_EMAIL',
  NoUser: 'NO_USER',
  UnknownSigType: 'UNKNOWN_SIG_TYPE',
  Unsigned: 'UNSIGNED',
  GpgverifyUnavailable: 'GPGVERIFY_UNAVAILABLE',
  GpgverifyError: 'GPGVERIFY_ERROR',
  NotSigningKey: 'NOT_SIGNING_KEY',
  ExpiredKey: 'EXPIRED_KEY',
  OcspPending: 'OCSP_PENDING',
  OcspError: 'OCSP_ERROR',
  BadCert: 'BAD_CERT',
  OcspRevoked: 'OCSP_REVOKED'
} as const;

export type GitSignatureState = typeof GitSignatureState[keyof typeof GitSignatureState];


export type GpgSignature = GitSignature & {
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  keyId?: Maybe<Scalars['String']>;
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type HeadRefDeletedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  headRef?: Maybe<Ref>;
  headRefName: Scalars['String'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type HeadRefForcePushedEvent = Node & {
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type HeadRefRestoredEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
};

export type Hovercard = {
  contexts: Array<HovercardContext>;
};

export type HovercardContext = {
  message: Scalars['String'];
  octicon: Scalars['String'];
};


export const IdentityProviderConfigurationState = {
  Enforced: 'ENFORCED',
  Configured: 'CONFIGURED',
  Unconfigured: 'UNCONFIGURED'
} as const;

export type IdentityProviderConfigurationState = typeof IdentityProviderConfigurationState[keyof typeof IdentityProviderConfigurationState];
export type InviteEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'];
  invitee?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<EnterpriseAdministratorRole>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InviteEnterpriseAdminPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
};

export const IpAllowListEnabledSettingValue = {
  Enabled: 'ENABLED',
  Disabled: 'DISABLED'
} as const;

export type IpAllowListEnabledSettingValue = typeof IpAllowListEnabledSettingValue[keyof typeof IpAllowListEnabledSettingValue];
export type IpAllowListEntry = Node & {
  allowListValue: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  owner: IpAllowListOwner;
  updatedAt: Scalars['DateTime'];
};

export type IpAllowListEntryConnection = {
  edges?: Maybe<Array<Maybe<IpAllowListEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<IpAllowListEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IpAllowListEntryEdge = {
  cursor: Scalars['String'];
  node?: Maybe<IpAllowListEntry>;
};

export type IpAllowListEntryOrder = {
  field: IpAllowListEntryOrderField;
  direction: OrderDirection;
};

export const IpAllowListEntryOrderField = {
  CreatedAt: 'CREATED_AT',
  AllowListValue: 'ALLOW_LIST_VALUE'
} as const;

export type IpAllowListEntryOrderField = typeof IpAllowListEntryOrderField[keyof typeof IpAllowListEntryOrderField];
export type IpAllowListOwner = Enterprise | Organization;

export type Issue = Node & Assignable & Closable & Comment & Updatable & UpdatableComment & Labelable & Lockable & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & {
  activeLockReason?: Maybe<LockReason>;
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  comments: IssueCommentConnection;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  hovercard: Hovercard;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  locked: Scalars['Boolean'];
  milestone?: Maybe<Milestone>;
  number: Scalars['Int'];
  participants: UserConnection;
  projectCards: ProjectCardConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: IssueState;
  /** @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2019-10-01 UTC. */
  timeline: IssueTimelineConnection;
  timelineItems: IssueTimelineItemsConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type IssueAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


export type IssueLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};


export type IssueReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type IssueTimelineArgs = {
  since?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueTimelineItemsArgs = {
  since?: Maybe<Scalars['DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<IssueTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type IssueUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type IssueComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  issue: Issue;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest?: Maybe<PullRequest>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type IssueCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type IssueCommentConnection = {
  edges?: Maybe<Array<Maybe<IssueCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueCommentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<IssueComment>;
};

export type IssueConnection = {
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  nodes?: Maybe<Array<Maybe<Issue>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueContributionsByRepository = {
  contributions: CreatedIssueContributionConnection;
  repository: Repository;
};


export type IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export type IssueEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Issue>;
};

export type IssueFilters = {
  assignee?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Scalars['String']>>;
  mentioned?: Maybe<Scalars['String']>;
  milestone?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['DateTime']>;
  states?: Maybe<Array<IssueState>>;
  viewerSubscribed?: Maybe<Scalars['Boolean']>;
};

export type IssueOrder = {
  field: IssueOrderField;
  direction: OrderDirection;
};

export const IssueOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  Comments: 'COMMENTS'
} as const;

export type IssueOrderField = typeof IssueOrderField[keyof typeof IssueOrderField];
export type IssueOrPullRequest = Issue | PullRequest;

export const IssueState = {
  Open: 'OPEN',
  Closed: 'CLOSED'
} as const;

export type IssueState = typeof IssueState[keyof typeof IssueState];
export type IssueTimelineConnection = {
  edges?: Maybe<Array<Maybe<IssueTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IssueTimelineItem = AssignedEvent | ClosedEvent | Commit | CrossReferencedEvent | DemilestonedEvent | IssueComment | LabeledEvent | LockedEvent | MilestonedEvent | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;

export type IssueTimelineItemEdge = {
  cursor: Scalars['String'];
  node?: Maybe<IssueTimelineItem>;
};

export type IssueTimelineItems = AddedToProjectEvent | AssignedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | DisconnectedEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;

export type IssueTimelineItemsConnection = {
  edges?: Maybe<Array<Maybe<IssueTimelineItemsEdge>>>;
  filteredCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<IssueTimelineItems>>>;
  pageCount: Scalars['Int'];
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type IssueTimelineItemsEdge = {
  cursor: Scalars['String'];
  node?: Maybe<IssueTimelineItems>;
};

export const IssueTimelineItemsItemType = {
  IssueComment: 'ISSUE_COMMENT',
  CrossReferencedEvent: 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent: 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent: 'ASSIGNED_EVENT',
  ClosedEvent: 'CLOSED_EVENT',
  CommentDeletedEvent: 'COMMENT_DELETED_EVENT',
  ConnectedEvent: 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent: 'DEMILESTONED_EVENT',
  DisconnectedEvent: 'DISCONNECTED_EVENT',
  LabeledEvent: 'LABELED_EVENT',
  LockedEvent: 'LOCKED_EVENT',
  MarkedAsDuplicateEvent: 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent: 'MENTIONED_EVENT',
  MilestonedEvent: 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent: 'PINNED_EVENT',
  ReferencedEvent: 'REFERENCED_EVENT',
  RemovedFromProjectEvent: 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent: 'RENAMED_TITLE_EVENT',
  ReopenedEvent: 'REOPENED_EVENT',
  SubscribedEvent: 'SUBSCRIBED_EVENT',
  TransferredEvent: 'TRANSFERRED_EVENT',
  UnassignedEvent: 'UNASSIGNED_EVENT',
  UnlabeledEvent: 'UNLABELED_EVENT',
  UnlockedEvent: 'UNLOCKED_EVENT',
  UserBlockedEvent: 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent: 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent: 'UNPINNED_EVENT',
  UnsubscribedEvent: 'UNSUBSCRIBED_EVENT'
} as const;

export type IssueTimelineItemsItemType = typeof IssueTimelineItemsItemType[keyof typeof IssueTimelineItemsItemType];
export type JoinedGitHubContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type Label = Node & {
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  issues: IssueConnection;
  name: Scalars['String'];
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['URI'];
};


export type LabelIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type LabelPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Labelable = {
  labels?: Maybe<LabelConnection>;
};


export type LabelableLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type LabelConnection = {
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  nodes?: Maybe<Array<Maybe<Label>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LabeledEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  label: Label;
  labelable: Labelable;
};

export type LabelEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Label>;
};

export type LabelOrder = {
  field: LabelOrderField;
  direction: OrderDirection;
};

export const LabelOrderField = {
  Name: 'NAME',
  CreatedAt: 'CREATED_AT'
} as const;

export type LabelOrderField = typeof LabelOrderField[keyof typeof LabelOrderField];
export type Language = Node & {
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LanguageConnection = {
  edges?: Maybe<Array<Maybe<LanguageEdge>>>;
  nodes?: Maybe<Array<Maybe<Language>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalSize: Scalars['Int'];
};

export type LanguageEdge = {
  cursor: Scalars['String'];
  node: Language;
  size: Scalars['Int'];
};

export type LanguageOrder = {
  field: LanguageOrderField;
  direction: OrderDirection;
};

export const LanguageOrderField = {
  Size: 'SIZE'
} as const;

export type LanguageOrderField = typeof LanguageOrderField[keyof typeof LanguageOrderField];
export type License = Node & {
  body: Scalars['String'];
  conditions: Array<Maybe<LicenseRule>>;
  description?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
  implementation?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  limitations: Array<Maybe<LicenseRule>>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  permissions: Array<Maybe<LicenseRule>>;
  pseudoLicense: Scalars['Boolean'];
  spdxId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URI']>;
};

export type LicenseRule = {
  description: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
};

export type LinkRepositoryToProjectInput = {
  projectId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type LinkRepositoryToProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type Lockable = {
  activeLockReason?: Maybe<LockReason>;
  locked: Scalars['Boolean'];
};

export type LockedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lockReason?: Maybe<LockReason>;
  lockable: Lockable;
};

export type LockLockableInput = {
  lockableId: Scalars['ID'];
  lockReason?: Maybe<LockReason>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type LockLockablePayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  lockedRecord?: Maybe<Lockable>;
};

export const LockReason = {
  OffTopic: 'OFF_TOPIC',
  TooHeated: 'TOO_HEATED',
  Resolved: 'RESOLVED',
  Spam: 'SPAM'
} as const;

export type LockReason = typeof LockReason[keyof typeof LockReason];
export type Mannequin = Node & Actor & UniformResourceLocatable & {
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  login: Scalars['String'];
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type MannequinAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MarkedAsDuplicateEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type MarketplaceCategory = Node & {
  description?: Maybe<Scalars['String']>;
  howItWorks?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  primaryListingCount: Scalars['Int'];
  resourcePath: Scalars['URI'];
  secondaryListingCount: Scalars['Int'];
  slug: Scalars['String'];
  url: Scalars['URI'];
};

export type MarketplaceListing = Node & {
  app?: Maybe<App>;
  companyUrl?: Maybe<Scalars['URI']>;
  configurationResourcePath: Scalars['URI'];
  configurationUrl: Scalars['URI'];
  documentationUrl?: Maybe<Scalars['URI']>;
  extendedDescription?: Maybe<Scalars['String']>;
  extendedDescriptionHTML: Scalars['HTML'];
  fullDescription: Scalars['String'];
  fullDescriptionHTML: Scalars['HTML'];
  /** @deprecated `hasApprovalBeenRequested` will be removed. Use `isVerificationPendingFromDraft` instead. Removal on 2019-10-01 UTC. */
  hasApprovalBeenRequested: Scalars['Boolean'];
  hasPublishedFreeTrialPlans: Scalars['Boolean'];
  hasTermsOfService: Scalars['Boolean'];
  howItWorks?: Maybe<Scalars['String']>;
  howItWorksHTML: Scalars['HTML'];
  id: Scalars['ID'];
  installationUrl?: Maybe<Scalars['URI']>;
  installedForViewer: Scalars['Boolean'];
  /** @deprecated `isApproved` will be removed. Use `isPublic` instead. Removal on 2019-10-01 UTC. */
  isApproved: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  /** @deprecated `isDelisted` will be removed. Use `isArchived` instead. Removal on 2019-10-01 UTC. */
  isDelisted: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPaid: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isUnverifiedPending: Scalars['Boolean'];
  isVerificationPendingFromDraft: Scalars['Boolean'];
  isVerificationPendingFromUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  logoBackgroundColor: Scalars['String'];
  logoUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  normalizedShortDescription: Scalars['String'];
  pricingUrl?: Maybe<Scalars['URI']>;
  primaryCategory: MarketplaceCategory;
  privacyPolicyUrl: Scalars['URI'];
  resourcePath: Scalars['URI'];
  screenshotUrls: Array<Maybe<Scalars['String']>>;
  secondaryCategory?: Maybe<MarketplaceCategory>;
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  statusUrl?: Maybe<Scalars['URI']>;
  supportEmail?: Maybe<Scalars['String']>;
  supportUrl: Scalars['URI'];
  termsOfServiceUrl?: Maybe<Scalars['URI']>;
  url: Scalars['URI'];
  viewerCanAddPlans: Scalars['Boolean'];
  viewerCanApprove: Scalars['Boolean'];
  viewerCanDelist: Scalars['Boolean'];
  viewerCanEdit: Scalars['Boolean'];
  viewerCanEditCategories: Scalars['Boolean'];
  viewerCanEditPlans: Scalars['Boolean'];
  viewerCanRedraft: Scalars['Boolean'];
  viewerCanReject: Scalars['Boolean'];
  viewerCanRequestApproval: Scalars['Boolean'];
  viewerHasPurchased: Scalars['Boolean'];
  viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
  viewerIsListingAdmin: Scalars['Boolean'];
};


export type MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MarketplaceListingConnection = {
  edges?: Maybe<Array<Maybe<MarketplaceListingEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketplaceListing>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MarketplaceListingEdge = {
  cursor: Scalars['String'];
  node?: Maybe<MarketplaceListing>;
};

export type MarkPullRequestReadyForReviewInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MarkPullRequestReadyForReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type MembersCanDeleteReposClearAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MembersCanDeleteReposDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MembersCanDeleteReposEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type MemberStatusable = {
  memberStatuses: UserStatusConnection;
};


export type MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};

export type MentionedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export const MergeableState = {
  Mergeable: 'MERGEABLE',
  Conflicting: 'CONFLICTING',
  Unknown: 'UNKNOWN'
} as const;

export type MergeableState = typeof MergeableState[keyof typeof MergeableState];
export type MergeBranchInput = {
  repositoryId: Scalars['ID'];
  base: Scalars['String'];
  head: Scalars['String'];
  commitMessage?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MergeBranchPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  mergeCommit?: Maybe<Commit>;
};

export type MergedEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mergeRef?: Maybe<Ref>;
  mergeRefName: Scalars['String'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type MergePullRequestInput = {
  pullRequestId: Scalars['ID'];
  commitHeadline?: Maybe<Scalars['String']>;
  commitBody?: Maybe<Scalars['String']>;
  expectedHeadOid?: Maybe<Scalars['GitObjectID']>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MergePullRequestPayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type Milestone = Node & Closable & UniformResourceLocatable & {
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  description?: Maybe<Scalars['String']>;
  dueOn?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  issuePrioritiesDebug: Scalars['String'];
  issues: IssueConnection;
  number: Scalars['Int'];
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: MilestoneState;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type MilestoneIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MilestonePullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MilestoneConnection = {
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>;
  nodes?: Maybe<Array<Maybe<Milestone>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MilestonedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  milestoneTitle: Scalars['String'];
  subject: MilestoneItem;
};

export type MilestoneEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Milestone>;
};

export type MilestoneItem = Issue | PullRequest;

export type MilestoneOrder = {
  field: MilestoneOrderField;
  direction: OrderDirection;
};

export const MilestoneOrderField = {
  DueDate: 'DUE_DATE',
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  Number: 'NUMBER'
} as const;

export type MilestoneOrderField = typeof MilestoneOrderField[keyof typeof MilestoneOrderField];
export const MilestoneState = {
  Open: 'OPEN',
  Closed: 'CLOSED'
} as const;

export type MilestoneState = typeof MilestoneState[keyof typeof MilestoneState];
export type Minimizable = {
  isMinimized: Scalars['Boolean'];
  minimizedReason?: Maybe<Scalars['String']>;
  viewerCanMinimize: Scalars['Boolean'];
};

export type MinimizeCommentInput = {
  subjectId: Scalars['ID'];
  classifier: ReportedContentClassifiers;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MinimizeCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  minimizedComment?: Maybe<Minimizable>;
};

export type MovedColumnsInProjectEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type MoveProjectCardInput = {
  cardId: Scalars['ID'];
  columnId: Scalars['ID'];
  afterCardId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectCardPayload = {
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectColumnInput = {
  columnId: Scalars['ID'];
  afterColumnId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MoveProjectColumnPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  columnEdge?: Maybe<ProjectColumnEdge>;
};

export type Mutation = {
  acceptEnterpriseAdministratorInvitation?: Maybe<AcceptEnterpriseAdministratorInvitationPayload>;
  acceptTopicSuggestion?: Maybe<AcceptTopicSuggestionPayload>;
  addAssigneesToAssignable?: Maybe<AddAssigneesToAssignablePayload>;
  addComment?: Maybe<AddCommentPayload>;
  addLabelsToLabelable?: Maybe<AddLabelsToLabelablePayload>;
  addProjectCard?: Maybe<AddProjectCardPayload>;
  addProjectColumn?: Maybe<AddProjectColumnPayload>;
  addPullRequestReview?: Maybe<AddPullRequestReviewPayload>;
  addPullRequestReviewComment?: Maybe<AddPullRequestReviewCommentPayload>;
  addPullRequestReviewThread?: Maybe<AddPullRequestReviewThreadPayload>;
  addReaction?: Maybe<AddReactionPayload>;
  addStar?: Maybe<AddStarPayload>;
  archiveRepository?: Maybe<ArchiveRepositoryPayload>;
  cancelEnterpriseAdminInvitation?: Maybe<CancelEnterpriseAdminInvitationPayload>;
  changeUserStatus?: Maybe<ChangeUserStatusPayload>;
  clearLabelsFromLabelable?: Maybe<ClearLabelsFromLabelablePayload>;
  cloneProject?: Maybe<CloneProjectPayload>;
  cloneTemplateRepository?: Maybe<CloneTemplateRepositoryPayload>;
  closeIssue?: Maybe<CloseIssuePayload>;
  closePullRequest?: Maybe<ClosePullRequestPayload>;
  convertProjectCardNoteToIssue?: Maybe<ConvertProjectCardNoteToIssuePayload>;
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>;
  createEnterpriseOrganization?: Maybe<CreateEnterpriseOrganizationPayload>;
  createIpAllowListEntry?: Maybe<CreateIpAllowListEntryPayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  createRef?: Maybe<CreateRefPayload>;
  createRepository?: Maybe<CreateRepositoryPayload>;
  createTeamDiscussion?: Maybe<CreateTeamDiscussionPayload>;
  createTeamDiscussionComment?: Maybe<CreateTeamDiscussionCommentPayload>;
  declineTopicSuggestion?: Maybe<DeclineTopicSuggestionPayload>;
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>;
  deleteDeployment?: Maybe<DeleteDeploymentPayload>;
  deleteIpAllowListEntry?: Maybe<DeleteIpAllowListEntryPayload>;
  deleteIssue?: Maybe<DeleteIssuePayload>;
  deleteIssueComment?: Maybe<DeleteIssueCommentPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectCard?: Maybe<DeleteProjectCardPayload>;
  deleteProjectColumn?: Maybe<DeleteProjectColumnPayload>;
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  deletePullRequestReviewComment?: Maybe<DeletePullRequestReviewCommentPayload>;
  deleteRef?: Maybe<DeleteRefPayload>;
  deleteTeamDiscussion?: Maybe<DeleteTeamDiscussionPayload>;
  deleteTeamDiscussionComment?: Maybe<DeleteTeamDiscussionCommentPayload>;
  dismissPullRequestReview?: Maybe<DismissPullRequestReviewPayload>;
  followUser?: Maybe<FollowUserPayload>;
  inviteEnterpriseAdmin?: Maybe<InviteEnterpriseAdminPayload>;
  linkRepositoryToProject?: Maybe<LinkRepositoryToProjectPayload>;
  lockLockable?: Maybe<LockLockablePayload>;
  markPullRequestReadyForReview?: Maybe<MarkPullRequestReadyForReviewPayload>;
  mergeBranch?: Maybe<MergeBranchPayload>;
  mergePullRequest?: Maybe<MergePullRequestPayload>;
  minimizeComment?: Maybe<MinimizeCommentPayload>;
  moveProjectCard?: Maybe<MoveProjectCardPayload>;
  moveProjectColumn?: Maybe<MoveProjectColumnPayload>;
  regenerateEnterpriseIdentityProviderRecoveryCodes?: Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>;
  removeAssigneesFromAssignable?: Maybe<RemoveAssigneesFromAssignablePayload>;
  removeEnterpriseAdmin?: Maybe<RemoveEnterpriseAdminPayload>;
  removeEnterpriseIdentityProvider?: Maybe<RemoveEnterpriseIdentityProviderPayload>;
  removeEnterpriseOrganization?: Maybe<RemoveEnterpriseOrganizationPayload>;
  removeLabelsFromLabelable?: Maybe<RemoveLabelsFromLabelablePayload>;
  removeOutsideCollaborator?: Maybe<RemoveOutsideCollaboratorPayload>;
  removeReaction?: Maybe<RemoveReactionPayload>;
  removeStar?: Maybe<RemoveStarPayload>;
  reopenIssue?: Maybe<ReopenIssuePayload>;
  reopenPullRequest?: Maybe<ReopenPullRequestPayload>;
  requestReviews?: Maybe<RequestReviewsPayload>;
  resolveReviewThread?: Maybe<ResolveReviewThreadPayload>;
  setEnterpriseIdentityProvider?: Maybe<SetEnterpriseIdentityProviderPayload>;
  submitPullRequestReview?: Maybe<SubmitPullRequestReviewPayload>;
  transferIssue?: Maybe<TransferIssuePayload>;
  unarchiveRepository?: Maybe<UnarchiveRepositoryPayload>;
  unfollowUser?: Maybe<UnfollowUserPayload>;
  unlinkRepositoryFromProject?: Maybe<UnlinkRepositoryFromProjectPayload>;
  unlockLockable?: Maybe<UnlockLockablePayload>;
  unmarkIssueAsDuplicate?: Maybe<UnmarkIssueAsDuplicatePayload>;
  unminimizeComment?: Maybe<UnminimizeCommentPayload>;
  unresolveReviewThread?: Maybe<UnresolveReviewThreadPayload>;
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>;
  updateEnterpriseActionExecutionCapabilitySetting?: Maybe<UpdateEnterpriseActionExecutionCapabilitySettingPayload>;
  updateEnterpriseAdministratorRole?: Maybe<UpdateEnterpriseAdministratorRolePayload>;
  updateEnterpriseAllowPrivateRepositoryForkingSetting?: Maybe<UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload>;
  updateEnterpriseDefaultRepositoryPermissionSetting?: Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>;
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: Maybe<UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload>;
  updateEnterpriseMembersCanCreateRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload>;
  updateEnterpriseMembersCanDeleteIssuesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>;
  updateEnterpriseMembersCanDeleteRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload>;
  updateEnterpriseMembersCanInviteCollaboratorsSetting?: Maybe<UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload>;
  updateEnterpriseMembersCanMakePurchasesSetting?: Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>;
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: Maybe<UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload>;
  updateEnterpriseMembersCanViewDependencyInsightsSetting?: Maybe<UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload>;
  updateEnterpriseOrganizationProjectsSetting?: Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>;
  updateEnterpriseProfile?: Maybe<UpdateEnterpriseProfilePayload>;
  updateEnterpriseRepositoryProjectsSetting?: Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>;
  updateEnterpriseTeamDiscussionsSetting?: Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>;
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?: Maybe<UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload>;
  updateIpAllowListEnabledSetting?: Maybe<UpdateIpAllowListEnabledSettingPayload>;
  updateIpAllowListEntry?: Maybe<UpdateIpAllowListEntryPayload>;
  updateIssue?: Maybe<UpdateIssuePayload>;
  updateIssueComment?: Maybe<UpdateIssueCommentPayload>;
  updatePage?: Maybe<Page>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectCard?: Maybe<UpdateProjectCardPayload>;
  updateProjectColumn?: Maybe<UpdateProjectColumnPayload>;
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  updatePullRequestReviewComment?: Maybe<UpdatePullRequestReviewCommentPayload>;
  updateRef?: Maybe<UpdateRefPayload>;
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateTeamDiscussion?: Maybe<UpdateTeamDiscussionPayload>;
  updateTeamDiscussionComment?: Maybe<UpdateTeamDiscussionCommentPayload>;
  updateTopics?: Maybe<UpdateTopicsPayload>;
  updateYou?: Maybe<You>;
};


export type MutationAcceptEnterpriseAdministratorInvitationArgs = {
  input: AcceptEnterpriseAdministratorInvitationInput;
};


export type MutationAcceptTopicSuggestionArgs = {
  input: AcceptTopicSuggestionInput;
};


export type MutationAddAssigneesToAssignableArgs = {
  input: AddAssigneesToAssignableInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationAddLabelsToLabelableArgs = {
  input: AddLabelsToLabelableInput;
};


export type MutationAddProjectCardArgs = {
  input: AddProjectCardInput;
};


export type MutationAddProjectColumnArgs = {
  input: AddProjectColumnInput;
};


export type MutationAddPullRequestReviewArgs = {
  input: AddPullRequestReviewInput;
};


export type MutationAddPullRequestReviewCommentArgs = {
  input: AddPullRequestReviewCommentInput;
};


export type MutationAddPullRequestReviewThreadArgs = {
  input: AddPullRequestReviewThreadInput;
};


export type MutationAddReactionArgs = {
  input: AddReactionInput;
};


export type MutationAddStarArgs = {
  input: AddStarInput;
};


export type MutationArchiveRepositoryArgs = {
  input: ArchiveRepositoryInput;
};


export type MutationCancelEnterpriseAdminInvitationArgs = {
  input: CancelEnterpriseAdminInvitationInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationClearLabelsFromLabelableArgs = {
  input: ClearLabelsFromLabelableInput;
};


export type MutationCloneProjectArgs = {
  input: CloneProjectInput;
};


export type MutationCloneTemplateRepositoryArgs = {
  input: CloneTemplateRepositoryInput;
};


export type MutationCloseIssueArgs = {
  input: CloseIssueInput;
};


export type MutationClosePullRequestArgs = {
  input: ClosePullRequestInput;
};


export type MutationConvertProjectCardNoteToIssueArgs = {
  input: ConvertProjectCardNoteToIssueInput;
};


export type MutationCreateBranchProtectionRuleArgs = {
  input: CreateBranchProtectionRuleInput;
};


export type MutationCreateEnterpriseOrganizationArgs = {
  input: CreateEnterpriseOrganizationInput;
};


export type MutationCreateIpAllowListEntryArgs = {
  input: CreateIpAllowListEntryInput;
};


export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreatePullRequestArgs = {
  input: CreatePullRequestInput;
};


export type MutationCreateRefArgs = {
  input: CreateRefInput;
};


export type MutationCreateRepositoryArgs = {
  input: CreateRepositoryInput;
};


export type MutationCreateTeamDiscussionArgs = {
  input: CreateTeamDiscussionInput;
};


export type MutationCreateTeamDiscussionCommentArgs = {
  input: CreateTeamDiscussionCommentInput;
};


export type MutationDeclineTopicSuggestionArgs = {
  input: DeclineTopicSuggestionInput;
};


export type MutationDeleteBranchProtectionRuleArgs = {
  input: DeleteBranchProtectionRuleInput;
};


export type MutationDeleteDeploymentArgs = {
  input: DeleteDeploymentInput;
};


export type MutationDeleteIpAllowListEntryArgs = {
  input: DeleteIpAllowListEntryInput;
};


export type MutationDeleteIssueArgs = {
  input: DeleteIssueInput;
};


export type MutationDeleteIssueCommentArgs = {
  input: DeleteIssueCommentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteProjectCardArgs = {
  input: DeleteProjectCardInput;
};


export type MutationDeleteProjectColumnArgs = {
  input: DeleteProjectColumnInput;
};


export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput;
};


export type MutationDeletePullRequestReviewCommentArgs = {
  input: DeletePullRequestReviewCommentInput;
};


export type MutationDeleteRefArgs = {
  input: DeleteRefInput;
};


export type MutationDeleteTeamDiscussionArgs = {
  input: DeleteTeamDiscussionInput;
};


export type MutationDeleteTeamDiscussionCommentArgs = {
  input: DeleteTeamDiscussionCommentInput;
};


export type MutationDismissPullRequestReviewArgs = {
  input: DismissPullRequestReviewInput;
};


export type MutationFollowUserArgs = {
  input: FollowUserInput;
};


export type MutationInviteEnterpriseAdminArgs = {
  input: InviteEnterpriseAdminInput;
};


export type MutationLinkRepositoryToProjectArgs = {
  input: LinkRepositoryToProjectInput;
};


export type MutationLockLockableArgs = {
  input: LockLockableInput;
};


export type MutationMarkPullRequestReadyForReviewArgs = {
  input: MarkPullRequestReadyForReviewInput;
};


export type MutationMergeBranchArgs = {
  input: MergeBranchInput;
};


export type MutationMergePullRequestArgs = {
  input: MergePullRequestInput;
};


export type MutationMinimizeCommentArgs = {
  input: MinimizeCommentInput;
};


export type MutationMoveProjectCardArgs = {
  input: MoveProjectCardInput;
};


export type MutationMoveProjectColumnArgs = {
  input: MoveProjectColumnInput;
};


export type MutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs = {
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput;
};


export type MutationRemoveAssigneesFromAssignableArgs = {
  input: RemoveAssigneesFromAssignableInput;
};


export type MutationRemoveEnterpriseAdminArgs = {
  input: RemoveEnterpriseAdminInput;
};


export type MutationRemoveEnterpriseIdentityProviderArgs = {
  input: RemoveEnterpriseIdentityProviderInput;
};


export type MutationRemoveEnterpriseOrganizationArgs = {
  input: RemoveEnterpriseOrganizationInput;
};


export type MutationRemoveLabelsFromLabelableArgs = {
  input: RemoveLabelsFromLabelableInput;
};


export type MutationRemoveOutsideCollaboratorArgs = {
  input: RemoveOutsideCollaboratorInput;
};


export type MutationRemoveReactionArgs = {
  input: RemoveReactionInput;
};


export type MutationRemoveStarArgs = {
  input: RemoveStarInput;
};


export type MutationReopenIssueArgs = {
  input: ReopenIssueInput;
};


export type MutationReopenPullRequestArgs = {
  input: ReopenPullRequestInput;
};


export type MutationRequestReviewsArgs = {
  input: RequestReviewsInput;
};


export type MutationResolveReviewThreadArgs = {
  input: ResolveReviewThreadInput;
};


export type MutationSetEnterpriseIdentityProviderArgs = {
  input: SetEnterpriseIdentityProviderInput;
};


export type MutationSubmitPullRequestReviewArgs = {
  input: SubmitPullRequestReviewInput;
};


export type MutationTransferIssueArgs = {
  input: TransferIssueInput;
};


export type MutationUnarchiveRepositoryArgs = {
  input: UnarchiveRepositoryInput;
};


export type MutationUnfollowUserArgs = {
  input: UnfollowUserInput;
};


export type MutationUnlinkRepositoryFromProjectArgs = {
  input: UnlinkRepositoryFromProjectInput;
};


export type MutationUnlockLockableArgs = {
  input: UnlockLockableInput;
};


export type MutationUnmarkIssueAsDuplicateArgs = {
  input: UnmarkIssueAsDuplicateInput;
};


export type MutationUnminimizeCommentArgs = {
  input: UnminimizeCommentInput;
};


export type MutationUnresolveReviewThreadArgs = {
  input: UnresolveReviewThreadInput;
};


export type MutationUpdateBranchProtectionRuleArgs = {
  input: UpdateBranchProtectionRuleInput;
};


export type MutationUpdateEnterpriseActionExecutionCapabilitySettingArgs = {
  input: UpdateEnterpriseActionExecutionCapabilitySettingInput;
};


export type MutationUpdateEnterpriseAdministratorRoleArgs = {
  input: UpdateEnterpriseAdministratorRoleInput;
};


export type MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs = {
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
};


export type MutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs = {
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput;
};


export type MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs = {
  input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
};


export type MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs = {
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
};


export type MutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs = {
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs = {
  input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
};


export type MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs = {
  input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
};


export type MutationUpdateEnterpriseOrganizationProjectsSettingArgs = {
  input: UpdateEnterpriseOrganizationProjectsSettingInput;
};


export type MutationUpdateEnterpriseProfileArgs = {
  input: UpdateEnterpriseProfileInput;
};


export type MutationUpdateEnterpriseRepositoryProjectsSettingArgs = {
  input: UpdateEnterpriseRepositoryProjectsSettingInput;
};


export type MutationUpdateEnterpriseTeamDiscussionsSettingArgs = {
  input: UpdateEnterpriseTeamDiscussionsSettingInput;
};


export type MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs = {
  input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
};


export type MutationUpdateIpAllowListEnabledSettingArgs = {
  input: UpdateIpAllowListEnabledSettingInput;
};


export type MutationUpdateIpAllowListEntryArgs = {
  input: UpdateIpAllowListEntryInput;
};


export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput;
};


export type MutationUpdateIssueCommentArgs = {
  input: UpdateIssueCommentInput;
};


export type MutationUpdatePageArgs = {
  input: PageInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateProjectCardArgs = {
  input: UpdateProjectCardInput;
};


export type MutationUpdateProjectColumnArgs = {
  input: UpdateProjectColumnInput;
};


export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput;
};


export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput;
};


export type MutationUpdatePullRequestReviewCommentArgs = {
  input: UpdatePullRequestReviewCommentInput;
};


export type MutationUpdateRefArgs = {
  input: UpdateRefInput;
};


export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};


export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateTeamDiscussionArgs = {
  input: UpdateTeamDiscussionInput;
};


export type MutationUpdateTeamDiscussionCommentArgs = {
  input: UpdateTeamDiscussionCommentInput;
};


export type MutationUpdateTopicsArgs = {
  input: UpdateTopicsInput;
};


export type MutationUpdateYouArgs = {
  input: YouInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type OauthApplicationAuditEntryData = {
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
};

export type OauthApplicationCreateAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  applicationUrl?: Maybe<Scalars['URI']>;
  callbackUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  rateLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<OauthApplicationCreateAuditEntryState>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OauthApplicationCreateAuditEntryState = {
  Active: 'ACTIVE',
  Suspended: 'SUSPENDED',
  PendingDeletion: 'PENDING_DELETION'
} as const;

export type OauthApplicationCreateAuditEntryState = typeof OauthApplicationCreateAuditEntryState[keyof typeof OauthApplicationCreateAuditEntryState];
export const OperationType = {
  Access: 'ACCESS',
  Authentication: 'AUTHENTICATION',
  Create: 'CREATE',
  Modify: 'MODIFY',
  Remove: 'REMOVE',
  Restore: 'RESTORE',
  Transfer: 'TRANSFER'
} as const;

export type OperationType = typeof OperationType[keyof typeof OperationType];
export const OrderDirection = {
  Asc: 'ASC',
  Desc: 'DESC'
} as const;

export type OrderDirection = typeof OrderDirection[keyof typeof OrderDirection];
export type OrgAddBillingManagerAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  invitationEmail?: Maybe<Scalars['String']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgAddMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgAddMemberAuditEntryPermission = {
  Read: 'READ',
  Admin: 'ADMIN'
} as const;

export type OrgAddMemberAuditEntryPermission = typeof OrgAddMemberAuditEntryPermission[keyof typeof OrgAddMemberAuditEntryPermission];
export type Organization = Node & Actor & RegistryPackageOwner & RegistryPackageSearch & ProjectOwner & RepositoryOwner & UniformResourceLocatable & MemberStatusable & ProfileOwner & Sponsorable & {
  anyPinnableItems: Scalars['Boolean'];
  auditLog: OrganizationAuditEntryConnection;
  avatarUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  descriptionHTML?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  memberStatuses: UserStatusConnection;
  membersWithRole: OrganizationMemberConnection;
  name?: Maybe<Scalars['String']>;
  newTeamResourcePath: Scalars['URI'];
  newTeamUrl: Scalars['URI'];
  organizationBillingEmail?: Maybe<Scalars['String']>;
  pendingMembers: UserConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  requiresTwoFactorAuthentication?: Maybe<Scalars['Boolean']>;
  resourcePath: Scalars['URI'];
  samlIdentityProvider?: Maybe<OrganizationIdentityProvider>;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  team?: Maybe<Team>;
  teams: TeamConnection;
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanCreateRepositories: Scalars['Boolean'];
  viewerCanCreateTeams: Scalars['Boolean'];
  viewerIsAMember: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type OrganizationAuditLogArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuditLogOrder>;
};


export type OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};


export type OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationProjectArgs = {
  number: Scalars['Int'];
};


export type OrganizationProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganizationRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type OrganizationRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRepositoryArgs = {
  name: Scalars['String'];
};


export type OrganizationSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type OrganizationSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type OrganizationTeamArgs = {
  slug: Scalars['String'];
};


export type OrganizationTeamsArgs = {
  privacy?: Maybe<TeamPrivacy>;
  role?: Maybe<TeamRole>;
  query?: Maybe<Scalars['String']>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<TeamOrder>;
  ldapMapped?: Maybe<Scalars['Boolean']>;
  rootTeamsOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationAuditEntry = MembersCanDeleteReposClearAuditEntry | MembersCanDeleteReposDisableAuditEntry | MembersCanDeleteReposEnableAuditEntry | OauthApplicationCreateAuditEntry | OrgAddBillingManagerAuditEntry | OrgAddMemberAuditEntry | OrgBlockUserAuditEntry | OrgConfigDisableCollaboratorsOnlyAuditEntry | OrgConfigEnableCollaboratorsOnlyAuditEntry | OrgCreateAuditEntry | OrgDisableOauthAppRestrictionsAuditEntry | OrgDisableSamlAuditEntry | OrgDisableTwoFactorRequirementAuditEntry | OrgEnableOauthAppRestrictionsAuditEntry | OrgEnableSamlAuditEntry | OrgEnableTwoFactorRequirementAuditEntry | OrgInviteMemberAuditEntry | OrgInviteToBusinessAuditEntry | OrgOauthAppAccessApprovedAuditEntry | OrgOauthAppAccessDeniedAuditEntry | OrgOauthAppAccessRequestedAuditEntry | OrgRemoveBillingManagerAuditEntry | OrgRemoveMemberAuditEntry | OrgRemoveOutsideCollaboratorAuditEntry | OrgRestoreMemberAuditEntry | OrgUnblockUserAuditEntry | OrgUpdateDefaultRepositoryPermissionAuditEntry | OrgUpdateMemberAuditEntry | OrgUpdateMemberRepositoryCreationPermissionAuditEntry | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | PrivateRepositoryForkingDisableAuditEntry | PrivateRepositoryForkingEnableAuditEntry | RepoAccessAuditEntry | RepoAddMemberAuditEntry | RepoAddTopicAuditEntry | RepoArchivedAuditEntry | RepoChangeMergeSettingAuditEntry | RepoConfigDisableAnonymousGitAccessAuditEntry | RepoConfigDisableCollaboratorsOnlyAuditEntry | RepoConfigDisableContributorsOnlyAuditEntry | RepoConfigDisableSockpuppetDisallowedAuditEntry | RepoConfigEnableAnonymousGitAccessAuditEntry | RepoConfigEnableCollaboratorsOnlyAuditEntry | RepoConfigEnableContributorsOnlyAuditEntry | RepoConfigEnableSockpuppetDisallowedAuditEntry | RepoConfigLockAnonymousGitAccessAuditEntry | RepoConfigUnlockAnonymousGitAccessAuditEntry | RepoCreateAuditEntry | RepoDestroyAuditEntry | RepoRemoveMemberAuditEntry | RepoRemoveTopicAuditEntry | RepositoryVisibilityChangeDisableAuditEntry | RepositoryVisibilityChangeEnableAuditEntry | TeamAddMemberAuditEntry | TeamAddRepositoryAuditEntry | TeamChangeParentTeamAuditEntry | TeamRemoveMemberAuditEntry | TeamRemoveRepositoryAuditEntry;

export type OrganizationAuditEntryConnection = {
  edges?: Maybe<Array<Maybe<OrganizationAuditEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationAuditEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationAuditEntryData = {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
};

export type OrganizationAuditEntryEdge = {
  cursor: Scalars['String'];
  node?: Maybe<OrganizationAuditEntry>;
};

export type OrganizationConnection = {
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Organization>;
};

export type OrganizationIdentityProvider = Node & {
  digestMethod?: Maybe<Scalars['URI']>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars['ID'];
  idpCertificate?: Maybe<Scalars['X509Certificate']>;
  issuer?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  signatureMethod?: Maybe<Scalars['URI']>;
  ssoUrl?: Maybe<Scalars['URI']>;
};


export type OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationInvitation = Node & {
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invitationType: OrganizationInvitationType;
  invitee?: Maybe<User>;
  inviter: User;
  organization: Organization;
  role: OrganizationInvitationRole;
};

export type OrganizationInvitationConnection = {
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationInvitationEdge = {
  cursor: Scalars['String'];
  node?: Maybe<OrganizationInvitation>;
};

export const OrganizationInvitationRole = {
  DirectMember: 'DIRECT_MEMBER',
  Admin: 'ADMIN',
  BillingManager: 'BILLING_MANAGER',
  Reinstate: 'REINSTATE'
} as const;

export type OrganizationInvitationRole = typeof OrganizationInvitationRole[keyof typeof OrganizationInvitationRole];
export const OrganizationInvitationType = {
  User: 'USER',
  Email: 'EMAIL'
} as const;

export type OrganizationInvitationType = typeof OrganizationInvitationType[keyof typeof OrganizationInvitationType];
export type OrganizationMemberConnection = {
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationMemberEdge = {
  cursor: Scalars['String'];
  hasTwoFactorEnabled?: Maybe<Scalars['Boolean']>;
  node?: Maybe<User>;
  role?: Maybe<OrganizationMemberRole>;
};

export const OrganizationMemberRole = {
  Member: 'MEMBER',
  Admin: 'ADMIN'
} as const;

export type OrganizationMemberRole = typeof OrganizationMemberRole[keyof typeof OrganizationMemberRole];
export const OrganizationMembersCanCreateRepositoriesSettingValue = {
  All: 'ALL',
  Private: 'PRIVATE',
  Disabled: 'DISABLED'
} as const;

export type OrganizationMembersCanCreateRepositoriesSettingValue = typeof OrganizationMembersCanCreateRepositoriesSettingValue[keyof typeof OrganizationMembersCanCreateRepositoriesSettingValue];
export type OrganizationOrder = {
  field: OrganizationOrderField;
  direction: OrderDirection;
};

export const OrganizationOrderField = {
  CreatedAt: 'CREATED_AT',
  Login: 'LOGIN'
} as const;

export type OrganizationOrderField = typeof OrganizationOrderField[keyof typeof OrganizationOrderField];
export type OrganizationsHovercardContext = HovercardContext & {
  message: Scalars['String'];
  octicon: Scalars['String'];
  relevantOrganizations: OrganizationConnection;
  totalOrganizationCount: Scalars['Int'];
};


export type OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrganizationTeamsHovercardContext = HovercardContext & {
  message: Scalars['String'];
  octicon: Scalars['String'];
  relevantTeams: TeamConnection;
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  totalTeamCount: Scalars['Int'];
};


export type OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type OrgBlockUserAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<Scalars['String']>;
  blockedUserResourcePath?: Maybe<Scalars['URI']>;
  blockedUserUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgConfigDisableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgConfigEnableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgCreateAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  billingPlan?: Maybe<OrgCreateAuditEntryBillingPlan>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgCreateAuditEntryBillingPlan = {
  Free: 'FREE',
  Business: 'BUSINESS',
  BusinessPlus: 'BUSINESS_PLUS',
  Unlimited: 'UNLIMITED',
  TieredPerSeat: 'TIERED_PER_SEAT'
} as const;

export type OrgCreateAuditEntryBillingPlan = typeof OrgCreateAuditEntryBillingPlan[keyof typeof OrgCreateAuditEntryBillingPlan];
export type OrgDisableOauthAppRestrictionsAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgDisableSamlAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  digestMethodUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  issuerUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  signatureMethodUrl?: Maybe<Scalars['URI']>;
  singleSignOnUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgDisableTwoFactorRequirementAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableOauthAppRestrictionsAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableSamlAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  digestMethodUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  issuerUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  signatureMethodUrl?: Maybe<Scalars['URI']>;
  singleSignOnUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgEnableTwoFactorRequirementAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgInviteMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationInvitation?: Maybe<OrganizationInvitation>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgInviteToBusinessAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessApprovedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessDeniedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgOauthAppAccessRequestedAuditEntry = Node & AuditEntry & OauthApplicationAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  oauthApplicationName?: Maybe<Scalars['String']>;
  oauthApplicationResourcePath?: Maybe<Scalars['URI']>;
  oauthApplicationUrl?: Maybe<Scalars['URI']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgRemoveBillingManagerAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveBillingManagerAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgRemoveBillingManagerAuditEntryReason = {
  TwoFactorRequirementNonCompliance: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
} as const;

export type OrgRemoveBillingManagerAuditEntryReason = typeof OrgRemoveBillingManagerAuditEntryReason[keyof typeof OrgRemoveBillingManagerAuditEntryReason];
export type OrgRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  membershipTypes?: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveMemberAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgRemoveMemberAuditEntryMembershipType = {
  DirectMember: 'DIRECT_MEMBER',
  Admin: 'ADMIN',
  BillingManager: 'BILLING_MANAGER',
  Unaffiliated: 'UNAFFILIATED',
  OutsideCollaborator: 'OUTSIDE_COLLABORATOR'
} as const;

export type OrgRemoveMemberAuditEntryMembershipType = typeof OrgRemoveMemberAuditEntryMembershipType[keyof typeof OrgRemoveMemberAuditEntryMembershipType];
export const OrgRemoveMemberAuditEntryReason = {
  TwoFactorRequirementNonCompliance: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
} as const;

export type OrgRemoveMemberAuditEntryReason = typeof OrgRemoveMemberAuditEntryReason[keyof typeof OrgRemoveMemberAuditEntryReason];
export type OrgRemoveOutsideCollaboratorAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  membershipTypes?: Maybe<Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  reason?: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgRemoveOutsideCollaboratorAuditEntryMembershipType = {
  OutsideCollaborator: 'OUTSIDE_COLLABORATOR',
  Unaffiliated: 'UNAFFILIATED',
  BillingManager: 'BILLING_MANAGER'
} as const;

export type OrgRemoveOutsideCollaboratorAuditEntryMembershipType = typeof OrgRemoveOutsideCollaboratorAuditEntryMembershipType[keyof typeof OrgRemoveOutsideCollaboratorAuditEntryMembershipType];
export const OrgRemoveOutsideCollaboratorAuditEntryReason = {
  TwoFactorRequirementNonCompliance: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing: 'SAML_EXTERNAL_IDENTITY_MISSING'
} as const;

export type OrgRemoveOutsideCollaboratorAuditEntryReason = typeof OrgRemoveOutsideCollaboratorAuditEntryReason[keyof typeof OrgRemoveOutsideCollaboratorAuditEntryReason];
export type OrgRestoreMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  restoredCustomEmailRoutingsCount?: Maybe<Scalars['Int']>;
  restoredIssueAssignmentsCount?: Maybe<Scalars['Int']>;
  restoredMemberships?: Maybe<Array<OrgRestoreMemberAuditEntryMembership>>;
  restoredMembershipsCount?: Maybe<Scalars['Int']>;
  restoredRepositoriesCount?: Maybe<Scalars['Int']>;
  restoredRepositoryStarsCount?: Maybe<Scalars['Int']>;
  restoredRepositoryWatchesCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberAuditEntryMembership = OrgRestoreMemberMembershipOrganizationAuditEntryData | OrgRestoreMemberMembershipRepositoryAuditEntryData | OrgRestoreMemberMembershipTeamAuditEntryData;

export type OrgRestoreMemberMembershipOrganizationAuditEntryData = OrganizationAuditEntryData & {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberMembershipRepositoryAuditEntryData = RepositoryAuditEntryData & {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
};

export type OrgRestoreMemberMembershipTeamAuditEntryData = TeamAuditEntryData & {
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
};

export type OrgUnblockUserAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<Scalars['String']>;
  blockedUserResourcePath?: Maybe<Scalars['URI']>;
  blockedUserUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type OrgUpdateDefaultRepositoryPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {
  Read: 'READ',
  Write: 'WRITE',
  Admin: 'ADMIN',
  None: 'NONE'
} as const;

export type OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = typeof OrgUpdateDefaultRepositoryPermissionAuditEntryPermission[keyof typeof OrgUpdateDefaultRepositoryPermissionAuditEntryPermission];
export type OrgUpdateMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  permission?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const OrgUpdateMemberAuditEntryPermission = {
  Read: 'READ',
  Admin: 'ADMIN'
} as const;

export type OrgUpdateMemberAuditEntryPermission = typeof OrgUpdateMemberAuditEntryPermission[keyof typeof OrgUpdateMemberAuditEntryPermission];
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  canCreateRepositories?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
};

export const OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {
  All: 'ALL',
  Public: 'PUBLIC'
} as const;

export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = typeof OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility[keyof typeof OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility];
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

/** ページに関する情報 */
export type Page = {
  heading?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
  heading?: Maybe<Scalars['String']>;
};

export type PermissionGranter = Organization | Repository | Team;

export type PermissionSource = {
  organization: Organization;
  permission: DefaultRepositoryPermissionField;
  source: PermissionGranter;
};

export type PinnableItem = Gist | Repository;

export type PinnableItemConnection = {
  edges?: Maybe<Array<Maybe<PinnableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnableItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PinnableItemEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PinnableItem>;
};

export const PinnableItemType = {
  Repository: 'REPOSITORY',
  Gist: 'GIST',
  Issue: 'ISSUE',
  Project: 'PROJECT',
  PullRequest: 'PULL_REQUEST',
  User: 'USER',
  Organization: 'ORGANIZATION',
  Team: 'TEAM'
} as const;

export type PinnableItemType = typeof PinnableItemType[keyof typeof PinnableItemType];
export type PinnedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Issue;
};


export type PrivateRepositoryForkingDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type PrivateRepositoryForkingEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type ProfileItemShowcase = {
  hasPinnedItems: Scalars['Boolean'];
  items: PinnableItemConnection;
};


export type ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProfileOwner = {
  anyPinnableItems: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type ProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Project = Node & Closable & Updatable & {
  body?: Maybe<Scalars['String']>;
  bodyHTML: Scalars['HTML'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  columns: ProjectColumnConnection;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  number: Scalars['Int'];
  owner: ProjectOwner;
  pendingCards: ProjectCardConnection;
  resourcePath: Scalars['URI'];
  state: ProjectState;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanUpdate: Scalars['Boolean'];
};


export type ProjectColumnsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProjectPendingCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type ProjectCard = Node & {
  column?: Maybe<ProjectColumn>;
  content?: Maybe<ProjectCardItem>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  project: Project;
  resourcePath: Scalars['URI'];
  state?: Maybe<ProjectCardState>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};

export const ProjectCardArchivedState = {
  Archived: 'ARCHIVED',
  NotArchived: 'NOT_ARCHIVED'
} as const;

export type ProjectCardArchivedState = typeof ProjectCardArchivedState[keyof typeof ProjectCardArchivedState];
export type ProjectCardConnection = {
  edges?: Maybe<Array<Maybe<ProjectCardEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectCard>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectCardEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ProjectCard>;
};

export type ProjectCardItem = Issue | PullRequest;

export const ProjectCardState = {
  ContentOnly: 'CONTENT_ONLY',
  NoteOnly: 'NOTE_ONLY',
  Redacted: 'REDACTED'
} as const;

export type ProjectCardState = typeof ProjectCardState[keyof typeof ProjectCardState];
export type ProjectColumn = Node & {
  cards: ProjectCardConnection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  purpose?: Maybe<ProjectColumnPurpose>;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type ProjectColumnCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type ProjectColumnConnection = {
  edges?: Maybe<Array<Maybe<ProjectColumnEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectColumn>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectColumnEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ProjectColumn>;
};

export const ProjectColumnPurpose = {
  Todo: 'TODO',
  InProgress: 'IN_PROGRESS',
  Done: 'DONE'
} as const;

export type ProjectColumnPurpose = typeof ProjectColumnPurpose[keyof typeof ProjectColumnPurpose];
export type ProjectConnection = {
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<Project>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Project>;
};

export type ProjectOrder = {
  field: ProjectOrderField;
  direction: OrderDirection;
};

export const ProjectOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  Name: 'NAME'
} as const;

export type ProjectOrderField = typeof ProjectOrderField[keyof typeof ProjectOrderField];
export type ProjectOwner = {
  id: Scalars['ID'];
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  viewerCanCreateProjects: Scalars['Boolean'];
};


export type ProjectOwnerProjectArgs = {
  number: Scalars['Int'];
};


export type ProjectOwnerProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export const ProjectState = {
  Open: 'OPEN',
  Closed: 'CLOSED'
} as const;

export type ProjectState = typeof ProjectState[keyof typeof ProjectState];
export const ProjectTemplate = {
  BasicKanban: 'BASIC_KANBAN',
  AutomatedKanbanV2: 'AUTOMATED_KANBAN_V2',
  AutomatedReviewsKanban: 'AUTOMATED_REVIEWS_KANBAN',
  BugTriage: 'BUG_TRIAGE'
} as const;

export type ProjectTemplate = typeof ProjectTemplate[keyof typeof ProjectTemplate];
export type PublicKey = Node & {
  accessedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fingerprint: Scalars['String'];
  id: Scalars['ID'];
  isReadOnly?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PublicKeyConnection = {
  edges?: Maybe<Array<Maybe<PublicKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<PublicKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PublicKeyEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PublicKey>;
};

export type PullRequest = Node & Assignable & Closable & Comment & Updatable & UpdatableComment & Labelable & Lockable & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & {
  activeLockReason?: Maybe<LockReason>;
  additions: Scalars['Int'];
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  baseRef?: Maybe<Ref>;
  baseRefName: Scalars['String'];
  baseRefOid: Scalars['GitObjectID'];
  baseRepository?: Maybe<Repository>;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  changedFiles: Scalars['Int'];
  checksResourcePath: Scalars['URI'];
  checksUrl: Scalars['URI'];
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['DateTime']>;
  comments: IssueCommentConnection;
  commits: PullRequestCommitConnection;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  deletions: Scalars['Int'];
  editor?: Maybe<Actor>;
  files?: Maybe<PullRequestChangedFileConnection>;
  headRef?: Maybe<Ref>;
  headRefName: Scalars['String'];
  headRefOid: Scalars['GitObjectID'];
  headRepository?: Maybe<Repository>;
  headRepositoryOwner?: Maybe<RepositoryOwner>;
  hovercard: Hovercard;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isCrossRepository: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  locked: Scalars['Boolean'];
  maintainerCanModify: Scalars['Boolean'];
  mergeCommit?: Maybe<Commit>;
  mergeable: MergeableState;
  merged: Scalars['Boolean'];
  mergedAt?: Maybe<Scalars['DateTime']>;
  mergedBy?: Maybe<Actor>;
  milestone?: Maybe<Milestone>;
  number: Scalars['Int'];
  participants: UserConnection;
  permalink: Scalars['URI'];
  potentialMergeCommit?: Maybe<Commit>;
  projectCards: ProjectCardConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  revertResourcePath: Scalars['URI'];
  revertUrl: Scalars['URI'];
  reviewDecision?: Maybe<PullRequestReviewDecision>;
  reviewRequests?: Maybe<ReviewRequestConnection>;
  reviewThreads: PullRequestReviewThreadConnection;
  reviews?: Maybe<PullRequestReviewConnection>;
  state: PullRequestState;
  suggestedReviewers: Array<Maybe<SuggestedReviewer>>;
  /** @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2019-10-01 UTC. */
  timeline: PullRequestTimelineConnection;
  timelineItems: PullRequestTimelineItemsConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanApplySuggestion: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type PullRequestAssigneesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestCommitsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestFilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


export type PullRequestLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestParticipantsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};


export type PullRequestReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<PullRequestReviewState>>;
  author?: Maybe<Scalars['String']>;
};


export type PullRequestTimelineArgs = {
  since?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars['DateTime']>;
  skip?: Maybe<Scalars['Int']>;
  itemTypes?: Maybe<Array<PullRequestTimelineItemsItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestChangedFile = {
  additions: Scalars['Int'];
  deletions: Scalars['Int'];
  path: Scalars['String'];
};

export type PullRequestChangedFileConnection = {
  edges?: Maybe<Array<Maybe<PullRequestChangedFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestChangedFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestChangedFileEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestChangedFile>;
};

export type PullRequestCommit = Node & UniformResourceLocatable & {
  commit: Commit;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type PullRequestCommitCommentThread = Node & RepositoryNode & {
  comments: CommitCommentConnection;
  commit: Commit;
  id: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  pullRequest: PullRequest;
  repository: Repository;
};


export type PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestCommitConnection = {
  edges?: Maybe<Array<Maybe<PullRequestCommitEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestCommit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestCommitEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestCommit>;
};

export type PullRequestConnection = {
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestContributionsByRepository = {
  contributions: CreatedPullRequestContributionConnection;
  repository: Repository;
};


export type PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export type PullRequestEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequest>;
};

export const PullRequestMergeMethod = {
  Merge: 'MERGE',
  Squash: 'SQUASH',
  Rebase: 'REBASE'
} as const;

export type PullRequestMergeMethod = typeof PullRequestMergeMethod[keyof typeof PullRequestMergeMethod];
export type PullRequestOrder = {
  field: PullRequestOrderField;
  direction: OrderDirection;
};

export const PullRequestOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT'
} as const;

export type PullRequestOrderField = typeof PullRequestOrderField[keyof typeof PullRequestOrderField];
export type PullRequestReview = Node & Comment & Deletable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  comments: PullRequestReviewCommentConnection;
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  onBehalfOf: TeamConnection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest: PullRequest;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: PullRequestReviewState;
  submittedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewComment = Node & Comment & Deletable & Minimizable & Updatable & UpdatableComment & Reactable & RepositoryNode & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  commit?: Maybe<Commit>;
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  diffHunk: Scalars['String'];
  draftedAt: Scalars['DateTime'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isMinimized: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  minimizedReason?: Maybe<Scalars['String']>;
  originalCommit?: Maybe<Commit>;
  originalPosition: Scalars['Int'];
  outdated: Scalars['Boolean'];
  path: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pullRequest: PullRequest;
  pullRequestReview?: Maybe<PullRequestReview>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  replyTo?: Maybe<PullRequestReviewComment>;
  repository: Repository;
  resourcePath: Scalars['URI'];
  state: PullRequestReviewCommentState;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanMinimize: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewCommentConnection = {
  edges?: Maybe<Array<Maybe<PullRequestReviewCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewCommentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReviewComment>;
};

export const PullRequestReviewCommentState = {
  Pending: 'PENDING',
  Submitted: 'SUBMITTED'
} as const;

export type PullRequestReviewCommentState = typeof PullRequestReviewCommentState[keyof typeof PullRequestReviewCommentState];
export type PullRequestReviewConnection = {
  edges?: Maybe<Array<Maybe<PullRequestReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReview>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewContributionsByRepository = {
  contributions: CreatedPullRequestReviewContributionConnection;
  repository: Repository;
};


export type PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ContributionOrder>;
};

export const PullRequestReviewDecision = {
  ChangesRequested: 'CHANGES_REQUESTED',
  Approved: 'APPROVED',
  ReviewRequired: 'REVIEW_REQUIRED'
} as const;

export type PullRequestReviewDecision = typeof PullRequestReviewDecision[keyof typeof PullRequestReviewDecision];
export type PullRequestReviewEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReview>;
};

export const PullRequestReviewEvent = {
  Comment: 'COMMENT',
  Approve: 'APPROVE',
  RequestChanges: 'REQUEST_CHANGES',
  Dismiss: 'DISMISS'
} as const;

export type PullRequestReviewEvent = typeof PullRequestReviewEvent[keyof typeof PullRequestReviewEvent];
export const PullRequestReviewState = {
  Pending: 'PENDING',
  Commented: 'COMMENTED',
  Approved: 'APPROVED',
  ChangesRequested: 'CHANGES_REQUESTED',
  Dismissed: 'DISMISSED'
} as const;

export type PullRequestReviewState = typeof PullRequestReviewState[keyof typeof PullRequestReviewState];
export type PullRequestReviewThread = Node & {
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: Scalars['ID'];
  isResolved: Scalars['Boolean'];
  line?: Maybe<Scalars['Int']>;
  originalLine?: Maybe<Scalars['Int']>;
  originalStartLine?: Maybe<Scalars['Int']>;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars['Int']>;
  viewerCanResolve: Scalars['Boolean'];
  viewerCanUnresolve: Scalars['Boolean'];
};


export type PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PullRequestReviewThreadConnection = {
  edges?: Maybe<Array<Maybe<PullRequestReviewThreadEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewThread>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestReviewThreadEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestReviewThread>;
};

export type PullRequestRevisionMarker = {
  createdAt: Scalars['DateTime'];
  lastSeenCommit: Commit;
  pullRequest: PullRequest;
};

export const PullRequestState = {
  Open: 'OPEN',
  Closed: 'CLOSED',
  Merged: 'MERGED'
} as const;

export type PullRequestState = typeof PullRequestState[keyof typeof PullRequestState];
export type PullRequestTimelineConnection = {
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PullRequestTimelineItem = AssignedEvent | BaseRefForcePushedEvent | ClosedEvent | Commit | CommitCommentThread | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MergedEvent | MilestonedEvent | PullRequestReview | PullRequestReviewComment | PullRequestReviewThread | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;

export type PullRequestTimelineItemEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestTimelineItem>;
};

export type PullRequestTimelineItems = AddedToProjectEvent | AssignedEvent | BaseRefChangedEvent | BaseRefForcePushedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertToDraftEvent | ConvertedNoteToIssueEvent | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | DisconnectedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MergedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | PullRequestCommit | PullRequestCommitCommentThread | PullRequestReview | PullRequestReviewThread | PullRequestRevisionMarker | ReadyForReviewEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;

export type PullRequestTimelineItemsConnection = {
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemsEdge>>>;
  filteredCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItems>>>;
  pageCount: Scalars['Int'];
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PullRequestTimelineItemsEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PullRequestTimelineItems>;
};

export const PullRequestTimelineItemsItemType = {
  PullRequestCommit: 'PULL_REQUEST_COMMIT',
  PullRequestCommitCommentThread: 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PullRequestReview: 'PULL_REQUEST_REVIEW',
  PullRequestReviewThread: 'PULL_REQUEST_REVIEW_THREAD',
  PullRequestRevisionMarker: 'PULL_REQUEST_REVISION_MARKER',
  BaseRefChangedEvent: 'BASE_REF_CHANGED_EVENT',
  BaseRefForcePushedEvent: 'BASE_REF_FORCE_PUSHED_EVENT',
  DeployedEvent: 'DEPLOYED_EVENT',
  DeploymentEnvironmentChangedEvent: 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HeadRefDeletedEvent: 'HEAD_REF_DELETED_EVENT',
  HeadRefForcePushedEvent: 'HEAD_REF_FORCE_PUSHED_EVENT',
  HeadRefRestoredEvent: 'HEAD_REF_RESTORED_EVENT',
  MergedEvent: 'MERGED_EVENT',
  ReviewDismissedEvent: 'REVIEW_DISMISSED_EVENT',
  ReviewRequestedEvent: 'REVIEW_REQUESTED_EVENT',
  ReviewRequestRemovedEvent: 'REVIEW_REQUEST_REMOVED_EVENT',
  ReadyForReviewEvent: 'READY_FOR_REVIEW_EVENT',
  ConvertToDraftEvent: 'CONVERT_TO_DRAFT_EVENT',
  IssueComment: 'ISSUE_COMMENT',
  CrossReferencedEvent: 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent: 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent: 'ASSIGNED_EVENT',
  ClosedEvent: 'CLOSED_EVENT',
  CommentDeletedEvent: 'COMMENT_DELETED_EVENT',
  ConnectedEvent: 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent: 'DEMILESTONED_EVENT',
  DisconnectedEvent: 'DISCONNECTED_EVENT',
  LabeledEvent: 'LABELED_EVENT',
  LockedEvent: 'LOCKED_EVENT',
  MarkedAsDuplicateEvent: 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent: 'MENTIONED_EVENT',
  MilestonedEvent: 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent: 'PINNED_EVENT',
  ReferencedEvent: 'REFERENCED_EVENT',
  RemovedFromProjectEvent: 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent: 'RENAMED_TITLE_EVENT',
  ReopenedEvent: 'REOPENED_EVENT',
  SubscribedEvent: 'SUBSCRIBED_EVENT',
  TransferredEvent: 'TRANSFERRED_EVENT',
  UnassignedEvent: 'UNASSIGNED_EVENT',
  UnlabeledEvent: 'UNLABELED_EVENT',
  UnlockedEvent: 'UNLOCKED_EVENT',
  UserBlockedEvent: 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent: 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent: 'UNPINNED_EVENT',
  UnsubscribedEvent: 'UNSUBSCRIBED_EVENT'
} as const;

export type PullRequestTimelineItemsItemType = typeof PullRequestTimelineItemsItemType[keyof typeof PullRequestTimelineItemsItemType];
export const PullRequestUpdateState = {
  Open: 'OPEN',
  Closed: 'CLOSED'
} as const;

export type PullRequestUpdateState = typeof PullRequestUpdateState[keyof typeof PullRequestUpdateState];
export type PushAllowance = Node & {
  actor?: Maybe<PushAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars['ID'];
};

export type PushAllowanceActor = App | Team | User;

export type PushAllowanceConnection = {
  edges?: Maybe<Array<Maybe<PushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<PushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PushAllowanceEdge = {
  cursor: Scalars['String'];
  node?: Maybe<PushAllowance>;
};

export type Query = {
  codeOfConduct?: Maybe<CodeOfConduct>;
  codesOfConduct?: Maybe<Array<Maybe<CodeOfConduct>>>;
  enterprise?: Maybe<Enterprise>;
  enterpriseAdministratorInvitation?: Maybe<EnterpriseAdministratorInvitation>;
  enterpriseAdministratorInvitationByToken?: Maybe<EnterpriseAdministratorInvitation>;
  license?: Maybe<License>;
  licenses: Array<Maybe<License>>;
  marketplaceCategories: Array<MarketplaceCategory>;
  marketplaceCategory?: Maybe<MarketplaceCategory>;
  marketplaceListing?: Maybe<MarketplaceListing>;
  marketplaceListings: MarketplaceListingConnection;
  meta: GitHubMetadata;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  organization?: Maybe<Organization>;
  page?: Maybe<Page>;
  rateLimit?: Maybe<RateLimit>;
  relay: Query;
  repository?: Maybe<Repository>;
  repositoryOwner?: Maybe<RepositoryOwner>;
  resource?: Maybe<UniformResourceLocatable>;
  search: SearchResultItemConnection;
  securityAdvisories: SecurityAdvisoryConnection;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerabilities: SecurityVulnerabilityConnection;
  /** @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC. */
  sponsorsListing?: Maybe<SponsorsListing>;
  topic?: Maybe<Topic>;
  user?: Maybe<User>;
  viewer: User;
  you?: Maybe<You>;
};


export type QueryCodeOfConductArgs = {
  key: Scalars['String'];
};


export type QueryEnterpriseArgs = {
  slug: Scalars['String'];
  invitationToken?: Maybe<Scalars['String']>;
};


export type QueryEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'];
  enterpriseSlug: Scalars['String'];
  role: EnterpriseAdministratorRole;
};


export type QueryEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String'];
};


export type QueryLicenseArgs = {
  key: Scalars['String'];
};


export type QueryMarketplaceCategoriesArgs = {
  includeCategories?: Maybe<Array<Scalars['String']>>;
  excludeEmpty?: Maybe<Scalars['Boolean']>;
  excludeSubcategories?: Maybe<Scalars['Boolean']>;
};


export type QueryMarketplaceCategoryArgs = {
  slug: Scalars['String'];
  useTopicAliases?: Maybe<Scalars['Boolean']>;
};


export type QueryMarketplaceListingArgs = {
  slug: Scalars['String'];
};


export type QueryMarketplaceListingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categorySlug?: Maybe<Scalars['String']>;
  useTopicAliases?: Maybe<Scalars['Boolean']>;
  viewerCanAdmin?: Maybe<Scalars['Boolean']>;
  adminId?: Maybe<Scalars['ID']>;
  organizationId?: Maybe<Scalars['ID']>;
  allStates?: Maybe<Scalars['Boolean']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>;
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryOrganizationArgs = {
  login: Scalars['String'];
};


export type QueryRateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>;
};


export type QueryRepositoryArgs = {
  owner: Scalars['String'];
  name: Scalars['String'];
};


export type QueryRepositoryOwnerArgs = {
  login: Scalars['String'];
};


export type QueryResourceArgs = {
  url: Scalars['URI'];
};


export type QuerySearchArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: SearchType;
};


export type QuerySecurityAdvisoriesArgs = {
  orderBy?: Maybe<SecurityAdvisoryOrder>;
  identifier?: Maybe<SecurityAdvisoryIdentifierFilter>;
  publishedSince?: Maybe<Scalars['DateTime']>;
  updatedSince?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySecurityAdvisoryArgs = {
  ghsaId: Scalars['String'];
};


export type QuerySecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySponsorsListingArgs = {
  slug: Scalars['String'];
};


export type QueryTopicArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  login: Scalars['String'];
};

export type RateLimit = {
  cost: Scalars['Int'];
  limit: Scalars['Int'];
  nodeCount: Scalars['Int'];
  remaining: Scalars['Int'];
  resetAt: Scalars['DateTime'];
};

export type Reactable = {
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  viewerCanReact: Scalars['Boolean'];
};


export type ReactableReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};

export type ReactingUserConnection = {
  edges?: Maybe<Array<Maybe<ReactingUserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReactingUserEdge = {
  cursor: Scalars['String'];
  node: User;
  reactedAt: Scalars['DateTime'];
};

export type Reaction = Node & {
  content: ReactionContent;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  reactable: Reactable;
  user?: Maybe<User>;
};

export type ReactionConnection = {
  edges?: Maybe<Array<Maybe<ReactionEdge>>>;
  nodes?: Maybe<Array<Maybe<Reaction>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  viewerHasReacted: Scalars['Boolean'];
};

export const ReactionContent = {
  ThumbsUp: 'THUMBS_UP',
  ThumbsDown: 'THUMBS_DOWN',
  Laugh: 'LAUGH',
  Hooray: 'HOORAY',
  Confused: 'CONFUSED',
  Heart: 'HEART',
  Rocket: 'ROCKET',
  Eyes: 'EYES'
} as const;

export type ReactionContent = typeof ReactionContent[keyof typeof ReactionContent];
export type ReactionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Reaction>;
};

export type ReactionGroup = {
  content: ReactionContent;
  createdAt?: Maybe<Scalars['DateTime']>;
  subject: Reactable;
  users: ReactingUserConnection;
  viewerHasReacted: Scalars['Boolean'];
};


export type ReactionGroupUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ReactionOrder = {
  field: ReactionOrderField;
  direction: OrderDirection;
};

export const ReactionOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type ReactionOrderField = typeof ReactionOrderField[keyof typeof ReactionOrderField];
export type ReadyForReviewEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type Ref = Node & {
  associatedPullRequests: PullRequestConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  prefix: Scalars['String'];
  repository: Repository;
  target: GitObject;
};


export type RefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RefConnection = {
  edges?: Maybe<Array<Maybe<RefEdge>>>;
  nodes?: Maybe<Array<Maybe<Ref>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RefEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Ref>;
};

export type ReferencedEvent = Node & {
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  commitRepository: Repository;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCrossRepository: Scalars['Boolean'];
  isDirectReference: Scalars['Boolean'];
  subject: ReferencedSubject;
};

export type ReferencedSubject = Issue | PullRequest;

export type RefOrder = {
  field: RefOrderField;
  direction: OrderDirection;
};

export const RefOrderField = {
  TagCommitDate: 'TAG_COMMIT_DATE',
  Alphabetical: 'ALPHABETICAL'
} as const;

export type RefOrderField = typeof RefOrderField[keyof typeof RefOrderField];
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RegistryPackage = Node & {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  color: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  latestVersion?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  nameWithOwner: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  packageFileByGuid?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  packageFileBySha256?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  packageType: RegistryPackageType;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  preReleaseVersions?: Maybe<RegistryPackageVersionConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  registryPackageType?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  repository?: Maybe<Repository>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  statistics?: Maybe<RegistryPackageStatistics>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  tags: RegistryPackageTagConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object. Removal on 2020-04-01 UTC. */
  topics?: Maybe<TopicConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  version?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionByPlatform?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionBySha256?: Maybe<RegistryPackageVersion>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versions: RegistryPackageVersionConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `Package` object instead. Removal on 2020-04-01 UTC. */
  versionsByMetadatum?: Maybe<RegistryPackageVersionConnection>;
};


export type RegistryPackagePackageFileByGuidArgs = {
  guid: Scalars['String'];
};


export type RegistryPackagePackageFileBySha256Args = {
  sha256: Scalars['String'];
};


export type RegistryPackagePreReleaseVersionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageTagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageTopicsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageVersionArgs = {
  version: Scalars['String'];
};


export type RegistryPackageVersionByPlatformArgs = {
  version: Scalars['String'];
  platform: Scalars['String'];
};


export type RegistryPackageVersionBySha256Args = {
  sha256: Scalars['String'];
};


export type RegistryPackageVersionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RegistryPackageVersionsByMetadatumArgs = {
  metadatum: RegistryPackageMetadatum;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RegistryPackageConnection = {
  edges?: Maybe<Array<Maybe<RegistryPackageEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackage>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageDependency = Node & {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  dependencyType: RegistryPackageDependencyType;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageDependency` object instead. Removal on 2020-04-01 UTC. */
  version: Scalars['String'];
};

export type RegistryPackageDependencyConnection = {
  edges?: Maybe<Array<Maybe<RegistryPackageDependencyEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageDependency>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageDependencyEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageDependency>;
};

export const RegistryPackageDependencyType = {
  Default: 'DEFAULT',
  Dev: 'DEV',
  Test: 'TEST',
  Peer: 'PEER',
  Optional: 'OPTIONAL',
  Bundled: 'BUNDLED'
} as const;

export type RegistryPackageDependencyType = typeof RegistryPackageDependencyType[keyof typeof RegistryPackageDependencyType];
export type RegistryPackageEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackage>;
};

export type RegistryPackageFile = Node & {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  md5?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  metadataUrl: Scalars['URI'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  packageVersion: RegistryPackageVersion;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  sha1?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  sha256?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageFile` object instead. Removal on 2020-04-01 UTC. */
  url: Scalars['URI'];
};

export type RegistryPackageFileConnection = {
  edges?: Maybe<Array<Maybe<RegistryPackageFileEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageFileEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageFile>;
};

export type RegistryPackageMetadatum = {
  name: Scalars['String'];
  value: Scalars['String'];
  update?: Maybe<Scalars['Boolean']>;
};

export type RegistryPackageOwner = {
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
};


export type RegistryPackageOwnerRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};

export type RegistryPackageSearch = {
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
};


export type RegistryPackageSearchRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};

export type RegistryPackageStatistics = {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisMonth: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisWeek: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisYear: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsToday: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsTotalCount: Scalars['Int'];
};

export type RegistryPackageTag = Node & {
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageTag` object instead. Removal on 2020-04-01 UTC. */
  name: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageTag` object instead. Removal on 2020-04-01 UTC. */
  version?: Maybe<RegistryPackageVersion>;
};

export type RegistryPackageTagConnection = {
  edges?: Maybe<Array<Maybe<RegistryPackageTagEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageTag>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageTagEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageTag>;
};

export const RegistryPackageType = {
  Npm: 'NPM',
  Rubygems: 'RUBYGEMS',
  Maven: 'MAVEN',
  Docker: 'DOCKER',
  Debian: 'DEBIAN',
  Nuget: 'NUGET',
  Python: 'PYTHON'
} as const;

export type RegistryPackageType = typeof RegistryPackageType[keyof typeof RegistryPackageType];
export type RegistryPackageVersion = Node & {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  dependencies: RegistryPackageDependencyConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  fileByName?: Maybe<RegistryPackageFile>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  files: RegistryPackageFileConnection;
  id: Scalars['ID'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  installationCommand?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  manifest?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  platform?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  preRelease: Scalars['Boolean'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  readme?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  readmeHtml?: Maybe<Scalars['HTML']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  registryPackage?: Maybe<RegistryPackage>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  release?: Maybe<Release>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  sha256?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  size?: Maybe<Scalars['Int']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  statistics?: Maybe<RegistryPackageVersionStatistics>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  summary?: Maybe<Scalars['String']>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  updatedAt: Scalars['DateTime'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  version: Scalars['String'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersion` object instead. Removal on 2020-04-01 UTC. */
  viewerCanEdit: Scalars['Boolean'];
};


export type RegistryPackageVersionDependenciesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  type?: Maybe<RegistryPackageDependencyType>;
};


export type RegistryPackageVersionFileByNameArgs = {
  filename: Scalars['String'];
};


export type RegistryPackageVersionFilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RegistryPackageVersionConnection = {
  edges?: Maybe<Array<Maybe<RegistryPackageVersionEdge>>>;
  nodes?: Maybe<Array<Maybe<RegistryPackageVersion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegistryPackageVersionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RegistryPackageVersion>;
};

export type RegistryPackageVersionStatistics = {
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisMonth: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisWeek: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsThisYear: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsToday: Scalars['Int'];
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageVersionStatistics` object instead. Removal on 2020-04-01 UTC. */
  downloadsTotalCount: Scalars['Int'];
};

export type Release = Node & UniformResourceLocatable & {
  author?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionHTML?: Maybe<Scalars['HTML']>;
  id: Scalars['ID'];
  isDraft: Scalars['Boolean'];
  isPrerelease: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  releaseAssets: ReleaseAssetConnection;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML?: Maybe<Scalars['HTML']>;
  tag?: Maybe<Ref>;
  tagName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
};


export type ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type ReleaseAsset = Node & {
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  downloadCount: Scalars['Int'];
  downloadUrl: Scalars['URI'];
  id: Scalars['ID'];
  name: Scalars['String'];
  release?: Maybe<Release>;
  size: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  uploadedBy: User;
  url: Scalars['URI'];
};

export type ReleaseAssetConnection = {
  edges?: Maybe<Array<Maybe<ReleaseAssetEdge>>>;
  nodes?: Maybe<Array<Maybe<ReleaseAsset>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseAssetEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ReleaseAsset>;
};

export type ReleaseConnection = {
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  nodes?: Maybe<Array<Maybe<Release>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Release>;
};

export type ReleaseOrder = {
  field: ReleaseOrderField;
  direction: OrderDirection;
};

export const ReleaseOrderField = {
  CreatedAt: 'CREATED_AT',
  Name: 'NAME'
} as const;

export type ReleaseOrderField = typeof ReleaseOrderField[keyof typeof ReleaseOrderField];
export type RemoveAssigneesFromAssignableInput = {
  assignableId: Scalars['ID'];
  assigneeIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveAssigneesFromAssignablePayload = {
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemovedFromProjectEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type RemoveEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseAdminPayload = {
  admin?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
  viewer?: Maybe<User>;
};

export type RemoveEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseIdentityProviderPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RemoveEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'];
  organizationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveEnterpriseOrganizationPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
  viewer?: Maybe<User>;
};

export type RemoveLabelsFromLabelableInput = {
  labelableId: Scalars['ID'];
  labelIds: Array<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveLabelsFromLabelablePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  labelable?: Maybe<Labelable>;
};

export type RemoveOutsideCollaboratorInput = {
  userId: Scalars['ID'];
  organizationId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveOutsideCollaboratorPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  removedUser?: Maybe<User>;
};

export type RemoveReactionInput = {
  subjectId: Scalars['ID'];
  content: ReactionContent;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveReactionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  reaction?: Maybe<Reaction>;
  subject?: Maybe<Reactable>;
};

export type RemoveStarInput = {
  starrableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveStarPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  starrable?: Maybe<Starrable>;
};

export type RenamedTitleEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  currentTitle: Scalars['String'];
  id: Scalars['ID'];
  previousTitle: Scalars['String'];
  subject: RenamedTitleSubject;
};

export type RenamedTitleSubject = Issue | PullRequest;

export type ReopenedEvent = Node & {
  actor?: Maybe<Actor>;
  closable: Closable;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type ReopenIssueInput = {
  issueId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReopenIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type ReopenPullRequestInput = {
  pullRequestId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReopenPullRequestPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type RepoAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoAccessAuditEntryVisibility>;
};

export const RepoAccessAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoAccessAuditEntryVisibility = typeof RepoAccessAuditEntryVisibility[keyof typeof RepoAccessAuditEntryVisibility];
export type RepoAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoAddMemberAuditEntryVisibility>;
};

export const RepoAddMemberAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoAddMemberAuditEntryVisibility = typeof RepoAddMemberAuditEntryVisibility[keyof typeof RepoAddMemberAuditEntryVisibility];
export type RepoAddTopicAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & TopicAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoArchivedAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoArchivedAuditEntryVisibility>;
};

export const RepoArchivedAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoArchivedAuditEntryVisibility = typeof RepoArchivedAuditEntryVisibility[keyof typeof RepoArchivedAuditEntryVisibility];
export type RepoChangeMergeSettingAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  mergeType?: Maybe<RepoChangeMergeSettingAuditEntryMergeType>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const RepoChangeMergeSettingAuditEntryMergeType = {
  Merge: 'MERGE',
  Rebase: 'REBASE',
  Squash: 'SQUASH'
} as const;

export type RepoChangeMergeSettingAuditEntryMergeType = typeof RepoChangeMergeSettingAuditEntryMergeType[keyof typeof RepoChangeMergeSettingAuditEntryMergeType];
export type RepoConfigDisableAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableContributorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigDisableSockpuppetDisallowedAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableCollaboratorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableContributorsOnlyAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigEnableSockpuppetDisallowedAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigLockAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoConfigUnlockAnonymousGitAccessAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepoCreateAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  forkParentName?: Maybe<Scalars['String']>;
  forkSourceName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoCreateAuditEntryVisibility>;
};

export const RepoCreateAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoCreateAuditEntryVisibility = typeof RepoCreateAuditEntryVisibility[keyof typeof RepoCreateAuditEntryVisibility];
export type RepoDestroyAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoDestroyAuditEntryVisibility>;
};

export const RepoDestroyAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoDestroyAuditEntryVisibility = typeof RepoDestroyAuditEntryVisibility[keyof typeof RepoDestroyAuditEntryVisibility];
export type RepoRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
  visibility?: Maybe<RepoRemoveMemberAuditEntryVisibility>;
};

export const RepoRemoveMemberAuditEntryVisibility = {
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
  Public: 'PUBLIC'
} as const;

export type RepoRemoveMemberAuditEntryVisibility = typeof RepoRemoveMemberAuditEntryVisibility[keyof typeof RepoRemoveMemberAuditEntryVisibility];
export type RepoRemoveTopicAuditEntry = Node & AuditEntry & RepositoryAuditEntryData & OrganizationAuditEntryData & TopicAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export const ReportedContentClassifiers = {
  Spam: 'SPAM',
  Abuse: 'ABUSE',
  OffTopic: 'OFF_TOPIC',
  Outdated: 'OUTDATED',
  Duplicate: 'DUPLICATE',
  Resolved: 'RESOLVED'
} as const;

export type ReportedContentClassifiers = typeof ReportedContentClassifiers[keyof typeof ReportedContentClassifiers];
export type Repository = Node & ProjectOwner & RegistryPackageOwner & RegistryPackageSearch & Subscribable & Starrable & UniformResourceLocatable & RepositoryInfo & {
  assignableUsers: UserConnection;
  branchProtectionRules: BranchProtectionRuleConnection;
  codeOfConduct?: Maybe<CodeOfConduct>;
  collaborators?: Maybe<RepositoryCollaboratorConnection>;
  commitComments: CommitCommentConnection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  defaultBranchRef?: Maybe<Ref>;
  deleteBranchOnMerge: Scalars['Boolean'];
  deployKeys: DeployKeyConnection;
  deployments: DeploymentConnection;
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  diskUsage?: Maybe<Scalars['Int']>;
  forkCount: Scalars['Int'];
  forks: RepositoryConnection;
  fundingLinks: Array<FundingLink>;
  hasIssuesEnabled: Scalars['Boolean'];
  hasProjectsEnabled: Scalars['Boolean'];
  hasWikiEnabled: Scalars['Boolean'];
  homepageUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  isFork: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isMirror: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isTemplate: Scalars['Boolean'];
  issue?: Maybe<Issue>;
  issueOrPullRequest?: Maybe<IssueOrPullRequest>;
  issues: IssueConnection;
  label?: Maybe<Label>;
  labels?: Maybe<LabelConnection>;
  languages?: Maybe<LanguageConnection>;
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mentionableUsers: UserConnection;
  mergeCommitAllowed: Scalars['Boolean'];
  milestone?: Maybe<Milestone>;
  milestones?: Maybe<MilestoneConnection>;
  mirrorUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
  object?: Maybe<GitObject>;
  openGraphImageUrl: Scalars['URI'];
  owner: RepositoryOwner;
  parent?: Maybe<Repository>;
  primaryLanguage?: Maybe<Language>;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  pullRequest?: Maybe<PullRequest>;
  pullRequests: PullRequestConnection;
  pushedAt?: Maybe<Scalars['DateTime']>;
  rebaseMergeAllowed: Scalars['Boolean'];
  ref?: Maybe<Ref>;
  refs?: Maybe<RefConnection>;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  release?: Maybe<Release>;
  releases: ReleaseConnection;
  repositoryTopics: RepositoryTopicConnection;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML: Scalars['HTML'];
  squashMergeAllowed: Scalars['Boolean'];
  sshUrl: Scalars['GitSSHRemote'];
  stargazers: StargazerConnection;
  submodules: SubmoduleConnection;
  tempCloneToken?: Maybe<Scalars['String']>;
  templateRepository?: Maybe<Repository>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  usesCustomOpenGraphImage: Scalars['Boolean'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdateTopics: Scalars['Boolean'];
  viewerHasStarred: Scalars['Boolean'];
  viewerPermission?: Maybe<RepositoryPermission>;
  viewerSubscription?: Maybe<SubscriptionState>;
  vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>;
  watchers: UserConnection;
};


export type RepositoryAssignableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<CollaboratorAffiliation>;
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<DeploymentOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryForksArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryIssueArgs = {
  number: Scalars['Int'];
};


export type RepositoryIssueOrPullRequestArgs = {
  number: Scalars['Int'];
};


export type RepositoryIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryLabelArgs = {
  name: Scalars['String'];
};


export type RepositoryLabelsArgs = {
  orderBy?: Maybe<LabelOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


export type RepositoryLanguagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LanguageOrder>;
};


export type RepositoryMentionableUsersArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryMilestoneArgs = {
  number: Scalars['Int'];
};


export type RepositoryMilestonesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<MilestoneState>>;
  orderBy?: Maybe<MilestoneOrder>;
};


export type RepositoryObjectArgs = {
  oid?: Maybe<Scalars['GitObjectID']>;
  expression?: Maybe<Scalars['String']>;
};


export type RepositoryProjectArgs = {
  number: Scalars['Int'];
};


export type RepositoryProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryPullRequestArgs = {
  number: Scalars['Int'];
};


export type RepositoryPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryRefArgs = {
  qualifiedName: Scalars['String'];
};


export type RepositoryRefsArgs = {
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  refPrefix: Scalars['String'];
  direction?: Maybe<OrderDirection>;
  orderBy?: Maybe<RefOrder>;
};


export type RepositoryRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type RepositoryRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type RepositoryReleaseArgs = {
  tagName: Scalars['String'];
};


export type RepositoryReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReleaseOrder>;
};


export type RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RepositoryStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};


export type RepositorySubmodulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryVulnerabilityAlertsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryWatchersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export const RepositoryAffiliation = {
  Owner: 'OWNER',
  Collaborator: 'COLLABORATOR',
  OrganizationMember: 'ORGANIZATION_MEMBER'
} as const;

export type RepositoryAffiliation = typeof RepositoryAffiliation[keyof typeof RepositoryAffiliation];
export type RepositoryAuditEntryData = {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryCollaboratorConnection = {
  edges?: Maybe<Array<Maybe<RepositoryCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryCollaboratorEdge = {
  cursor: Scalars['String'];
  node: User;
  permission: RepositoryPermission;
  permissionSources?: Maybe<Array<PermissionSource>>;
};

export type RepositoryConnection = {
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  totalDiskUsage: Scalars['Int'];
};

export const RepositoryContributionType = {
  Commit: 'COMMIT',
  Issue: 'ISSUE',
  PullRequest: 'PULL_REQUEST',
  Repository: 'REPOSITORY',
  PullRequestReview: 'PULL_REQUEST_REVIEW'
} as const;

export type RepositoryContributionType = typeof RepositoryContributionType[keyof typeof RepositoryContributionType];
export type RepositoryEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Repository>;
};

export type RepositoryInfo = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionHTML: Scalars['HTML'];
  forkCount: Scalars['Int'];
  hasIssuesEnabled: Scalars['Boolean'];
  hasProjectsEnabled: Scalars['Boolean'];
  hasWikiEnabled: Scalars['Boolean'];
  homepageUrl?: Maybe<Scalars['URI']>;
  isArchived: Scalars['Boolean'];
  isFork: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isMirror: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isTemplate: Scalars['Boolean'];
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mirrorUrl?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
  openGraphImageUrl: Scalars['URI'];
  owner: RepositoryOwner;
  pushedAt?: Maybe<Scalars['DateTime']>;
  resourcePath: Scalars['URI'];
  shortDescriptionHTML: Scalars['HTML'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  usesCustomOpenGraphImage: Scalars['Boolean'];
};


export type RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type RepositoryInvitation = Node & {
  id: Scalars['ID'];
  invitee: User;
  inviter: User;
  permission: RepositoryPermission;
  repository?: Maybe<RepositoryInfo>;
};

export type RepositoryInvitationOrder = {
  field: RepositoryInvitationOrderField;
  direction: OrderDirection;
};

export const RepositoryInvitationOrderField = {
  CreatedAt: 'CREATED_AT',
  InviteeLogin: 'INVITEE_LOGIN'
} as const;

export type RepositoryInvitationOrderField = typeof RepositoryInvitationOrderField[keyof typeof RepositoryInvitationOrderField];
export const RepositoryLockReason = {
  Moving: 'MOVING',
  Billing: 'BILLING',
  Rename: 'RENAME',
  Migrating: 'MIGRATING'
} as const;

export type RepositoryLockReason = typeof RepositoryLockReason[keyof typeof RepositoryLockReason];
export type RepositoryNode = {
  repository: Repository;
};

export type RepositoryOrder = {
  field: RepositoryOrderField;
  direction: OrderDirection;
};

export const RepositoryOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  PushedAt: 'PUSHED_AT',
  Name: 'NAME',
  Stargazers: 'STARGAZERS'
} as const;

export type RepositoryOrderField = typeof RepositoryOrderField[keyof typeof RepositoryOrderField];
export type RepositoryOwner = {
  avatarUrl: Scalars['URI'];
  id: Scalars['ID'];
  login: Scalars['String'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};


export type RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type RepositoryOwnerPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type RepositoryOwnerRepositoryArgs = {
  name: Scalars['String'];
};

export const RepositoryPermission = {
  Admin: 'ADMIN',
  Maintain: 'MAINTAIN',
  Write: 'WRITE',
  Triage: 'TRIAGE',
  Read: 'READ'
} as const;

export type RepositoryPermission = typeof RepositoryPermission[keyof typeof RepositoryPermission];
export const RepositoryPrivacy = {
  Public: 'PUBLIC',
  Private: 'PRIVATE'
} as const;

export type RepositoryPrivacy = typeof RepositoryPrivacy[keyof typeof RepositoryPrivacy];
export type RepositoryTopic = Node & UniformResourceLocatable & {
  id: Scalars['ID'];
  resourcePath: Scalars['URI'];
  topic: Topic;
  url: Scalars['URI'];
};

export type RepositoryTopicConnection = {
  edges?: Maybe<Array<Maybe<RepositoryTopicEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryTopic>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryTopicEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RepositoryTopic>;
};

export const RepositoryVisibility = {
  Private: 'PRIVATE',
  Public: 'PUBLIC',
  Internal: 'INTERNAL'
} as const;

export type RepositoryVisibility = typeof RepositoryVisibility[keyof typeof RepositoryVisibility];
export type RepositoryVisibilityChangeDisableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryVisibilityChangeEnableAuditEntry = Node & AuditEntry & EnterpriseAuditEntryData & OrganizationAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  enterpriseResourcePath?: Maybe<Scalars['URI']>;
  enterpriseSlug?: Maybe<Scalars['String']>;
  enterpriseUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type RepositoryVulnerabilityAlert = Node & RepositoryNode & {
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.vulnerableVersionRange` instead. Removal on 2019-10-01 UTC. */
  affectedRange: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dismissReason?: Maybe<Scalars['String']>;
  dismissedAt?: Maybe<Scalars['DateTime']>;
  dismisser?: Maybe<User>;
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.identifiers` instead. Removal on 2019-10-01 UTC. */
  externalIdentifier?: Maybe<Scalars['String']>;
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.references` instead. Removal on 2019-10-01 UTC. */
  externalReference: Scalars['String'];
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.firstPatchedVersion` instead. Removal on 2019-10-01 UTC. */
  fixedIn?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.package` instead. Removal on 2019-10-01 UTC. */
  packageName: Scalars['String'];
  repository: Repository;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerability?: Maybe<SecurityVulnerability>;
  vulnerableManifestFilename: Scalars['String'];
  vulnerableManifestPath: Scalars['String'];
  vulnerableRequirements?: Maybe<Scalars['String']>;
};

export type RepositoryVulnerabilityAlertConnection = {
  edges?: Maybe<Array<Maybe<RepositoryVulnerabilityAlertEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryVulnerabilityAlert>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepositoryVulnerabilityAlertEdge = {
  cursor: Scalars['String'];
  node?: Maybe<RepositoryVulnerabilityAlert>;
};

export type RequestedReviewer = Mannequin | Team | User;

export type RequestReviewsInput = {
  pullRequestId: Scalars['ID'];
  userIds?: Maybe<Array<Scalars['ID']>>;
  teamIds?: Maybe<Array<Scalars['ID']>>;
  union?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RequestReviewsPayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
  requestedReviewersEdge?: Maybe<UserEdge>;
};

export type ResolveReviewThreadInput = {
  threadId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ResolveReviewThreadPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type RestrictedContribution = Contribution & {
  isRestricted: Scalars['Boolean'];
  occurredAt: Scalars['DateTime'];
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
  user: User;
};

export type ReviewDismissalAllowance = Node & {
  actor?: Maybe<ReviewDismissalAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars['ID'];
};

export type ReviewDismissalAllowanceActor = Team | User;

export type ReviewDismissalAllowanceConnection = {
  edges?: Maybe<Array<Maybe<ReviewDismissalAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewDismissalAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewDismissalAllowanceEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ReviewDismissalAllowance>;
};

export type ReviewDismissedEvent = Node & UniformResourceLocatable & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  dismissalMessage?: Maybe<Scalars['String']>;
  dismissalMessageHTML?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  previousReviewState: PullRequestReviewState;
  pullRequest: PullRequest;
  pullRequestCommit?: Maybe<PullRequestCommit>;
  resourcePath: Scalars['URI'];
  review?: Maybe<PullRequestReview>;
  url: Scalars['URI'];
};

export type ReviewRequest = Node & {
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestConnection = {
  edges?: Maybe<Array<Maybe<ReviewRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewRequestedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestEdge = {
  cursor: Scalars['String'];
  node?: Maybe<ReviewRequest>;
};

export type ReviewRequestRemovedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewStatusHovercardContext = HovercardContext & {
  message: Scalars['String'];
  octicon: Scalars['String'];
  reviewDecision?: Maybe<PullRequestReviewDecision>;
};

export const SamlDigestAlgorithm = {
  Sha1: 'SHA1',
  Sha256: 'SHA256',
  Sha384: 'SHA384',
  Sha512: 'SHA512'
} as const;

export type SamlDigestAlgorithm = typeof SamlDigestAlgorithm[keyof typeof SamlDigestAlgorithm];
export const SamlSignatureAlgorithm = {
  RsaSha1: 'RSA_SHA1',
  RsaSha256: 'RSA_SHA256',
  RsaSha384: 'RSA_SHA384',
  RsaSha512: 'RSA_SHA512'
} as const;

export type SamlSignatureAlgorithm = typeof SamlSignatureAlgorithm[keyof typeof SamlSignatureAlgorithm];
export type SavedReply = Node & {
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  user?: Maybe<Actor>;
};

export type SavedReplyConnection = {
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>;
  nodes?: Maybe<Array<Maybe<SavedReply>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SavedReplyEdge = {
  cursor: Scalars['String'];
  node?: Maybe<SavedReply>;
};

export type SavedReplyOrder = {
  field: SavedReplyOrderField;
  direction: OrderDirection;
};

export const SavedReplyOrderField = {
  UpdatedAt: 'UPDATED_AT'
} as const;

export type SavedReplyOrderField = typeof SavedReplyOrderField[keyof typeof SavedReplyOrderField];
export type SearchResultItem = App | Issue | MarketplaceListing | Organization | PullRequest | Repository | User;

export type SearchResultItemConnection = {
  codeCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
  issueCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<SearchResultItem>>>;
  pageInfo: PageInfo;
  repositoryCount: Scalars['Int'];
  userCount: Scalars['Int'];
  wikiCount: Scalars['Int'];
};

export type SearchResultItemEdge = {
  cursor: Scalars['String'];
  node?: Maybe<SearchResultItem>;
  textMatches?: Maybe<Array<Maybe<TextMatch>>>;
};

export const SearchType = {
  Issue: 'ISSUE',
  Repository: 'REPOSITORY',
  User: 'USER'
} as const;

export type SearchType = typeof SearchType[keyof typeof SearchType];
export type SecurityAdvisory = Node & {
  databaseId?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  ghsaId: Scalars['String'];
  id: Scalars['ID'];
  identifiers: Array<SecurityAdvisoryIdentifier>;
  origin: Scalars['String'];
  permalink?: Maybe<Scalars['URI']>;
  publishedAt: Scalars['DateTime'];
  references: Array<SecurityAdvisoryReference>;
  severity: SecurityAdvisorySeverity;
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vulnerabilities: SecurityVulnerabilityConnection;
  withdrawnAt?: Maybe<Scalars['DateTime']>;
};


export type SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars['String']>;
  severities?: Maybe<Array<SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SecurityAdvisoryConnection = {
  edges?: Maybe<Array<Maybe<SecurityAdvisoryEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityAdvisory>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export const SecurityAdvisoryEcosystem = {
  Rubygems: 'RUBYGEMS',
  Npm: 'NPM',
  Pip: 'PIP',
  Maven: 'MAVEN',
  Nuget: 'NUGET',
  Composer: 'COMPOSER'
} as const;

export type SecurityAdvisoryEcosystem = typeof SecurityAdvisoryEcosystem[keyof typeof SecurityAdvisoryEcosystem];
export type SecurityAdvisoryEdge = {
  cursor: Scalars['String'];
  node?: Maybe<SecurityAdvisory>;
};

export type SecurityAdvisoryIdentifier = {
  type: Scalars['String'];
  value: Scalars['String'];
};

export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType;
  value: Scalars['String'];
};

export const SecurityAdvisoryIdentifierType = {
  Cve: 'CVE',
  Ghsa: 'GHSA'
} as const;

export type SecurityAdvisoryIdentifierType = typeof SecurityAdvisoryIdentifierType[keyof typeof SecurityAdvisoryIdentifierType];
export type SecurityAdvisoryOrder = {
  field: SecurityAdvisoryOrderField;
  direction: OrderDirection;
};

export const SecurityAdvisoryOrderField = {
  PublishedAt: 'PUBLISHED_AT',
  UpdatedAt: 'UPDATED_AT'
} as const;

export type SecurityAdvisoryOrderField = typeof SecurityAdvisoryOrderField[keyof typeof SecurityAdvisoryOrderField];
export type SecurityAdvisoryPackage = {
  ecosystem: SecurityAdvisoryEcosystem;
  name: Scalars['String'];
};

export type SecurityAdvisoryPackageVersion = {
  identifier: Scalars['String'];
};

export type SecurityAdvisoryReference = {
  url: Scalars['URI'];
};

export const SecurityAdvisorySeverity = {
  Low: 'LOW',
  Moderate: 'MODERATE',
  High: 'HIGH',
  Critical: 'CRITICAL'
} as const;

export type SecurityAdvisorySeverity = typeof SecurityAdvisorySeverity[keyof typeof SecurityAdvisorySeverity];
export type SecurityVulnerability = {
  advisory: SecurityAdvisory;
  firstPatchedVersion?: Maybe<SecurityAdvisoryPackageVersion>;
  package: SecurityAdvisoryPackage;
  severity: SecurityAdvisorySeverity;
  updatedAt: Scalars['DateTime'];
  vulnerableVersionRange: Scalars['String'];
};

export type SecurityVulnerabilityConnection = {
  edges?: Maybe<Array<Maybe<SecurityVulnerabilityEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityVulnerability>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SecurityVulnerabilityEdge = {
  cursor: Scalars['String'];
  node?: Maybe<SecurityVulnerability>;
};

export type SecurityVulnerabilityOrder = {
  field: SecurityVulnerabilityOrderField;
  direction: OrderDirection;
};

export const SecurityVulnerabilityOrderField = {
  UpdatedAt: 'UPDATED_AT'
} as const;

export type SecurityVulnerabilityOrderField = typeof SecurityVulnerabilityOrderField[keyof typeof SecurityVulnerabilityOrderField];
export type SetEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'];
  ssoUrl: Scalars['URI'];
  issuer?: Maybe<Scalars['String']>;
  idpCertificate: Scalars['String'];
  signatureMethod: SamlSignatureAlgorithm;
  digestMethod: SamlDigestAlgorithm;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SetEnterpriseIdentityProviderPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type SmimeSignature = GitSignature & {
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type Sponsorable = {
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
};


export type SponsorableSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type SponsorableSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};

export type Sponsorship = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC. */
  maintainer: User;
  privacyLevel: SponsorshipPrivacy;
  sponsor?: Maybe<User>;
  sponsorable: Sponsorable;
  tier?: Maybe<SponsorsTier>;
};

export type SponsorshipConnection = {
  edges?: Maybe<Array<Maybe<SponsorshipEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsorship>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SponsorshipEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Sponsorship>;
};

export type SponsorshipOrder = {
  field: SponsorshipOrderField;
  direction: OrderDirection;
};

export const SponsorshipOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type SponsorshipOrderField = typeof SponsorshipOrderField[keyof typeof SponsorshipOrderField];
export const SponsorshipPrivacy = {
  Public: 'PUBLIC',
  Private: 'PRIVATE'
} as const;

export type SponsorshipPrivacy = typeof SponsorshipPrivacy[keyof typeof SponsorshipPrivacy];
export type SponsorsListing = Node & {
  createdAt: Scalars['DateTime'];
  fullDescription: Scalars['String'];
  fullDescriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  tiers?: Maybe<SponsorsTierConnection>;
};


export type SponsorsListingTiersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorsTierOrder>;
};

export type SponsorsTier = Node & {
  adminInfo?: Maybe<SponsorsTierAdminInfo>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  descriptionHTML: Scalars['HTML'];
  id: Scalars['ID'];
  monthlyPriceInCents: Scalars['Int'];
  monthlyPriceInDollars: Scalars['Int'];
  name: Scalars['String'];
  sponsorsListing: SponsorsListing;
  updatedAt: Scalars['DateTime'];
};

export type SponsorsTierAdminInfo = {
  sponsorships: SponsorshipConnection;
};


export type SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};

export type SponsorsTierConnection = {
  edges?: Maybe<Array<Maybe<SponsorsTierEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsTier>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SponsorsTierEdge = {
  cursor: Scalars['String'];
  node?: Maybe<SponsorsTier>;
};

export type SponsorsTierOrder = {
  field: SponsorsTierOrderField;
  direction: OrderDirection;
};

export const SponsorsTierOrderField = {
  CreatedAt: 'CREATED_AT',
  MonthlyPriceInCents: 'MONTHLY_PRICE_IN_CENTS'
} as const;

export type SponsorsTierOrderField = typeof SponsorsTierOrderField[keyof typeof SponsorsTierOrderField];
export type StargazerConnection = {
  edges?: Maybe<Array<Maybe<StargazerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StargazerEdge = {
  cursor: Scalars['String'];
  node: User;
  starredAt: Scalars['DateTime'];
};

export type StarOrder = {
  field: StarOrderField;
  direction: OrderDirection;
};

export const StarOrderField = {
  StarredAt: 'STARRED_AT'
} as const;

export type StarOrderField = typeof StarOrderField[keyof typeof StarOrderField];
export type Starrable = {
  id: Scalars['ID'];
  stargazers: StargazerConnection;
  viewerHasStarred: Scalars['Boolean'];
};


export type StarrableStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type StarredRepositoryConnection = {
  edges?: Maybe<Array<Maybe<StarredRepositoryEdge>>>;
  isOverLimit: Scalars['Boolean'];
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StarredRepositoryEdge = {
  cursor: Scalars['String'];
  node: Repository;
  starredAt: Scalars['DateTime'];
};

export type Status = Node & {
  commit?: Maybe<Commit>;
  context?: Maybe<StatusContext>;
  contexts: Array<StatusContext>;
  id: Scalars['ID'];
  state: StatusState;
};


export type StatusContextArgs = {
  name: Scalars['String'];
};

export type StatusCheckRollup = Node & {
  commit?: Maybe<Commit>;
  contexts: StatusCheckRollupContextConnection;
  id: Scalars['ID'];
  state: StatusState;
};


export type StatusCheckRollupContextsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StatusCheckRollupContext = StatusContext;

export type StatusCheckRollupContextConnection = {
  edges?: Maybe<Array<Maybe<StatusCheckRollupContextEdge>>>;
  nodes?: Maybe<Array<Maybe<StatusCheckRollupContext>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StatusCheckRollupContextEdge = {
  cursor: Scalars['String'];
  node?: Maybe<StatusCheckRollupContext>;
};

export type StatusContext = Node & {
  avatarUrl?: Maybe<Scalars['URI']>;
  commit?: Maybe<Commit>;
  context: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Actor>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  state: StatusState;
  targetUrl?: Maybe<Scalars['URI']>;
};


export type StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export const StatusState = {
  Expected: 'EXPECTED',
  Error: 'ERROR',
  Failure: 'FAILURE',
  Pending: 'PENDING',
  Success: 'SUCCESS'
} as const;

export type StatusState = typeof StatusState[keyof typeof StatusState];
export type SubmitPullRequestReviewInput = {
  pullRequestId?: Maybe<Scalars['ID']>;
  pullRequestReviewId?: Maybe<Scalars['ID']>;
  event: PullRequestReviewEvent;
  body?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SubmitPullRequestReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type Submodule = {
  branch?: Maybe<Scalars['String']>;
  gitUrl: Scalars['URI'];
  name: Scalars['String'];
  path: Scalars['String'];
  subprojectCommitOid?: Maybe<Scalars['GitObjectID']>;
};

export type SubmoduleConnection = {
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>;
  nodes?: Maybe<Array<Maybe<Submodule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubmoduleEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Submodule>;
};

export type Subscribable = {
  id: Scalars['ID'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};

export type SubscribedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subscribable: Subscribable;
};

export const SubscriptionState = {
  Unsubscribed: 'UNSUBSCRIBED',
  Subscribed: 'SUBSCRIBED',
  Ignored: 'IGNORED'
} as const;

export type SubscriptionState = typeof SubscriptionState[keyof typeof SubscriptionState];
export type SuggestedReviewer = {
  isAuthor: Scalars['Boolean'];
  isCommenter: Scalars['Boolean'];
  reviewer: User;
};

export type Tag = Node & GitObject & {
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
  tagger?: Maybe<GitActor>;
  target: GitObject;
};

export type Team = Node & Subscribable & MemberStatusable & {
  ancestors: TeamConnection;
  avatarUrl?: Maybe<Scalars['URI']>;
  childTeams: TeamConnection;
  combinedSlug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discussion?: Maybe<TeamDiscussion>;
  discussions: TeamDiscussionConnection;
  discussionsResourcePath: Scalars['URI'];
  discussionsUrl: Scalars['URI'];
  editTeamResourcePath: Scalars['URI'];
  editTeamUrl: Scalars['URI'];
  id: Scalars['ID'];
  invitations?: Maybe<OrganizationInvitationConnection>;
  memberStatuses: UserStatusConnection;
  members: TeamMemberConnection;
  membersResourcePath: Scalars['URI'];
  membersUrl: Scalars['URI'];
  name: Scalars['String'];
  newTeamResourcePath: Scalars['URI'];
  newTeamUrl: Scalars['URI'];
  organization: Organization;
  parentTeam?: Maybe<Team>;
  privacy: TeamPrivacy;
  repositories: TeamRepositoryConnection;
  repositoriesResourcePath: Scalars['URI'];
  repositoriesUrl: Scalars['URI'];
  resourcePath: Scalars['URI'];
  slug: Scalars['String'];
  teamsResourcePath: Scalars['URI'];
  teamsUrl: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanAdminister: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type TeamAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type TeamChildTeamsArgs = {
  orderBy?: Maybe<TeamOrder>;
  userLogins?: Maybe<Array<Scalars['String']>>;
  immediateOnly?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamDiscussionArgs = {
  number: Scalars['Int'];
};


export type TeamDiscussionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<TeamDiscussionOrder>;
};


export type TeamInvitationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserStatusOrder>;
};


export type TeamMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  membership?: Maybe<TeamMembershipType>;
  role?: Maybe<TeamMemberRole>;
  orderBy?: Maybe<TeamMemberOrder>;
};


export type TeamRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  orderBy?: Maybe<TeamRepositoryOrder>;
};

export type TeamAddMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamAddRepositoryAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamAuditEntryData = {
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
};

export type TeamChangeParentTeamAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  parentTeam?: Maybe<Team>;
  parentTeamName?: Maybe<Scalars['String']>;
  parentTeamNameWas?: Maybe<Scalars['String']>;
  parentTeamResourcePath?: Maybe<Scalars['URI']>;
  parentTeamUrl?: Maybe<Scalars['URI']>;
  parentTeamWas?: Maybe<Team>;
  parentTeamWasResourcePath?: Maybe<Scalars['URI']>;
  parentTeamWasUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamConnection = {
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussion = Node & Comment & Deletable & Reactable & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  bodyVersion: Scalars['String'];
  comments: TeamDiscussionCommentConnection;
  commentsResourcePath: Scalars['URI'];
  commentsUrl: Scalars['URI'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  isPinned: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  number: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: Scalars['URI'];
  team: Team;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanPin: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanSubscribe: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
  viewerSubscription?: Maybe<SubscriptionState>;
};


export type TeamDiscussionCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamDiscussionCommentOrder>;
  fromComment?: Maybe<Scalars['Int']>;
};


export type TeamDiscussionReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type TeamDiscussionUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TeamDiscussionComment = Node & Comment & Deletable & Reactable & UniformResourceLocatable & Updatable & UpdatableComment & {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars['String'];
  bodyHTML: Scalars['HTML'];
  bodyText: Scalars['String'];
  bodyVersion: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaEmail: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['Int']>;
  discussion: TeamDiscussion;
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  includesCreatedEdit: Scalars['Boolean'];
  lastEditedAt?: Maybe<Scalars['DateTime']>;
  number: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: Scalars['URI'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Scalars['Boolean'];
  viewerCanReact: Scalars['Boolean'];
  viewerCanUpdate: Scalars['Boolean'];
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Scalars['Boolean'];
};


export type TeamDiscussionCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  content?: Maybe<ReactionContent>;
  orderBy?: Maybe<ReactionOrder>;
};


export type TeamDiscussionCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TeamDiscussionCommentConnection = {
  edges?: Maybe<Array<Maybe<TeamDiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussionCommentEdge = {
  cursor: Scalars['String'];
  node?: Maybe<TeamDiscussionComment>;
};

export type TeamDiscussionCommentOrder = {
  field: TeamDiscussionCommentOrderField;
  direction: OrderDirection;
};

export const TeamDiscussionCommentOrderField = {
  Number: 'NUMBER'
} as const;

export type TeamDiscussionCommentOrderField = typeof TeamDiscussionCommentOrderField[keyof typeof TeamDiscussionCommentOrderField];
export type TeamDiscussionConnection = {
  edges?: Maybe<Array<Maybe<TeamDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamDiscussionEdge = {
  cursor: Scalars['String'];
  node?: Maybe<TeamDiscussion>;
};

export type TeamDiscussionOrder = {
  field: TeamDiscussionOrderField;
  direction: OrderDirection;
};

export const TeamDiscussionOrderField = {
  CreatedAt: 'CREATED_AT'
} as const;

export type TeamDiscussionOrderField = typeof TeamDiscussionOrderField[keyof typeof TeamDiscussionOrderField];
export type TeamEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Team>;
};

export type TeamMemberConnection = {
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamMemberEdge = {
  cursor: Scalars['String'];
  memberAccessResourcePath: Scalars['URI'];
  memberAccessUrl: Scalars['URI'];
  node: User;
  role: TeamMemberRole;
};

export type TeamMemberOrder = {
  field: TeamMemberOrderField;
  direction: OrderDirection;
};

export const TeamMemberOrderField = {
  Login: 'LOGIN',
  CreatedAt: 'CREATED_AT'
} as const;

export type TeamMemberOrderField = typeof TeamMemberOrderField[keyof typeof TeamMemberOrderField];
export const TeamMemberRole = {
  Maintainer: 'MAINTAINER',
  Member: 'MEMBER'
} as const;

export type TeamMemberRole = typeof TeamMemberRole[keyof typeof TeamMemberRole];
export const TeamMembershipType = {
  Immediate: 'IMMEDIATE',
  ChildTeam: 'CHILD_TEAM',
  All: 'ALL'
} as const;

export type TeamMembershipType = typeof TeamMembershipType[keyof typeof TeamMembershipType];
export type TeamOrder = {
  field: TeamOrderField;
  direction: OrderDirection;
};

export const TeamOrderField = {
  Name: 'NAME'
} as const;

export type TeamOrderField = typeof TeamOrderField[keyof typeof TeamOrderField];
export const TeamPrivacy = {
  Secret: 'SECRET',
  Visible: 'VISIBLE'
} as const;

export type TeamPrivacy = typeof TeamPrivacy[keyof typeof TeamPrivacy];
export type TeamRemoveMemberAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & TeamAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamRemoveRepositoryAuditEntry = Node & AuditEntry & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData & {
  action: Scalars['String'];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars['String']>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars['String']>;
  actorResourcePath?: Maybe<Scalars['URI']>;
  actorUrl?: Maybe<Scalars['URI']>;
  createdAt: Scalars['PreciseDateTime'];
  id: Scalars['ID'];
  isLdapMapped?: Maybe<Scalars['Boolean']>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars['String']>;
  organizationResourcePath?: Maybe<Scalars['URI']>;
  organizationUrl?: Maybe<Scalars['URI']>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryResourcePath?: Maybe<Scalars['URI']>;
  repositoryUrl?: Maybe<Scalars['URI']>;
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars['String']>;
  teamResourcePath?: Maybe<Scalars['URI']>;
  teamUrl?: Maybe<Scalars['URI']>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars['String']>;
  userResourcePath?: Maybe<Scalars['URI']>;
  userUrl?: Maybe<Scalars['URI']>;
};

export type TeamRepositoryConnection = {
  edges?: Maybe<Array<Maybe<TeamRepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamRepositoryEdge = {
  cursor: Scalars['String'];
  node: Repository;
  permission: RepositoryPermission;
};

export type TeamRepositoryOrder = {
  field: TeamRepositoryOrderField;
  direction: OrderDirection;
};

export const TeamRepositoryOrderField = {
  CreatedAt: 'CREATED_AT',
  UpdatedAt: 'UPDATED_AT',
  PushedAt: 'PUSHED_AT',
  Name: 'NAME',
  Permission: 'PERMISSION',
  Stargazers: 'STARGAZERS'
} as const;

export type TeamRepositoryOrderField = typeof TeamRepositoryOrderField[keyof typeof TeamRepositoryOrderField];
export const TeamRole = {
  Admin: 'ADMIN',
  Member: 'MEMBER'
} as const;

export type TeamRole = typeof TeamRole[keyof typeof TeamRole];
export type TextMatch = {
  fragment: Scalars['String'];
  highlights: Array<TextMatchHighlight>;
  property: Scalars['String'];
};

export type TextMatchHighlight = {
  beginIndice: Scalars['Int'];
  endIndice: Scalars['Int'];
  text: Scalars['String'];
};

export type Topic = Node & Starrable & {
  id: Scalars['ID'];
  name: Scalars['String'];
  relatedTopics: Array<Topic>;
  stargazers: StargazerConnection;
  viewerHasStarred: Scalars['Boolean'];
};


export type TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
};


export type TopicStargazersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StarOrder>;
};

export type TopicAuditEntryData = {
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars['String']>;
};

export type TopicConnection = {
  edges?: Maybe<Array<Maybe<TopicEdge>>>;
  nodes?: Maybe<Array<Maybe<Topic>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TopicEdge = {
  cursor: Scalars['String'];
  node?: Maybe<Topic>;
};

export const TopicSuggestionDeclineReason = {
  NotRelevant: 'NOT_RELEVANT',
  TooSpecific: 'TOO_SPECIFIC',
  PersonalPreference: 'PERSONAL_PREFERENCE',
  TooGeneral: 'TOO_GENERAL'
} as const;

export type TopicSuggestionDeclineReason = typeof TopicSuggestionDeclineReason[keyof typeof TopicSuggestionDeclineReason];
export type TransferIssueInput = {
  issueId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TransferIssuePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type TransferredEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  fromRepository?: Maybe<Repository>;
  id: Scalars['ID'];
  issue: Issue;
};

export type Tree = Node & GitObject & {
  abbreviatedOid: Scalars['String'];
  commitResourcePath: Scalars['URI'];
  commitUrl: Scalars['URI'];
  entries?: Maybe<Array<TreeEntry>>;
  id: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  repository: Repository;
};

export type TreeEntry = {
  mode: Scalars['Int'];
  name: Scalars['String'];
  object?: Maybe<GitObject>;
  oid: Scalars['GitObjectID'];
  repository: Repository;
  submodule?: Maybe<Submodule>;
  type: Scalars['String'];
};

export type UnarchiveRepositoryInput = {
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnarchiveRepositoryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type UnassignedEvent = Node & {
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type UnfollowUserInput = {
  userId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnfollowUserPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UniformResourceLocatable = {
  resourcePath: Scalars['URI'];
  url: Scalars['URI'];
};

export type UnknownSignature = GitSignature & {
  email: Scalars['String'];
  isValid: Scalars['Boolean'];
  payload: Scalars['String'];
  signature: Scalars['String'];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars['Boolean'];
};

export type UnlabeledEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  label: Label;
  labelable: Labelable;
};

export type UnlinkRepositoryFromProjectInput = {
  projectId: Scalars['ID'];
  repositoryId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnlinkRepositoryFromProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type UnlockedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lockable: Lockable;
};

export type UnlockLockableInput = {
  lockableId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnlockLockablePayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  unlockedRecord?: Maybe<Lockable>;
};

export type UnmarkedAsDuplicateEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type UnmarkIssueAsDuplicateInput = {
  duplicateId: Scalars['ID'];
  canonicalId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnmarkIssueAsDuplicatePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  duplicate?: Maybe<IssueOrPullRequest>;
};

export type UnminimizeCommentInput = {
  subjectId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnminimizeCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  unminimizedComment?: Maybe<Minimizable>;
};

export type UnpinnedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Issue;
};

export type UnresolveReviewThreadInput = {
  threadId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnresolveReviewThreadPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type UnsubscribedEvent = Node & {
  actor?: Maybe<Actor>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subscribable: Subscribable;
};

export type Updatable = {
  viewerCanUpdate: Scalars['Boolean'];
};

export type UpdatableComment = {
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
};

export type UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'];
  pattern?: Maybe<Scalars['String']>;
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>;
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>;
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>;
  isAdminEnforced?: Maybe<Scalars['Boolean']>;
  requiresStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>;
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>;
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>;
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>;
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>;
  restrictsPushes?: Maybe<Scalars['Boolean']>;
  pushActorIds?: Maybe<Array<Scalars['ID']>>;
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateBranchProtectionRulePayload = {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  enterpriseId: Scalars['ID'];
  capability: ActionExecutionCapabilitySetting;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: Scalars['ID'];
  login: Scalars['String'];
  role: EnterpriseAdministratorRole;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAdministratorRolePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Scalars['Boolean']>;
  membersCanCreatePublicRepositories?: Maybe<Scalars['Boolean']>;
  membersCanCreatePrivateRepositories?: Maybe<Scalars['Boolean']>;
  membersCanCreateInternalRepositories?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseOrganizationProjectsSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseProfileInput = {
  enterpriseId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseProfilePayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
};

export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseRepositoryProjectsSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTeamDiscussionsSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: Scalars['ID'];
  settingValue: EnterpriseEnabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEnabledSettingInput = {
  ownerId: Scalars['ID'];
  settingValue: IpAllowListEnabledSettingValue;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEnabledSettingPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  owner?: Maybe<IpAllowListOwner>;
};

export type UpdateIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'];
  allowListValue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIpAllowListEntryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type UpdateIssueCommentInput = {
  id: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIssueCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  issueComment?: Maybe<IssueComment>;
};

export type UpdateIssueInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  state?: Maybe<IssueState>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateIssuePayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  issue?: Maybe<Issue>;
};

export type UpdateProjectCardInput = {
  projectCardId: Scalars['ID'];
  isArchived?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectCardPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  projectCard?: Maybe<ProjectCard>;
};

export type UpdateProjectColumnInput = {
  projectColumnId: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectColumnPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type UpdateProjectInput = {
  projectId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  state?: Maybe<ProjectState>;
  public?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProjectPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type UpdatePullRequestInput = {
  pullRequestId: Scalars['ID'];
  baseRefName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  state?: Maybe<PullRequestUpdateState>;
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  assigneeIds?: Maybe<Array<Scalars['ID']>>;
  milestoneId?: Maybe<Scalars['ID']>;
  labelIds?: Maybe<Array<Scalars['ID']>>;
  projectIds?: Maybe<Array<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestPayload = {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<PullRequest>;
};

export type UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestReviewCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
};

export type UpdatePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'];
  body: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestReviewPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type UpdateRefInput = {
  refId: Scalars['ID'];
  oid: Scalars['GitObjectID'];
  force?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRefPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  ref?: Maybe<Ref>;
};

export type UpdateRepositoryInput = {
  repositoryId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['Boolean']>;
  homepageUrl?: Maybe<Scalars['URI']>;
  hasWikiEnabled?: Maybe<Scalars['Boolean']>;
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>;
  hasProjectsEnabled?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRepositoryPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  repository?: Maybe<Repository>;
};

export type UpdateSubscriptionInput = {
  subscribableId: Scalars['ID'];
  state: SubscriptionState;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateSubscriptionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  subscribable?: Maybe<Subscribable>;
};

export type UpdateTeamDiscussionCommentInput = {
  id: Scalars['ID'];
  body: Scalars['String'];
  bodyVersion?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTeamDiscussionCommentPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type UpdateTeamDiscussionInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bodyVersion?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTeamDiscussionPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type UpdateTopicsInput = {
  repositoryId: Scalars['ID'];
  topicNames: Array<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTopicsPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
  invalidTopicNames?: Maybe<Array<Scalars['String']>>;
  repository?: Maybe<Repository>;
};


export type User = Node & Actor & RegistryPackageOwner & RegistryPackageSearch & ProjectOwner & RepositoryOwner & UniformResourceLocatable & ProfileOwner & Sponsorable & {
  anyPinnableItems: Scalars['Boolean'];
  avatarUrl: Scalars['URI'];
  bio?: Maybe<Scalars['String']>;
  bioHTML: Scalars['HTML'];
  commitComments: CommitCommentConnection;
  company?: Maybe<Scalars['String']>;
  companyHTML: Scalars['HTML'];
  contributionsCollection: ContributionsCollection;
  createdAt: Scalars['DateTime'];
  databaseId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  followers: FollowerConnection;
  following: FollowingConnection;
  gist?: Maybe<Gist>;
  gistComments: GistCommentConnection;
  gists: GistConnection;
  hovercard: Hovercard;
  id: Scalars['ID'];
  isBountyHunter: Scalars['Boolean'];
  isCampusExpert: Scalars['Boolean'];
  isDeveloperProgramMember: Scalars['Boolean'];
  isEmployee: Scalars['Boolean'];
  isHireable: Scalars['Boolean'];
  isSiteAdmin: Scalars['Boolean'];
  isViewer: Scalars['Boolean'];
  issueComments: IssueCommentConnection;
  issues: IssueConnection;
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizations: OrganizationConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars['Int'];
  /** @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC. */
  pinnedRepositories: RepositoryConnection;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars['URI'];
  projectsUrl: Scalars['URI'];
  publicKeys: PublicKeyConnection;
  pullRequests: PullRequestConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageOwner` object instead. Removal on 2020-04-01 UTC. */
  registryPackages: RegistryPackageConnection;
  /** @deprecated Renaming GitHub Packages fields and objects. Use the `PackageSearch` object instead. Removal on 2020-04-01 UTC. */
  registryPackagesForQuery: RegistryPackageConnection;
  repositories: RepositoryConnection;
  repositoriesContributedTo: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: Scalars['URI'];
  savedReplies?: Maybe<SavedReplyConnection>;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  starredRepositories: StarredRepositoryConnection;
  status?: Maybe<UserStatus>;
  topRepositories: RepositoryConnection;
  updatedAt: Scalars['DateTime'];
  url: Scalars['URI'];
  viewerCanChangePinnedItems: Scalars['Boolean'];
  viewerCanCreateProjects: Scalars['Boolean'];
  viewerCanFollow: Scalars['Boolean'];
  viewerIsFollowing: Scalars['Boolean'];
  watching: RepositoryConnection;
  websiteUrl?: Maybe<Scalars['URI']>;
};


export type UserAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>;
};


export type UserAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type UserCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars['ID']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};


export type UserFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserGistArgs = {
  name: Scalars['String'];
};


export type UserGistCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserGistsArgs = {
  privacy?: Maybe<GistPrivacy>;
  orderBy?: Maybe<GistOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserHovercardArgs = {
  primarySubjectId?: Maybe<Scalars['ID']>;
};


export type UserIssueCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserIssuesArgs = {
  orderBy?: Maybe<IssueOrder>;
  labels?: Maybe<Array<Scalars['String']>>;
  states?: Maybe<Array<IssueState>>;
  filterBy?: Maybe<IssueFilters>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserOrganizationArgs = {
  login: Scalars['String'];
};


export type UserOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnableItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnedItemsArgs = {
  types?: Maybe<Array<PinnableItemType>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPinnedRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserProjectArgs = {
  number: Scalars['Int'];
};


export type UserProjectsArgs = {
  orderBy?: Maybe<ProjectOrder>;
  search?: Maybe<Scalars['String']>;
  states?: Maybe<Array<ProjectState>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPublicKeysArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPullRequestsArgs = {
  states?: Maybe<Array<PullRequestState>>;
  labels?: Maybe<Array<Scalars['String']>>;
  headRefName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IssueOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  repositoryId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<RegistryPackageType>;
  registryPackageType?: Maybe<Scalars['String']>;
  publicOnly?: Maybe<Scalars['Boolean']>;
};


export type UserRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  packageType?: Maybe<RegistryPackageType>;
};


export type UserRepositoriesArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isFork?: Maybe<Scalars['Boolean']>;
};


export type UserRepositoriesContributedToArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  isLocked?: Maybe<Scalars['Boolean']>;
  includeUserRepositories?: Maybe<Scalars['Boolean']>;
  contributionTypes?: Maybe<Array<Maybe<RepositoryContributionType>>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRepositoryArgs = {
  name: Scalars['String'];
};


export type UserSavedRepliesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedReplyOrder>;
};


export type UserSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type UserSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SponsorshipOrder>;
};


export type UserStarredRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  ownedByViewer?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<StarOrder>;
};


export type UserTopRepositoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy: RepositoryOrder;
  since?: Maybe<Scalars['DateTime']>;
};


export type UserWatchingArgs = {
  privacy?: Maybe<RepositoryPrivacy>;
  orderBy?: Maybe<RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export const UserBlockDuration = {
  OneDay: 'ONE_DAY',
  ThreeDays: 'THREE_DAYS',
  OneWeek: 'ONE_WEEK',
  OneMonth: 'ONE_MONTH',
  Permanent: 'PERMANENT'
} as const;

export type UserBlockDuration = typeof UserBlockDuration[keyof typeof UserBlockDuration];
export type UserBlockedEvent = Node & {
  actor?: Maybe<Actor>;
  blockDuration: UserBlockDuration;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subject?: Maybe<User>;
};

export type UserConnection = {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserContentEdit = Node & {
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Actor>;
  diff?: Maybe<Scalars['String']>;
  editedAt: Scalars['DateTime'];
  editor?: Maybe<Actor>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserContentEditConnection = {
  edges?: Maybe<Array<Maybe<UserContentEditEdge>>>;
  nodes?: Maybe<Array<Maybe<UserContentEdit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserContentEditEdge = {
  cursor: Scalars['String'];
  node?: Maybe<UserContentEdit>;
};

export type UserEdge = {
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserStatus = Node & {
  createdAt: Scalars['DateTime'];
  emoji?: Maybe<Scalars['String']>;
  emojiHTML?: Maybe<Scalars['HTML']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  indicatesLimitedAvailability: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UserStatusConnection = {
  edges?: Maybe<Array<Maybe<UserStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<UserStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserStatusEdge = {
  cursor: Scalars['String'];
  node?: Maybe<UserStatus>;
};

export type UserStatusOrder = {
  field: UserStatusOrderField;
  direction: OrderDirection;
};

export const UserStatusOrderField = {
  UpdatedAt: 'UPDATED_AT'
} as const;

export type UserStatusOrderField = typeof UserStatusOrderField[keyof typeof UserStatusOrderField];
export type ViewerHovercardContext = HovercardContext & {
  message: Scalars['String'];
  octicon: Scalars['String'];
  viewer: User;
};


/** LocalDemoで使用する */
export type You = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  blood?: Maybe<BloodTypes>;
};

export type YouInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  blood?: Maybe<BloodTypes>;
};

export type CreateDxInfoMutationVariables = {
  input: PageInput;
};


export type CreateDxInfoMutation = { updatePage?: Maybe<Pick<Page, 'heading'>> };

export type CreateErrorHandlingInfoMutationVariables = {
  input: PageInput;
};


export type CreateErrorHandlingInfoMutation = { updatePage?: Maybe<Pick<Page, 'heading'>> };

export type CreateHomeInfoMutationVariables = {
  input: PageInput;
};


export type CreateHomeInfoMutation = { updatePage?: Maybe<Pick<Page, 'heading'>> };

export type UpdateLocalStateDemoEditMutationVariables = {
  input: YouInput;
};


export type UpdateLocalStateDemoEditMutation = { updateYou?: Maybe<Pick<You, 'name' | 'age' | 'blood'>> };

export type LocalStateDemoQueryVariables = {};


export type LocalStateDemoQuery = { you?: Maybe<Pick<You, 'name' | 'age' | 'blood'>> };

export type CreateLocalStateInfoMutationVariables = {
  input: PageInput;
};


export type CreateLocalStateInfoMutation = { updatePage?: Maybe<Pick<Page, 'heading'>> };

export type HeaderUserQueryVariables = {};


export type HeaderUserQuery = { viewer: Pick<User, 'name' | 'url' | 'avatarUrl'> };

export type LayoutQueryVariables = {};


export type LayoutQuery = { page?: Maybe<Pick<Page, 'heading'>> };


export const CreateDxInfoDocument = gql`
    mutation CreateDxInfo($input: PageInput!) {
  updatePage(input: $input) @client {
    heading
  }
}
    `;
export type CreateDxInfoMutationFn = ApolloReactCommon.MutationFunction<CreateDxInfoMutation, CreateDxInfoMutationVariables>;

/**
 * __useCreateDxInfoMutation__
 *
 * To run a mutation, you first call `useCreateDxInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDxInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDxInfoMutation, { data, loading, error }] = useCreateDxInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDxInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDxInfoMutation, CreateDxInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDxInfoMutation, CreateDxInfoMutationVariables>(CreateDxInfoDocument, baseOptions);
      }
export type CreateDxInfoMutationHookResult = ReturnType<typeof useCreateDxInfoMutation>;
export type CreateDxInfoMutationResult = ApolloReactCommon.MutationResult<CreateDxInfoMutation>;
export type CreateDxInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDxInfoMutation, CreateDxInfoMutationVariables>;
export const CreateErrorHandlingInfoDocument = gql`
    mutation CreateErrorHandlingInfo($input: PageInput!) {
  updatePage(input: $input) @client {
    heading
  }
}
    `;
export type CreateErrorHandlingInfoMutationFn = ApolloReactCommon.MutationFunction<CreateErrorHandlingInfoMutation, CreateErrorHandlingInfoMutationVariables>;

/**
 * __useCreateErrorHandlingInfoMutation__
 *
 * To run a mutation, you first call `useCreateErrorHandlingInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateErrorHandlingInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createErrorHandlingInfoMutation, { data, loading, error }] = useCreateErrorHandlingInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateErrorHandlingInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateErrorHandlingInfoMutation, CreateErrorHandlingInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateErrorHandlingInfoMutation, CreateErrorHandlingInfoMutationVariables>(CreateErrorHandlingInfoDocument, baseOptions);
      }
export type CreateErrorHandlingInfoMutationHookResult = ReturnType<typeof useCreateErrorHandlingInfoMutation>;
export type CreateErrorHandlingInfoMutationResult = ApolloReactCommon.MutationResult<CreateErrorHandlingInfoMutation>;
export type CreateErrorHandlingInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateErrorHandlingInfoMutation, CreateErrorHandlingInfoMutationVariables>;
export const CreateHomeInfoDocument = gql`
    mutation CreateHomeInfo($input: PageInput!) {
  updatePage(input: $input) @client {
    heading
  }
}
    `;
export type CreateHomeInfoMutationFn = ApolloReactCommon.MutationFunction<CreateHomeInfoMutation, CreateHomeInfoMutationVariables>;

/**
 * __useCreateHomeInfoMutation__
 *
 * To run a mutation, you first call `useCreateHomeInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHomeInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHomeInfoMutation, { data, loading, error }] = useCreateHomeInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHomeInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateHomeInfoMutation, CreateHomeInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateHomeInfoMutation, CreateHomeInfoMutationVariables>(CreateHomeInfoDocument, baseOptions);
      }
export type CreateHomeInfoMutationHookResult = ReturnType<typeof useCreateHomeInfoMutation>;
export type CreateHomeInfoMutationResult = ApolloReactCommon.MutationResult<CreateHomeInfoMutation>;
export type CreateHomeInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateHomeInfoMutation, CreateHomeInfoMutationVariables>;
export const UpdateLocalStateDemoEditDocument = gql`
    mutation UpdateLocalStateDemoEdit($input: YouInput!) {
  updateYou(input: $input) @client {
    name
    age
    blood
  }
}
    `;
export type UpdateLocalStateDemoEditMutationFn = ApolloReactCommon.MutationFunction<UpdateLocalStateDemoEditMutation, UpdateLocalStateDemoEditMutationVariables>;

/**
 * __useUpdateLocalStateDemoEditMutation__
 *
 * To run a mutation, you first call `useUpdateLocalStateDemoEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocalStateDemoEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocalStateDemoEditMutation, { data, loading, error }] = useUpdateLocalStateDemoEditMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLocalStateDemoEditMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLocalStateDemoEditMutation, UpdateLocalStateDemoEditMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLocalStateDemoEditMutation, UpdateLocalStateDemoEditMutationVariables>(UpdateLocalStateDemoEditDocument, baseOptions);
      }
export type UpdateLocalStateDemoEditMutationHookResult = ReturnType<typeof useUpdateLocalStateDemoEditMutation>;
export type UpdateLocalStateDemoEditMutationResult = ApolloReactCommon.MutationResult<UpdateLocalStateDemoEditMutation>;
export type UpdateLocalStateDemoEditMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLocalStateDemoEditMutation, UpdateLocalStateDemoEditMutationVariables>;
export const LocalStateDemoDocument = gql`
    query LocalStateDemo {
  you @client {
    name
    age
    blood
  }
}
    `;

/**
 * __useLocalStateDemoQuery__
 *
 * To run a query within a React component, call `useLocalStateDemoQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalStateDemoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalStateDemoQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalStateDemoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LocalStateDemoQuery, LocalStateDemoQueryVariables>) {
        return ApolloReactHooks.useQuery<LocalStateDemoQuery, LocalStateDemoQueryVariables>(LocalStateDemoDocument, baseOptions);
      }
export function useLocalStateDemoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LocalStateDemoQuery, LocalStateDemoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LocalStateDemoQuery, LocalStateDemoQueryVariables>(LocalStateDemoDocument, baseOptions);
        }
export type LocalStateDemoQueryHookResult = ReturnType<typeof useLocalStateDemoQuery>;
export type LocalStateDemoLazyQueryHookResult = ReturnType<typeof useLocalStateDemoLazyQuery>;
export type LocalStateDemoQueryResult = ApolloReactCommon.QueryResult<LocalStateDemoQuery, LocalStateDemoQueryVariables>;
export const CreateLocalStateInfoDocument = gql`
    mutation CreateLocalStateInfo($input: PageInput!) {
  updatePage(input: $input) @client {
    heading
  }
}
    `;
export type CreateLocalStateInfoMutationFn = ApolloReactCommon.MutationFunction<CreateLocalStateInfoMutation, CreateLocalStateInfoMutationVariables>;

/**
 * __useCreateLocalStateInfoMutation__
 *
 * To run a mutation, you first call `useCreateLocalStateInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLocalStateInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLocalStateInfoMutation, { data, loading, error }] = useCreateLocalStateInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLocalStateInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLocalStateInfoMutation, CreateLocalStateInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLocalStateInfoMutation, CreateLocalStateInfoMutationVariables>(CreateLocalStateInfoDocument, baseOptions);
      }
export type CreateLocalStateInfoMutationHookResult = ReturnType<typeof useCreateLocalStateInfoMutation>;
export type CreateLocalStateInfoMutationResult = ApolloReactCommon.MutationResult<CreateLocalStateInfoMutation>;
export type CreateLocalStateInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLocalStateInfoMutation, CreateLocalStateInfoMutationVariables>;
export const HeaderUserDocument = gql`
    query HeaderUser {
  viewer {
    name
    url
    avatarUrl
  }
}
    `;

/**
 * __useHeaderUserQuery__
 *
 * To run a query within a React component, call `useHeaderUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeaderUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeaderUserQuery, HeaderUserQueryVariables>) {
        return ApolloReactHooks.useQuery<HeaderUserQuery, HeaderUserQueryVariables>(HeaderUserDocument, baseOptions);
      }
export function useHeaderUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeaderUserQuery, HeaderUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeaderUserQuery, HeaderUserQueryVariables>(HeaderUserDocument, baseOptions);
        }
export type HeaderUserQueryHookResult = ReturnType<typeof useHeaderUserQuery>;
export type HeaderUserLazyQueryHookResult = ReturnType<typeof useHeaderUserLazyQuery>;
export type HeaderUserQueryResult = ApolloReactCommon.QueryResult<HeaderUserQuery, HeaderUserQueryVariables>;
export const LayoutDocument = gql`
    query Layout {
  page @client {
    heading
  }
}
    `;

/**
 * __useLayoutQuery__
 *
 * To run a query within a React component, call `useLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLayoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLayoutQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LayoutQuery, LayoutQueryVariables>) {
        return ApolloReactHooks.useQuery<LayoutQuery, LayoutQueryVariables>(LayoutDocument, baseOptions);
      }
export function useLayoutLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LayoutQuery, LayoutQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LayoutQuery, LayoutQueryVariables>(LayoutDocument, baseOptions);
        }
export type LayoutQueryHookResult = ReturnType<typeof useLayoutQuery>;
export type LayoutLazyQueryHookResult = ReturnType<typeof useLayoutLazyQuery>;
export type LayoutQueryResult = ApolloReactCommon.QueryResult<LayoutQuery, LayoutQueryVariables>;