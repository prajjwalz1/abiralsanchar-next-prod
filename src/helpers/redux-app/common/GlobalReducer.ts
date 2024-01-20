import { createSlice } from "@reduxjs/toolkit";

//////////////////////////////
// Schema
//////////////////////////////
type ISchema = {
  //////////////////////////////
  // Layouts
  //////////////////////////////
  layouts: {
    menu: {
      isMobileMenu: boolean;
    };
  };
};

//////////////////////////////
// Initial state
//////////////////////////////
const initialState: ISchema = {
  layouts: {
    menu: {
      isMobileMenu: false,
    },
  },
};

//////////////////////////////
// Main slice
//////////////////////////////
export const GlobalReducer = createSlice({
  name: "common/GlobalReducer",
  initialState,
  reducers: {
    //////////////////////////////
    // Layouts
    //////////////////////////////
    setMobileNavPopuup: (state, action) => {
      state.layouts.menu.isMobileMenu = action.payload;
    },
  },
});
