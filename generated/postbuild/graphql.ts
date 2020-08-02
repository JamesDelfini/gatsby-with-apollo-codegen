import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
};

export type AggregateAsset = {
  __typename?: 'AggregateAsset';
  count: Scalars['Int'];
};

export type AggregateCaptions = {
  __typename?: 'AggregateCaptions';
  count: Scalars['Int'];
};

export type AggregateMeme = {
  __typename?: 'AggregateMeme';
  count: Scalars['Int'];
};

export type Asset = Node & {
  __typename?: 'Asset';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  photoMeme?: Maybe<Array<Meme>>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


export type AssetPhotoMemeArgs = {
  where?: Maybe<MemeWhereInput>;
  orderBy?: Maybe<MemeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<AssetEdge>>;
  aggregate: AggregateAsset;
};

export type AssetCreateInput = {
  status?: Maybe<Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  photoMeme?: Maybe<MemeCreateManyWithoutPhotoInput>;
};

export type AssetCreateOneWithoutPhotoMemeInput = {
  upload?: Maybe<AssetUploadWithoutPhotoMemeInput>;
  create?: Maybe<AssetCreateWithoutPhotoMemeInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type AssetCreateWithoutPhotoMemeInput = {
  status?: Maybe<Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum AssetOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetPreviousValues = {
  __typename?: 'AssetPreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetSubscriptionPayload = {
  __typename?: 'AssetSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Asset>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<AssetPreviousValues>;
};

export type AssetSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<AssetWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  photoMeme?: Maybe<MemeUpdateManyWithoutPhotoInput>;
};

export type AssetUpdateManyMutationInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateOneWithoutPhotoMemeInput = {
  create?: Maybe<AssetCreateWithoutPhotoMemeInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AssetUpdateWithoutPhotoMemeDataInput>;
  upsert?: Maybe<AssetUpsertWithoutPhotoMemeInput>;
};

export type AssetUpdateWithoutPhotoMemeDataInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUploadInput = {
  url: Scalars['String'];
  status?: Maybe<Status>;
  photoMeme?: Maybe<MemeCreateManyWithoutPhotoInput>;
};

export type AssetUploadWithoutPhotoMemeInput = {
  url: Scalars['String'];
  status?: Maybe<Status>;
};

export type AssetUpsertWithoutPhotoMemeInput = {
  update: AssetUpdateWithoutPhotoMemeDataInput;
  create: AssetCreateWithoutPhotoMemeInput;
};

export type AssetWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  photoMeme_every?: Maybe<MemeWhereInput>;
  photoMeme_some?: Maybe<MemeWhereInput>;
  photoMeme_none?: Maybe<MemeWhereInput>;
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Captions = Node & {
  __typename?: 'Captions';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  caption?: Maybe<Scalars['String']>;
  memes?: Maybe<Array<Meme>>;
};


export type CaptionsMemesArgs = {
  where?: Maybe<MemeWhereInput>;
  orderBy?: Maybe<MemeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CaptionsConnection = {
  __typename?: 'CaptionsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CaptionsEdge>>;
  aggregate: AggregateCaptions;
};

export type CaptionsCreateInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
  memes?: Maybe<MemeCreateManyWithoutCaptionsInput>;
};

export type CaptionsCreateManyWithoutMemesInput = {
  create?: Maybe<Array<CaptionsCreateWithoutMemesInput>>;
  connect?: Maybe<Array<CaptionsWhereUniqueInput>>;
};

export type CaptionsCreateWithoutMemesInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type CaptionsEdge = {
  __typename?: 'CaptionsEdge';
  /** The item at the end of the edge. */
  node: Captions;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum CaptionsOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC'
}

export type CaptionsPreviousValues = {
  __typename?: 'CaptionsPreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  caption?: Maybe<Scalars['String']>;
};

export type CaptionsScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaptionsScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaptionsScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaptionsScalarWhereInput>>;
  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  caption_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  caption_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  caption_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  caption_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  caption_not_ends_with?: Maybe<Scalars['String']>;
};

export type CaptionsSubscriptionPayload = {
  __typename?: 'CaptionsSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Captions>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CaptionsPreviousValues>;
};

export type CaptionsSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaptionsSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaptionsSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaptionsSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CaptionsWhereInput>;
};

