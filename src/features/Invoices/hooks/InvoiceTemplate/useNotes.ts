import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { NoteType } from "types/InvoiceProps";
import { invoiceNotesMockedRows } from "@features/Invoices/constants/invoiceNotesTable";

export const useNotes = () => {
  const dispatch = useDispatch();
  const noteData = useSelector((state: any) => state.invoice.notes);

  useEffect(() => {
    // TODO: #1 - get data from BE
    const notes = invoiceNotesMockedRows;
    setNotes(notes);

    // TODO: #2 - update dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNotes = (notes: NoteType[]) => {
    dispatch(invoiceActions.setNotes({ notes }));
  };

  const getNotes = () => {
    return noteData;
  };

  return {
    setNotes,
    getNotes,
  };
};
