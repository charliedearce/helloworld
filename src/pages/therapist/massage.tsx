import React, {Component} from 'react';
import {
    IonRow,
    IonCol,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonText,
    IonButton
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class TherapistMassage extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Massage">
                <IonRow>
                    <IonCol>
                        <IonText color="medium" className="ion-text-center"><h3>Queue</h3></IonText>
                    </IonCol>
                </IonRow>
                <IonCard>
                    <IonCardHeader className="ion-text-center">
                        <IonCardSubtitle >Massage Request: 8:10 PM</IonCardSubtitle> <br/>
                        <img style={{margin:"auto",borderRadius:"50%", width:"100px", height:"100px"}} src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/> <br/>
                        Lolah By
                    </IonCardHeader>
                    <IonCardContent>
                        <IonRow>
                            <IonCol>
                                <b>Casino:</b> Hard Rock - Miami, FL Miami, FL Miami, FL
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <b>Location:</b> | Poker Table 12, seat 2
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <b>Massage Type:</b> | Deep Tissue
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <b>Duration:</b> | 25minutes
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <b>Notes:</b> | Wearing a red hat
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton className="ion-margin-vertical" expand="full" color="success" shape="round" fill="outline">Accept</IonButton>
                                <IonButton className="ion-margin-vertical" expand="full" color="danger" shape="round" fill="outline">Decline</IonButton>
                                <IonButton expand="full" color="dark" shape="round" fill="outline">Massage</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </LoginWrapper>
        )
    }
}