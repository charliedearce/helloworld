import React, {Component} from 'react';
import { IonContent, IonSlides, IonSlide, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

export default class ItemSlidingExample extends Component<any> {
  render() {
    const slideOpts = {
      initialSlide: 0,
      speed: 800,
    };

    return(
        <IonContent>
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <h1>Slide 1</h1>
            </IonSlide>
            <IonSlide>
              <h1>Slide 2</h1>
            </IonSlide>
            <IonSlide>
              <h1>Slide 3</h1>
            </IonSlide>
          </IonSlides>
        </IonContent>
    );
  }
}