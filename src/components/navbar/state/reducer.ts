import { NavBarActions, SET_NAVBAR_MENU } from "../../../store/action-types";
import { NavbarContext } from "../../../store/types";

const navbarReducerDefaultState: NavbarContext = {
  menu: [],
};

const navbarReducer =  (state = navbarReducerDefaultState, action: NavBarActions) => 
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

export default navbarReducer;