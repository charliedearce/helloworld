import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,IonCol
} from '@ionic/react';
import {LoginWrapper} from "./container/login-wrapper";
interface myProps {
    name?: any
    image?: any
    children: JSX.Element[] | JSX.Element
}
export const Profile: React.FC<myProps> = (props) => {
    return (
        <LoginWrapper title="Profile">
            <IonCard>
                <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"/>
                <IonCardHeader className="ion-text-center">
                    <img className="img-pp" src={props.image}/> <br/>
                    <IonCol style={{textTransform:"capitalize"}}>{props.name}</IonCol>
                </IonCardHeader>

                <IonCardContent>
                    {props.children}
                </IonCardContent>
            </IonCard>
        </LoginWrapper>
    );
}