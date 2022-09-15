import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea,useIonViewDidEnter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import Left from '../images/Left.svg';
import { useHistory } from "react-router-dom";

const SendSuccessful = () => {
    const history = useHistory();
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                        <IonImg src={logo} className="logo alignCenter"></IonImg>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className='start-container top10vh'>
                    <div className='containerTitle'>
                        <div className='calculatorTitle'>
                            <IonLabel>Multumim !</IonLabel>
                        </div>
                        <div className='calculatorTitle'>
                            <IonLabel>Mesajul dumneavostra a fost trimis cu succes.</IonLabel>
                        </div>
                        <div className='start-container top10vh' onClick={()=>{
                            history.replace('/home');
                        }}>
                            <div>
                                <IonImg src={Left}></IonImg>
                            </div>
                            <div className='calculatorTitle margLeft5vh'>
                                <IonLabel>Back to  homepage</IonLabel>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
 export default SendSuccessful;