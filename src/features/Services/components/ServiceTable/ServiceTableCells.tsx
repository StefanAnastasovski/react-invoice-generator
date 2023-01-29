import React from "react";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { Image } from "@components/atoms/Image/Image";
import { BoxDiv } from "@components/atoms";
import { getTableCellWidthStyle } from "@utils/tableUtils";
import { SERVICE_IMAGE_URL } from "@features/Services/constants/constants";
import { Paragraph } from "@components/atoms/Typography/Paragraph";
import { TableCellsProps } from "types/components/TableProps";

export const ServiceTableCells = ({
  formattedData,
  rowId,
  tableCellWidth,
}: TableCellsProps) => {
  const style = styles();

  return (
    <>
      {formattedData.map((item: any, index: number) => {
        const objKey = Object.keys(item)[0];
        const rowKey = `${rowId}${objKey}`;
        const cellWidthStyle = getTableCellWidthStyle({
          tableCellWidth,
          cellName: objKey,
        });
        if (index === 0) {
          return (
            <CustomTableCell key={rowKey} style={cellWidthStyle}>
              <BoxDiv style={style.outerImageContainer}>
                <Image
                  source={SERVICE_IMAGE_URL}
                  alt="service image"
                  containerStyle={style.innerImageContainer}
                  imageStyle={style.imageStyle}
                />
                <Paragraph>{item[objKey]}</Paragraph>
              </BoxDiv>
            </CustomTableCell>
          );
        }
        return (
          <CustomTableCell key={rowKey} style={cellWidthStyle}>
            {item[objKey]}
          </CustomTableCell>
        );
      })}
    </>
  );
};

const styles = () => {
  return {
    outerImageContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    innerImageContainer: {
      width: 60,
      height: 60,
      marginRight: 2,
    },
    imageStyle: {
      borderRadius: 10,
    },
    fontSize: {
      fontSize: "1em",
    },
  };
};
