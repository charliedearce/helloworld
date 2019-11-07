import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonLabel, IonText, IonAvatar, IonButton, IonSearchbar
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class ClientBooking extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Therapist List">
                <IonRow>
                    <IonCol>
                        <IonSearchbar showCancelButton="focus" animated={true}></IonSearchbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem lines="none"
                                     onClick={()=>alert('test')}>
                                <div className="queue-bubble" style={{padding: "5px"}}>
                                    <table style={{width: "100%"}}>
                                        <tbody>
                                        <tr>
                                            <td className="ion-text-center">
                                                <IonAvatar slot="start" style={{display: "inline-block"}}>
                                                    <img
                                                        src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                                </IonAvatar> <br/>
                                                <IonText color="success">Available</IonText>
                                            </td>
                                            <td className="ion-padding-start">
                                                <IonText style={{fontSize: "20px"}}>Babe Babe</IonText>
                                                <br/>
                                                <IonText color="medium" style={{fontSize: "15px"}}>Rate: $2.00
                                                    P/M</IonText>
                                            </td>
                                            <td>
                                                <IonButton style={{float: "right"}}>Book</IonButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ion-text-center" colSpan={3}>
                                                <IonText color="danger">
                                                    Special Offer
                                                </IonText>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ion-text-center" colSpan={3}>
                                                <IonText color="medium" style={{fontSize: "12px"}}>50% OFF first 30
                                                    min!! until 9:00PM</IonText>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </IonItem>
                        </IonList>
                        <IonList>
                            <IonItem lines="none"
                                     onClick={()=>alert('test')}>
                                <div className=" queue-bubble" style={{padding: "5px"}}>
                                    <table style={{width: "100%"}}>
                                        <tbody>
                                        <tr>
                                            <td className="ion-text-center">
                                                <IonAvatar slot="start" style={{display: "inline-block"}}>
                                                    <img
                                                        src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                                </IonAvatar> <br/>
                                                <IonText color="danger">Busy</IonText>
                                            </td>
                                            <td className="ion-padding-start">
                                                <IonText style={{fontSize: "20px"}}>Oh Baby</IonText>
                                                <br/>
                                                <IonText color="medium" style={{fontSize: "15px"}}>Rate: $2.00
                                                    P/M</IonText>
                                            </td>
                                            <td>
                                                <IonButton style={{float: "right"}}>Book</IonButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ion-text-center" colSpan={3}>
                                                <IonText color="danger">
                                                    Special Offer
                                                </IonText>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ion-text-center" colSpan={3}>
                                                <IonText color="medium" style={{fontSize: "12px"}}>50% OFF first 30
                                                    min!! until 9:00PM</IonText>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}