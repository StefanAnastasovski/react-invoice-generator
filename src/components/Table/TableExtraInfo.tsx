import React from "react";
import { VStack } from "@components/atoms/Stack";
import { Paragraph } from "@components/atoms/Typography/Paragraph";
import { COLORS } from "@constants/colors";
import { ExtraInfoComponentProps } from "types/components/TableProps";

export const TableExtraInfo = ({ title, text }: ExtraInfoComponentProps) => {
  return (
    <VStack style={{ ...styles.container, ...styles.itemStyle }}>
      <Paragraph style={styles.title} bold>
        {`${title}:`}
      </Paragraph>
      <Paragraph style={styles.text}>{text}</Paragraph>
    </VStack>
  );
};

const styles = {
  container: {
    borderBottom: "1px solid white",
    marginBottom: 3,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  text: {
    paddingLeft: 1,
    textAlign: "left",
    wordBreak: "break-all",
  },
  itemStyle: {
    backgroundColor: COLORS.grey[1],
    padding: 1,
    borderRadius: 2,
  },
};
