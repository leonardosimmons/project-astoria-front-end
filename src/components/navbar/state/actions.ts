import { AppActions } from "../../../store/action-types";
import { NavbarMenuToken } from "../../../store/types";
import { SET_NAVBAR_MENU } from "./action-types";

export const setNavbarMenu = (menu: NavbarMenuToken[]): AppActions => 
(
  {
    type: SET_NAVBAR_MENU,
    payload: {
      menu: menu
    }
  }
);