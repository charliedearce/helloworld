import React from 'react';
import { Route } from 'react-router-dom';
import {
    IonApp, IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import firebase from "firebase";


import Login from "./pages/authentication/login";
import ClientReg from "./pages/authentication/client/registration";
import TherapistReg from "./pages/authentication/therapist/registration";
import Forgotpass from "./pages/authentication/forgotpass";
import About from "./pages/common/about";
import Privacy from "./pages/common/privacy";

import ClientWrapper from "./components/container/client-wrapper";
import TherapistWrapper from "./components/container/therapist-wrapper";
import ItemSlidingExample from "./App.test";

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
    <IonReactRouter >
        <Route exact path="/test" component={ItemSlidingExample}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={Forgotpass}/>
        <Route exact path="/client/registration" component={ClientReg}/>
        <Route exact path="/client/book" component={ClientWrapper}/>
        <Route exact path="/therapist/registration" component={TherapistReg}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/privacy" component={Privacy}/>

        {/*TAB ROUTES*/}
        <Route exact path="/therapist/booking" component={TherapistWrapper} />
        <Route exact path="/therapist/massage" component={TherapistWrapper}/>
        <Route exact path="/therapist/massage/:id" component={TherapistWrapper}/>
        <Route exact path="/therapist/message" component={TherapistWrapper} />
        <Route exact path="/therapist/message/:id" component={TherapistWrapper}/>
        <Route exact path="/therapist/profile" component={TherapistWrapper} />
        <Route exact path="/therapist/profile/edit" component={TherapistWrapper} />
        <Route exact path="/therapist/changepassword" component={TherapistWrapper} />
        <Route exact path="/therapist/notifications" component={TherapistWrapper} />
        <Route exact path="/therapist/settings" component={TherapistWrapper} />

        <Route exact path="/client/booking" component={ClientWrapper} />
        <Route exact path="/client/message" component={ClientWrapper} />
        <Route exact path="/client/message/:id" component={ClientWrapper}/>
        <Route exact path="/client/profile" component={ClientWrapper} />
        <Route exact path="/client/profile/edit" component={ClientWrapper} />
        <Route exact path="/client/changepassword" component={ClientWrapper} />
        <Route exact path="/client/notifications" component={ClientWrapper} />
        <Route exact path="/client/about" component={ClientWrapper} />
        <Route exact path="/client/privacy" component={ClientWrapper} />
        <Route exact path="/client/settings" component={ClientWrapper} />

    </IonReactRouter>
  </IonApp>
);

export default App;
