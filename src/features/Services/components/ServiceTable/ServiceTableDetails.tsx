import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { Checkbox, Theme, useTheme } from "@mui/material";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { Image } from "@components/atoms/Image/Image";
import { BoxDiv } from "@components/atoms";
import { Paragraph } from "@components/atoms/Typography/Paragraph";
import {
  ServiceTableDetailProps,
  TableServiceProps,
} from "@features/Services/types/ServiceProps";
import { getDataPerTablePage } from "@utils/tableUtils";
import {
  PRICE_SIGN,
  SERVICE_ARIA_LABEL,
  SERVICE_IMAGE_URL,
  SERVICE_TABLE_COL_SPAN,
} from "@features/Services/constants/constants";
import { TableBodyCollapseWrapper } from "@components/Table/";
import { SERVICE_CELL_WIDTH } from "@features/Services/constants/serviceTable";

export const ServiceTableDetails = ({
  tableData,
  page,
  rowsPerPage,
  selectedRows,
  collapseId,
  handleCollapse,
  onSelectClick,
}: ServiceTableDetailProps) => {
  const theme = useTheme();
  // TODO: remove when delete and BE are ready, only test purposes
  const [data, setData] = useState<TableServiceProps[]>([...tableData]);
  const handleDelete = (value: number | string) => {
    const filteredData = tableData.filter((item: any) => {
      return item.sku !== value;
    });
    return setData(filteredData);
    // TODO: implement delete when BE is ready
  };
  const handleEdit = (edb: number | string) => {
    console.log("handle Edit");
    // /customers/:{edb}
    // TODO: implement edit when BE is ready
  };

  const returnPrice = (price: number, isPricePerHour: boolean) => {
    return isPricePerHour
      ? `${price}${PRICE_SIGN} (hour)`
      : `${price}${PRICE_SIGN} (unit)`;
  };

  return (
    <>
      {getDataPerTablePage({
        rowsPerPage,
        page,
        data,
      }).map((details: any) => {
        const {
          service,
          pricePerUnit,
          pricePerHour,
          tax,
          sku,
          // description,
          // category,
          // image,
        } = details;

        const shouldCollapse = collapseId === sku;
        const price = pricePerHour
          ? returnPrice(pricePerHour, true)
          : returnPrice(pricePerUnit, false);

        // // TODO: get from BE
        const collapseData = getCollapseData(details);

        return (
          <React.Fragment key={sku}>
            <TableRow key={service} style={styles(theme).container}>
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.checkbox).cellWidth}
              >
                <Checkbox
                  checked={
                    selectedRows.length > 0 && selectedRows.includes(sku)
                  }
                  onChange={() => onSelectClick(sku)}
                  inputProps={{
                    "aria-label": SERVICE_ARIA_LABEL.selectService,
                  }}
                />
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.collapse).cellWidth}
              >
                <IconButton
                  onClick={() => handleCollapse(sku)}
                  aria-label={SERVICE_ARIA_LABEL.collapse}
                >
                  {shouldCollapse ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </IconButton>
              </CustomTableCell>
              {/* TODO: refactor */}
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.service).cellWidth}
              >
                {/* TODO: add image from BE */}
                <BoxDiv style={styles(theme).outerImageContainer}>
                  <Image
                    source={SERVICE_IMAGE_URL}
                    alt="service image"
                    containerStyle={styles(theme).innerImageContainer}
                    imageStyle={styles(theme).imageStyle}
                  />
                  <Paragraph>{service}</Paragraph>
                </BoxDiv>
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.price).cellWidth}
              >
                <Paragraph>{price}</Paragraph>
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.tax).cellWidth}
              >
                <Paragraph>{tax}</Paragraph>
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, SERVICE_CELL_WIDTH.actions).cellWidth}
              >
                <EditIcon
                  sx={styles(theme).icons}
                  onClick={() => handleEdit(sku)}
                />{" "}
                <DeleteIcon
                  sx={styles(theme).icons}
                  onClick={() => handleDelete(sku)}
                />
              </CustomTableCell>
            </TableRow>
            <TableBodyCollapseWrapper
              shouldCollapse={shouldCollapse}
              colSpan={SERVICE_TABLE_COL_SPAN}
              titleLeft={collapseData?.info?.title}
              titleRight={collapseData?.pricing?.title}
              collapseDataLeft={collapseData?.info?.items}
              collapseDataRight={collapseData?.pricing?.items}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const styles = (theme: Theme, cellWidth?: string | number) => {
  return {
    container: {
      width: 800,
    },
    cellWidth: {
      width: cellWidth,
    },
    icons: {
      fontSize: 24,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
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

const getCollapseData = (data: any) => {
  return {
    pricing: {
      title: "Pricing",
      items: [
        {
          id: "sip-1",
          title: "Price per unit",
          text: data.pricePerUnit,
        },
        {
          id: "sip-2",
          title: "Price per hour",
          text: data.pricePerHour,
        },
        {
          id: "sip-3",
          title: "Tax(%)",
          text: data.tax,
        },
      ],
    },
    info: {
      title: "Basic Details",
      items: [
        {
          id: "sibd-1",
          title: "Service",
          text: data.service,
        },
        {
          id: "sibd-2",
          title: "Description",
          text: data.description,
        },
        {
          id: "sibd-3",
          title: "Category",
          text: data.category,
        },
        {
          id: "sibd-4",
          title: "SKU",
          text: data.sku,
        },
      ],
    },
  };
};
