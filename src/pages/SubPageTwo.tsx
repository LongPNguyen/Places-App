import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonText,
} from "@ionic/react";
import React from "react";
import "./Pages.css";

const SubPageTwo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolBar">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Subpage 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="appBody">
        <IonText color="light" class="placeHolder">
          <h1>Coming Soon!</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default SubPageTwo;
