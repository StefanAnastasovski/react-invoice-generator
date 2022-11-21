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
import { useDrawerMenu } from "@hooks/useDrawerMenu";

export const MenuItem = ({ data, style, otherProps }: DrawerItemType) => {
  const theme = useTheme();
  const { id, title, subtitles, icon, link } = data;
  // const [pathName, setPathName] = useState(link || "/");
  const { isOpen } = useDrawerMenu();
  const isExpanded = useSelector((state: any) => state.drawer.isExpanded);
  const selectedItem = useSelector(
    (state: any) => state.drawer.selectedMenuItemId
  );
  const { setIsExpended, setIsSelectedItem, setMenuUrl } = useHandleMenuClick({
    data,
  });

  let expandIcon = null;
  const { arrowForwardStyle, linkStyle } = styles({ theme, isOpen });
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
    isOpen,
    onClickMenuHandler,
    selectedItem,
    theme,
  });

  return (
    <>
      <Link {...linkStyle}>
        <StyledListItem {...style} {...otherProps}>
          <StyledListItemButton
            isOpen={isOpen}
            onClick={() => onClickMenuHandler()}
            selected={selectedItem.id === id}
          >
            <StyledListItemIcon isOpen={isOpen} children={icon} />
            {isOpen ? (
              <StyledListItemText primary={title} isOpen={isOpen} />
            ) : null}
            {expandIcon && isOpen ? expandIcon : null}
          </StyledListItemButton>
        </StyledListItem>
      </Link>
      {isOpen && (
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
  isOpen?: boolean;
};
const styles = ({ theme, isOpen }: StyleProps) => {
  return {
    arrowForwardStyle: {
      sx: {
        display: isOpen ? 0 : "none",
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
