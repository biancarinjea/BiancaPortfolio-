import {IonImg,IonButton, IonLabel } from '@ionic/react';
import './WorkDesktop.css';
import bianca from '../images/work/bianca.svg';
import workRectangle from '../images/work/workRectangle.svg';
import { useHistory } from "react-router-dom";
import WorkCard from '../components/WorkCard';
import aarhus from '../images/work/aarhus.svg'
import goWalk from '../images/work/goWalk.svg'
import arla from '../images/work/arla.svg'
import rightArrow from '../images/rightArrow.svg';
import CustomButton from '../components/CustomButton';
import HomeRectangle1 from '../images/HomeRectangle1.svg';

const WorkDesktop = () => {
    const history = useHistory()
    function arlaClicked(){
      history.push('/arla');
    }
    return(
        <>
         <div className="start-container">
          <div>
            <h2 className="start-headline">Hello! We have<br></br> Design<br></br> Experience </h2>
            <p className="start-text">Hi there! I’m Bianca, a UX Designer creating<br></br>  brave interface designs that are beautiful and<br></br> enjoyable.</p>
            <div>
              <IonButton size='small' fill='solid' shape='round' color="warning" onClick={()=>{history.push('/contact')}}>LET'S TALK ABOUT YOUR PROJECT</IonButton>
            </div>
          </div>
          <div className='user-info-text margLeft5vh'>
              <IonImg src={bianca}></IonImg>
          </div>
        </div>
        <div>
          <IonImg src={workRectangle}></IonImg>
        </div>
        <div className='start-container'>
          <h2 className="start-headline">Portfolio Cases</h2>
        </div>
        <div className='start-container'>
          <p className="start-text centerAlignText">Browse through our portfolio .  Through improvement and development, we strive to exceed  your<br></br> 
expectations</p>
        </div>
        <div>
          <WorkCard userText="Team Project" toolsText="Design Thinking" clockText="4 weeks" img={aarhus}/>
        </div>
        <div>
          <WorkCard userText="Team Project" toolsText="Design Thinking, SCRUM" clockText="4 weeks" img={goWalk}/>
        </div>
        <div>
          <WorkCard userText="Team Project" toolsText="Design Thinking, SCRUM" clockText="4 weeks" img={arla} onClick={arlaClicked}/>
        </div>
        <div className='start-container'>
          <div className='workSubtitle'>
            <IonLabel>Get In Touch! Thank you for your visit I hope I will see you soon</IonLabel>
          </div>
        </div>
        <div className='start-container'>
          <div className='top5vh'>
              <CustomButton text="Contact Us" email={rightArrow} className={''}></CustomButton>
          </div>
        </div>
        <div className='top10vh'>
          <IonImg src={HomeRectangle1} className='imgRectangle1'></IonImg>
        </div>
        </>
    );
}
export default WorkDesktop;