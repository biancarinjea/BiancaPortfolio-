import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon } from '@ionic/react';
import './WorkCard.css'; 
import User from '../images/work/User.svg'; 
import Tools from '../images/work/Tools.svg'; 
import Clock from '../images/work/Clock.svg'; 
import { useHistory } from "react-router-dom";

const WorkCardMobile = ({userText,toolsText,clockText,img,onClick})=>{
    const history = useHistory()
    return(
        <>
         <div className='start-container bckCard'>
            <div className='container2'>
                <div className='start-container leftAlign'>
                    <div>
                        <IonImg src={User}></IonImg>
                    </div>
                    <div>
                        <IonLabel>{userText}</IonLabel>
                    </div>
                </div>
                <div className='start-container leftAlign'>
                    <div>
                        <IonImg src={Tools}></IonImg>
                    </div>
                    <div>
                        <IonLabel>{toolsText}</IonLabel>
                    </div>
                </div>
                <div className='start-container leftAlign'>
                    <div>
                        <IonImg src={Clock}></IonImg>
                    </div>
                    <div>
                        <IonLabel>{clockText}</IonLabel>
                    </div>
                </div>
                <div className='start-container leftAlign'>
                    <IonButton size='small' fill='solid' shape='round' color="warning" onClick={onClick}>Read more</IonButton>
                </div>
            </div>
            <div className='container1'>
                <IonImg src={img}></IonImg>
            </div>
         </div>
        </>
    );
}
export default WorkCardMobile;