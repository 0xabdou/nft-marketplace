/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListedNFTs
// ====================================================

export interface GetListedNFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
}

export interface GetListedNFTs {
  nfts: GetListedNFTs_nfts[];
}

export interface GetListedNFTsVariables {
  currentAddress: string;
}
