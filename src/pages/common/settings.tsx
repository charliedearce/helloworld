import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonSelectOption, IonLabel, IonInput, IonIcon
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import { information, lock, notifications} from 'ionicons/icons';
export default class Settings extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Settings" back={true} backHref="/">
                <IonList>
                    <IonItem routerLink="/therapist/notifications">
                        <IonIcon icon={notifications} /> Notifications
                    </IonItem>
                    <IonItem routerLink="/about">
                        <IonIcon icon={information} />About
                    </IonItem>
                    <IonItem routerLink="/privacy">
                        <IonIcon icon={lock} />Privacy
                    </IonItem>
                </IonList>
            </LoginWrapper>
        )
    }
}