import React, {Component} from 'react';
import {
    IonRow, IonCol, IonSearchbar, IonRefresher, IonRefresherContent,
    IonList, IonIcon, IonItem, IonAvatar, IonLabel, IonTextarea,
} from '@ionic/react';
import {send} from 'ionicons/icons';
import {RefresherEventDetail} from '@ionic/core';
import {LoginWrapper} from '../../components/container/login-wrapper';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
        console.log('Async operation has ended');
        event.detail.complete();
    }, 2000);
}

export default class TherapistMessageConvo extends Component<any> {

    render() {
        return (
            <LoginWrapper title={this.props.match.params.id} back={true} backHref="/therapist/message">
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonRow>
                    <IonCol style={{marginBottom:"50px"}}>
                        <IonItem lines="none">
                            <IonAvatar slot="start">
                                <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                            </IonAvatar>
                            <p className="ion-padding speech-bubble">
                                Client message Client message Client message Client message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <p slot="end" className="ion-padding speech-bubble darker">
                                Therapist message Therapist message Therapist message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonAvatar slot="start">
                                <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                            </IonAvatar>
                            <p className="ion-padding speech-bubble">
                                Client message Client message Client message Client message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <p slot="end" className="ion-padding speech-bubble darker">
                                Therapist message Therapist message Therapist message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonAvatar slot="start">
                                <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                            </IonAvatar>
                            <p className="ion-padding speech-bubble">
                                Client message Client message Client message Client message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <p slot="end" className="ion-padding speech-bubble darker">
                                Therapist message Therapist message Therapist message
                            </p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonAvatar slot="start">
                                <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                            </IonAvatar>
                            <p className="ion-padding speech-bubble">
                                Client message Client message Client message Client message
                            </p>
                        </IonItem>
                    </IonCol>
                    <IonCol size="12" style={{position: "fixed", bottom: "-5px"}}>
                        <IonItem>
                            <IonTextarea placeholder="Enter more information here..."></IonTextarea> <IonIcon
                            icon={send}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}