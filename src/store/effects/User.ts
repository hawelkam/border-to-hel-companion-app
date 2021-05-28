import {
  getUserAction,
  registerUserAction,
  updateUserProfileAction,
  updateUserTeamAction,
} from "../actions/UserActions";
import { Dispatch } from "redux";
import { UserActionTypes } from "../types/UserTypes";
import { db } from "../../firebase/firebaseIndex";
import firebase from "firebase";
import { User, UserProfile } from "../interfaces/User";

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
          avgPace: data.avgPace,
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

export const updateUserProfile = (profile: UserProfile) => {
  return function (dispatch: Dispatch<UserActionTypes>) {
    db.collection("users")
      .doc(profile.id)
      .update({
        firstName: profile.firstName,
        lastName: profile.lastName,
        nickname: profile.nickname,
        avgPace: profile.avgPace,
      })
      .then(() => {
        dispatch(updateUserProfileAction(profile));
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
        avgPace: "",
      })
      .then(() => {
        dispatch(registerUserAction(id));
      });
  };
};
