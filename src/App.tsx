import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import firebase from "firebase";
// import test from './components/tabs';
import AuthMenu from './pages/authentication/menu';
import ClientLogin from "./pages/authentication/client/login";
import ClientReg from "./pages/authentication/client/registration";
import TherapistLogin from "./pages/authentication/therapist/login";
import Forgotpass from "./pages/authentication/forgotpass";
import ClientWrapper from "./components/container/client-wrapper";
import TherapistWrapper from "./components/container/therapist-wrapper";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

firebase.initializeApp({
    apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
    authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
})

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <Route exact path="/" component={AuthMenu} />
        <Route exact path="/forgot-password" component={Forgotpass}/>
        <Route exact path="/client/login" component={ClientLogin}/>
        <Route exact path="/client/registration" component={ClientReg}/>
        <Route exact path="/client/book" component={ClientWrapper}/>
        <Route exact path="/therapist/login" component={TherapistLogin}/>
        <Route exact path="/therapist/massage" component={TherapistWrapper}/>
    </IonReactRouter>
  </IonApp>
);

export default App;
