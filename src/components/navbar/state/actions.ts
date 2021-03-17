import { AppActions } from "../../../redux-store/action-types";
import { NavbarMenuTab } from "../../../utils/types";
import { SET_NAVBAR_MENU } from "./action-types";

export const setNavbarMenu = (menu: NavbarMenuTab[]): AppActions => 
(
  {
    type: SET_NAVBAR_MENU,
    payload: {
      menu: menu
    }
  }
);