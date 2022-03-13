import classNames from "classnames";
import EmptyState from "components/EmptyState";
import useNFTMarket from "state/nft-market";
import useSigner from "state/signer";
import CreationForm from "./CreationForm";

const CreationPage = () => {
  const { signer } = useSigner();
  const { createNFT } = useNFTMarket();

  return (
    <div className={classNames("flex h-full w-full flex-col")}>
      {!signer && <EmptyState>Connect your wallet</EmptyState>}
      {signer && <CreationForm onSubmit={createNFT} />}
    </div>
  );
};

export default CreationPage;
