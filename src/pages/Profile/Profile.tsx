import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../firebase/authProvider";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserProfile } from "../../store/effects/User";
import { AppState } from "../../store/store";
import { UserProfile } from "../../store/interfaces/User";

const Profile: React.FC = () => {
  const { user: loggedUser, logout } = useAuth();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [avgPace, setAvgPace] = useState("");

  useEffect(() => {
    loggedUser && dispatch(getUser(loggedUser.uid));
  }, [dispatch, loggedUser]);
  const { user } = useSelector((state: AppState) => state.user);

  const toggleEdit = () => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setNickname(user.nickname ?? "");
      setAvgPace(user.avgPace ?? "");
    }
    setEdit(true);
  };
  const saveChanges = () => {
    if (loggedUser && user) {
      const profile: UserProfile = {
        id: loggedUser.uid,
        firstName,
        lastName,
        nickname,
        avgPace,
      };
      dispatch(updateUserProfile(profile));
      setEdit(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItemDivider>E-mail</IonItemDivider>
          <IonItem>
            <IonLabel>{loggedUser?.email}</IonLabel>
          </IonItem>
          {edit ? (
            <>
              <IonItemDivider>First name</IonItemDivider>
              <IonItem>
                <IonInput
                  type="text"
                  value={firstName}
                  onIonChange={(e) => setFirstName(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItemDivider>Last name</IonItemDivider>
              <IonItem>
                <IonInput
                  type="text"
                  value={lastName}
                  onIonChange={(e) => setLastName(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItemDivider>Nickname</IonItemDivider>
              <IonItem>
                <IonInput
                  type="text"
                  value={nickname}
                  onIonChange={(e) => setNickname(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItemDivider>Average pace</IonItemDivider>
              <IonItem>
                <IonInput
                  type="time"
                  value={avgPace}
                  onIonChange={(e) => setAvgPace(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonButton
                  color="primary"
                  onClick={(event: React.MouseEvent) => saveChanges()}
                >
                  Save
                </IonButton>
              </IonItem>
            </>
          ) : (
            <>
              <IonItemDivider>First name</IonItemDivider>
              <IonItem>
                <IonLabel>{user?.firstName}</IonLabel>
              </IonItem>
              <IonItemDivider>Last name</IonItemDivider>
              <IonItem>
                <IonLabel>{user?.lastName}</IonLabel>
              </IonItem>
              <IonItemDivider>Nickname</IonItemDivider>
              <IonItem>
                <IonLabel>{user?.nickname}</IonLabel>
              </IonItem>
              <IonItemDivider>Average pace</IonItemDivider>
              <IonItem>
                <IonLabel>{user?.avgPace}</IonLabel>
              </IonItem>
              <IonItem>
                <IonButton
                  color="primary"
                  onClick={(event: React.MouseEvent) => toggleEdit()}
                >
                  Edit
                </IonButton>
              </IonItem>
            </>
          )}
          <IonItem>
            <IonButton
              color="primary"
              onClick={(event: React.MouseEvent) => logout()}
            >
              Logout
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
