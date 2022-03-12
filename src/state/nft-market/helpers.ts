import { ethers } from "ethers";
import { NFT } from "./interfaces";
import { GetOwnedNFTs_nfts } from "./__generated__/GetOwnedNFTs";

export const parseRawNFT = (raw: GetOwnedNFTs_nfts): NFT => {
  return {
    id: raw.id,
    owner: raw.price == "0" ? raw.to : raw.from,
    price: raw.price == "0" ? "0" : ethers.utils.formatEther(raw.price),
    tokenURI: raw.tokenURI,
  };
};
