import {IonImg,IonButton, IonLabel } from '@ionic/react';
import './WorkMobile.css';
import bianca from '../images/work/bianca.svg';
import workRectangle from '../images/work/workRectangle.svg';
import { useHistory } from "react-router-dom";
import WorkCard from '../components/WorkCardMobile';
import aarhus from '../images/work/aarhus.svg'
import goWalk from '../images/work/goWalk.svg'
import arla from '../images/work/arla.svg'
import rightArrow from '../images/rightArrow.svg';
import CustomButton from '../components/CustomButton';
import HomeRectangle1 from '../images/HomeRectangle1.svg';

const WorkMobile = () =>{
    const history = useHistory()
    function arlaClicked(){
      history.push('/arla');
    }
    return(
        <>
            <div className='start-container'>
                <div className='workTitleMobile'>
                    <IonLabel>Hello! We have Design Experience </IonLabel>
                </div>
            </div>
            <div className='start-containerMobile'>
                <div className='workSubtitle'>
                    <IonLabel>Hi there! I’m Bianca, a UX Designer creating  brave interface designs that are<br></br> beautiful and enjoyable.</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div className='user-info-text'>
                    <IonImg src={bianca}></IonImg>
                </div>
            </div>
            <div>
                <IonImg src={workRectangle}></IonImg>
            </div>
            <div className='start-container'>
                <div className='workTitleMobile'>
                    <IonLabel>Portfolio Cases</IonLabel>
                </div>
            </div>
            <div className='start-containerMobile'>
                <div className='workSubtitle'>
                    <IonLabel>Browse through our portfolio .  Through improvement and development, we strive to exceed  your<br></br>
expectations</IonLabel>
                </div>
            </div>
            <div className='top5vh'>
                 <WorkCard userText="Team Project" toolsText="Design Thinking" clockText="4 weeks" img={aarhus}/>
            </div>
            <div className='top5vh'>
                 <WorkCard userText="Team Project" toolsText="Design Thinking SCRUM" clockText="4 weeks" img={goWalk}/>
            </div>
            <div className='top5vh'>
                 <WorkCard userText="Team Project" toolsText="Design Thinking SCRUM" clockText="4 weeks" img={arla} onClick={arlaClicked}/>
            </div>
            <div className='start-container'>
                <div className='workSubtitle'>
                    <IonLabel>Get In Touch! Thank you for your visit I hope I will see you soon</IonLabel>
                </div>
            </div>
            <div className='start-container'>
                <div >
                    <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
                </div>
            </div>
            <div className='top5vh'>
                <IonImg src={HomeRectangle1} className='imgRectangle1'></IonImg>
            </div>
        </>
    );
}
export default WorkMobile;