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
} from "@ionic/react";
import React from "react";
import { useAuth } from "../../firebase/authProvider";
import "./Profile.css";

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

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
            <IonLabel>{user?.email}</IonLabel>
          </IonItem>
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
