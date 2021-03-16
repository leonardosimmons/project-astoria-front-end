import { BackdropContext } from "../../../utils/types/types";
import { BackdropActions, TOGGLE_BACKDROP } from './action-types';

const backdropDefaultState: BackdropContext = {
  open: false
};

const backdropReducer = (state = backdropDefaultState, action: BackdropActions): BackdropContext => {
  switch(action.type) {
    case TOGGLE_BACKDROP:
      const current = state.open
      return { open: !current }
    default:
      return state;
  };
};

export { backdropReducer };