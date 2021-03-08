import { NavbarContext } from "../../../redux-store/types";
import { NavBarActions, SET_NAVBAR_MENU } from "./action-types";

const navbarReducerDefaultState: NavbarContext = {
  menu: [],
};

const navbarReducer = (state = navbarReducerDefaultState, action: NavBarActions): NavbarContext => 
{
  switch(action.type)
  {
    case SET_NAVBAR_MENU:
      return {
        ...state,
        menu: action.payload.menu
      };
    default:
      return state;
  }
};

export { navbarReducer };