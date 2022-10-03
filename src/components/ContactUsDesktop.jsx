import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea,IonCheckbox } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from "react";
import './ContactUsDesktop.css';
import Wave from '../images/wave1.svg';
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
const ContactUsDesktop = () => {
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
            <div className='gradientBck'>
                <IonLabel className='centerImg contactUsTitle'>Get in touch with us!</IonLabel>
                <IonLabel className='contactUsText centerImg top5vh'>Hey! We are looking forward to start a project with you !</IonLabel>
           </div>
           <div className='contactUsTitle container1 top5vh margLeft5vh'>
               <IonLabel>We are looking forward to hear from you !</IonLabel>
           </div>
           <div className='container1 contactUsText margLeft5vh'>
               <IonLabel>After you have now scrolled through our page and read<br></br> about who we are, there is only one step left - to get in<br></br> touch.<br></br> 
If you like us, you think we could form a good team, don't<br></br> hesitate to call, write or fill in the contact form at the<br></br> bottom of this page.</IonLabel>
           </div>
                <div>
                    <IonImg src={Wave}></IonImg>
                </div>
                <div className='start-container'>
                    <IonLabel className='contactUsTitle1'>Contact</IonLabel>
                </div>
                <div className='start-container top10vh '>
                    <div className='container3'>
                        <div className='contactUsTitle1'>
                            <IonLabel>Please contact us if you have any<br></br> questions .We are looking forward to<br></br> hear from you !</IonLabel>
                        </div>
                        <div className='contactUsSubtitle1 top5vh'>
                            <IonLabel>After you have now scrolled through our page and read<br></br> about who we are, there is only one step left - to get in<br></br> touch. If you like us, you think we could form a good team,<br></br> don't hesitate to call, write or fill in the contact form at<br></br> the bottom of this page.</IonLabel>
                        </div>
                    </div>
                    <div className='container'>
                       <div className='start-container top10vh alignLeft'>
                            <div>
                                <IonImg src={Address} className='icon'></IonImg>
                            </div>
                            <div className='contactUsText'>
                                <IonLabel>Pollenvaenget 23 , Aarhus , Denmark </IonLabel>
                            </div>
                       </div>
                       <div className='start-container alignLeft top10vh'>
                            <div>
                                <IonImg src={Mail} className='icon'></IonImg>
                            </div>
                            <div className='contactUsText'>
                                <IonLabel>contact@dfbb.com</IonLabel>
                            </div>
                       </div>
                       <div className='start-container alignLeft top10vh'>
                            <div>
                                <IonImg src={Phone} className='icon'></IonImg>
                            </div>
                            <div className='contactUsText'>
                                <IonLabel>+4556787678</IonLabel>
                            </div>
                       </div>
                    </div>
                </div>
                <div className='top10vh'>
                    <IonImg src={ContactUsRectangle}></IonImg>
                </div>
                <div className='start-container'>
                    <div className='container1'>
                        <div>
                            <IonLabel className='contactUsTitle1'>Should we contact you?</IonLabel>
                        </div>
                        <div className='contactUsSubtitle1'>
                            <IonLabel>If you fill in the form, we will contact<br></br> you within 24 hours.</IonLabel>
                        </div>
                        <div className='contactUsText top5vh'>
                            <IonLabel>Do you have a web or mobile or even more advanced project<br></br> to complete?<br></br>Use the form to contact us. We can offer you a free price offer<br></br>  for your project. We will try to answer as soon as possible.<br></br> If your request is more urgent, you can also find us at phone<br></br> number +4556787678</IonLabel>
                        </div>
                    </div>
                    <div className='container4'>
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
                                type = "email"
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
                                >
                                </IonInput>
                                </IonItem>
                                <IonLabel color="danger">{messageTitleError}</IonLabel>
                            </div>
                        </div>
                        <div className='start-containerMobile top5vh'>
                            <div className='container5'>
                                <IonItem className='full'>
                                    <IonLabel position="floating">Message</IonLabel>
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
                                <div className='start-container rightAlign'>
                                    <CustomButton text="Send" email={email} className={'leftAlign'} onClick={()=>{
                                        sendMessage()
                                    }}></CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default ContactUsDesktop;