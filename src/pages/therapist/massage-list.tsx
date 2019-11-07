import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonListHeader, IonLabel, IonInput, IonAvatar, IonCardContent
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class TherapistQueue extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Massage">
                <IonRow>
                    <IonCol className="ion-margin-top ">
                        <IonList>
                            <IonListHeader>
                                <h4>Current Client</h4>
                            </IonListHeader>
                            <IonItem lines="none" onClick={()=> this.props.history.push("/therapist/massage/Moymoy Palaboy")}>
                                <IonAvatar slot="start">
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                </IonAvatar>
                                <p className="ion-padding queue-bubble current">
                                    <IonRow>
                                        <IonCol>
                                            <b>Client Name:</b> Moymoy Palaboy
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
                                </p>
                            </IonItem>
                            <IonListHeader>
                                <h4>Next in Queue</h4>
                            </IonListHeader>
                            <IonItem lines="none" onClick={()=> this.props.history.push("/therapist/massage/Moymoy Palaboy")}>
                                <IonAvatar slot="start">
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                </IonAvatar>
                                <p className="ion-padding queue-bubble">
                                    <IonRow>
                                        <IonCol>
                                            <b>Client Name:</b> Moymoy Palaboy
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
                                </p>
                            </IonItem>
                            <IonItem lines="none" onClick={()=> this.props.history.push("/therapist/massage/Moymoy Palaboy")}>
                                <IonAvatar slot="start">
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                </IonAvatar>
                                <p className="ion-padding queue-bubble">
                                    <IonRow>
                                        <IonCol>
                                            <b>Client Name:</b> Moymoy Palaboy
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
                                </p>
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}