import { useNotes } from "@features/Invoices/hooks/InvoiceTemplate/useNotes";
import { useEffect, useState } from "react";
import { isNumber } from "lodash";
import {
  NEW_NOTE_PROPS,
  Note,
  NoteId,
} from "@features/Invoices/types/InvoiceTypes";

const MAX_NOTES = 10;

const INITIAL_NEW_NOTE: NEW_NOTE_PROPS = { value: "" };

export const useInvoiceNoteComponent = () => {
  const { getNotes, setNotes } = useNotes();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Note | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(
    null
  );
  const [noteValue, setNoteValue] = useState("");
  const [newNotes, setNewNotes] = useState<NEW_NOTE_PROPS[]>([
    INITIAL_NEW_NOTE,
  ]);
  const notes = getNotes();

  useEffect(() => {
    // reset state only when dialog is closed
    if (!isDialogOpen) {
      resetSelected();
      resetNewNotes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDialogOpen]);

  useEffect(() => {
    if (selectedItem) handleOpenDialog();
  }, [selectedItem]);

  const resetNewNotes = () => {
    setNewNotes([INITIAL_NEW_NOTE]);
  };

  const resetSelected = () => {
    setSelectedItem(null);
    setSelectedItemIndex(null);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleClickOpen = (noteId: NoteId) => {
    if (!noteId) {
      return handleOpenDialog();
    }

    const selectedNote = notes?.filter((item: Note, index: number) => {
      if (item?.noteId === noteId) {
        setSelectedItemIndex(index);
        return item?.noteId === noteId;
      }
      // eslint-disable-next-line array-callback-return
      return;
    });

    setNoteValue(selectedNote[0].note);
    setSelectedItem(selectedNote[0]);
  };

  const handleOnSaveChanges = () => {
    const newData: Note[] = [...notes];
    if (isNumber(selectedItemIndex)) {
      const newNoteObject = {
        ...newData[selectedItemIndex],
        note: noteValue,
      };
      newData[selectedItemIndex] = newNoteObject;
    }
    setNotes(newData);
    handleCloseDialog();
  };

  const handleSaveNewNotes = () => {
    const createNewNote: Note[] = newNotes.map((newNote, index) => {
      return {
        id: `note-${notes.length + newNotes.length + index}`,
        noteId: `${notes.length + newNotes.length + index}`,
        note: newNote.value,
      };
    });
    const newData: Note[] = [...notes, ...createNewNote];
    setNotes(newData);
    handleCloseDialog();
  };

  const handleRemoveNote = (noteId: NoteId) => {
    const filteredData = notes?.filter((item: Note) => {
      return item?.noteId !== noteId;
    });
    setNotes(filteredData);
  };

  const handleAddNewNote = () => {
    if (notes.length + newNotes.length === MAX_NOTES) {
      return;
    }
    const updatedNotes = [...newNotes];
    updatedNotes.push({ ...INITIAL_NEW_NOTE });
    setNewNotes(updatedNotes);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNumber(index)) {
      const updatedNewNotes = [...newNotes];
      const newObj = {
        ...updatedNewNotes[index],
        value: e.target.value,
      };
      updatedNewNotes[index] = newObj;
      return setNewNotes(updatedNewNotes);
    }
    setNoteValue(e.target.value);
  };

  return {
    notes,
    isDialogOpen,
    selectedItem,
    noteValue,
    newNotes,
    handleRemoveNote,
    handleClickOpen,
    handleCloseDialog,
    handleOnSaveChanges,
    handleOpenDialog,
    handleAddNewNote,
    handleSaveNewNotes,
    onChange,
  };
};
