import { AppActions } from "../../../redux-store/action-types";
import { NavbarMenuToken } from "../../../redux-store/types";
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