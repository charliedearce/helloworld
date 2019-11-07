import React, {Component} from 'react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import {
    IonRow,
    IonCol,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonButton, IonLabel, IonToggle, IonItem
} from '@ionic/react';
export default class ClientNotifications extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Notifications" back={true} backHref="/therapist/profile">
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin-vertical">
                            <IonLabel>Therapist Alerts</IonLabel>
                            <IonToggle value="" onChange={() => {}} />
                        </IonItem>
                        <IonItem className="ion-margin-vertical">
                            <IonLabel>Send me email notifications</IonLabel>
                            <IonToggle value="" onChange={() => {}} />
                        </IonItem>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}