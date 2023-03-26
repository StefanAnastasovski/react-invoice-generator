import React, { useState } from "react";
import { BoxFlex, RouterLink } from "@components/atoms";
import { CompanyDetails } from "./CompanyDetails";
import { Box, Theme, useTheme } from "@mui/material";
import { InvoiceGeneralSettings } from "./InvoiceGeneralSettings";
import { InvoiceTaxSettings } from "./InvoiceTaxSettings";
import { InvoiceNotes } from "./InvoiceNotes/InvoiceNotes";
import { joinStyles } from "@utils/styleUtils";

const invoiceDetailsSettings = [
  {
    id: "ids-1",
    buttonText: "Company Details",
    link: "/invoices/settings/details",
    component: CompanyDetails,
  },
  {
    id: "ids-2",
    buttonText: "Invoice Settings",
    link: "/invoices/settings/invoice",
    component: InvoiceGeneralSettings,
  },
  {
    id: "ids-3",
    buttonText: "Tax Details",
    link: "/invoices/settings/tax",
    component: InvoiceTaxSettings,
  },
  {
    id: "ids-4",
    buttonText: "Notes",
    link: "/invoices/settings/notes",
    component: InvoiceNotes,
  },
];

// TODO: remove after testing (BE) => InvoiceGeneralSettings
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const existingItemData = [
  // Company Details
  {
    "company-name": "Awesome",
    cin: "1111111111111",
    tin: "1111111",
    address: "st.  Jna no. 64",
    "zip-code": "1300",
    city: "Kumanovo",
    country: "Macedonia",
    "phone-number": "+38977888888",
    email: "stefan@mail.com",
    website: "www.stefan.com",
    "bank-name": "KU Bank Name ",
    "bank-account": "111-1111111111-11",
  },
  // Invoice Settings
  {
    currency: "USD",
    prefix: "OLD",
    "digital-name": "Stefan Anastasovski",
    "reset-number": true,
  },
  // Tax Details
  {
    "tax-percentage": "10",
    "tax-active": true,
  },
  // Notes
  {
    "invoice-note": "This is edit note only for testing.",
  },
];

export const InvoiceSettings = (props: any) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const style = styles(theme);
  // TODO: remove after testing (BE)
  const shouldEdit = false;

  const [component, setComponent] = useState(
    React.createElement(invoiceDetailsSettings[0].component, {
      ...props,
      // TODO: remove after testing (BE) =>
      shouldEdit: shouldEdit,
      existingItemData: shouldEdit && existingItemData[0],
    })
  );

  const handleRouterLink = (index: number) => {
    setIndex(index);
    setComponent(
      React.createElement(invoiceDetailsSettings[index].component, {
        ...props,
        // TODO: remove after testing (BE) =>
        shouldEdit: shouldEdit,
        existingItemData: shouldEdit && existingItemData[index],
      })
    );
  };

  return (
    <BoxFlex style={style.outerContainer}>
      <Box style={style.innerContainer}>
        <BoxFlex column>
          {invoiceDetailsSettings.map((item, itemIndex) => {
            const isFocused = index === itemIndex;

            return (
              <RouterLink
                key={item.id}
                // href={!shouldEdit ? item.link : `${item.link}/edit`}
                href={item.link}
                onClick={handleRouterLink.bind(null, itemIndex)}
                underline="hover"
                style={joinStyles([
                  isFocused && style.selectedLinkColor,
                  style.linkHoverColor,
                ])}
              >
                {item.buttonText}
              </RouterLink>
            );
          })}
        </BoxFlex>
      </Box>
      <Box flex="1">
        {/* Company Details */}
        {component}
      </Box>
    </BoxFlex>
  );
};

const styles = (theme: Theme) => {
  return {
    outerContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    innerContainer: {
      width: "250px",
      alignSelf: "flex-start",
      display: "flex",
      paddingTop: "80px",
    },
    selectedLinkColor: {
      color: theme.palette.common.white,
    },
    linkHoverColor: {
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
  };
};
