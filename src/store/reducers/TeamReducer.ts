import {
  GET_TEAMS,
  GetTeamsStateType,
  TeamActionTypes,
  JOIN_TEAM,
  LEAVE_TEAM,
  CREATE_TEAM,
} from "../types/TeamTypes";

const initialStateGetTeams: GetTeamsStateType = {
  teams: [],
};

export const getTeamsReducer = (
  state = initialStateGetTeams,
  action: TeamActionTypes
): GetTeamsStateType => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case JOIN_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) => {
          if (team.id !== action.teamId) return team;
          team.members.push(action.userId);
          return team;
        }),
      };
    case LEAVE_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) => {
          if (team.id !== action.teamId) return team;
          const index = team.members.indexOf(action.userId);
          if (index > -1) {
            team.members.splice(index, 1);
          }
          return team;
        }),
      };
    case CREATE_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.team],
      };
    default:
      return state;
  }
};
