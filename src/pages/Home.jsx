import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon, IonList,IonItem,IonInput,IonTextarea,IonItemDivider } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './Home.css';
import { isPlatform } from '@ionic/react';
import logo from '../images/logo.svg'
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

var test=true
const Home = () =>{
  const history = useHistory()
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
         <div className="start-container">
          <div>
            <h2 className="start-headline">Hello! We create websites<br></br> and mobile applications</h2>
            <p className="start-text">At DFBB, we believe in quality design with a significant impact on<br></br> the business side, which benefits both the company and the users.<br></br> Thus, we help our clients grow and differentiate themselves from<br></br> the competition.</p>
            <div>
                <CustomButton text="Let's Talk" email={email} className={''}></CustomButton>
                <CustomButton text="Portfolio" email={email} className={'butonul1'}></CustomButton>
            </div>
          </div>
          <div className='user-info-text'>
            {
              test?<IonImg src={background}></IonImg>:"nimic"
            }
          </div>
        </div>
        <div>
          <IonImg src={wave}></IonImg>
        </div>
        <div className='title1 top10vh'>
          <IonLabel>Services We Offer</IonLabel>
        </div>
        <div className='start-container top10vh'>
          <div className='container'>
            <div className='centerText'>
              <IonLabel className='title1'>IOS and Android applications</IonLabel>
            </div>
            <div className='centerText top5vh bck1'>
              <IonLabel className='subtitle1'>We are a native application development agency for<br></br> iOS and Android. We create complex applications<br></br> from scratch for your business.</IonLabel>
            </div>
          </div>
          <div className='container'>
            <div className='centerText'>
              <IonLabel className='title1'>We develop the applications you need</IonLabel>
            </div>
            <div className='centerText bck1'>
              <IonLabel className='subtitle1'>We work closely with the client to create the desired applications,<br></br> both the mobile part (native IOS and android applications) and the<br></br> web design part (desktop/laptop and mobile browser), so that all<br></br> platforms are covered.</IonLabel>
            </div>
          </div>
          <div className='container margLeft5vh '>
            <div className='centerText'>
              <IonLabel className='title1'>UX and UI services</IonLabel>
            </div>
            <div className='centerText top5vh bck1'>
              <IonLabel className='subtitle1'>If you are looking for UX and UI services, our team is at your<br></br> disposal. Our specialists will help you have a modern, easy-to-<br></br>use website or application, but above all that will offer a<br></br> pleasant experie</IonLabel>
            </div>
          </div>
        </div>
        <div className='start-container'>
          <CustomButton text="Contact Us" email={rightArrow} className={'centerText'}></CustomButton>
        </div>
        <div className='start-container top10vh'>
          <IonLabel className='title1'>We offer the best advice and possible<br></br> solutions to any challenge!</IonLabel>
        </div>
        <div className='start-container top10vh'>
          <div className='container2 bck'>
            <div className='centerImg top5vh'>
              <IonImg src={Fantasy} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Modern design</IonLabel>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>We propose solutions for the client and<br></br> discuss the action plan before starting<br></br> the project.</IonLabel>
            </div>
          </div>
          <div className='container2 bck margLeft5vh'>
             <div className='centerImg top5vh'>
              <IonImg src={Prize} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Quality and punctuality</IonLabel>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>We offer the quality of the project, and<br></br> we offer punctuality with an<br></br> experience of 2 years in this field.</IonLabel>
            </div>
          </div>
        </div>
        <div className='start-container top10vh'>
          <IonImg src={Creation}></IonImg>
        </div>
        <div>
          <IonImg src={HomeRectangle} className='imgRectangle'></IonImg>
        </div>
        <div className='start-container'>
          <div className='container1'>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>What can we offer?</IonLabel>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>We offer a wide range of skills that we work every day to improve and expand to help you open an<br></br> online business: mobile and web applications</IonLabel>
            </div>
          </div>
        </div>
        <div className='start-container top10vh'>
          <div className='container bck2'>
            <div className='centerImg top5vh'>
              <IonImg src={Studio} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Web Development</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>Development of websites and web<br></br> applications, from the simplest to the<br></br> most complex.</IonLabel>
            </div>
          </div>
          <div className='container bck2 margLeft5vh'>
            <div className='centerImg top5vh'>
              <IonImg src={Penrose} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Interface Design UI/UX</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>For applications and websites as well,<br></br> we develop the entire user experience<br></br> and user interface part.</IonLabel>
            </div>
          </div>
          <div className='container bck2 margLeft5vh'>
            <div className='centerImg top5vh'>
              <IonImg src={Account} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Modification of Current Sites<br></br> and Applications</IonLabel>
            </div>
            <hr class="solid"></hr>
            <div className='centerText'>
              <IonLabel className='subtitle1'>We can develop current mobile and<br></br> web applications started by other<br></br> developers.</IonLabel>
            </div>
          </div>
        </div>
        <div className='start-container top10vh'>
          <div className='container'>
            <div className='centerImg'>
              <IonImg src={Audit} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>Consulting</IonLabel>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>Along with your project, we also offer<br></br> consulting on the important aspects<br></br> of the project and what can be<br></br> improved.</IonLabel>
            </div>
          </div>
          <div className='container'>
            <div className='centerImg'>
              <IonImg src={Android} className='img'></IonImg>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='title1'>App Development</IonLabel>
            </div>
            <div className='centerText top5vh'>
              <IonLabel className='subtitle1'>We develop complete iOS and<br></br> Android applications from scratch<br></br> and design the UI/UX part as well as<br></br> the server-side part.</IonLabel>
            </div>
          </div>
        </div>
        <div className='start-container top10vh'>
            <div className='container1'>
              <div className='centerText'>
                <IonLabel className='title1'>Price calculator</IonLabel>
              </div>
              <div className='centerText top5vh'>
                <IonLabel className='subtitle1'>Below we offer you a calculator to calculate the price for the development of web and/or mobile<br></br> applications. The prices are estimates, and the final price will always be discussed with the client and<br></br> included in the contract.</IonLabel>
              </div>
              <div className='start-container'>
                <IonButton size='small' fill='solid' shape='round' color="warning" onClick={()=>{history.push('/calculator')}}>Calculate now</IonButton>
              </div>
            </div>
        </div>
        <div className='start-container top10vh'>
          <div className='container'>
              <div className='centerText'>
                <IonLabel className='title1'>What have we delivered?</IonLabel>
              </div>
              <div className='centerImg'>
                <IonImg src={Myproject}></IonImg>
              </div>
              <div className='centerText'>
                <IonLabel className='subtitle1'>Take a look at some of our work below</IonLabel>
              </div>
              <div className='start-container'>
                <IonButton size='small' fill='solid' shape='round' color="warning" className='btn'>See My Portfolio</IonButton>
              </div>
          </div>
        </div>
        <div className='top10vh'>
          <IonImg src={HomeRectangle3}></IonImg>
        </div>
        <div className='start-container'>
          <div className='container'>
            <div>
              <IonLabel className='contactUsText'>Contact Us</IonLabel>
            </div>
            <div className='top5vh'>
              <IonLabel className='title1'>Do you want a price  offer?</IonLabel>
            </div>
            <div>
              <IonLabel className='title1'>If you fill in the form, we will<br></br> contact you within 24 hours.</IonLabel>
            </div>
            <div className='top5vh'>
              <IonLabel className='subtitle1'>Do you have a web or mobile or even more advanced project to<br></br> complete?<br></br>
Use the form to contact us. We will try to answer as soon as<br></br> possible. If your request is more urgent, you can also find us at<br></br> phone number +4556787678</IonLabel>
            </div>
            <div className='top5vh'>
              <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
            </div>
          </div>
          <div className='container'>
            <div className='hidden'>
              <IonLabel className='contactUsText'>Contact Us</IonLabel>
            </div>
            <div className='start-container top10vh'>
              <div >
                <IonItem>
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
              </div>
              <div className='margLeft5vh'>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
              </div>
            </div>
            <div className='start-container'>
              <div >
                <IonItem>
                  <IonLabel position="floating">Phone Number</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
              </div>
              <div className='margLeft5vh'>
                <IonItem>
                  <IonLabel position="floating">Message Title</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
              </div>
            </div>
            <div className='start-container'>
              <IonItem className='full'>
                <IonLabel position="floating">Description</IonLabel>
                <IonTextarea></IonTextarea>
              </IonItem>
            </div>
            <div className='start-container  top7vh leftAlign'>
              <CustomButton text="Send" email={email} className={'leftAlign'}></CustomButton>
            </div>
          </div>
        </div>
        <div className='top20vh'>
          <IonImg src={HomeRectangle1} className='imgRectangle1'></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
}
export default Home;
