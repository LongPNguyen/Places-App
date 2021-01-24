import React from "react";
import {
  IonContent,
  IonMenu,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonIcon,
} from "@ionic/react";
import "./components.css";

import { exitOutline } from "ionicons/icons";

interface ContainerProps {}

const Menu: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonMenu
        side="start"
        menuId="menu"
        contentId="main"
        class="sideMenu menuBackground"
        type="overlay"
      >
        <IonContent>
          <IonMenuToggle auto-hide="false">
            <ul className="navList">
              <li>
                <IonItem
                  lines="none"
                  button
                  routerLink={"/home"}
                  routerDirection="none"
                  class="menuBackground"
                >
                  <IonLabel>Home</IonLabel>
                </IonItem>
              </li>
              <li>
                <IonItem
                  lines="none"
                  button
                  routerLink={"/PageOne"}
                  routerDirection="none"
                  class="menuBackground"
                >
                  <IonLabel>Page 1</IonLabel>
                </IonItem>
                <ul className="navList">
                  <li>
                    <IonItem
                      lines="none"
                      routerLink={"/SubPageOne"}
                      class="menuBackground"
                    >
                      Subpage 1
                    </IonItem>
                  </li>
                  <li>
                    <IonItem
                      lines="none"
                      routerLink={"/SubPageTwo"}
                      class="menuBackground"
                    >
                      Subpage 2
                    </IonItem>
                  </li>
                </ul>
              </li>
              <li>
                <IonItem
                  lines="none"
                  button
                  routerLink={"/PageTwo"}
                  routerDirection="none"
                  class="menuBackground"
                >
                  <IonLabel>Page 2</IonLabel>
                </IonItem>
              </li>
            </ul>
          </IonMenuToggle>
          <IonItem
            lines="none"
            class="menuBackground"
            style={{
              position: "fixed",
              left: "2em",
              bottom: "10px",
              right: 0,
            }}
          >
            <span style={{ marginRight: "1em", fontSize: "small" }}>
              Sign out
            </span>
            <IonIcon icon={exitOutline} style={{ fontSize: "medium" }} />
          </IonItem>
        </IonContent>
      </IonMenu>
    </div>
  );
};

export default Menu;
