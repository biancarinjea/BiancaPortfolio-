import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,IonImg,IonGrid,IonCol,IonRow, IonLabel, IonButton, IonCard, IonItem, IonInput, IonTextarea,useIonViewDidEnter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Calculator.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../images/logo.svg';
import axios from 'axios';
import Android from '../images/calculator/Android.svg';
import IOS from '../images/calculator/IOS.svg';
import Web from '../images/calculator/Web.svg';
import SimpleInterface from '../images/calculator/SimpleInterface.svg';
import Personalised from '../images/calculator/Personalised.svg';
import IdoNotCare from '../images/calculator/IdoNotCare.svg';
import RegistrationEmail from '../images/calculator/RegistrationEmail.svg';
import WithoutRegistration from '../images/calculator/WithoutRegistration.svg';
import Yes from '../images/calculator/Yes.svg';
import No from '../images/calculator/No.svg';
import ALanguage from '../images/calculator/ALanguage.svg';
import TwoLanguage from '../images/calculator/TwoLanguage.svg';
import MoreLanguages from '../images/calculator/MoreLanguages.svg';
import { useHistory } from "react-router-dom";

const Calculator = () => {
    const history = useHistory()
    const [posts, setPosts] = useState([]);
    useIonViewDidEnter(() => {
         axios.get("http://localhost:3000/prices").then((response)=>{
            setPosts(response.data);
         });
    });
    const questions = [
        "1. What type of application do you want to develop?",
        "2. How would you like your design to be?",
        "3. Do you want users to register?",
        "4. Can users create a profile?",
        "5. Do you want your app and website to share data?",
        "6. How many languages ​​do you need for an application?",
        "7.Do you need a logo ?"
    ];
    const subquestions = [
        "If you don't know which platform your potential customers use, I recommend choosing one of the ones below.",
        "Appearances matter. An attractive design expresses more confidence and is one of the necessary security elements in any sales process.",
        "Currently, the preferred form of registration for many companies is through one or more social networks",
        "Profiles can be very interesting to gather information about your users' interests. This way you will be able to create offers adapted to their needs .",
        "This means we will need to make an API (an application programming interface) which is the friendliest way to connect the app to the website.",
        "It depends on who you want to address. Having more languages ​​available will allow you to reach a larger audience. In this case you can be different if the competition does not offer this option.",
        "This will help your users find you quickly "
    ]
    const answer = [
        [
            "Android",
            "Apple IOS",
            "Web app"
        ],
        [
            "Simple interface",
            "Personalized",
            "I do not care"
        ],
        [
            "Registration email",
            "Without registration",
            "I do not care"
        ],
        [
            "Yes",
            "No",
            "I do not know"
        ],
        [
            "Yes",
            "No",
            "I do not know"
        ],
        [
            "A language",
            "Two languages",
            "More languages"
        ],
        [
            "Yes I need ",
            "No I have one"
        ]
    ]
    const icons = [
        [
            Android,
            IOS,
            Web
        ],
        [
            SimpleInterface,
            Personalised,
            IdoNotCare
        ],
        [
            RegistrationEmail,
            WithoutRegistration,
            IdoNotCare
        ],
        [
            Yes,
            No,
            IdoNotCare
        ],
        [
            Yes,
            No,
            IdoNotCare
        ],
        [
            ALanguage,
            TwoLanguage,
            MoreLanguages
        ],
        [
            Yes,
            No
        ]
    ]
    let i = 0;
    let total=0;
    function nextQuestions(){
        ++i;
        if(i<questions.length){
             document.getElementById("img1").src = icons[i][0];
             document.getElementById("img2").src = icons[i][1];
             document.getElementById("img3").src = icons[i][2];
             document.getElementById("q").textContent=questions[i];
             document.getElementById("sq").textContent=subquestions[i];
             document.getElementById("ch1").textContent=answer[i][0];
             document.getElementById("ch2").textContent=answer[i][1];
             document.getElementById("ch3").textContent=answer[i][2];
             if(answer[i].length==2){
                var element = document.getElementById("ch31");
                element.parentNode.removeChild(element);
             }
        }else{
            console.log(total);
            history.push({
                pathname: '/calculatorFinal',
                state:{total:total}
            });
        }
    }
    let final = false;
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
                <div className='start-container'>
                    <div className='containerTitle'>
                        <div className='calculatorTitle'>
                            <span id="q">{questions[i]}</span>
                        </div>
                        <div className='calculatorSubtitle'>
                           <span id="sq">{subquestions[i]}</span>
                        </div>
                    </div>
                </div>
                <div className='start-container top5vh'>
                    <div className='container' onClick={()=>{
                        const priceJson = JSON.stringify(posts[i]);
                        const price = JSON.parse(priceJson);
                        console.log(document.getElementById("ch1").textContent);
                        total+=price.price1;
                        nextQuestions();
                    }}>
                        <div className='icon alignCenter'>
                            <IonImg src={icons[i][0]} id="img1"></IonImg>
                        </div>
                        <div className='calculatorSubtitle centerText'>
                            <span id="ch1">{answer[i][0]}</span>
                        </div>
                    </div>
                    <div className='container  margLeft5vh' onClick={()=>{
                        const priceJson = JSON.stringify(posts[i]);
                        const price = JSON.parse(priceJson);
                        console.log(document.getElementById("ch2").textContent);
                        total+=price.price2;
                        nextQuestions();
                    }}>
                        <div className='icon alignCenter'>
                            <IonImg src={icons[i][1]} id="img2"></IonImg>
                        </div>
                        <div className='calculatorSubtitle centerText'>
                            <span id="ch2">{answer[i][1]}</span>
                        </div>
                    </div>
                    <div className='container  margLeft5vh' id="ch31" onClick={()=>{
                        console.log(document.getElementById("ch3").textContent);
                        const priceJson = JSON.stringify(posts[i]);
                        const price = JSON.parse(priceJson);
                        total+=price.price3;
                        nextQuestions();
                    }}>
                        <div className='icon alignCenter'>
                            <IonImg src={icons[i][2]} id="img3"></IonImg>
                        </div>
                        <div className='calculatorSubtitle centerText'>
                            <span id="ch3">{answer[i][2]}</span>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Calculator;