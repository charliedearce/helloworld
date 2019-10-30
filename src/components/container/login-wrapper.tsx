import React, {FunctionComponent} from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonBackButton, IonButtons
} from '@ionic/react';

type WrapperProps = {
    title: string,
    back?: boolean,
    backHref?: string
}

export const LoginWrapper: FunctionComponent<WrapperProps> = (
    {
        title,
        children,
        back = false,
        backHref = ''
    }) => {
    const backBtn = (back: boolean, backHref: string) => {
        if (back === true) {
            return (
                <IonButtons slot="start">
                    <IonBackButton defaultHref={backHref}/>
                </IonButtons>
            );
        }
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {backBtn(back, backHref)}
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {children}
            </IonContent>
        </IonPage>
    );
}