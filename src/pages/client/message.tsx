import React, {Component} from 'react';
import {
    IonRow, IonCol, IonSearchbar, IonRefresher, IonRefresherContent,
    IonList, IonListHeader, IonItem, IonAvatar, IonLabel, IonRouterLink
} from '@ionic/react';
import {RefresherEventDetail} from '@ionic/core';
import {LoginWrapper} from '../../components/container/login-wrapper';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
        console.log('Async operation has ended');
        event.detail.complete();
    }, 2000);
}

export default class ClientMessage extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Messages">
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonRow>
                    <IonCol>
                        <IonSearchbar showCancelButton="focus" animated={true}></IonSearchbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonListHeader>
                                Current Therapist
                            </IonListHeader>
                            <IonItem routerLink="/client/message/Babe">
                                <IonAvatar slot="start">
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                </IonAvatar>
                                <IonLabel>
                                    <h2>Babe</h2>
                                    <p>Listen, I've had a pretty messed up day...</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                Past Message
                            </IonListHeader>
                            <IonItem routerLink="/client/message/Babe">
                                <IonAvatar slot="start">
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                </IonAvatar>
                                <IonLabel>
                                    <h2>Babe</h2>
                                    <p>Listen, I've had a pretty messed up day...</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}