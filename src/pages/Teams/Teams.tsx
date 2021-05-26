import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseIndex";
import { useAuth } from "../../firebase/authProvider";
import firebase from "firebase";

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<firebase.firestore.DocumentData[]>([]);
  const [hasTeam, setHasTeam] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    db.collection("teams")
      .get()
      .then((querySnapshot) =>
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
      .then((data: firebase.firestore.DocumentData[]) => {
        setTeams(data);
        setHasTeam(data?.some((t) => t.members.includes(user?.uid)));
      });
  }, []);

  const handleJoin = (event: React.MouseEvent, id: string): void => {
    db.collection("teams")
      .doc(id)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(user?.uid),
      });

    setHasTeam(true);
  };

  const handleLeave = (event: React.MouseEvent, id: string): void => {
    db.collection("teams")
      .doc(id)
      .update({
        members: firebase.firestore.FieldValue.arrayRemove(user?.uid),
      });
    setHasTeam(false);
  };

  const checkIfUserInTeam = (team: firebase.firestore.DocumentData): boolean =>
    team.members.includes(user?.uid);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Teams</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Teams</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {teams &&
            teams.map((team) => (
              <IonItem key={team.id}>
                <IonLabel>
                  <h2>{team.name}</h2>
                </IonLabel>
                {!hasTeam && (
                  <IonButton
                    color="success"
                    onClick={(event: React.MouseEvent) => {
                      handleJoin(event, team.id);
                    }}
                  >
                    Join
                  </IonButton>
                )}
                {checkIfUserInTeam(team) && (
                  <IonButton
                    color="danger"
                    onClick={(event: React.MouseEvent) => {
                      handleLeave(event, team.id);
                    }}
                  >
                    Leave
                  </IonButton>
                )}
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Teams;
