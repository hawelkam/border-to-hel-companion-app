import { User, UserProfile } from "../interfaces/User";

export const GET_USER = "GET_USER";
export const REGISTER_USER = "REGISTER_USER";
export const UPDATE_USER_TEAM = "UPDATE_USER_TEAM";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

export interface UserStateType {
  user: User | null;
}

interface GetUserActionType {
  type: typeof GET_USER;
  payload: User;
}

interface RegisterUserActionType {
  type: typeof REGISTER_USER;
  id: string;
}

interface UpdateUserTeamActionType {
  type: typeof UPDATE_USER_TEAM;
  teamId: string | null;
  userId: string | null;
}

interface UpdateUserProfileActionType {
  type: typeof UPDATE_USER_PROFILE;
  profile: UserProfile;
}

export type UserActionTypes =
  | GetUserActionType
  | RegisterUserActionType
  | UpdateUserTeamActionType
  | UpdateUserProfileActionType;
