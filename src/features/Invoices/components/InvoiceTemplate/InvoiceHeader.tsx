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
import {
  CompanyAddressType,
  CompanyContactType,
  CompanyType,
} from "types/InvoiceProps";
import { useInvoiceHeaderData } from "@features/Invoices/hooks/InvoiceTemplate/useInvoiceHeaderData";

export const InvoiceHeader = () => {
  const { textStyle, tableStyle } = useCommonStyles({});
  const style = styles();
  const groupedStyles = { ...style, ...textStyle, ...tableStyle };
  const {
    docInfo,
    invoiceFromTitle,
    invoiceLogo,
    invoiceNumberTitle,
    contactTitles,
  } = invoiceDetails;
  const { getCompanyInfo, getCompanyAddress, getContactInfo } =
    useInvoiceHeaderData();

  const data = {
    company: getCompanyInfo(),
    companyAddress: getCompanyAddress(),
    contact: getContactInfo(),
  };

  return (
    <HStack style={style.headerContainer}>
      {/* Company Logo and Title */}
      <BoxDiv>
        <InvoiceLogoComponent invoiceLogo={invoiceLogo} style={groupedStyles} />
        <InvoiceTitleComponent
          title={docInfo.title}
          invoiceNumberTitle={invoiceNumberTitle}
          style={groupedStyles}
        />
      </BoxDiv>

      {/* Company Info */}
      <BoxDiv>
        <InvoiceFromComponent
          company={data.company}
          companyAddress={data.companyAddress}
          invoiceFromTitle={invoiceFromTitle}
          style={groupedStyles}
        />
        <ContactInfoComponent
          contact={data.contact}
          contactTitles={contactTitles}
          style={groupedStyles}
        />
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

interface InvoceFromProps {
  company: CompanyType;
  companyAddress: CompanyAddressType;
  invoiceFromTitle: string;
  style: any;
}

const InvoiceFromComponent = ({
  company,
  companyAddress,
  invoiceFromTitle,
  style,
}: InvoceFromProps) => {
  const { subtitleStyle, titleStyle, textStyle, titleBottomSpacing } =
    getInvoiceFromStyles(style);

  return (
    <>
      <HStack style={titleBottomSpacing}>
        <Typography style={titleStyle}>{invoiceFromTitle}</Typography>
      </HStack>
      <Typography style={subtitleStyle}>{company.name}</Typography>
      <Typography style={textStyle}>{companyAddress.address}</Typography>
      <Typography style={textStyle}>
        {getZipCityCountry({
          zipCode: companyAddress.zipCode,
          city: companyAddress.city,
          country: companyAddress.country,
        })}
      </Typography>
    </>
  );
};

const getInvoiceFromStyles = (compStyle: any) => {
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      textTransform: { capitalize },
      color: { textBlack },
    },
    subtitleBottomSpacing,
    titleBottomSpacing,
  } = compStyle;

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

  return {
    subtitleStyle,
    titleStyle,
    textStyle,
    titleBottomSpacing,
  };
};

interface ContactInfoProps {
  contact: CompanyContactType;
  contactTitles: any;
  style: any;
}

const ContactInfoComponent = ({
  contact,
  contactTitles,
  style,
}: ContactInfoProps) => {
  const { contactFieldStyle, titleStyle, textStyle } = getContactStyles(style);

  return (
    <>
      <Typography style={titleStyle}>{contactTitles.title}</Typography>

      <HStack>
        <Typography style={contactFieldStyle}>{contactTitles.phone}</Typography>
        <Typography style={textStyle}>{contact.phoneNumber}</Typography>
      </HStack>

      <HStack>
        <Typography style={contactFieldStyle}>{contactTitles.email}</Typography>
        <Typography style={textStyle}>{contact.email}</Typography>
      </HStack>

      <Typography style={textStyle}>{contact.website}</Typography>
    </>
  );
};

const getContactStyles = (compStyle: any) => {
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      color: { textBlack },
    },
    contactFieldContainer,
    contactTitleContainer,
  } = compStyle;

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

  return {
    contactFieldStyle,
    titleStyle,
    textStyle,
  };
};
