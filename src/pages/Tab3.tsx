import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const Tab3Page: React.FC = () => {
    const test = () => {
        return 'wow'
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {test()}
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
