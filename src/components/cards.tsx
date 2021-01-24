import React from "react";
import {
  IonContent,
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/react";
import "./components.css";
import { openOutline } from "ionicons/icons";

type CardProps = {
  newCards: {
    id: number;
    title: string;
    imgSrc: string;
    description: string;
    date: string;
  }[];
};

function Cards({ newCards }: CardProps) {
  return (
    <IonApp>
      <IonContent>
        <IonGrid style={{ width: "90vw" }}>
          <IonRow>
            {newCards.map((data) => {
              return (
                <IonCol
                  size-sm="12"
                  size-md="6"
                  size-lg="4"
                  size-xl="3"
                  class="ion-align-self-center"
                >
                  <IonCard class="ionCard">
                    <img src={data.imgSrc} alt=""/>
                    <IonCardHeader>
                      <IonCardTitle>{data.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{data.description}</IonCardContent>
                    <IonGrid>
                      <IonRow style={{display:'flex', alignContent:'flex-end'}}>
                        <IonCol>
                          <IonText style={{ fontSize: "10px" }}>
                            {data.date}
                          </IonText>
                        </IonCol>
                        <IonCol class="ion-text-end">
                          <IonIcon icon={openOutline} />
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
}

export default Cards;
