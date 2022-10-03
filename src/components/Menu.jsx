import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
} from "@ionic/react";
import React from "react";

export const Menu = () => {
    return (
        <IonMenu side="end" contentId="main">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/home"} routerDirection="none">
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/work"} routerDirection="none">
                <IonLabel>Portfolio</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/aboutUs"} routerDirection="none">
                <IonLabel>About Us</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/contact"} routerDirection="none">
                <IonLabel>Contact</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
};

