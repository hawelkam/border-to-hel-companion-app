import { createLegAction, getLegsAction } from "../actions/LegActions";
import { Dispatch } from "redux";
import { LegActionTypes } from "../types/LegTypes";
import { db } from "../../firebase/firebaseIndex";
import firebase from "firebase";
import { Leg } from "../interfaces/Leg";

export const getLegs = (teamId: string) => {
  return function (dispatch: Dispatch<LegActionTypes>) {
    db.collection("legs")
      .get()
      .then((querySnapshot) =>
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
      .then((data: firebase.firestore.DocumentData[]) => {
        const legs = data
          .filter((leg) => leg.teamId === teamId)
          .map((leg) => ({
            id: leg.id,
            distance: leg.distance,
            stravaLink: leg.stravaLink,
            estimatedTime: leg.estimatedTime,
            actualTime: leg.actualTime,
            runnerId: leg.runnerId,
            additionalInfo: leg.additionalInfo,
            changePoint: leg.changePoint,
            camperPoint: leg.camperPoint,
            teamId: leg.teamId,
          }));
        dispatch(getLegsAction(legs));
        return legs;
      });
  };
};

export const createLeg = (leg: Leg) => {
  return function (dispatch: Dispatch<LegActionTypes>) {
    // db.collection("legs")
    //   .add({
    //     name: team.name,
    //     members: team.members,
    //   })
    //   .then((ref) => {
    //     team.id = ref.id;
    //     dispatch(createLegAction(team));
    //   });
  };
};
