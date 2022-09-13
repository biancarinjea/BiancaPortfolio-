import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea,useIonViewDidEnter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Calculator.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import email from '../images/emailLogo.svg'
import CustomButton from '../components/CustomButton';
import { useHistory } from "react-router-dom";

const CalculatorFinal = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [email1, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [messageError,setMessageError] = useState("");
    const history = useHistory();
    async function sendMessage(){
        const project = {
            name: name,
            email: email1,
            yourProject:message
        }
        if(!project.email){
            setEmailError("Email is required");
        }else{
            setEmailError("");
        }
        if(!project.name){
            setNameError("Name is required");
        }else{
            setEmailError("");
        }
        if(!project.yourProject){
            setMessageError("Your Project is required");
        }else{
            setMessageError("");
        }
        if(project.email && project.name && project.yourProject){
            await axios.post('http://localhost:3000/prices/save',project)
            .then((res) => {
                console.log(res.data)
                history.replace("/sendSuccessful")
            }).catch((error) => {
                console.log(error)
            });
        }
    }
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
                <div className='start-container top10vh'>
                    <div className='containerTitle'>
                        <div className='calculatorTitle'>
                            <IonLabel>Estimated price</IonLabel>
                        </div>
                        <div className='calculatorTitle'>
                            <IonLabel>{location.state.total} DKK</IonLabel>
                        </div>
                        <div className='calculatorSubtitle'>
                            <IonLabel>Do you need a detailed budget?  Send us a short summary of your project and in less<br></br> than 24 hours we will send you a proposal.</IonLabel>
                        </div>
                        <div className='top5vh'>
                            <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput
                                required
                                onIonChange={(e)=>setName(e.target.value)}
                            ></IonInput>
                            </IonItem>
                            <IonLabel color="danger">{nameError}</IonLabel>
                        </div>
                        <div className='top5vh'>
                            <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput
                                required
                                type = "email"
                                onIonChange={(e)=>setEmail(e.target.value)}
                            ></IonInput>
                            </IonItem>
                            <IonLabel color="danger">{emailError}</IonLabel>
                        </div>
                        <div className='top5vh'>
                            <IonItem className='full'>
                                <IonLabel position="floating">Your project</IonLabel>
                                <IonTextarea rows={5}
                                    required
                                    onIonChange={(e)=>setMessage(e.target.value)}
                                ></IonTextarea>
                            </IonItem>
                            <IonLabel color="danger">{messageError}</IonLabel>
                        </div>
                        <div className='top5vh'>
                            <CustomButton text="Send" email={email} className={'leftAlign'} onClick={()=>{
                                sendMessage()
                            }}></CustomButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default CalculatorFinal;