import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonSelectOption, IonLabel, IonInput
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class Privacy extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Privacy" back={true} backHref="/">
                <h1>privacy content</h1>
            </LoginWrapper>
        )
    }
}