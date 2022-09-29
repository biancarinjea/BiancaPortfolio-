import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from "react";
import './ContactUs.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg';
import ContactUsDesktop from '../components/ContactUsDesktop';
import ContactUsMobile from '../components/ContactUsMobile';

const ContactUs = () => {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 768 ? true : false,
      });
    
      useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addListener(setMQuery);
    
        return () => mediaQuery.removeListener(setMQuery);
      }, []);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonImg src={logo} className="logo"></IonImg>
                    <IonButtons slot="end">
                        <NavButtons/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {mQuery && !mQuery.matches ? (
                <>
                    <ContactUsMobile/>
                </>
                ) : (
                <>
                    <ContactUsDesktop/>
                </>
                )}
            </IonContent>
        </IonPage>
    )
}
export default ContactUs;