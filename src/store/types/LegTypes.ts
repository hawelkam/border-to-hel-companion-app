import { Leg } from "../interfaces/Leg";

export const GET_LEGS = "GET_LEGS";
export const CREATE_LEG = "CREATE_LEG";

export interface LegsStateType {
  legs: Leg[];
}

interface GetLegsActionType {
  type: typeof GET_LEGS;
  payload: Leg[];
}

interface CreateLegActionType {
  type: typeof CREATE_LEG;
  leg: Leg;
}

export type LegActionTypes = GetLegsActionType | CreateLegActionType;
