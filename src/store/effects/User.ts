import {
  getUserAction,
  registerUserAction,
  updateUserTeamAction,
} from "../actions/UserActions";
import { Dispatch } from "redux";
import { UserActionTypes } from "../types/UserTypes";
import { db } from "../../firebase/firebaseIndex";
import firebase from "firebase";
import { User } from "../interfaces/User";

export const getUser = (userId: string) => {
  return function (dispatch: Dispatch<UserActionTypes>) {
    db.collection("users")
      .doc(userId)
      .get()
      .then((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .then((data: firebase.firestore.DocumentData) => {
        const user = {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          nickname: data.nickname,
          legs: data.legs,
          teamId: data.teamId,
        };
        dispatch(getUserAction(user));
        return user;
      });
  };
};

export const updateUserTeam = (teamId: string | null, userId: string) => {
  return function (dispatch: Dispatch<UserActionTypes>) {
    db.collection("users")
      .doc(userId)
      .update({
        teamId,
      })
      .then(() => {
        dispatch(updateUserTeamAction(teamId, userId));
      });
  };
};

export const registerUser = (id: string) => {
  return function (dispatch: Dispatch<UserActionTypes>) {
    db.collection("users")
      .doc(id)
      .set({
        firstName: "",
        lastName: "",
        nickname: "",
        legs: [],
        teamId: "",
      })
      .then(() => {
        dispatch(registerUserAction(id));
      });
  };
};
