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
import React, { useEffect } from "react";
import { useAuth } from "../../firebase/authProvider";
import { AppState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, joinTeam, leaveTeam } from "../../store/effects/Teams";
import { Team } from "../../store/interfaces/Team";
import CreateTeam from "./CreateTeam";
import { getUser, updateUserTeam } from "../../store/effects/User";

const Teams: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getTeams());
    user && dispatch(getUser(user.uid));
  }, [dispatch, user]);
  const teams = useSelector((state: AppState) => state.teams);
  const currentUser = useSelector((state: AppState) => state.user);

  const handleJoin = (event: React.MouseEvent, id: string): void => {
    if (currentUser.user) {
      dispatch(joinTeam(id, currentUser.user.id!));
      dispatch(updateUserTeam(id, currentUser.user.id!));
    }
  };

  const handleLeave = (event: React.MouseEvent, id: string): void => {
    if (currentUser.user) {
      dispatch(leaveTeam(id, currentUser.user.id!));
      dispatch(updateUserTeam(null, currentUser.user.id!));
    }
  };

  const checkIfUserInTeam = (team: Team): boolean =>
    currentUser.user!.teamId === team.id;

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
          {teams.teams &&
            teams.teams.map((team) => (
              <IonItem key={team.id}>
                <IonLabel>
                  <h2>{team.name}</h2>
                  <p>{team.members.length} members</p>
                </IonLabel>
                {!checkIfUserInTeam(team) && (
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
          <CreateTeam />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Teams;
