import { AppActions } from "../../../redux-store/action-types";
import { ToggleBackdropAction, TOGGLE_BACKDROP } from "./action-types";

export const toggleBackdrop = (): ToggleBackdropAction => (
  {
    type: TOGGLE_BACKDROP
  }
);
