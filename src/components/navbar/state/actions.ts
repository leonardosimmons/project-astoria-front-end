import { AppActions, SET_NAVBAR_MENU } from "../../../store/action-types";
import { NavbarMenuToken } from "../../../store/types";

export const setNavbarMenu = (menu: NavbarMenuToken[]): AppActions => 
(
  {
    type: SET_NAVBAR_MENU,
    payload: {
      menu: menu
    }
  }
);