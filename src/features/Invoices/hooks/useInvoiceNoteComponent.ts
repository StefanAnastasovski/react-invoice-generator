import { useEffect, useState } from "react";
import { isNumber } from "lodash";
import {
  NEW_NOTE_PROPS,
  Note,
  NoteId,
} from "@features/Invoices/types/InvoiceTypes";

const MAX_NOTES = 10;

const INITIAL_NEW_NOTE: NEW_NOTE_PROPS = { value: "" };

export const useInvoiceNoteComponent = (notes: Note[]) => {
  const [data, setData] = useState<Note[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Note | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(
    null
  );
  const [noteValue, setNoteValue] = useState("");
  const [newNotes, setNewNotes] = useState<NEW_NOTE_PROPS[]>([
    INITIAL_NEW_NOTE,
  ]);

  useEffect(() => {
    // TODO: get the data from BE
    setData(notes);
  }, [notes]);

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

    const selectedNote = data?.filter((item: Note, index: number) => {
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
    const newData: Note[] = [...data];

    if (isNumber(selectedItemIndex))
      newData[selectedItemIndex].note = noteValue;
    setData(newData);
    handleCloseDialog();
  };

  const handleSaveNewNotes = () => {
    const createNewNote: Note[] = newNotes.map((newNote, index) => {
      return {
        id: `note-${data.length + newNotes.length + index}`,
        noteId: `${data.length + newNotes.length + index}`,
        note: newNote.value,
      };
    });
    const newData: Note[] = [...data, ...createNewNote];
    setData(newData);
    handleCloseDialog();
  };

  const handleRemoveNote = (noteId: NoteId) => {
    const filteredData = data?.filter((item: Note) => {
      return item?.noteId !== noteId;
    });
    setData(filteredData);
  };

  const handleAddNewNote = () => {
    if (data.length + newNotes.length === MAX_NOTES) {
      return;
    }
    const updatedNotes = [...newNotes];
    updatedNotes.push({ ...INITIAL_NEW_NOTE });
    setNewNotes(updatedNotes);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNumber(index)) {
      const updatedNewNotes = [...newNotes];
      updatedNewNotes[index].value = e.target.value;
      return setNewNotes(updatedNewNotes);
    }
    setNoteValue(e.target.value);
  };

  return {
    data,
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
