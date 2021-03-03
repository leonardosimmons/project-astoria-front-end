import { NavbarMenuToken } from "./types";

//** --------------------  NAVIGATION BAR  -------------------- **//
export const SET_NAVBAR_MENU = "SET_NAVBAR_MENU";

export type SetNavbarMenuAction = 
{
  type: typeof SET_NAVBAR_MENU;
  payload: {
    menu: NavbarMenuToken[];
  }
};

export type NavBarActions = SetNavbarMenuAction;

//** ------------------------  INDEX  ------------------------- **//
export type AppActions = NavBarActions;