import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon } from '@ionic/react';
import '../pages/Home.css';  
const ServicesText = ({text,email,className,onClick}) => {
    return(
        <IonButton size='small' fill='solid' shape='round' color="warning" className={className} onClick={onClick}>
             {text}
        <IonImg src = {email}></IonImg>
        </IonButton>
    );
}
export default ServicesText;