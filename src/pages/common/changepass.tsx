import React, {Component} from 'react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import {
    IonRow,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonText,
    IonTitle,
    IonContent,
    IonCol,
    IonItem,
    IonLabel, IonInput, IonPage
} from '@ionic/react';

export default class ChangePassword extends Component<any> {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/therapist/profile"/>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonText color="danger">
                                Save
                            </IonText>
                        </IonButtons>
                        <IonTitle>Change Password</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Current Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">New Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Confirm Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }
}