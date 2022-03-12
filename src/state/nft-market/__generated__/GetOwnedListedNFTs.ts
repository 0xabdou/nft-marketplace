/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnedListedNFTs
// ====================================================

export interface GetOwnedListedNFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
}

export interface GetOwnedListedNFTs {
  nfts: GetOwnedListedNFTs_nfts[];
}

export interface GetOwnedListedNFTsVariables {
  owner: string;
}
