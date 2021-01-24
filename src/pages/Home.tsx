import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonFab,
  IonFabButton,
  IonModal,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import Cards from "../components/cards";
import "./Pages.css";
import { add, notifications } from "ionicons/icons";
import { CardData } from "../data.js";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [card, setCard] = useState(CardData);

  const addCard = () => {
    card.push({
      id: card.length + 1,
      title: title,
      imgSrc: image,
      description: description,
      date: date
    });
    setCard(card);
    setShowModal(false)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolBar">
          <IonButtons slot="start">
            <IonMenuButton style={{ color: "white" }} />
          </IonButtons>
          <IonTitle class="title" style={{ display: "inline" }}>
            Home
          </IonTitle>
          <IonButtons slot="end">
            <IonIcon class="bellIcon" icon={notifications} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="appBody">
        <Cards newCards={CardData} key="cards"/>
      </IonContent>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton class="fabBtn" onClick={() => setShowModal(true)}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonModal isOpen={showModal}>
        <IonContent class="modalContainer">
          <IonHeader>
            <IonText class="centerModalItems" style={{ padding: "2em" }}>
              Add your favorite locations!
            </IonText>
          </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol
                size="4"
                style={{ top: "10px", fontSize: "20px", color: "white" }}
              >
                <strong>Image URL</strong>
              </IonCol>
              <IonCol>
                <IonInput
                  value={image}
                  onIonChange={(value) => setImage(value.detail.value!)}
                  class="modalContents"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol
                size="2.1"
                style={{ top: "10px", fontSize: "20px", color: "white" }}
              >
                <strong>Title</strong>
              </IonCol>
              <IonCol>
                <IonInput
                  value={title}
                  onIonChange={(value) => setTitle(value.detail.value!)}
                  class="modalContents"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol
                size="4.2"
                style={{ top: "25px", fontSize: "20px", color: "white" }}
              >
                <strong>Description</strong>
              </IonCol>
              <IonCol>
                <IonTextarea
                  value={description}
                  onIonChange={(value) => setDescription(value.detail.value!)}
                  class="modalContents"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol
                size="4.2"
                style={{ top: "25px", fontSize: "20px", color: "white" }}
              >
                <strong>Date(ie. Jan 23, 2021)</strong>
              </IonCol>
              <IonCol>
                <IonInput
                  value={date}
                  onIonChange={(value) => setDate(value.detail.value!)}
                  class="modalContents"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonTextarea />
          <IonButton onClick={() => addCard()}>Post</IonButton>
        </IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
    </IonPage>
  );
}
