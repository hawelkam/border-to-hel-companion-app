import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItemDivider>E-mail</IonItemDivider>
          <IonItem>
            <IonInput
              type="email"
              value={email}
              placeholder="Enter you e-mail..."
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItemDivider>Password</IonItemDivider>
          <IonItem>
            <IonInput
              type="password"
              value={password}
              placeholder="Enter you password..."
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonButton color="primary">Register</IonButton>
          </IonItem>
        </IonList>
        <IonItem>
          <IonLabel>
            Already have an account?{" "}
            <IonRouterLink href="/login">Log in.</IonRouterLink>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
