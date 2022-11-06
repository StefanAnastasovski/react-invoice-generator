import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "@constants";

const initialState: DrawerStateType = {
  isDrawerOpened: true,
  selectedMenuItemId: {
    id: menuItems[0].id,
    subId: "",
  },
  url: "/",
  selectedMenuItemTitle: menuItems[0].title,
  //   selectedDropdownItem: dropdownMenuItems[0].title,
  // isExpanded: {},
};

const menuDrawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setMenuDrawerOpen: (state) => {
      state.isDrawerOpened = true;
    },
    setMenuDrawerUrl: (state, { payload: { url } }) => {
      state.url = url;
    },
    setMenuDrawerClose: (state) => {
      state.isDrawerOpened = false;
    },
    setSelectedMenuItem: (state, { payload: { id, subId } }) => {
      state.selectedMenuItemId = {
        id: id,
        subId: subId ? subId : "",
      };
      const matchedTitle = [...menuItems].find((item) => {
        return item.id === id;
      });
      state.selectedMenuItemTitle = (matchedTitle && matchedTitle.title) || "";
    },
    // setSelectedDropdownItem: (state, { payload: { title } }) => {
    //   state.selectedDropdownItem = title;
    // },
    // setIsExpanded: (state, { payload: { id, isExpandable } }) => {
    //   if (isExpandable) {
    //     state.isExpanded = {
    //       ...state.isExpanded,
    //       [id]: !state.isExpanded[id],
    //     };
    //   }
    // },
  },
});

export const menuDrawerReducer = menuDrawerSlice.reducer;
export const menuDrawerActions = menuDrawerSlice.actions;

export default menuDrawerSlice;

type DrawerStateType = {
  isDrawerOpened: boolean;
  selectedMenuItemId?: {
    id?: number | string;
    subId?: number | string;
  };
  url: string;
  selectedMenuItemTitle: string;
  // selectedDropdownItem?: string;
  // isExpanded: any; // TODO: change any
};
