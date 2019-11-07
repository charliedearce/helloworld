import React, {Component} from 'react';
import {Profile} from "../../components/profile";
import {IonButton, IonCol, IonRow} from "@ionic/react";

export default class ClientProfile extends Component<any> {

    render() {
        return (
            <Profile>
                <IonRow>
                    <IonCol>
                        <b>Favorite Casino:</b> Hard Rock
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <b>Favorite Game:</b> Slots.
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark"
                                   shape="round" fill="outline"
                                   routerLink="/client/profile/edit"
                        >
                            Edit Profile
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/client/changepassword"
                        >
                            Change Password
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/client/settings"
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