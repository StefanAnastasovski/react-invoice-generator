import React, { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { HStack } from "@components/atoms/Stack";
import { Theme, Typography } from "@mui/material";
import { getZipCityCountry } from "@utils/commonUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { useCommonStyles } from "@hooks/index";
import { joinStyles } from "@utils/styleUtils";
import {
  formattedBilledToData,
  formattedPaymentDetailsData,
} from "@features/Invoices/utils/invoiceUtils";

import { CustomSelectBox } from "@components/SelectBox";
import { CustomModal } from "@components/Modal";
import { RenderItems } from "@components/SelectBox/components";
import { ReusableEditButton } from "@components/ReusableButtons";

export const InvoicePaymentDetails = () => {
  const {
    theme,
    textStyle,
    tableStyle: { icons },
  } = useCommonStyles({});
  const style = styles(theme);
  const groupedStyles = { ...style, ...textStyle, icons, theme };
  const { billedTo, paymentDetails } = invoiceDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState({});
  const showEditCustomer = Object.keys(customer).length > 0;

  const handleShowModal = () => {
    setIsModalOpen((isModalOpen: boolean) => !isModalOpen);
  };

  return (
    <HStack style={style.headerContainer}>
      {!showEditCustomer && (
        <BoxDiv style={style.selectBoxContainer}>
          <CustomSelectBox
            isModalOpen={isModalOpen}
            handleShowModal={handleShowModal}
          />
          <CustomModal isModalOpen={isModalOpen} showArrowTop={true}>
            <RenderItems
              handleShowModal={handleShowModal}
              setCustomer={setCustomer}
            />
          </CustomModal>
        </BoxDiv>
      )}

      <BoxDiv>
        {/* Billed To */}
        {showEditCustomer && (
          <RenderDataComponent
            data={formattedBilledToData(billedTo)}
            style={groupedStyles}
            setCustomer={setCustomer}
            showEditCustomer={showEditCustomer}
          />
        )}
      </BoxDiv>
      <BoxDiv>
        {/* Payment Details */}
        <RenderDataComponent
          data={formattedPaymentDetailsData(paymentDetails)}
          style={groupedStyles}
        />
      </BoxDiv>
    </HStack>
  );
};

const RenderDataComponent = ({
  data,
  style,
  setCustomer,
  showEditCustomer,
}: any) => {
  const formattedAddress = getZipCityCountry({
    zipCode: data.zipCode,
    city: data.city,
    country: data.country,
  });
  const { text, titleBottomSpacing, companyIdFieldContainer } = style;

  const {
    fontSize,
    fontWeight: { bold },
    textTransform: { capitalize },
    color: { textBlack },
  } = text;

  const titleStyle = joinStyles([
    fontSize.subtitle,
    bold,
    capitalize,
    textBlack,
  ]);
  const subtitleStyle = joinStyles([
    fontSize.text,
    bold,
    capitalize,
    textBlack,
  ]);
  const companyIdFieldStyle = joinStyles([
    fontSize.text,
    companyIdFieldContainer,
    textBlack,
  ]);
  const textStyle = joinStyles([fontSize.text, textBlack]);

  const handleEdit = () => {
    setCustomer && setCustomer({});
  };

  return (
    <>
      <HStack style={titleBottomSpacing}>
        <Typography style={titleStyle}>{data.title}</Typography>
        {showEditCustomer && (
          <ReusableEditButton style={style} handleEdit={handleEdit} />
        )}
      </HStack>
      <Typography style={subtitleStyle}>{data.subtitle}</Typography>
      <Typography style={textStyle}>
        {data.address || data.bankAccount}
      </Typography>
      <Typography style={textStyle}>
        {getZipCityCountry({
          zipCode: data.zipCode,
          city: data.city,
          country: data.country,
        })}
      </Typography>
      <HStack>
        <Typography style={companyIdFieldStyle}>{data.cin.title}</Typography>
        <Typography style={textStyle}>{data.cin.value}</Typography>
      </HStack>
      <HStack>
        <Typography style={companyIdFieldStyle}>{data.tin.title}</Typography>
        <Typography style={textStyle}>{data.tin.value}</Typography>
      </HStack>
    </>
  );
};

const styles = (theme: Theme) => {
  return {
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    companyIdFieldContainer: {
      width: "50px",
      paddingRight: "4px",
    },
    titleBottomSpacing: {
      marginBottom: "10px",
    },
    selectBoxContainer: {
      width: "100%",
      maxWidth: 300,
      position: "relative",
    },
    iconContainer: {
      position: "relative",
    },
    editIconButton: {
      position: "absolute",
      left: 10,
      top: -5,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    editIcon: {
      width: 20,
      height: 20,
      fill: theme.palette.primary.main,
    },
  };
};
