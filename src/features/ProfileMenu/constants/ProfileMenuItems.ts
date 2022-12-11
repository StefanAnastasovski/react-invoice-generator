import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

export const PROFILE_MENU_ITEMS = [
  {
    id: "pmi-1",
    title: "Profile",
    icon: AccountCircleIcon,
  },
  {
    id: "pmi-2",
    title: "Settings",
    icon: SettingsIcon,
  },
  {
    id: "pmi-3",
    title: "Logout",
    icon: LogoutIcon,
  },
];

export const PROFILE_INFO = {
  id: "pmi-pi",
  name: "Stefan Anastasovski",
  jobTitle: "CEO | Full-Stack Developer",
};
