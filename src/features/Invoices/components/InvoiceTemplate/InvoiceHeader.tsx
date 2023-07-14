import React from "react";
import { Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { Image } from "@components/atoms/Image/Image";
import { HStack } from "@components/atoms/Stack";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { useCommonStyles } from "@hooks/index";
import { getZipCityCountry } from "@utils/commonUtils";
import { InvoiceTitleComponent } from "./components";

export const InvoiceHeader = () => {
  const { textStyle, tableStyle } = useCommonStyles({});
  const style = styles();
  const groupedStyles = { ...style, ...textStyle, ...tableStyle };
  const { docInfo, invoiceFrom, invoiceLogo, invoiceNumber, contactInfo } =
    invoiceDetails;

  return (
    <HStack style={style.headerContainer}>
      {/* Company Logo and Title */}
      <BoxDiv>
        <InvoiceLogoComponent invoiceLogo={invoiceLogo} style={groupedStyles} />
        <InvoiceTitleComponent
          title={docInfo.title}
          invoiceNumber={invoiceNumber}
          style={groupedStyles}
        />
      </BoxDiv>

      {/* Company Info */}
      <BoxDiv>
        <InvoiceFromComponent invoiceFrom={invoiceFrom} style={groupedStyles} />
        <ContactInfoComponent contactInfo={contactInfo} style={groupedStyles} />
      </BoxDiv>
    </HStack>
  );
};

const styles = () => {
  const imageDim = "110px";
  const titleColor = "#001219";

  return {
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imageContainer: {
      marginBottom: "20px",
    },
    imageContainerStyle: {
      width: imageDim,
      height: imageDim,
      backgroundColor: "#FFFFFF",
    },
    contactFieldContainer: {
      width: "60px",
      paddingRight: "4px",
    },
    contactTitleContainer: {
      paddingTop: "12px",
      paddingBottom: "4px",
    },
    titleBottomSpacing: {
      marginBottom: "10px",
    },
    subtitleBottomSpacing: {
      marginBottom: "6px",
    },
    title: {
      color: titleColor,
    },
  };
};

const InvoiceLogoComponent = ({ invoiceLogo, style }: any) => {
  const { imageContainer, imageContainerStyle } = style;
  return (
    <HStack style={imageContainer}>
      <Image
        source={invoiceLogo.image}
        alt={invoiceLogo.alt}
        containerStyle={imageContainerStyle}
      />
    </HStack>
  );
};

const InvoiceFromComponent = ({ invoiceFrom, style }: any) => {
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      textTransform: { capitalize },
      color: { textBlack },
    },
  } = style;
  const { subtitleBottomSpacing, titleBottomSpacing } = style;
  const titleStyle = joinStyles([
    fontSize.subtitle,
    bold,
    capitalize,
    textBlack,
  ]);
  const subtitleStyle = joinStyles([
    fontSize.text,
    bold,
    subtitleBottomSpacing,
    textBlack,
  ]);
  const textStyle = joinStyles([fontSize.text, textBlack]);

  return (
    <>
      <HStack style={titleBottomSpacing}>
        <Typography style={titleStyle}>{invoiceFrom.title}</Typography>
      </HStack>
      <Typography style={subtitleStyle}>{invoiceFrom.company}</Typography>
      <Typography style={textStyle}>{invoiceFrom.address}</Typography>
      <Typography style={textStyle}>
        {getZipCityCountry({
          zipCode: invoiceFrom.zipCode,
          city: invoiceFrom.city,
          country: invoiceFrom.country,
        })}
      </Typography>
    </>
  );
};

const ContactInfoComponent = ({ contactInfo, style }: any) => {
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      color: { textBlack },
    },
    contactFieldContainer,
    contactTitleContainer,
  } = style;

  const contactFieldStyle = joinStyles([
    fontSize.text,
    contactFieldContainer,
    textBlack,
  ]);
  const titleStyle = joinStyles([
    fontSize.text,
    bold,
    contactTitleContainer,
    textBlack,
  ]);
  const textStyle = joinStyles([fontSize.text, textBlack]);

  return (
    <>
      <Typography style={titleStyle}>{contactInfo.title}</Typography>

      <HStack>
        <Typography style={contactFieldStyle}>
          {contactInfo.phone.title}
        </Typography>
        <Typography style={textStyle}>{contactInfo.phone.value}</Typography>
      </HStack>

      <HStack>
        <Typography style={contactFieldStyle}>
          {contactInfo.email.title}
        </Typography>
        <Typography style={textStyle}>{contactInfo.email.value}</Typography>
      </HStack>

      <Typography style={textStyle}>{contactInfo.website.value}</Typography>
    </>
  );
};
