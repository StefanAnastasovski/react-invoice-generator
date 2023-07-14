import React from "react";
import { BoxDiv } from "@components/atoms";
import { RemoveCircleButton } from "@components/ActionButtons/RemoveCircleButton";
import { EditButton } from "@components/ActionButtons/EditButton";
import { EmptyVoidFn } from "types/CommonProps";

export const ReusableNoteButtons = ({
  handleRemove,
  handleEdit,
}: {
  handleRemove: EmptyVoidFn;
  handleEdit: EmptyVoidFn;
}) => {
  const { removeIconContainer, removeIcon } = styles();

  return (
    <>
      <BoxDiv style={removeIconContainer}>
        <RemoveCircleButton onClick={handleRemove} style={removeIcon} />
      </BoxDiv>
      <BoxDiv>
        <EditButton onClick={handleEdit} />
      </BoxDiv>
    </>
  );
};

const styles = () => {
  return {
    removeIconContainer: {
      paddingLeft: 1,
    },
    removeIcon: {
      marginRight: 1,
    },
  };
};
