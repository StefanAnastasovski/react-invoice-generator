import React, { CSSProperties } from "react";
import { FormLabel, Typography, useTheme } from "@mui/material";
import { BoxDiv, BoxFlex, CustomButton } from "@components/atoms";
import { joinStyles } from "@utils/styleUtils";
import { ReusableAddButton } from "@components/ReusableButtons";
import { CustomDialog } from "@components/Dialogs";
import { useInvoiceNoteComponent } from "@features/Invoices/hooks";
import { NEW_NOTE_PROPS, Note } from "@features/Invoices/types/InvoiceTypes";
import { ReusableNoteButtons } from "./ReusableNoteButtons";
import { NoteTextField } from "./NoteTextField";
import { Add as AddIcon } from "@mui/icons-material";

type Props = {
  title: string;
  style: CSSProperties;
};

const CONTENT = {
  addNewNoteBtn: "Add a new note",
};

export const InvoiceNoteComponent = ({ title, style: compStyle }: Props) => {
  const {
    textStyle,
    noteTitle,
    noteHeader,
    note: noteStyle,
  } = getStyles(compStyle);

  const {
    notes,
    isDialogOpen,
    selectedItem,
    noteValue,
    newNotes,
    handleRemoveNote,
    handleClickOpen,
    handleCloseDialog,
    handleOnSaveChanges,
    handleAddNewNote,
    handleOpenDialog,
    handleSaveNewNotes,
    onChange,
  } = useInvoiceNoteComponent();

  const dialogComponent = (
    <>
      {selectedItem ? (
        <NoteTextField onChange={onChange} value={noteValue} />
      ) : (
        <AddNewNotesComponent
          notesLength={notes.length}
          newNotes={newNotes}
          onChange={onChange}
          handleAddNewNote={handleAddNewNote}
        />
      )}
    </>
  );

  return (
    <>
      <BoxFlex style={noteHeader}>
        <Typography style={noteTitle}>{title}</Typography>
        <ReusableAddButton onClick={handleOpenDialog} />
      </BoxFlex>
      <CustomDialog
        title={selectedItem ? "Edit Note" : "Add Notes"}
        isDialogOpen={isDialogOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleCloseDialog}
        onClickAction={selectedItem ? handleOnSaveChanges : handleSaveNewNotes}
        dialogChildren={dialogComponent}
      />

      <BoxDiv>
        {notes &&
          notes.map((item: Note, index: number) => {
            const text = `${index + 1}. ${item.note}`;
            return (
              <BoxFlex key={`${item.id}${index}`}>
                <Typography style={textStyle} sx={noteStyle} gutterBottom>
                  {text}
                </Typography>

                <ReusableNoteButtons
                  handleRemove={() => handleRemoveNote(item.noteId)}
                  handleEdit={() => handleClickOpen(item.noteId)}
                />
              </BoxFlex>
            );
          })}
      </BoxDiv>
    </>
  );
};

const AddNewNotesComponent = ({
  newNotes,
  notesLength = 0,
  onChange,
  handleAddNewNote,
}: any) => {
  const theme = useTheme();

  return (
    <>
      {newNotes.map((newNoteValue: NEW_NOTE_PROPS, index: number) => {
        return (
          <BoxDiv
            key={`newNote+${notesLength + index + 1}`}
            style={{ paddingBottom: 2 }}
          >
            <FormLabel style={{ marginBottom: 2 }}>{`Note #${
              notesLength + index + 1
            }:`}</FormLabel>
            <NoteTextField
              isNewNote
              noteId={notesLength + index + 1}
              onChange={(event: any) => onChange(event, index)}
              value={newNoteValue.value}
            />
          </BoxDiv>
        );
      })}
      <BoxFlex
        style={{
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          startIcon={<AddIcon />}
          onClick={handleAddNewNote}
          style={{
            alignSelf: "flex-end",
            marginTop: 2,
            background: theme.palette.secondary.dark,
          }}
          onHoverStyle={{
            background: theme.palette.secondary.main,
          }}
        >
          {CONTENT.addNewNoteBtn}
        </CustomButton>
      </BoxFlex>
    </>
  );
};

const getStyles = (style: any) => {
  const {
    fontSize,
    fontWeight: { bold },
    textTransform: { capitalize },
    color: { textBlack },
  } = style?.text;

  const noteTitle = joinStyles([
    fontSize.subtitle,
    bold,
    capitalize,
    textBlack,
  ]);

  const textStyle = joinStyles([fontSize.text, textBlack]);

  return {
    textStyle,
    noteTitle,
    ...styles(),
  };
};

const styles = () => {
  return {
    noteHeader: {
      paddingBottom: 2,
    },
    note: {
      flexGrow: 1,
    },
  };
};
