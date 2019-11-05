import React, {Component} from 'react';
import {LoginWrapper} from '../../components/container/login-wrapper';
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
            <LoginWrapper title="Profile">
                <IonCard>
                    <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"/>
                    <IonCardHeader className="ion-text-center">
                        <img style={{marginTop:"-70px", marginLeft: "auto", marginRight: "auto",borderRadius:"50%", width:"100px", height:"100px"}} src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/> <br/>
                        <IonCardSubtitle>Lil Wayne</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
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
                                           routerLink="/therapist/notifications"
                                >
                                    Notifications
                                </IonButton>
                                <IonButton expand="full" color="dark" shape="round" fill="outline">Sign Out</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </LoginWrapper>
        )
    }
}