export type CaptionsUpdateInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
  memes?: Maybe<MemeUpdateManyWithoutCaptionsInput>;
};

export type CaptionsUpdateManyDataInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
};

export type CaptionsUpdateManyMutationInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
};

export type CaptionsUpdateManyWithoutMemesInput = {
  create?: Maybe<Array<CaptionsCreateWithoutMemesInput>>;
  connect?: Maybe<Array<CaptionsWhereUniqueInput>>;
  set?: Maybe<Array<CaptionsWhereUniqueInput>>;
  disconnect?: Maybe<Array<CaptionsWhereUniqueInput>>;
  delete?: Maybe<Array<CaptionsWhereUniqueInput>>;
  update?: Maybe<Array<CaptionsUpdateWithWhereUniqueWithoutMemesInput>>;
  updateMany?: Maybe<Array<CaptionsUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CaptionsScalarWhereInput>>;
  upsert?: Maybe<Array<CaptionsUpsertWithWhereUniqueWithoutMemesInput>>;
};

export type CaptionsUpdateManyWithWhereNestedInput = {
  where: CaptionsScalarWhereInput;
  data: CaptionsUpdateManyDataInput;
};

export type CaptionsUpdateWithoutMemesDataInput = {
  status?: Maybe<Status>;
  caption?: Maybe<Scalars['String']>;
};

export type CaptionsUpdateWithWhereUniqueWithoutMemesInput = {
  where: CaptionsWhereUniqueInput;
  data: CaptionsUpdateWithoutMemesDataInput;
};

export type CaptionsUpsertWithWhereUniqueWithoutMemesInput = {
  where: CaptionsWhereUniqueInput;
  update: CaptionsUpdateWithoutMemesDataInput;
  create: CaptionsCreateWithoutMemesInput;
};

export type CaptionsWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaptionsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaptionsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaptionsWhereInput>>;
  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  caption_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  caption_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  caption_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  caption_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  caption_not_ends_with?: Maybe<Scalars['String']>;
  memes_every?: Maybe<MemeWhereInput>;
  memes_some?: Maybe<MemeWhereInput>;
  memes_none?: Maybe<MemeWhereInput>;
};

export type CaptionsWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Html = 'html',
  Pdf = 'pdf',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  Crop = 'crop',
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  Scale = 'scale',
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export enum Locale {
  En = 'EN'
}


export type Meme = Node & {
  __typename?: 'Meme';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  photoshoped?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Asset>;
  captions?: Maybe<Array<Captions>>;
};


export type MemeCaptionsArgs = {
  where?: Maybe<CaptionsWhereInput>;
  orderBy?: Maybe<CaptionsOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type MemeConnection = {
  __typename?: 'MemeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<MemeEdge>>;
  aggregate: AggregateMeme;
};

export type MemeCreateInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<AssetCreateOneWithoutPhotoMemeInput>;
  captions?: Maybe<CaptionsCreateManyWithoutMemesInput>;
};

export type MemeCreateManyWithoutCaptionsInput = {
  create?: Maybe<Array<MemeCreateWithoutCaptionsInput>>;
  connect?: Maybe<Array<MemeWhereUniqueInput>>;
};

export type MemeCreateManyWithoutPhotoInput = {
  create?: Maybe<Array<MemeCreateWithoutPhotoInput>>;
  connect?: Maybe<Array<MemeWhereUniqueInput>>;
};

export type MemeCreateWithoutCaptionsInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<AssetCreateOneWithoutPhotoMemeInput>;
};

export type MemeCreateWithoutPhotoInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  captions?: Maybe<CaptionsCreateManyWithoutMemesInput>;
};

/** An edge in a connection. */
export type MemeEdge = {
  __typename?: 'MemeEdge';
  /** The item at the end of the edge. */
  node: Meme;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum MemeOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhotoshopedAsc = 'photoshoped_ASC',
  PhotoshopedDesc = 'photoshoped_DESC'
}

export type MemePreviousValues = {
  __typename?: 'MemePreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  photoshoped?: Maybe<Scalars['Boolean']>;
};

