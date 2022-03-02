import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import Button from "./Button";
import CustomDialog from "./CustomDialog";
import { Input } from "./Input";

type SellPopupProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (price: BigNumber) => void;
};

const SellPopup = (props: SellPopupProps) => {
  const { open, onClose, onSubmit } = props;
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string>();

  const onConfirm = () => {
    if (!price) return setError("Must be a valid number");
    const wei = ethers.utils.parseEther(price);
    if (wei.lte(0)) return setError("Must be a greater than 0");
    onSubmit(wei);
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="List NFT for Sale"
      description="This will list the NFT for sale, you can cancel anytime."
    >
      <div className="flex items-end">
        <div className="mr-2 flex flex-grow flex-col">
          <label
            htmlFor="price"
            className="ml-2 text-xs font-semibold text-gray-500"
          >
            PRICE (ETH)
          </label>
          <Input
            name="price"
            id="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            error={error}
          />
        </div>
        <Button onClick={onConfirm}>CONFIRM</Button>
      </div>
    </CustomDialog>
  );
};

export default SellPopup;
