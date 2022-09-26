import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon, IonList,IonItem,IonInput,IonTextarea,IonItemDivider } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './Home.css';
import logo from '../images/logo.svg'
import React,{ useState, useEffect } from "react";
import HomeDesktop from '../components/HomeDesktop';
import HomeMobile from '../components/HomeMobile';

const Home = () =>{
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
            <HomeMobile/>
           </>
        ) : (
          <>
            <HomeDesktop/>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}
export default Home;
