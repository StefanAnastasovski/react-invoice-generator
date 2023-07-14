import { EmptyVoidFn } from "types/CommonProps";
import { RemoveCircleButton } from "@components/ActionButtons/RemoveCircleButton";
import { AddCircleButton } from "@components/ActionButtons/AddCircleButton";

export const InvoiceCreateNewItemActionsButtons = ({
  handleAddItem,
  handleRemoveItem,
}: {
  handleAddItem: EmptyVoidFn;
  handleRemoveItem: EmptyVoidFn;
}) => {
  return (
    <>
      <RemoveCircleButton onClick={handleRemoveItem} style={style.removeIcon} />
      <AddCircleButton onClick={handleAddItem} />
    </>
  );
};

const style = {
  removeIcon: {
    marginRight: 1,
  },
};
