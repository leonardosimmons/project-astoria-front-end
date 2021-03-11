import { NavbarMenuToken } from "../../../utils/types";

//** ---------------------  TYPES  --------------------- **//
export const SET_NAVBAR_MENU = "SET_NAVBAR_MENU";


//** --------------------  ACTIONS  -------------------- **//
export type SetNavbarMenuAction = {
  type: typeof SET_NAVBAR_MENU;
  payload: {
    menu: NavbarMenuToken[];
  }
};

export type NavBarActions = SetNavbarMenuAction;