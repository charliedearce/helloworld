import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonButton,
    IonSelect, IonSelectOption, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../../components/container/login-wrapper';

export default class TherapistReg extends Component<any> {
    state = {
        page: 1
    }

    changePage = (page: number) => {
        this.setState({
            page: page
        })
    }

    render() {
        const slideOpts = {
            initialSlide: 0,
            speed: 800,
        };

        const pageView = (page: number) => {
            if (page === 1) {
                return (
                    <>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Email address</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">First Name</IonLabel>
                                    <IonInput type="text"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Last Name</IonLabel>
                                    <IonInput type="text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-vertical">
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="primary"
                                           onClick={()=>this.changePage(2)}
                                >
                                    Continue to Phone number
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </>
                )
            } else if (page === 2) {
                return (
                    <>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Phone Number</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Massage License Number</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Licensed State</IonLabel>
                                    <IonSelect placeholder="Select Licensed">
                                        <IonSelectOption value="">Blank</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-vertical">
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="primary"
                                           onClick={()=>this.changePage(3)}
                                >
                                    Continue to Password
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </>
                )
            } else if (page ===3) {
                return (
                    <>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput type="password"></IonInput>
                                </IonItem>
                                <IonItem className="ion-margin-top ion-margin-bottom">
                                    <IonText>What company are you contracted or employed by? </IonText>
                                    <IonInput type="text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-top ion-text-center">
                                <IonText color="medium">
                                    By clicking Signup, I agree to Winning Hands <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-vertical">
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="primary"
                                           routerLink="/therapist/message"
                                >
                                    Sign up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </>
                )
            }
        }
        return (
            <LoginWrapper title="Therapist Registration" back={true} backHref="/">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-center ion-margin-bottom ion-margin-top">
                                <img src="https://img.penpenn.com/8o8075.png" alt="logo"/>
                            </div>
                        </IonCol>
                    </IonRow>
                    {pageView(this.state.page)}
                </IonGrid>
            </LoginWrapper>
        );
    }
}