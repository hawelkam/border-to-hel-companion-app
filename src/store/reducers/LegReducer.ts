import {
  GET_LEGS,
  LegsStateType,
  LegActionTypes,
  CREATE_LEG,
} from "../types/LegTypes";

const initialStateLegs: LegsStateType = {
  legs: [],
};

export const legsReducer = (
  state = initialStateLegs,
  action: LegActionTypes
): LegsStateType => {
  switch (action.type) {
    case GET_LEGS:
      return {
        ...state,
        legs: action.payload,
      };
    case CREATE_LEG:
      return {
        ...state,
        legs: [...state.legs, action.leg],
      };
    default:
      return state;
  }
};
