import React from 'react';
import {
    IonRow, IonButton,
    IonCol, IonGrid
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';

const Menu: React.FC = () => {
    return (
        <LoginWrapper title="Menu">
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
                        <IonButton expand="block" size="large"
                                   shape="round" fill="outline"
                                   className="ion-margin-vertical"
                                   routerLink="/client/login"
                        >
                            You are a Client
                        </IonButton>
                        <IonButton expand="block" size="large"
                                   shape="round" fill="outline"
                                   color="secondary" className="ion-margin-vertical"
                                   routerLink="/therapist/login"
                        >
                            You are a Therapist
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </LoginWrapper>
    );
}

export default Menu;