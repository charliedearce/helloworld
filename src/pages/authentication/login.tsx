import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonRouterLink, IonButton, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

export default class ClientLogin extends Component<any> {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", firebase.auth())
        })
    }
    render() {
        return(
            <LoginWrapper title="Sign in">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-center ion-margin-bottom ion-margin-top">
                                <img src="https://img.penpenn.com/8o8075.png" alt="logo"/>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email address</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-right ion-padding-vertical">
                            <IonRouterLink color="primary" routerLink="/forgot-password">
                                Forgot password?
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="large"
                                       shape="round"
                                       color="primary" className="ion-margin-vertical"
                                       routerLink="/client/booking"
                            >
                                Sign in
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="large"
                                       shape="round"
                                       color="success" className="ion-margin-vertical"
                                       routerLink="/client/registration"
                            >
                                Sign up
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonText>OR</IonText>

                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </LoginWrapper>
        );
    }
}