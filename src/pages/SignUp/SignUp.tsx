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
import firebaseTypes from "firebase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase } from "../../firebase/firebaseIndex";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/effects/User";

const SignUp: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const register = (
    event: React.MouseEvent,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        dispatch(registerUser(data.user!.uid));
        history.push("/");
      })
      .catch((error: firebaseTypes.auth.Error) => {
        setError(error.message);
      });
  };

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
                register(event, email, password);
              }}
            >
              Register
            </IonButton>
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
