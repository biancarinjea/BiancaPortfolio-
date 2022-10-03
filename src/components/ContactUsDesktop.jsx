import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea,IonCheckbox } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from "react";
import './ContactUsDesktop.css';
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
import HomeRectangle1 from '../images/HomeRectangle1.svg';

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
            <div className='start-containerMobile bckPolicy'>
                 <div className='containerMobile'>
                     <div className='start-container'>
                        <IonLabel className='title1'>Get in touch with us!</IonLabel>
                     </div>
                     <div className='start-container'>
                        <IonLabel className='contactUsSubtitle'>Hey! We are looking forward to start a project with you !</IonLabel>
                     </div>
                 </div>   
            </div>
            <div className='start-container top10vh'>
                <IonLabel className='title1'>

We are looking forward to hear from you !</IonLabel>
            </div>
            <div className='start-container'>
                    <IonLabel className='contactUsSubtitle centerAlignText'>After you have now scrolled through our page and read about who we are, there is only one step left - to get in touch.<br></br> If you like us, you think we could form a good team, don't hesitate to call, write or fill in the contact form at the<br></br> bottom of this page.</IonLabel>
            </div>
            <div className='start-containerMobile top5vh'>
                 <div className='start-containerMobile alignLeft'>
                     <div>
                         <IonImg src={Address} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsSubtitle'>
                        <IonLabel>Pollenvaenget 23 , Aarhus , Denmark </IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile alignLeft margLeft5vh'>
                     <div>
                         <IonImg src={Mail} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsSubtitle'>
                        <IonLabel>contact@dfbb.com </IonLabel>
                    </div>
                </div>
                <div className='start-containerMobile  alignLeft margLeft5vh'>
                     <div>
                         <IonImg src={Phone} className='iconMobile'></IonImg>
                    </div>
                    <div className='contactUsSubtitle'>
                        <IonLabel>+4556787678</IonLabel>
                    </div>
                </div>
            </div>
            <div className='top5vh'>
                    <IonImg src={ContactUsRectangle}></IonImg>
            </div>
            <div className='start-container1'>
          <div className='container1'>
            <div>
              <IonLabel className='aboutUsTitle'>Get in touch with us!</IonLabel>
            </div>
            <div className='top10vh aboutUsSubtitle'>
              <IonLabel>If you are interested in our services, you can contact us using the<br></br> contact form to request an offer as well as by phone at<br></br> +4567676634.<br></br><br></br> We can arrange a meeting at our office to discuss in detail the<br></br> project you want to carry out, or we can arrange a meeting on<br></br> zoom, google meets, skype, etc.</IonLabel>
            </div>
           
          </div>
          <div className='container3'>
            <div className='top10vh start-containerMobile leftAlign'>
              <div className='container5'>
                <IonItem>
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput
                   required
                   onIonChange={(e)=>setName(e.target.value)}
                  ></IonInput>
                </IonItem>
                <IonLabel color="danger">{nameError}</IonLabel>
              </div>
              <div className='margLeft5vh container5'>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                   required
                   type='email'
                   onIonChange={(e)=>setEmail(e.target.value)}
                  ></IonInput>
                </IonItem>
                <IonLabel color="danger">{emailError}</IonLabel>
              </div>
            </div>
            <div className='start-containerMobile leftAlign top5vh'>
              <div className='container5'>
                <IonItem>
                  <IonLabel position="floating">Phone Number</IonLabel>
                  <IonInput
                   required
                   onIonChange={(e)=>setPhone(e.target.value)}
                  ></IonInput>
                </IonItem>
                <IonLabel color="danger">{phoneError}</IonLabel>
              </div>
              <div className='margLeft5vh container5'>
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
            <div className='start-containerMobile top5vh'>
              <div className='container5'>
                <IonItem className='full'>
                  <IonLabel position="floating">Description</IonLabel>
                  <IonTextarea rows={5}
                  required
                  onIonChange={(e)=>setMessage(e.target.value)}
                  ></IonTextarea>
                </IonItem>
                <IonLabel color="danger">{messageError}</IonLabel>
                <IonItem>
                                    <IonCheckbox slot="start"></IonCheckbox>
                                    <IonLabel>I agree with the data processing according to the <a href="/privacyPolicy">Privacy Policy</a></IonLabel>
                                </IonItem>
              </div>
            </div>
            <div className='start-container  top7vh rightAlign'>
              <CustomButton text="Send" email={email} className={'leftAlign'} onClick={()=>{
                sendMessage();
              }}></CustomButton>
            </div>
          </div>
        </div>
        <div className='start-containerMobile bottomBar'>
            <IonLabel>COPYRIGHT © DESIGN FUTURE BY RINJEA BIANCA. ALL RIGHTS RESERVED.</IonLabel>
        </div>
        </>
    );
}
export default ContactUsMobile;