export type MemeScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemeScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemeScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemeScalarWhereInput>>;
  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  photoshoped_not?: Maybe<Scalars['Boolean']>;
};

export type MemeSubscriptionPayload = {
  __typename?: 'MemeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Meme>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MemePreviousValues>;
};

export type MemeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MemeWhereInput>;
};

export type MemeUpdateInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<AssetUpdateOneWithoutPhotoMemeInput>;
  captions?: Maybe<CaptionsUpdateManyWithoutMemesInput>;
};

export type MemeUpdateManyDataInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
};

export type MemeUpdateManyMutationInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
};

export type MemeUpdateManyWithoutCaptionsInput = {
  create?: Maybe<Array<MemeCreateWithoutCaptionsInput>>;
  connect?: Maybe<Array<MemeWhereUniqueInput>>;
  set?: Maybe<Array<MemeWhereUniqueInput>>;
  disconnect?: Maybe<Array<MemeWhereUniqueInput>>;
  delete?: Maybe<Array<MemeWhereUniqueInput>>;
  update?: Maybe<Array<MemeUpdateWithWhereUniqueWithoutCaptionsInput>>;
  updateMany?: Maybe<Array<MemeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MemeScalarWhereInput>>;
  upsert?: Maybe<Array<MemeUpsertWithWhereUniqueWithoutCaptionsInput>>;
};

export type MemeUpdateManyWithoutPhotoInput = {
  create?: Maybe<Array<MemeCreateWithoutPhotoInput>>;
  connect?: Maybe<Array<MemeWhereUniqueInput>>;
  set?: Maybe<Array<MemeWhereUniqueInput>>;
  disconnect?: Maybe<Array<MemeWhereUniqueInput>>;
  delete?: Maybe<Array<MemeWhereUniqueInput>>;
  update?: Maybe<Array<MemeUpdateWithWhereUniqueWithoutPhotoInput>>;
  updateMany?: Maybe<Array<MemeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MemeScalarWhereInput>>;
  upsert?: Maybe<Array<MemeUpsertWithWhereUniqueWithoutPhotoInput>>;
};

export type MemeUpdateManyWithWhereNestedInput = {
  where: MemeScalarWhereInput;
  data: MemeUpdateManyDataInput;
};

export type MemeUpdateWithoutCaptionsDataInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<AssetUpdateOneWithoutPhotoMemeInput>;
};

export type MemeUpdateWithoutPhotoDataInput = {
  status?: Maybe<Status>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  captions?: Maybe<CaptionsUpdateManyWithoutMemesInput>;
};

export type MemeUpdateWithWhereUniqueWithoutCaptionsInput = {
  where: MemeWhereUniqueInput;
  data: MemeUpdateWithoutCaptionsDataInput;
};

export type MemeUpdateWithWhereUniqueWithoutPhotoInput = {
  where: MemeWhereUniqueInput;
  data: MemeUpdateWithoutPhotoDataInput;
};

export type MemeUpsertWithWhereUniqueWithoutCaptionsInput = {
  where: MemeWhereUniqueInput;
  update: MemeUpdateWithoutCaptionsDataInput;
  create: MemeCreateWithoutCaptionsInput;
};

export type MemeUpsertWithWhereUniqueWithoutPhotoInput = {
  where: MemeWhereUniqueInput;
  update: MemeUpdateWithoutPhotoDataInput;
  create: MemeCreateWithoutPhotoInput;
};

export type MemeWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemeWhereInput>>;
  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  photoshoped?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  photoshoped_not?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<AssetWhereInput>;
  captions_every?: Maybe<CaptionsWhereInput>;
  captions_some?: Maybe<CaptionsWhereInput>;
  captions_none?: Maybe<CaptionsWhereInput>;
};

export type MemeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAsset: Asset;
  uploadAsset: Asset;
  createMeme: Meme;
  createCaptions: Captions;
  updateAsset?: Maybe<Asset>;
  updateMeme?: Maybe<Meme>;
  updateCaptions?: Maybe<Captions>;
  deleteAsset?: Maybe<Asset>;
  deleteMeme?: Maybe<Meme>;
  deleteCaptions?: Maybe<Captions>;
  upsertAsset: Asset;
  upsertMeme: Meme;
  upsertCaptions: Captions;
  updateManyAssets: BatchPayload;
  updateManyMemes: BatchPayload;
  updateManyCaptionses: BatchPayload;
  deleteManyAssets: BatchPayload;
  deleteManyMemes: BatchPayload;
  deleteManyCaptionses: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUploadAssetArgs = {
  data: AssetUploadInput;
};


