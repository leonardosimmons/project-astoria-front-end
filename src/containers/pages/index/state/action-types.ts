
//* --------------------  TYPES  -------------------- *//
export const FIRST_LOAD = "FIRST_LOAD";
export const INTRO_MODAL_TOGGLE = "INTRO_MODAL_TOGGLE";


//* -------------------  ACTIONS  ------------------- *//
export type FirstLoadAction = {
  type: typeof FIRST_LOAD;
};

export type ToggleIntroModalAction = {
  type: typeof INTRO_MODAL_TOGGLE;
};

export type IndexPageActions = FirstLoadAction | ToggleIntroModalAction;