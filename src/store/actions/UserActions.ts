import {
  GET_USER,
  REGISTER_USER,
  UPDATE_USER_TEAM,
  UserActionTypes,
} from "../types/UserTypes";
import { User } from "../interfaces/User";

export const getUserAction = (user: User): UserActionTypes => {
  return {
    type: GET_USER,
    payload: user,
  };
};

export const registerUserAction = (id: string): UserActionTypes => {
  return {
    type: REGISTER_USER,
    id,
  };
};

export const updateUserTeamAction = (
  teamId: string | null,
  userId: string
): UserActionTypes => {
  return {
    type: UPDATE_USER_TEAM,
    teamId,
    userId,
  };
};
