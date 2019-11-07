import React, {Component, createRef, RefObject} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    IonIcon, IonLabel, IonTextarea, IonInput, IonSelect, IonSelectOption
} from '@ionic/react';
import {camera} from 'ionicons/icons';

export default class ClientEditProfile extends Component<any> {

    uploadImg = () => {
        // @ts-ignore
        document.getElementById("selectImage").click()
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/client/profile"/>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonText color="danger">
                                Save
                            </IonText>
                        </IonButtons>
                        <IonTitle>Edit Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRow>
                        <IonCol className="ion-margin-vertical ion-text-center">
                            <div className="container-pp">
                                <img onClick={this.uploadImg}

                                     src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"/>
                                <IonIcon className="btn" icon={camera}/>
                            </div>
                            <input id='selectImage' hidden type="file"/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">First Name</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Last Name</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Favorite Casino</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Favorite Game</IonLabel>
                                <IonSelect placeholder="Select Game">
                                    <IonSelectOption value="Slots">Slots</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }
}