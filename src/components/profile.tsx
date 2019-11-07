import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import {LoginWrapper} from "./container/login-wrapper";

export const Profile: React.FC<any> = ({children}) => {
    return (
        <LoginWrapper title="Profile">
            <IonCard>
                <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"/>
                <IonCardHeader className="ion-text-center">
                    <img className="img-pp" src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/> <br/>
                    <IonCardSubtitle>Lil Wayne</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    {children}
                </IonCardContent>
            </IonCard>
        </LoginWrapper>
    );
}