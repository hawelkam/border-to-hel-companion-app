import {
  GET_USER,
  UserStateType,
  UserActionTypes,
  REGISTER_USER,
  UPDATE_USER_TEAM,
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
    default:
      return state;
  }
};
