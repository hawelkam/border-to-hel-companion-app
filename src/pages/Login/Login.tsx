import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/react";
import firebaseTypes from "firebase";
import React, { useState } from "react";
import { firebase } from "../../firebase/firebaseIndex";

import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const login = (event: React.MouseEvent, email: string, password: string) => {
    event.preventDefault();
    console.log("IM IN");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error: firebaseTypes.auth.Error) => {
        setError(error.message);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Log In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItemDivider>E-mail</IonItemDivider>
          <IonItem>
            <IonInput
              type="email"
              value={email}
              placeholder="Enter your e-mail..."
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItemDivider>Password</IonItemDivider>
          <IonItem>
            <IonInput
              type="password"
              value={password}
              placeholder="Enter your password..."
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
          {error && (
            <IonItem>
              <IonLabel color="danger">{error}</IonLabel>
            </IonItem>
          )}
          <IonItem>
            <IonButton
              color="primary"
              onClick={(event: React.MouseEvent) => {
                login(event, email, password);
              }}
            >
              Log In
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
