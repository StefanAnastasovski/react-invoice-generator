import { RouterLink } from "@components/atoms/Link/RouterLink";
import { Theme } from "@mui/material";
import { StyledListItem } from "./StyledListItem";
import { StyledListItemButton } from "./StyledListItemButton";
import { StyledListItemText } from "./StyledListItemText";
// import { Link as RouterLink } from "react-router-dom";

export const SubMenuItem = ({
  id,
  subtitles,
  isOpen,
  onClickMenuHandler,
  selectedItem,
  theme,
}: SubMenuProps) => {
  const { innerItem, linkStyle } = styles(theme);
  return subtitles.map(({ subtitleId, subtitle, link }: SubTitleProps) => {
    return (
      <RouterLink
        key={subtitleId}
        href={link}
        component={RouterLink}
        style={linkStyle}
      >
        <StyledListItem>
          <StyledListItemButton
            isOpen={isOpen}
            onClick={() => onClickMenuHandler(subtitleId)}
            selected={selectedItem.subId === subtitleId}
            sx={innerItem}
          >
            {isOpen && (
              <StyledListItemText isOpen={isOpen} primary={subtitle} />
            )}
          </StyledListItemButton>
        </StyledListItem>
      </RouterLink>
    );
  });
};

const styles = (theme?: Theme) => {
  return {
    linkStyle: {
      textDecoration: "none",
      color: theme?.palette.text.primary,
    },
    innerItem: {
      paddingLeft: 8,
    },
  };
};

// TODO: change any
type SubMenuProps = {
  id: number | string;
  subtitles: any;
  isOpen: boolean;
  onClickMenuHandler: (subId: number | string | null | undefined) => void;
  selectedItem: any;
  theme?: Theme;
};

type SubTitleProps = {
  subtitleId: number | string;
  subtitle: string;
  link: string;
};
