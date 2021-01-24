import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonText,
  IonIcon,
} from "@ionic/react";
import React from "react";
import "./Pages.css";
import { notifications } from "ionicons/icons";

const PageOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolBar">
          <IonButtons slot="start">
            <IonMenuButton style={{ color: "white" }} />
          </IonButtons>
          <IonTitle class="title" style={{ display: "inline" }}>
            Page 1
          </IonTitle>
          <IonButtons slot="end">
            <IonIcon class="bellIcon" icon={notifications} />
          </IonButtons>
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

export default PageOne;
