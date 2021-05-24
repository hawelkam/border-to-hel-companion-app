import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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

const App: React.FC = () => {
  const user = null;
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {user ? (
              <>
                <Route exact path="/legs">
                  <Home />
                </Route>
                <Route exact path="/teams">
                  <Home />
                </Route>
                <Route exact path="/your-team">
                  <Home />
                </Route>
                <Route exact path="/profile">
                  <Home />
                </Route>
                <Redirect to="/teams" />
              </>
            ) : (
              <>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/sign-up">
                  <SignUp />
                </Route>
                <Route exact path="/">
                  <Redirect to="/sign-up" />
                </Route>
              </>
            )}
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
