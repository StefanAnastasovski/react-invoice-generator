import React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import { ReusableTextField } from "@components/ReusableTextField";
import { setTextFieldItemColorStyle } from "@utils/styleUtils";

const EDIT_NOTE_FIELD = {
  id: "edit-note",
  name: "note",
  type: "text",
  label: "Note",
  placeholder: "Edit Note",
};

const NEW_NOTE_FIELD = {
  id: "new-note",
  name: "note",
  type: "text",
  label: "Note",
  placeholder: "Add a New Note",
};

export const NoteTextField = ({ isNewNote, noteId, value, onChange }: any) => {
  const theme = useTheme();

  const itemId = isNewNote
    ? `${NEW_NOTE_FIELD.id}-${noteId}`
    : EDIT_NOTE_FIELD.id;

  const itemWithValue = {
    ...(isNewNote ? NEW_NOTE_FIELD : EDIT_NOTE_FIELD),
    id: itemId,
    value: value,
  };

  return (
    <ReusableTextField
      isTextarea
      textAreaRows={3}
      item={itemWithValue}
      onChange={onChange}
      style={styles(theme)}
    />
  );
};

const styles = (theme: Theme) => {
  return {
    inputLabelPropsStyle: {
      fontSize: 18,
      top: "-10px",
      color: theme.palette.secondary.contrastText,
      "&.MuiInputLabel-root.Mui-focused, &.MuiInputLabel-root.MuiFormLabel-filled":
        {
          top: 0,
          fontSize: 18,
        },
    },
    inputPropsStyle: {
      paddingY: 0.25,
      color: theme.palette.secondary.contrastText,
    },
    itemColorStyle: setTextFieldItemColorStyle({
      theme: theme,
      mainColor: theme.palette.secondary.contrastText,
      hoverColor: theme.palette.secondary.dark,
      focusedColor: theme.palette.secondary.dark,
    }),
    textfieldStyle: {
      "& ::placeholder": {
        fontSize: 14,
      },
    },
  };
};
