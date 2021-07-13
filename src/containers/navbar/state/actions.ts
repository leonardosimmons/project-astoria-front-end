
import { NavbarMenuTab } from "../../../utils/types";
import { NavBarActions, SET_NAVBAR_MENU } from "./action-types";

export const setNavbarMenu = (menu: NavbarMenuTab[]): NavBarActions => 
(
  {
    type: SET_NAVBAR_MENU,
    payload: {
      menu: menu
    }
  }
);