export type MutationCreateMemeArgs = {
  data: MemeCreateInput;
};


export type MutationCreateCaptionsArgs = {
  data: CaptionsCreateInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateMemeArgs = {
  data: MemeUpdateInput;
  where: MemeWhereUniqueInput;
};


export type MutationUpdateCaptionsArgs = {
  data: CaptionsUpdateInput;
  where: CaptionsWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteMemeArgs = {
  where: MemeWhereUniqueInput;
};


export type MutationDeleteCaptionsArgs = {
  where: CaptionsWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  create: AssetCreateInput;
  update: AssetUpdateInput;
};


export type MutationUpsertMemeArgs = {
  where: MemeWhereUniqueInput;
  create: MemeCreateInput;
  update: MemeUpdateInput;
};


export type MutationUpsertCaptionsArgs = {
  where: CaptionsWhereUniqueInput;
  create: CaptionsCreateInput;
  update: CaptionsUpdateInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyMutationInput;
  where?: Maybe<AssetWhereInput>;
};


export type MutationUpdateManyMemesArgs = {
  data: MemeUpdateManyMutationInput;
  where?: Maybe<MemeWhereInput>;
};


export type MutationUpdateManyCaptionsesArgs = {
  data: CaptionsUpdateManyMutationInput;
  where?: Maybe<CaptionsWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
};


export type MutationDeleteManyMemesArgs = {
  where?: Maybe<MemeWhereInput>;
};


export type MutationDeleteManyCaptionsesArgs = {
  where?: Maybe<CaptionsWhereInput>;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  assets: Array<Maybe<Asset>>;
  memes: Array<Maybe<Meme>>;
  captionses: Array<Maybe<Captions>>;
  asset?: Maybe<Asset>;
  meme?: Maybe<Meme>;
  captions?: Maybe<Captions>;
  assetsConnection: AssetConnection;
  memesConnection: MemeConnection;
  captionsesConnection: CaptionsConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMemesArgs = {
  where?: Maybe<MemeWhereInput>;
  orderBy?: Maybe<MemeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCaptionsesArgs = {
  where?: Maybe<CaptionsWhereInput>;
  orderBy?: Maybe<CaptionsOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type QueryMemeArgs = {
  where: MemeWhereUniqueInput;
};


export type QueryCaptionsArgs = {
  where: CaptionsWhereUniqueInput;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMemesConnectionArgs = {
  where?: Maybe<MemeWhereInput>;
  orderBy?: Maybe<MemeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCaptionsesConnectionArgs = {
  where?: Maybe<CaptionsWhereInput>;
  orderBy?: Maybe<CaptionsOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED'
}

export type MemeQueryVariables = Exact<{ [key: string]: never; }>;


export type MemeQuery = (
  { __typename?: 'Query' }
  & { meme?: Maybe<(
    { __typename?: 'Meme' }
    & { photo?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'url'>
    )> }
  )> }
);


export const MemeDocument = gql`
    query meme {
  meme(where: {id: "cjke2xlf9nhd90953khilyzja"}) {
    photo {
      url(transformation: {image: {resize: {width: 600, height: 600, fit: crop}}})
    }
  }
}
    `;

/**
 * __useMemeQuery__
 *
 * To run a query within a React component, call `useMemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MemeQuery, MemeQueryVariables>) {
        return ApolloReactHooks.useQuery<MemeQuery, MemeQueryVariables>(MemeDocument, baseOptions);
      }
export function useMemeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MemeQuery, MemeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MemeQuery, MemeQueryVariables>(MemeDocument, baseOptions);
        }
export type MemeQueryHookResult = ReturnType<typeof useMemeQuery>;
export type MemeLazyQueryHookResult = ReturnType<typeof useMemeLazyQuery>;
export type MemeQueryResult = ApolloReactCommon.QueryResult<MemeQuery, MemeQueryVariables>;