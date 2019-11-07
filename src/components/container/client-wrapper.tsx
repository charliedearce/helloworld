import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {chatbubbles, contact, list} from 'ionicons/icons';

import ClientMessage from "../../pages/client/message";
import ClientMessageConvo from "../../pages/client/message-convo";
import ClientProfile from "../../pages/client/profile";
import ClientEditProfile from "../../pages/client/edit-profile";
import ClientNotifications from "../../pages/client/notifications";
import ClientBooking from "../../pages/client/booking";

import About from "../../pages/common/about";
import Privacy from "../../pages/common/privacy";
import ChangePassword from "../../pages/common/changepass";
import Settings from "../../pages/common/settings";

const ClientWrapper: React.FC = () => (
    <>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/client/booking" component={ClientBooking} />
                    <Route exact path="/client/message" component={ClientMessage} />
                    <Route exact path="/client/message/:id" component={ClientMessageConvo} />
                    <Route exact path="/client/profile" component={ClientProfile} />
                    <Route exact path="/client/profile/edit" component={ClientEditProfile} />
                    <Route exact path="/client/changepassword" component={ChangePassword} />
                    <Route exact path="/client/notifications" component={ClientNotifications} />
                    <Route exact path="/client/settings" component={Settings} />

                    <Route exact path="/about" component={About} />
                    <Route exact path="/privacy" component={Privacy} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/client/booking">
                        <IonIcon icon={list} />
                        <IonLabel>Book</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/client/message">
                        <IonIcon icon={chatbubbles} />
                        <IonLabel>Chat</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/client/profile">
                        <IonIcon icon={contact} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </>
);

export default ClientWrapper;
