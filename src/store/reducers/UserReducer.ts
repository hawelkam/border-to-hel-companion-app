import {
  GET_USER,
  UserStateType,
  UserActionTypes,
  REGISTER_USER,
  UPDATE_USER_TEAM,
  UPDATE_USER_PROFILE,
} from "../types/UserTypes";

const initialStateUser: UserStateType = {
  user: null,
};

export const userReducer = (
  state = initialStateUser,
  action: UserActionTypes
): UserStateType => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: {
          id: action.id,
        },
      };
    case UPDATE_USER_TEAM:
      return {
        ...state,
        user: {
          ...state.user,
          teamId: action.teamId,
        },
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.profile.firstName,
          lastName: action.profile.lastName,
          nickname: action.profile.nickname,
          avgPace: action.profile.avgPace,
        },
      };
    default:
      return state;
  }
};
