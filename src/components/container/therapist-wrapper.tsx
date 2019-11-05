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
import {bookmarks, chatbubbles, contact, hand} from 'ionicons/icons';
import Message from '../../pages/therapist/message';
import Massage from '../../pages/therapist/massage';
import Profile from '../../pages/therapist/profile';
import TherapistBooking from "../../pages/therapist/booking";
import TherapistMessageConvo from "../../pages/therapist/message-convo";
import TherapistProfileEdit from "../../pages/therapist/edit-profile";
import ChangePassword from "../../pages/common/changepass";
import Notifications from "../../pages/therapist/notifications";
const TherapistWrapper: React.FC = () => (
    <>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/therapist/booking" component={TherapistBooking} />
                    <Route exact path="/therapist/massage" component={Massage} />
                    <Route exact path="/therapist/message" component={Message} />
                    <Route exact path="/therapist/message/:id" component={TherapistMessageConvo} />
                    <Route exact path="/therapist/profile" component={Profile} />
                    <Route exact path="/therapist/profile/edit" component={TherapistProfileEdit} />
                    <Route exact path="/therapist/changepassword" component={ChangePassword} />
                    <Route exact path="/therapist/notifications" component={Notifications} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom" mode="ios">
                    <IonTabButton tab="tab1" href="/therapist/booking">
                        <IonIcon icon={bookmarks} />
                        <IonLabel>Booking</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/therapist/massage">
                        <IonIcon icon={hand} />
                        <IonLabel>Massage</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/therapist/message">
                        <IonIcon icon={chatbubbles} />
                        <IonLabel>Chat</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab4" href="/therapist/profile">
                        <IonIcon icon={contact} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </>
);

export default TherapistWrapper;
