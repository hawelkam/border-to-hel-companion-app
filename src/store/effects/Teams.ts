import {
  createTeamAction,
  getTeamsAction,
  joinTeamAction,
  leaveTeamAction,
} from "../actions/TeamActions";
import { Dispatch } from "redux";
import { TeamActionTypes } from "../types/TeamTypes";
import { db } from "../../firebase/firebaseIndex";
import firebase from "firebase";
import { Team } from "../interfaces/Team";

export const getTeams = () => {
  return function (dispatch: Dispatch<TeamActionTypes>) {
    db.collection("teams")
      .get()
      .then((querySnapshot) =>
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
      .then((data: firebase.firestore.DocumentData[]) => {
        const teams = data.map((team) => ({
          id: team.id,
          name: team.name,
          members: team.members,
        }));
        dispatch(getTeamsAction(teams));
        return teams;
      });
  };
};

export const joinTeam = (teamId: string, userId: string) => {
  return function (dispatch: Dispatch<TeamActionTypes>) {
    db.collection("teams")
      .doc(teamId)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(userId),
      })
      .then(() => {
        dispatch(joinTeamAction(userId, teamId));
      });
  };
};

export const leaveTeam = (teamId: string, userId: string) => {
  return function (dispatch: Dispatch<TeamActionTypes>) {
    db.collection("teams")
      .doc(teamId)
      .update({
        members: firebase.firestore.FieldValue.arrayRemove(userId),
      })
      .then(() => {
        dispatch(leaveTeamAction(userId, teamId));
      });
  };
};

export const createTeam = (team: Team) => {
  return function (dispatch: Dispatch<TeamActionTypes>) {
    db.collection("teams")
      .add({
        name: team.name,
        members: team.members,
      })
      .then((ref) => {
        team.id = ref.id;
        dispatch(createTeamAction(team));
      });
  };
};
