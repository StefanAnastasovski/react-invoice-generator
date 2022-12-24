import React, { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
} from "@mui/icons-material";
import {
  TablePaginationActionsProps,
  TablePaginationEventProp,
} from "@features/Customer/types/CustomerTableTypes";
import { BoxDiv } from "@components/atoms";

const PAGES = {
  firstPage: "first page",
  lastPage: "last page",
  nextPage: "next page",
  previousPage: "previous page",
};

export const TablePaginationActions = (props: TablePaginationActionsProps) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const isNextPageAllow = page >= Math.ceil(count / rowsPerPage) - 1;
  const isFirstPage = page === 0;
  const isRtl = useMemo(() => theme.direction === "rtl", [theme.direction]);

  const handleFirstPageButtonClick = (event: TablePaginationEventProp) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: TablePaginationEventProp) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: TablePaginationEventProp) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: TablePaginationEventProp) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <BoxDiv style={styles.container}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={isFirstPage}
        aria-label={PAGES.firstPage}
      >
        {isRtl ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={isFirstPage}
        aria-label={PAGES.previousPage}
      >
        {isRtl ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={isNextPageAllow}
        aria-label={PAGES.nextPage}
      >
        {isRtl ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={isNextPageAllow}
        aria-label={PAGES.lastPage}
      >
        {isRtl ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </BoxDiv>
  );
};

const styles = {
  container: {
    flexShrink: 0,
    marginLeft: 2.5,
  },
};
