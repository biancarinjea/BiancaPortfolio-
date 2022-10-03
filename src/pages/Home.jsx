import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './Home.css';
import logo from '../images/logo.svg'
import React,{ useEffect } from "react";
import HomeDesktop from '../components/HomeDesktop';
import HomeMobile from '../components/HomeMobile';
import { useHistory } from "react-router-dom";

const Home = () =>{
  const history = useHistory()
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
          <IonImg src={logo} className="logo" onClick={()=>{
             console.log("test");
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
