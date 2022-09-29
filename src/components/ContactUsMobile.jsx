import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from "react";
import './ContactUsMobile.css';
import Wave from '../images/contactUsResponsive/wave.svg';
import rightArrow from '../images/rightArrow.svg';
import contactUsImg from '../images/contactUsImg.svg';
import Address from '../images/Address.svg';
import Phone from '../images/Phone.svg';
import Mail from '../images/Mail.svg';
import CustomButton from '../components/CustomButton';
import ContactUsRectangle from '../images/ContactUsRectangle.svg';
import email from '../images/emailLogo.svg'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ContactUsMobile = () => {
    const [name, setName] = useState("");
    const [email1, setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [messageTitle,setMessageTitle] = useState("");
    const [message,setMessage] = useState("");
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [phoneError,setPhoneError] = useState("");
    const [messageTitleError,setMessageTitleError] = useState("");
    const [messageError,setMessageError] = useState("");
    const history = useHistory();
    async function sendMessage(){
        console.log(name)
        const client = {
            name: name,
            email: email1,
            phoneNumber:phone,
            messageTitle:messageTitle,
            message:message
        }
        if(!client.name){
            setNameError("Name is required");
        }else{
            setNameError("");
        }
        if(!client.phoneNumber){
            setPhoneError("Phone is required");
        }else{
            setPhoneError("");
        }
        if(!client.email){
            setEmailError("Email is required");
        }else{
            setEmailError("");
        }
        if(!client.messageTitle){
            setMessageTitleError("Message Title is required");
        }else{
            setMessageTitleError("");
        }
        if(!client.message){
            setMessageError("Message is required");
        }else{
            setMessageError("");
        }
        if(client.name && client.email && client.phoneNumber && client.messageTitle && client.message){
          await axios.post('http://localhost:3000/clients/save',client)
          .then((res) => {
              console.log(res.data);
              if(res.status == 200)
              history.replace('/sendSuccessful');
          }).catch((error) => {
              console.log(error)
          });
        }
    }
    return(
        <>
             <div className='start-container top10vh'>
                <div>
                    <div className='contactUsTitleMobile'>
                        <IonLabel>Get in touch with us!</IonLabel>
                    </div>
                    <div className='contactUsSubtitleMobile top5vh'>
                        <IonLabel>Hey! We are looking forward to start a project with you !</IonLabel>
                    </div>
                </div>
             </div>
             <div className='start-container'>
                <IonImg src={contactUsImg} className='imgMobile'></IonImg>
             </div>
             <div className='start-container'>
                <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
             </div>
             <div>
                <IonImg src={Wave}></IonImg>
             </div>
             <div className='start-container'>
                    <IonLabel className='contactUsTitleMobile1'>Contact</IonLabel>
            </div>
            <div className='start-container'>
                    <IonLabel className='contactUsSubtitleMobile1'>Please contact us if you have any questions .<br></br>
We are looking forward to hear from you !</IonLabel>
            </div>
            <div className='start-container'>
                    <IonLabel className='contactUsTextMobile centerAlignText'>After you have now scrolled through our page and read about who we are, there is only one step left - to get in touch.<br></br> If you like us, you think we could form a good team, don't hesitate to call, write or fill in the contact form at the<br></br> bottom of this page.</IonLabel>
            </div>
            <div className='start-containerMobile top5vh'>
                 <div className='start-containerMobile alignLeft'>
                     <div>
                         <IonImg src={Address} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsTextMobile'>
                        <IonLabel>Pollenvaenget 23 , Aarhus , Denmark </IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile alignLeft margLeft5vh'>
                     <div>
                         <IonImg src={Mail} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsTextMobile'>
                        <IonLabel>contact@dfbb.com </IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile  alignLeft margLeft5vh'>
                     <div>
                         <IonImg src={Phone} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsTextMobile'>
                        <IonLabel>+4556787678</IonLabel>
                    </div>
                </div>
            </div>
            <div className='top5vh'>
                    <IonImg src={ContactUsRectangle}></IonImg>
            </div>
            <div className='start-container'>
                <div>
                    <IonLabel className='contactUsTitleMobile1 centerAlignText'>Should we contact you?</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div>
                    <IonLabel className='contactUsSubtitleMobile1 centerAlignText'>If you fill in the form, we will contact you within 24 hours.</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div className='contactUsTextMobile'>
                    <IonLabel>Do you have a web or mobile or even more advanced project to complete?<br></br>
Use the form to contact us. We can offer you a free price offer  for your project. We will try to answer as soon as possible.<br></br> 
If your request is more urgent, you can also find us at phone number +4556787678</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div>
                    <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput
                                required
                                onIonChange={(e)=>setName(e.target.value)}
                            ></IonInput> 
                    </IonItem>
                    <IonLabel color="danger">{nameError}</IonLabel>
                </div>
                <div>
                    <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput
                                required
                                onIonChange={(e)=>setEmail(e.target.value)}
                            ></IonInput> 
                    </IonItem>
                    <IonLabel color="danger">{emailError}</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div>
                    <IonItem>
                            <IonLabel position="floating">Phone Number</IonLabel>
                            <IonInput
                                required
                                onIonChange={(e)=>setPhone(e.target.value)}
                            ></IonInput> 
                    </IonItem>
                    <IonLabel color="danger">{phoneError}</IonLabel>
                </div>
                <div>
                    <IonItem>
                            <IonLabel position="floating">Message Title</IonLabel>
                            <IonInput
                                required
                                onIonChange={(e)=>setMessageTitle(e.target.value)}
                            ></IonInput> 
                    </IonItem>
                    <IonLabel color="danger">{messageTitleError}</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <IonItem className='full'>
                    <IonLabel position="floating">Message</IonLabel>
                        <IonTextarea rows={5}
                        required
                        onIonChange={(e)=>setMessage(e.target.value)}
                    ></IonTextarea>
                </IonItem>
                <IonLabel color="danger">{messageError}</IonLabel>
            </div>
            <div className='start-container'>
                    <CustomButton text="Send" email={email} className={''} onClick={()=>{
                        sendMessage()
                    }}></CustomButton>
            </div>
        </>
    );
}
export default ContactUsMobile;