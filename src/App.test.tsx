import React, {Component} from 'react';
import { IonItemOption, IonItemOptions, IonList, IonItemSliding, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox , IonContent} from '@ionic/react';

export default class ItemSlidingExample extends Component<any> {
  render() {
    const slideOpts = {
      initialSlide: 0,
      speed: 800,
    };

    return(
        <IonContent>
          {/*-- List of Text Items --*/}
          <IonList>
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonList>

          {/*-- List of Input Items --*/}
          <IonList>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
          </IonList>

          {/*-- List of Sliding Items --*/}
          <IonList>
            <IonItemSliding>
              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => {}}>Unread</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>

            <IonItemSliding>
              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => {}}>Unread</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonList>
        </IonContent>
    );
  }
}