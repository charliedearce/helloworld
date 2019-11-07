import React, {Component} from 'react';
import {Profile} from "../../components/profile";
import {
    IonRow,
    IonCol,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonButton
} from '@ionic/react';
export default class TherapistProfile extends Component<any> {

    render() {
        return (
            <Profile>
                <IonRow>
                    <IonCol>
                        <b>Company:</b> Massage Therapist Inc.
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark"
                                   shape="round" fill="outline"
                                   routerLink="/therapist/profile/edit"
                        >
                            Edit Profile
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/therapist/changepassword"
                        >
                            Change Password
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/therapist/settings"
                        >
                            Settings
                        </IonButton>
                        <IonButton expand="full" color="dark" shape="round" fill="outline">Sign Out</IonButton>
                    </IonCol>
                </IonRow>
            </Profile>
        )
    }
}