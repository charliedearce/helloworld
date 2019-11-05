import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonSelectOption, IonLabel, IonInput
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class TherapistBooking extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Booking">
                <IonRow>
                    <IonCol className="ion-margin-top ">
                        <IonList lines="none">
                            <IonItem>1. Enter your information</IonItem>
                            <IonItem>2. Turn ON-SITE button to ON</IonItem>
                            <IonItem>3. Client Request You!</IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Your Current Casino</IonLabel>
                            <IonInput type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Currency</IonLabel>
                            <IonSelect placeholder="Select Currency">
                                <IonSelectOption value="USD">USD</IonSelectOption>
                                <IonSelectOption value="EU">EU</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Your Rage per Minute</IonLabel>
                            <IonInput type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonTextarea placeholder="Notify Clients of any Specials!" rows={4}></IonTextarea>
                        </IonItem>
                        <IonItem className="ion-margin-vertical">
                            <IonLabel>ON SITE</IonLabel>
                            <IonToggle value="" onChange={() => {}} />
                        </IonItem>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}