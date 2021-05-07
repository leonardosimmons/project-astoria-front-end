
import { IndexPageContext } from '../../../../utils/types';
import { FIRST_LOAD, IndexPageActions, INTRO_MODAL_TOGGLE } from './action-types';

const indexPageDefaultState: IndexPageContext = {
  firstLoad: false,
  introModal: true
};


const indexPageReducer = (state = indexPageDefaultState, action: IndexPageActions) => {
  switch(action.type)
  {
    case FIRST_LOAD:
      return { ...state, firstLoad: true };
    case INTRO_MODAL_TOGGLE:
      return { ...state, introModal: false };
    default:
      return state;
  };
};

export { indexPageReducer };