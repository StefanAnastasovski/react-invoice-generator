import React from "react";
import TableRow from "@mui/material/TableRow";
import { Collapse, Theme, useTheme } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { Paragraph } from "@components/atoms/Typography/Paragraph";
import { HStack } from "@components/atoms/Stack";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { TableExtraInfo } from "./TableExtraInfo";
import {
  ExtraInfoProps,
  TableBodyCollapseWrapperProps,
} from "types/components/TableProps";

export const TableBodyCollapseWrapper = ({
  shouldCollapse,
  colSpan,
  titleLeft,
  titleRight,
  collapseDataLeft,
  collapseDataRight,
}: TableBodyCollapseWrapperProps) => {
  const theme = useTheme();
  const style = styles(theme, shouldCollapse);

  return (
    <TableRow>
      <CustomTableCell
        style={{
          paddingBottom: 0,
          paddingTop: 0,
          borderBottom: !shouldCollapse ? "none" : null,
        }}
        colSpan={colSpan}
      >
        <Collapse in={shouldCollapse} timeout="auto" unmountOnExit>
          <HStack style={style.collapseContainer}>
            <BoxDiv
              style={{
                ...style.leftContainer,
                ...style.collapseContainerCommon,
              }}
            >
              {renderExtraInfo({
                title: titleLeft,
                collapseData: collapseDataLeft,
                style: style,
              })}
            </BoxDiv>

            <BoxDiv
              style={{
                ...style.rightContainer,
                ...style.collapseContainerCommon,
              }}
            >
              {renderExtraInfo({
                title: titleRight,
                collapseData: collapseDataRight,
                style: style,
              })}
            </BoxDiv>
          </HStack>
        </Collapse>
      </CustomTableCell>
    </TableRow>
  );
};

const renderExtraInfo = ({ title, collapseData, style }: ExtraInfoProps) => {
  return (
    <>
      <Paragraph style={style.title} bold>
        {title}
      </Paragraph>
      {collapseData?.map((item: any) => {
        return (
          <TableExtraInfo key={item.id} title={item.title} text={item.text} />
        );
      })}
    </>
  );
};

const styles = (theme: Theme, shouldCollapse: boolean) => {
  return {
    container: {
      paddingBottom: 0,
      paddingTop: 0,
      borderBottom: !shouldCollapse ? "none" : null,
    },
    collapseContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
    },
    collapseContainerCommon: {
      maxWidth: "50%",
      minWidth: "50%",
      borderColor: theme.palette.common.white,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 2,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.primary,
      padding: 3,
    },
    leftContainer: {
      marginRight: 1,
    },
    rightContainer: {
      marginLeft: 1,
    },
    title: {
      fontSize: "24px",
      textAlign: "center",
      marginBottom: 3,
      textDecoration: "underline",
      textUnderlinePosition: "under",
    },
    textContainer: {
      borderBottom: "1px solid white",
      marginBottom: 3,
    },
  };
};
