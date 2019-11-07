import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonSelectOption, IonLabel, IonInput
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class About extends Component<any> {

    render() {
        return (
            <LoginWrapper title="About" back={true} backHref="/">
                <h1>About Content</h1>
            </LoginWrapper>
        )
    }
}