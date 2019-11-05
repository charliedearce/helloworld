import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonRouterLink, IonButton, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../../components/container/login-wrapper';

export default class ClientReg extends Component<any> {

    render() {
        return(
            <LoginWrapper title="Client Registration" back={true} backHref="/">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-center ion-margin-bottom ion-margin-top">
                                <img src="https://img.penpenn.com/8o8075.png" alt="logo"/>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" className="ion-text-center">
                            <IonText color="medium">
                                Your favorite therapist is one click away!
                            </IonText>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email address</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Confirm Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-margin-top ion-text-center ">
                            <IonText color="medium">
                                <IonRouterLink routerLink="/therapist/registration">Sign up as Therapist</IonRouterLink>, to meet new clients fast!.
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-margin-vertical">
                            <IonButton expand="block" size="large"
                                       shape="round"
                                       color="primary"
                            >
                                Sign up
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-margin-top ion-text-center">
                            <IonText color="medium">
                                By clicking Signup, I agree to Winning Hands <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </LoginWrapper>
        );
    }
}