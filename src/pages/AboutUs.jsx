import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard,IonItem,IonInput,IonTextarea } from '@ionic/react';
import React from 'react';
import './AboutUs.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg';
import rightArrow from '../images/rightArrow.svg';
import aboutUsImg from '../images/aboutUsImg.svg';
import Office from '../images/Office.svg';
import AboutUsRectangle from '../images/AboutUsRectangle.svg';
import CustomButton from '../components/CustomButton';
import email from '../images/emailLogo.svg'
import AboutUsRectangleBottom from '../images/AboutUsRectangleBottom.svg';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

var test=true
const AboutUs  = () => {
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
  const history = useHistory()
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
  return (
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
        <div className='start-container'>
          <div className='container'>
            <div>
              <IonLabel className='aboutUsTitle'>Hello! We are D.F.B.B</IonLabel>
            </div>
            <br></br>
            <div className='aboutUsSubtitle'>
              <IonLabel>About Us</IonLabel>
            </div>
            <br></br>
            <div className='aboutUsSubtitle'>
              <IonLabel >D.F.B.B is a web agency based in Aarhus, Denmark  which<br></br> offers services for the creation of websites, complex web and<br></br> mobile applications, website optimization for local<br></br> clients as well as for clients from abroad.<br></br><br></br> We have a great experience with many types of applications<br></br> and websites. Do not hesitate to contact us for a free price<br></br> offer for your website or application.</IonLabel>
            </div>
            <br></br>
            <div className='aboutUsSubtitle'>
              <IonLabel>Team</IonLabel>
            </div>
            <br></br>
            <div className='aboutUsSubtitle'>
              <IonLabel>Our team consists of 3 people passionate about IT and<br></br> more. Also, our team is growing rapidly, as we work on<br></br> more projects.</IonLabel>
            </div>
          </div>
          <div className='user-info-text'>
            {
              test?<IonImg src={Office}></IonImg>:"nimic"
            }
          </div>
        </div>
        <div>
          <IonImg src={AboutUsRectangle}></IonImg>
        </div>
        <div className='start-container1'>
          <div className='container1'>
            <div>
              <IonLabel className='aboutUsTitle'>Get in touch with us!</IonLabel>
            </div>
            <div className='top10vh aboutUsSubtitle'>
              <IonLabel>If you are interested in our services, you can contact us using the<br></br> contact form to request an offer as well as by phone at<br></br> +4567676634.<br></br><br></br> We can arrange a meeting at our office to discuss in detail the<br></br> project you want to carry out, or we can arrange a meeting on<br></br> zoom, google meets, skype, etc.</IonLabel>
            </div>
            <div className='start-container top5vh leftAlign'>
              <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
            </div>
          </div>
          <div className='container3'>
            <div className='top10vh start-container leftAlign'>
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
              <div className='margLeft5vh'>
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
            <div className='start-container leftAlign'>
              <div >
                <IonItem>
                  <IonLabel position="floating">Phone Number</IonLabel>
                  <IonInput
                   required
                   onIonChange={(e)=>setPhone(e.target.value)}
                  ></IonInput>
                </IonItem>
                <IonLabel color="danger">{phoneError}</IonLabel>
              </div>
              <div className='margLeft5vh'>
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
              <div className='container5'>
                <IonItem className='full'>
                  <IonLabel position="floating">Description</IonLabel>
                  <IonTextarea rows={5}
                  required
                  onIonChange={(e)=>setMessage(e.target.value)}
                  ></IonTextarea>
                </IonItem>
                <IonLabel color="danger">{messageError}</IonLabel>
              </div>
            </div>
            <div className='start-container  top7vh rightAlign'>
              <CustomButton text="Send" email={email} className={'leftAlign'} onClick={()=>{
                sendMessage();
              }}></CustomButton>
            </div>
          </div>
        </div>
        <div className='top10vh scaleImg'>
           <IonImg src={AboutUsRectangleBottom}></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutUs;