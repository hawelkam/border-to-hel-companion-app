import {
  CREATE_TEAM,
  GET_TEAMS,
  JOIN_TEAM,
  LEAVE_TEAM,
  TeamActionTypes,
} from "../types/TeamTypes";
import { Team } from "../interfaces/Team";

export const getTeamsAction = (teams: Team[]): TeamActionTypes => {
  return {
    type: GET_TEAMS,
    payload: teams,
  };
};

export const joinTeamAction = (
  userId: string,
  teamId: string
): TeamActionTypes => {
  return {
    type: JOIN_TEAM,
    teamId,
    userId,
  };
};

export const leaveTeamAction = (
  userId: string,
  teamId: string
): TeamActionTypes => {
  return {
    type: LEAVE_TEAM,
    teamId,
    userId,
  };
};

export const createTeamAction = (team: Team): TeamActionTypes => {
  return {
    type: CREATE_TEAM,
    team,
  };
};
