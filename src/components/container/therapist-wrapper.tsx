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
import {chatbubbles, contact, hand} from 'ionicons/icons';
import Book from '../../pages/client/book';
import Chat from '../../pages/client/chat';
import Profile from '../../pages/client/profile';

const TherapistWrapper: React.FC = () => (
    <>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/client/book" component={Book} exact={true} />
                    <Route path="/client/chat" component={Chat} exact={true} />
                    <Route path="/client/profile" component={Profile} />
                    <Route path="/" render={() => <Redirect to="/client/book" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/client/book">
                        <IonIcon icon={hand} />
                        <IonLabel>Massage</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/client/chat">
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

export default TherapistWrapper;
