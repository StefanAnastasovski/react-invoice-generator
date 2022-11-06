import { Link, ListItem } from "@mui/material";
import { StyledListItemButton } from "./StyledListItemButton";
import { StyledListItemText } from "./StyledListItemText";

export const SubMenuItem = ({
  id,
  subtitles,
  open,
  onClickMenuHandler,
  selectedItem,
}: SubMenuProps) => {
  const { innerItem, linkStyle } = styles(open);
  return subtitles.map(({ subtitleId, subtitle, link }: SubTitleProps) => {
    return (
      <Link
        key={subtitleId}
        // component={RouterLink}
        // to={pathName.concat(link)}
        {...linkStyle}
      >
        <ListItem disablePadding selected={selectedItem.subId === subtitleId}>
          <StyledListItemButton
            open={open}
            onClick={() => onClickMenuHandler(subtitles[id]?.subtitleId)}
            {...innerItem}
          >
            {open && <StyledListItemText open={open} primary={subtitle} />}
          </StyledListItemButton>
        </ListItem>
      </Link>
    );
  });
};

const styles = (open: boolean) => {
  return {
    linkStyle: {
      sx: {
        textDecoration: "none",
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
};

type SubTitleProps = {
  subtitleId: number | string;
  subtitle: string;
  link: string;
};
