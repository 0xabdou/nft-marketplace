import classNames from "classnames";
import EmptyState from "components/EmptyState";
import { toast } from "react-toastify";
import useNFTMarket from "state/nft-market";
import useSigner from "state/signer";
import CreationForm, { CreationValues } from "./CreationForm";

const CreationPage = () => {
  const { signer } = useSigner();
  const { createNFT } = useNFTMarket();

  const onSubmit = async (values: CreationValues) => {
    try {
      await createNFT(values);
      toast.success("You'll see your new NFT here shortly. Refresh the page.");
    } catch (e) {
      toast.warn("Something wrong!");
      console.log(e);
    }
  };

  return (
    <div className={classNames("flex h-full w-full flex-col")}>
      {!signer && <EmptyState>Connect your wallet</EmptyState>}
      {signer && <CreationForm onSubmit={onSubmit} />}
    </div>
  );
};

export default CreationPage;
