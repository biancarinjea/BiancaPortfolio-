import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon } from '@ionic/react';
import './WorkCardMobile.css'; 
import User from '../images/work/User.svg'; 
import Tools from '../images/work/Tools.svg'; 
import Clock from '../images/work/Clock.svg'; 
import { useHistory } from "react-router-dom";

const WorkCard = ({userText,toolsText,clockText,img,onClick})=>{
    const history = useHistory()
    return(
        <>
         <div className='start-containerMobile bckCard'>
            <div className='containerMobile'>
                <div className='start-containerMobile leftAlignMobile'>
                    <div>
                        <IonImg src={User} className="iconCard"></IonImg>
                    </div>
                    <div>
                        <IonLabel>{userText}</IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile leftAlignMobile'>
                    <div>
                        <IonImg src={Tools} className="iconCard"></IonImg>
                    </div>
                    <div>
                        <IonLabel>{toolsText}</IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile leftAlignMobile'>
                    <div>
                        <IonImg src={Clock} className="iconCard"></IonImg>
                    </div>
                    <div>
                        <IonLabel>{clockText}</IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile leftAlignMobile'>
                    <IonButton size='small' fill='solid' shape='round' color="warning" onClick={onClick}>Read more</IonButton>
                </div>
            </div>
            <div className='containerMobile'>
                <IonImg src={img}></IonImg>
            </div>
         </div>
        </>
    );
}
export default WorkCard;