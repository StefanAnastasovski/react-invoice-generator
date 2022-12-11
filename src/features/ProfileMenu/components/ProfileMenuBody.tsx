import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon, ListItemIcon, Theme, Typography, useTheme } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import {
  PROFILE_INFO,
  PROFILE_MENU_ITEMS,
} from "../constants/ProfileMenuItems";
import { ProfileMenuAriaValuesType } from "../ProfileMenu";
import { ProfileMenuImage } from "./ProfileMenuImage";
import { StyleCustomProps } from "types/StyleProps";
import { Paragraph } from "@components/atoms/Typography/Paragraph";

type Props = {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  ariaValues: ProfileMenuAriaValuesType;
  onClose: () => void;
};

type ItemProps = {
  style: StyleCustomProps;
  onClose: () => void;
};

const renderItems = ({ style, onClose }: ItemProps) => {
  return PROFILE_MENU_ITEMS.map((item, index) => {
    return (
      <MenuItem
        key={item.id}
        disableTouchRipple={true}
        onClick={onClose}
        sx={
          index !== PROFILE_MENU_ITEMS.length - 1
            ? style.menuItemSpacing
            : [style.menuItemSpacing, style.lastMenuItem]
        }
      >
        <ListItemIcon>
          <Icon component={item.icon} />
        </ListItemIcon>
        {item.title}
      </MenuItem>
    );
  });
};

export const ProfileMenuBody = ({
  isOpen,
  anchorEl,
  ariaValues,
  onClose,
}: Props) => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <Menu
      id={ariaValues.menu}
      aria-labelledby={ariaValues.button}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      sx={style.profileMenuContainer}
    >
      <BoxDiv style={style.profileMenuInnerContainer}>
        <MenuItem disableRipple={true} sx={style.firstMenuItem}>
          <BoxDiv style={style.firstMenuItemInnerContainer}>
            {/* TODO: get the data from BE: PROFILE_MENU_IMAGE */}
            <ProfileMenuImage />

            {/* TODO: get the data from BE: PROFILE_INFO */}
            <BoxDiv style={style.profileInfo}>
              <Paragraph style={{ ...style.longTextEllipsis }} bold>
                {PROFILE_INFO.name}
              </Paragraph>
              <Paragraph style={style.longTextEllipsis} variant="subtitle2">
                {PROFILE_INFO.jobTitle}
              </Paragraph>
            </BoxDiv>
          </BoxDiv>
        </MenuItem>
        {renderItems({ style, onClose })}
      </BoxDiv>
    </Menu>
  );
};

const styles = (theme: Theme) => {
  return {
    profileMenuContainer: {
      top: 10,
      "& .MuiMenu-paper": {
        borderRadius: "6px",
      },
      "& .MuiMenu-list": {
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 2,
        border: `1px solid ${theme.palette.common.white}`,
      },
    },
    profileMenuInnerContainer: {
      width: 320,
    },
    firstMenuItem: {
      borderBottom: `1px solid ${theme.palette.common.white}`,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    firstMenuItemInnerContainer: {
      display: "flex",
      alignItems: "center",
      paddingTop: 1,
      paddingBottom: 1,
    },
    profileInfo: {
      paddingLeft: 2,
      maxWidth: 248,
    },
    longTextEllipsis: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    profileInfoTitle: {
      fontWeight: 800,
    },
    menuItemSpacing: {
      padding: 2,
    },
    lastMenuItem: {
      borderTop: `1px solid ${theme.palette.common.white}`,
    },
  };
};
