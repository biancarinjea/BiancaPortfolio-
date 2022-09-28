import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard,IonItem,IonInput,IonTextarea } from '@ionic/react';
import React,{useEffect} from 'react';
import './AboutUs.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg';
import AboutUsDesktop from '../components/AboutUsDesktop';
import AboutUsMobile from '../components/AboutUsMobile';

const AboutUs  = () => {
  const [mQuery, setMQuery] = React.useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return (
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
            <AboutUsMobile/>
           </>
        ) : (
          <>
            <AboutUsDesktop/>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AboutUs;