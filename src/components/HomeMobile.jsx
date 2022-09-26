import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon, IonList,IonItem,IonInput,IonTextarea,IonItemDivider } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './HomeMobile.css';
import email from '../images/emailLogo.svg'
import background from '../images/background.svg'
import wave from '../images/wave2.svg';
import CustomButton from '../components/CustomButton';
import rightArrow from '../images/rightArrow.svg';
import Prize from '../images/Prize.svg';
import Fantasy from '../images/Fantasy.svg';
import Creation from '../images/Creation.svg';
import Studio from '../images/Studio.svg';
import Penrose from '../images/Penrose.svg';
import Account from '../images/Account.svg';
import Audit from '../images/Audit.svg';
import Android from '../images/Android.svg';
import Myproject from '../images/Myproject.svg';
import HomeRectangle from '../images/HomeRectangle.svg';
import HomeRectangle1 from '../images/HomeRectangle1.svg';
import HomeRectangle3 from '../images/HomeRectangle3.svg';
import Rectangle1 from '../images/Rectangle1.svg';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const HomeMobile = () => {
    const history = useHistory()
    return(
        <>
            <div className='start-container'>
                <div className='start-headlineMobile'>
                    <IonLabel>Hello!<br></br>
We create websites and mobile applications</IonLabel>
                </div>
            </div>
            <div className='start-containerMobile'>
                <div className='start-textMobile'>
                    <IonLabel>At DFBB, we believe in quality design with a significant impact on the business side, which benefits both<br></br> the company and the users. Thus, we help our clients grow and differentiate themselves from the<br></br> competition.</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div>
                    <CustomButton text="Let's Talk" email={email} className={''}></CustomButton>
                </div>
                <div>
                    <CustomButton text="Portfolio" email={email} className={'butonul1'}></CustomButton>
                </div>
            </div>
            <div>
                <IonImg src={wave}></IonImg>
            </div>
            <div className='titleMobile top5vh'>
                <IonLabel>Services We Offer</IonLabel>
            </div>
            <div className='start-containerMobile top5vh'>
                <div className='containerMobile'>
                    <div className='centerText'>
                        <IonLabel className='titleMobile1'>IOS and Android<br></br> applications</IonLabel>
                    </div>
                    <div className='centerText'>
                        <IonLabel className='subtitleMobile1'>We are a native application development agency for<br></br> iOS and Android. We create complex applications<br></br> from scratch for your business.</IonLabel>
                    </div>
                </div>
                <div className='containerMobile'>
                    <div className='centerText'>
                        <IonLabel className='titleMobile1'>We develop the applications<br></br> you need</IonLabel>
                    </div>
                    <div className='centerText'>
                        <IonLabel className='subtitleMobile1'>We work closely with the client to create the desired applications,<br></br> both the mobile part (native IOS and android applications) and the<br></br> web design part (desktop/laptop and mobile browser), so that all<br></br> platforms are covered.</IonLabel>
                    </div>
                </div>
                <div className='containerMobile'>
                    <div className='centerText'>
                        <IonLabel className='titleMobile1'>UX and UI<br></br> services</IonLabel>
                    </div>
                    <div className='centerText'>
                        <IonLabel className='subtitleMobile1'>If you are looking for UX and UI services, our team is at<br></br> your disposal. Our specialists will help you have a modern,<br></br> easy-to-use website or application, but above all that will<br></br> offer a pleasant experience to those who use them.</IonLabel>
                    </div>
                </div>
             </div>
             <div className='start-container top5vh'>
                    <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
            </div>
            <div className='start-container top5vh'>
                <IonLabel className='titleMobile1'>We offer the best advice and possible solutions to<br></br> any challenge!</IonLabel>
            </div>
            <div className='start-containerMobile'>
          <div className='containerMobile1 bck'>
            <div className='centerImg'>
              <IonImg src={Fantasy} className='imgMobile1   '></IonImg>
            </div>
            <div className='centerText '>
              <IonLabel className='titleMobile1'>Modern design</IonLabel>
            </div>
            <div className='centerText'>
              <IonLabel className='subtitleMobile1'>We propose solutions for the client and<br></br> discuss the action plan before starting<br></br> the project.</IonLabel>
            </div>
          </div>
          <div className='containerMobile1 bck margLeft5vh'>
             <div className='centerImg'>
              <IonImg src={Prize} className='imgMobile1'></IonImg>
            </div>
            <div className='centerText'>
              <IonLabel className='titleMobile1'>Quality and punctuality</IonLabel>
            </div>
            <div className='centerText'>
              <IonLabel className='subtitleMobile1'>We offer the quality of the project, and<br></br> we offer punctuality with an<br></br> experience of 2 years in this field.</IonLabel>
            </div>
          </div>
         </div>
         <div className='start-container'>
          <IonImg src={Creation}></IonImg>
        </div>
        <div>
          <IonImg src={HomeRectangle} className='imgRectangle'></IonImg>
        </div>
        <div className='start-container'>
         <IonLabel className='titleMobile1'>What can we offer?</IonLabel>
        </div>
        <div className='start-container'>
            <IonLabel className='subtitleMobile1'>We offer a wide range of skills that we work every day to improve and expand to help you open an<br></br> online business: mobile and web applications</IonLabel>
        </div>
         <div className='start-container top5vh'>
          <div className='containerMobile bck2'>
            <div className='centerImg'>
              <IonImg src={Studio} className='imgMobile1'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='titleMobile1'>Web Development</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText'>
              <IonLabel className='subtitleMobile1'>Development of websites and web<br></br> applications, from the simplest to the<br></br> most complex.</IonLabel>
            </div>
          </div>
         </div>
         <div className='start-container top5vh'>
          <div className='containerMobile bck2'>
            <div className='centerImg'>
              <IonImg src={Penrose} className='imgMobile1'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='titleMobile1'>Interface Design UI/UX</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText'>
              <IonLabel className='subtitleMobile1'>For applications and websites as well,<br></br> we develop the entire user experience<br></br> and user interface part.</IonLabel>
            </div>
          </div>
         </div>
         <div className='start-container top5vh'>
          <div className='containerMobile bck2'>
            <div className='centerImg'>
              <IonImg src={Account} className='imgMobile1'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='titleMobile1'>Modification of Current Sites<br></br> and Applications</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText'>
              <IonLabel className='subtitleMobile1'>We can develop current mobile and<br></br> web applications started by other<br></br> developers.</IonLabel>
            </div>
          </div>
         </div>
         <div className='start-container top5vh'>
            <div className='containerMobile bck2'>
                <div className='centerImg'>
                <IonImg src={Audit} className='imgMobile1'></IonImg>
                </div>
                <div className='centerText top5vh'>
                <IonLabel className='titleMobile1'>Consulting</IonLabel>
                </div>
                <hr class="solid"></hr>
                <div className='centerText'>
                <IonLabel className='subtitleMobile1'>Along with your project, we also offer<br></br> consulting on the important aspects<br></br> of the project and what can be<br></br> improved.</IonLabel>
                </div>
            </div>
         </div>
         <div className='start-container top5vh'>
            <div className='containerMobile bck2'>
                <div className='centerImg'>
                <IonImg src={Android} className='imgMobile1'></IonImg>
                </div>
                <div className='centerText top5vh'>
                <IonLabel className='titleMobile1'>App Development</IonLabel>
                </div>
                <hr class='solid'></hr>
                <div className='centerText'>
                <IonLabel className='subtitleMobile1'>We develop complete iOS and<br></br> Android applications from scratch<br></br> and design the UI/UX part as well as<br></br> the server-side part.</IonLabel>
                </div>
            </div>
         </div>
         <div className='start-container top10vh'>
            <div className='containerMobile'>
              <div className='centerText'>
                <IonLabel className='titleMobile1'>Price calculator</IonLabel>
              </div>
              <div className='centerText top5vh'>
                <IonLabel className='subtitleMobile1'>Below we offer you a calculator to calculate the price for the development of web and/or mobile<br></br> applications. The prices are estimates, and the final price will always be discussed with the client and<br></br> included in the contract.</IonLabel>
              </div>
            </div>
        </div>
        <div className='start-container'>
            <IonButton size='small' fill='solid' shape='round' color="warning" onClick={()=>{history.push('/calculator')}}>Calculate now</IonButton>
        </div>
         <div className='start-container top5vh'>
            <div className='containerMobile'>
                <div className='centerText'>
                    <IonLabel className='titleMobile1'>What have we delivered?</IonLabel>
                </div>
                <div className='centerImg'>
                    <IonImg src={Myproject}></IonImg>
                </div>
                <div className='centerText'>
                    <IonLabel className='subtitleMobile1'>Take a look at some of our work below</IonLabel>
                </div>
            </div>
          </div>
          <div className='start-container'>
                    <IonButton size='small' fill='solid' shape='round' color="warning" className='btn'>See My Portfolio</IonButton>
           </div>
           <div>
                <IonImg src={HomeRectangle3}></IonImg>
           </div>
           <div className='start-container titleMobile'>
            <IonLabel>Contact Us</IonLabel>
           </div>
           <div className='start-container titleMobile1'>
            <IonLabel>Do you want a price  offer?</IonLabel>
           </div>
           <div className='start-container titleMobile1'>
            <IonLabel>If you fill in the form, we will contact you within 24 hours.</IonLabel>
           </div>
           <div className='start-container subtitleMobile1'>
            <IonLabel>Do you have a web or mobile or even more advanced project to complete?<br></br>
Use the form to contact us. We will try to answer as soon as possible. If your request is more urgent, you can also find us at phone<br></br> number +4556787678</IonLabel>
           </div>
           <div className='start-container  '>
            <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
           </div>
           <div>
            <IonImg src={HomeRectangle1} className='imgRectangle1'></IonImg>
           </div>
        </>
    );
}
export default HomeMobile;
