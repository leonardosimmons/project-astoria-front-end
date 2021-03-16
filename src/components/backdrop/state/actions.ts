import { AppActions } from "../../../redux-store/action-types";
import { TOGGLE_BACKDROP } from "./action-types";

export const toggleBackdrop = (): AppActions => (
  {
    type: TOGGLE_BACKDROP
  }
);
