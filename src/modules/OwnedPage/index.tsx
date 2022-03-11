import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";

const OwnedPage = () => {
  const { ownedNFTs } = useNFTMarket();

  console.log(ownedNFTs);
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-wrap">
        {ownedNFTs?.map((nft) => (
          <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default OwnedPage;
