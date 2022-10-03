import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonButton, IonLabel } from '@ionic/react';
import React,{useEffect} from 'react';
import './Work.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg'
import WorkDesktop from '../components/WorkDesktop';
import WorkMobile from '../components/WorkMobile';
import { useHistory } from "react-router-dom";

const Work = () => {
  const history = useHistory()
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
          <IonImg src={logo} className="logo" onClick={()=>{
            history.replace('/home');
          }}></IonImg>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {mQuery && !mQuery.matches ? (
           <>
            <WorkMobile/>
           </>
        ) : (
          <>
            <WorkDesktop/>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Work;