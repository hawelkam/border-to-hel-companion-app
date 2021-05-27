import { Team } from "../interfaces/Team";

export const GET_TEAMS = "GET_TEAMS";
export const JOIN_TEAM = "JOIN_TEAM";
export const LEAVE_TEAM = "LEAVE_TEAM";
export const CREATE_TEAM = "CREATE_TEAM";

export interface GetTeamsStateType {
  teams: Team[];
}

interface GetTeamsActionType {
  type: typeof GET_TEAMS;
  payload: Team[];
}

interface JoinTeamActionType {
  type: typeof JOIN_TEAM;
  userId: string;
  teamId: string;
}

interface LeaveTeamActionType {
  type: typeof LEAVE_TEAM;
  userId: string;
  teamId: string;
}

interface CreateTeamActionType {
  type: typeof CREATE_TEAM;
  team: Team;
}

export type TeamActionTypes =
  | GetTeamsActionType
  | JoinTeamActionType
  | LeaveTeamActionType
  | CreateTeamActionType;
