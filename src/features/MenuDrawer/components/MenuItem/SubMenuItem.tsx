import { Link, Theme } from "@mui/material";
import { StyledListItem } from "./StyledListItem";
import { StyledListItemButton } from "./StyledListItemButton";
import { StyledListItemText } from "./StyledListItemText";

export const SubMenuItem = ({
  id,
  subtitles,
  open,
  onClickMenuHandler,
  selectedItem,
  theme,
}: SubMenuProps) => {
  const { innerItem, linkStyle } = styles(theme);
  return subtitles.map(({ subtitleId, subtitle, link }: SubTitleProps) => {
    return (
      <Link
        key={subtitleId}
        // component={RouterLink}
        // to={pathName.concat(link)}
        {...linkStyle}
      >
        <StyledListItem>
          <StyledListItemButton
            open={open}
            onClick={() => onClickMenuHandler(subtitleId)}
            selected={selectedItem.subId === subtitleId}
            {...innerItem}
          >
            {open && <StyledListItemText open={open} primary={subtitle} />}
          </StyledListItemButton>
        </StyledListItem>
      </Link>
    );
  });
};

const styles = (theme?: Theme) => {
  return {
    linkStyle: {
      sx: {
        textDecoration: "none",
        color: theme?.palette.text.primary,
      },
    },
    innerItem: {
      sx: { paddingLeft: 8 },
    },
  };
};

// TODO: change any
type SubMenuProps = {
  id: number | string;
  subtitles: any;
  open: boolean;
  onClickMenuHandler: (subId: number | string | null | undefined) => void;
  selectedItem: any;
  theme?: Theme;
};

type SubTitleProps = {
  subtitleId: number | string;
  subtitle: string;
  link: string;
};
