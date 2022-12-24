import React from "react";
import TableRow from "@mui/material/TableRow";
import { Collapse, Theme, useTheme } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { Paragraph } from "@components/atoms/Typography/Paragraph";
import { HStack } from "@components/atoms/Stack";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { CustomerExtraInfo } from "./CustomerExtraInfo";
import { CUSTOMER_TABLE_COL_SPAN } from "../CustomerTable";
import { CustomerTableBodyCollapseProps } from "@features/Customer/types/CustomerTableTypes";

export const CustomerTableBodyCollapse = ({
  collapseData,
  shouldCollapse,
}: CustomerTableBodyCollapseProps) => {
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
        colSpan={CUSTOMER_TABLE_COL_SPAN}
      >
        <Collapse in={shouldCollapse} timeout="auto" unmountOnExit>
          <HStack style={style.collapseContainer}>
            <BoxDiv
              style={{
                ...style.leftContainer,
                ...style.collapseContainerCommon,
              }}
            >
              <Paragraph style={style.title} bold>
                {collapseData.contact.title}
              </Paragraph>
              {collapseData.contact.items.map((item: any) => {
                return (
                  <CustomerExtraInfo
                    key={item.text}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </BoxDiv>

            <BoxDiv
              style={{
                ...style.rightContainer,
                ...style.collapseContainerCommon,
              }}
            >
              <Paragraph style={style.title} bold>
                {collapseData.bankAccount.title}
              </Paragraph>
              {collapseData.bankAccount.items.map((item: any) => {
                return (
                  <CustomerExtraInfo
                    key={item.text}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </BoxDiv>
          </HStack>
        </Collapse>
      </CustomTableCell>
    </TableRow>
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
