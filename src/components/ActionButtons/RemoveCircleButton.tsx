import { useTheme } from "@mui/material";
import { RemoveCircle as RemoveIcon } from "@mui/icons-material";
import { ReusableIconButton } from "@components/ReusableButtons";
import { EmptyVoidFn } from "types/CommonProps";
import { CSSProperties } from "react";

type Props = {
  onClick: EmptyVoidFn;
  style?: CSSProperties;
};

export const RemoveCircleButton = ({ style, onClick }: Props) => {
  const theme = useTheme();
  return (
    <ReusableIconButton
      icon={RemoveIcon}
      onClick={onClick}
      style={{
        iconStyle: { ...style },
        editIconButton: {
          padding: 0,
          color: theme.palette.error.dark,
          "&:hover": {
            color: theme.palette.error.main,
          },
        },
      }}
    />
  );
};
