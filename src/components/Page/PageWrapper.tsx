import React from "react";
import { Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";

export const PageWrapper = ({ children, pageTitle }: any) => {
  const style = styles();

  return (
    <BoxDiv>
      <Typography variant="h1" sx={style.title}>
        {pageTitle}
      </Typography>

      {children}
    </BoxDiv>
  );
};

const styles = () => {
  return {
    title: {
      fontSize: "48px",
      marginTop: 10,
      marginBottom: 10,
    },
  };
};
