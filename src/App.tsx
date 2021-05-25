import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import {
  peopleOutline,
  navigateOutline,
  personOutline,
  medalOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { useAuth } from "./firebase/authProvider";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile/Profile";

const App: React.FC = () => {
  const { user, loading, logout } = useAuth();
  console.log(user);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute exact path="/legs" component={Home} />
            <PrivateRoute exact path="/teams" component={Home} />
            <PrivateRoute exact path="/your-team" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/">
              <Redirect to="/teams" />
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/sign-up">
              {user ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route exact path="/">
              {user ? <Redirect to="/teams" /> : <Redirect to="/login" />}
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="legs" href="/legs">
              <IonIcon icon={navigateOutline} />
              <IonLabel>Legs</IonLabel>
            </IonTabButton>

            <IonTabButton tab="teams" href="/teams">
              <IonIcon icon={medalOutline} />
              <IonLabel>Teams</IonLabel>
            </IonTabButton>

            <IonTabButton tab="yourTeam" href="/your-team">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Your Team</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="profile">
              <IonIcon icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
