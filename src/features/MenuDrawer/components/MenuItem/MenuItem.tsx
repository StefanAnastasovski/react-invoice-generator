import React from "react";
import { useSelector } from "react-redux";
import { Collapse, Link, List, Theme, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/KeyboardArrowRight";
import { useHandleMenuClick } from "@hooks/useHandleMenuClick";
import { StyledListItemButton } from "./StyledListItemButton";
import { StyledListItemText } from "./StyledListItemText";
import { StyledListItem } from "./StyledListItem";
import { StyledListItemIcon } from "./StyledListItemIcon";
import { SubMenuItem } from "./SubMenuItem";

export const MenuItem = ({ data, style, otherProps }: DrawerItemType) => {
  const theme = useTheme();
  const { id, title, subtitles, icon, link } = data;
  // const [pathName, setPathName] = useState(link || "/");
  const open = useSelector((state: any) => state.drawer.isDrawerOpened);
  const isExpanded = useSelector((state: any) => state.drawer.isExpanded);
  const selectedItem = useSelector(
    (state: any) => state.drawer.selectedMenuItemId
  );
  const { setIsExpended, setIsSelectedItem, setMenuUrl } = useHandleMenuClick({
    data,
  });

  let expandIcon = null;
  const { arrowForwardStyle, linkStyle } = styles({ theme, open });
  if (subtitles.length > 0) {
    expandIcon = isExpanded[id] ? (
      <ExpandMoreIcon />
    ) : (
      <ArrowForwardIcon {...arrowForwardStyle} />
    );
  }

  // TODO: optimize renders
  const onClickMenuHandler = (subId?: number | string | null) => {
    setIsSelectedItem(subId);
    setMenuUrl();
    !subId && setIsExpended();
  };

  const submenuItems = SubMenuItem({
    id,
    subtitles,
    open,
    onClickMenuHandler,
    selectedItem,
    theme,
  });

  return (
    <>
      <Link {...linkStyle}>
        <StyledListItem
          {...style}
          {...otherProps}
          selected={selectedItem.id === id}
        >
          <StyledListItemButton
            open={open}
            onClick={() => onClickMenuHandler()}
          >
            <StyledListItemIcon open={open} children={icon} />
            {open ? <StyledListItemText primary={title} open={open} /> : null}
            {expandIcon && open ? expandIcon : null}
          </StyledListItemButton>
        </StyledListItem>
      </Link>
      {open && (
        <Collapse in={isExpanded[id]} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            {submenuItems}
          </List>
        </Collapse>
      )}
    </>
  );
};

type StyleProps = {
  theme?: Theme;
  open?: boolean;
};
const styles = ({ theme, open }: StyleProps) => {
  return {
    arrowForwardStyle: {
      sx: {
        display: open ? 0 : "none",
      },
    },
    linkStyle: {
      sx: {
        textDecoration: "none",
        color: theme?.palette.text.primary,
      },
    },
  };
};

// TODO: change any
type DrawerItemDataType = {
  id: number | string;
  title: string;
  icon: React.ReactNode;
  subtitles?: any;
  link?: string;
};

type DrawerItemType = {
  data: DrawerItemDataType;
  selectItemHandler?: any;
  style?: React.CSSProperties;
  orders?: any;
  otherProps?: any;
};
