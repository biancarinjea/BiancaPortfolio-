import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard,IonItem,IonInput,IonTextarea } from '@ionic/react';
import './AboutUsMobile.css';
import rightArrow from '../images/rightArrow.svg';
import Office from '../images/Office.svg';
import AboutUsRectangle from '../images/AboutUsRectangle.svg';
import CustomButton from '../components/CustomButton';
import email from '../images/emailLogo.svg'
import AboutUsRectangleBottom from '../images/AboutUsRectangleBottom.svg';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const AboutUsMobile = () =>{
    return(
        <>
         <div className='start-container'>
            <div className='aboutUsTitleMobile'>
              <IonLabel>Hello! We are D.F.B.B</IonLabel>
            </div>
         </div>
         <div className='start-containerMobile top5vh'>
            <div className='aboutUsSubtitleMobile'>
              <IonLabel >D.F.B.B is a web agency based in Aarhus, Denmark  which offers services for the<br></br> creation of websites, complex web and mobile applications, website optimization<br></br> for local clients as well as for clients from abroad.<br></br><br></br> We have a great experience with many types of applications and websites. Do not<br></br> hesitate to contact us for a free price<br></br> offer for your website or application.</IonLabel>
            </div>
         </div>
         <div className='start-containerMobile'>
           <IonImg src={Office}></IonImg>
          </div>
          <div>
            <IonImg src={AboutUsRectangle}></IonImg>
          </div>
          <div className='start-containerMobile aboutUsTitleMobile'>
            <IonLabel>Get in touch with us!</IonLabel>
          </div>
          <div className='start-containerMobile aboutUsSubtitleMobile top5vh'>
            <IonLabel>If you are interested in our services, you can contact us using the contact form to request<br></br> an offer as well as by phone at +4567676634.<br></br>
We can arrange a meeting at our office to discuss in detail the project you want to carry<br></br> out, or we can arrange a meeting on zoom, google meets, skype, etc.</IonLabel>
          </div>
          <div className='start-container  '>
            <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
           </div>
           <div className='start-containerMobile bottomBar'>
            <IonLabel className='subtitleMobile1'>COPYRIGHT © DESIGN FUTURE BY RINJEA BIANCA. ALL RIGHTS RESERVED.</IonLabel>
        </div>
        </>
    );
}

export default AboutUsMobile;