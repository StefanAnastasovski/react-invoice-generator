import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { SxProps } from "@mui/material";

type Props = {
  cardContent: React.ReactNode | React.ReactNode[];
  cardActions?: React.ReactNode;
  containerStyle?: React.CSSProperties;
  contentStyle?: SxProps;
};
export const BasicCard = ({
  cardContent,
  cardActions,
  containerStyle,
  contentStyle,
}: Props) => {
  return (
    <Card sx={containerStyle ? containerStyle : null}>
      <CardContent sx={contentStyle ? contentStyle : null}>
        {cardContent}
      </CardContent>
      {Boolean(cardActions) ? <CardActions>{cardActions}</CardActions> : null}
    </Card>
  );
};
