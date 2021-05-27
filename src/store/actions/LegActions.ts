import { CREATE_LEG, GET_LEGS, LegActionTypes } from "../types/LegTypes";
import { Leg } from "../interfaces/Leg";

export const getLegsAction = (legs: Leg[]): LegActionTypes => {
  return {
    type: GET_LEGS,
    payload: legs,
  };
};

export const createLegAction = (leg: Leg): LegActionTypes => {
  return {
    type: CREATE_LEG,
    leg,
  };
};
