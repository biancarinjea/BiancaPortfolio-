import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon, IonList,IonItem,IonInput,IonTextarea,IonItemDivider, IonAlert } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './Arla.css';
import logo from '../images/logo.svg'
import arlaTop from '../images/arla/arlaTop.svg'
import myProcess from '../images/arla/myProcess.svg'
import week1 from '../images/arla/week1.svg'
import week2 from '../images/arla/week2.svg'
import week3 from '../images/arla/week3.svg'
import personaA from '../images/arla/personaA.svg'
import personaB from '../images/arla/personaB.svg'
import userStory from '../images/arla/userStory.svg'
import empathyMap from '../images/arla/empathyMap.svg'
import sketches from '../images/arla/sketches.svg'
import wireframe1 from '../images/arla/wireframe1.svg'
import wireframe2 from '../images/arla/wireframe2.svg'
import design1 from '../images/arla/design1.svg'
import design2 from '../images/arla/design2.svg'
import design3 from '../images/arla/design3.svg'
import prototype1 from '../images/arla/prototype1.svg'
import prototype2 from '../images/arla/prototype2.svg'
import prototype3 from '../images/arla/prototype3.svg'
import prototype4 from '../images/arla/prototype4.svg'
import prototype5 from '../images/arla/prototype5.svg'
import prototype6 from '../images/arla/prototype6.svg'
import prototype7 from '../images/arla/prototype7.svg'
import prototype8 from '../images/arla/prototype8.svg'
import prototype9 from '../images/arla/prototype9.svg'
import prototype10 from '../images/arla/prototype10.svg'
import { useHistory } from "react-router-dom";

const Arla = () =>{
    const history = useHistory()
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonImg src={logo} className="logo" onClick={()=>{
            history.replace('/home');
          }}></IonImg>
                <IonButtons slot="end">
                    <NavButtons/>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className='containerArla'>
                    <IonImg src={arlaTop}></IonImg>
                </div>
                <div className='start-container top10vh'>
                    <div className='containerArla arlaText'>
                        <IonLabel>Arla Foods amba is a Danish-Swedish multinational cooperative based in Viby,<br></br> Denmark, and the largest producer of dairy products in Scandinavia, and the largest<br></br> dairy in the United Kingdom.</IonLabel>
                    </div>
                </div>
                <div className='containerArla top5vh'>
                    <div className='arlaTitle margLeft5vh '>
                        <IonLabel>Project Overview</IonLabel>
                    </div>
                </div>
                <div className='start-container top5vh'>
                    <div className='containerArla1 margLeft5vh'>
                        <div className='arlaText1'>
                            <IonLabel>Team</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>Bianca Rinjea ( Coordinator ,<br></br> Decider , Designer )</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>Donatas Račkauskas ( Facilitator)</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel> Stephanie Leyden</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>Andrei Ionuț Săcăleanu(Decider)</IonLabel>
                        </div>
                    </div>
                    <div className='containerArla1 margLeft5vh'>
                        <div className='arlaText1'>
                            <IonLabel>Duration</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>4 weeks</IonLabel>
                        </div>
                    </div>
                    <div className='containerArla1 margLeft5vh'>
                        <div className='arlaText1'>
                            <IonLabel>Tools</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>Adobe Photoshop</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>Figma</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel> WordPress</IonLabel>
                        </div>
                        <div className='arlaSubtitle'>
                            <IonLabel>HTML&CSS</IonLabel>
                        </div>
                    </div>
                </div>
                <div className='containerArla top5vh'>
                    <div className='arlaTitle margLeft5vh '>
                        <IonLabel>My Process</IonLabel>
                    </div>
                    <div className='top5vh'>
                        <IonImg src={myProcess}></IonImg>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh'>
                    <div className='arlaTitle '>
                        <IonLabel>Introduction</IonLabel>
                    </div>
                    <div className='arlaSubtitle top5vh'>
                        <IonLabel>AIt was important that the solution was effective and easy to use whilst keeping the important elements that<br></br> highlight and represent the Arla company. It was also important that the design correlated well with the current<br></br> design scheme to help make it easy to recognise and affiliate with the company.<br></br>

Within the design process it was also important to incorporate the font style and also shapes of action features to<br></br> further assist in recognition.<br></br>
The goal was to make customer interactions efficient and simple.<br></br>
This ultimately helps to maintain and develop good customer relations, high customer satisfaction eliminating<br></br> frustrations. It was also a goal to make the users feel comfortable in the difficult and tedious task.</IonLabel>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh '>
                    <div className='arlaTitle'>
                        <IonLabel>Problem Description</IonLabel>
                    </div>
                    <div className='arlaSubtitle top5vh'>
                        <IonLabel>Arla wants to find a way to measure the activity of the farmers in regards to their sustainability through<br></br> calculating their overall data.<br></br>
Thereby allowing Arla to track their performance ,helps Arla to support the increased effort of farmers who help<br></br> the environment and the reputation of agriculture. whilst also helping compare others and themselves. In order to<br></br> help this be an easy task we need to develop and design a data entry process that is both accessible and user-<br></br>friendly to both tech-savvy and non-tech-savvy farmers.</IonLabel>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Problem Statement</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>How can Arla make it easy and encouraging for their farmers to continuously collect and enter data on how they<br></br> run the farm in terms of Sustainability?</IonLabel>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle margLeft5vh '>
                        <IonLabel>Method</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>When organising and formulating a good plan to have everything completed and organised and to ultimately<br></br> eliminate stress, I decided to use the method sprint, I used Trello to help us set this out clearly. Trello also helped<br></br> everyone to  see the plan at all times as it was possible to share it .<br></br>

I split our sprint into 3 weeks. We collaboratively set out our target goals and tasks for each week. This helped to<br></br>  work together to complete the planned work effectively and make it ready for review by the end of that period.</IonLabel>
                    </div>
                    <div className='start-container'>
                        <div className='containerArla1 margLeft5vh'>
                            <IonImg src={week1}></IonImg>
                        </div>
                        <div className='containerArla1 margLeft5vh'>
                            <IonImg src={week2}></IonImg>
                        </div>
                        <div className='containerArla2 margLeft5vh'>
                             <IonImg src={week3}></IonImg>
                        </div>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Target Group</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>
                            <ul>
                                <li>Danish farmers in cattle farming and milk production</li>
                                <li>The Danish farmers enter data four times a year to register their carbon footprint and benchmark their holdings.</li>
                                <li>It must be possible to compete with themselves so that they can improve their own farm in terms of sustainability.</li>
                                <li>They must also be able to compare themselves with other farmers in different regions of Denmark.</li>
                            </ul>
                        </IonLabel>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel> Type of users we are developing for </IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>
                        Both user personas that Arla has introduced us with were taken into consideration. It was important to make<br></br> our solution well-functioning and straight-forward for the Casper persona, while still thinking about the<br></br> Henry persona who needs everything made very simple and understandable
                        </IonLabel>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Personas</IonLabel>
                    </div>
                    <div className='top5vh personas'>
                        <IonImg src={personaA}></IonImg>
                    </div>
                    <div className='top5vh personas'>
                        <IonImg src={personaB}></IonImg>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Brainstorminng</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>
                        When finding inspiration to start the project and what I thought might be best to include, it was important<br></br> to be clear and have everything written down. The easiest way to do this was through creating a list to easily<br></br> see what ideas connect with each other and also to see them clearly in front of my team .<br></br>
                            <ul>
                                <li>Give examples of what should be written in the box</li>
                                <li>Section topics together to break down the list</li>
                                <li>Change the data to pie graphs or bar graphs (can be different pictures milk, cows, etc. )</li>
                                <li>Color code sections</li>
                                <li>Backend would be databases to be able to look up past results and compare</li>
                                <li>Choose your region on a map</li>
                                <li>Instructional video to help show how to fill out the formIcons to show data so it’s easy to recognize</li>
                                <li>We need to make clear, heading, sub- heading, unit of measurement, result</li>
                                <li>Breadcrumbs trail ,Heading navigation ,Categories sections</li>
                                <li>Drop down list,</li>
                                <li>Question mark on side of question to be able to see more information description</li>
                            </ul>
                        </IonLabel>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh '>
                    <div className='arlaTitle'>
                        <IonLabel>User Story</IonLabel>
                    </div>
                    <div className='top5vh personas'>
                        <IonImg src={userStory}></IonImg>
                    </div>
                </div>
                <div className='containerArla top5vh margLeft5vh '>
                    <div className='arlaTitle'>
                        <IonLabel>Empathy Map</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>User empathy mapping brings us closer to our product and our users by adding an emotional element to<br></br> the user's journey. Once we understand what the emotions user is experiencing, we can influence their<br></br> emotional reactions to more successfully promote the user's product or experience.</IonLabel>
                    </div>
                    <div className='top5vh personas'>
                        <IonImg src={empathyMap}></IonImg>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Sketches</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>Sketching is the first step towards composing the visual aspect of the digital product.Each of us created a<br></br> few rough sketches in order to come up with new, more original ideas and improve the existing ones we<br></br> already had. This resulted in different variants of page structure and menu options and also helped us start<br></br> deciding on more complicated design decisions.<br></br>

In order to produce even more ideas I suggested together to do the “crazy 8” sketch task. We sketched 8<br></br> sketch ideas in 8 minutes each. This helped us generate some fast good ideas that we then further<br></br> developed into finalised sketches.<br></br> 

<div className='textColorOrange'>FINAL SKETCHING AND DECISION MAKING</div><br></br>

The next step was to finalise and refine our sketches to a larger scale. We each did our version of a final<br></br> sketch, discussed about the best points from each of them and then agreed on which parts from those<br></br> sketches we should keep working on for the wireframes and the prototype. Here is  our final  sketches for<br></br>  the input and output page.
</IonLabel>
                    </div>
                    <div className='personas'>
                        <IonImg src={sketches}></IonImg>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Wireframe</IonLabel>
                    </div>
                   <div className='arlaSubtitle top5vh'>
                    <IonLabel>It was important to have a clear map and overall structure of the web page/mobile page before moving forward<br></br> with design and mockups/prototype. This was a good chance to further consolidate our ideas and see exactly how<br></br> everything will flow and work.<br></br>

<div className='textColorOrange'>LANDING PAGE</div><br></br>

Later down the line I came across some trouble on deciding how data input and output should be laid out. To help<br></br> us out we did some more sketching and came up with the solution we all agreed with.<br></br>


<div className='textColorOrange'>DATA ENTRY FORM</div><br></br>

The data entry form is made as simple and clear as possible. While arrangement of this page has changed a bit<br></br> overtime, the basic idea stayed pretty much the same.<br></br>
There are a couple of swipe-able selection bars which allow the users to choose between different data categories<br></br> and sub-categories, below them is the input field and call-to-action buttons to either submit or cancel the input.<br></br>
Clicking the submit button the user will be then taken to data comparison/data output page where they can see<br></br> their own data and also data from all other regions across Denmark, more on that in the next section.<br></br>



<div className='textColorOrange'>COMPARING DATA</div><br></br>

The comparison page shows your own and all other regions of Denmark data. At the top of the page the user is<br></br> presented with his own statistics in a simple and understandable way, but if he chooses to do so, he can also see and<br></br> compare his data with the overall score of other regions with the help of a filter. It is also possible to view and<br></br> compare your data throughout the years, as well as see a bar graph for 4 different data categories (diesel, electricity,<br></br> digestion and feed consumption).<br></br>
The filter consists of 3 dropdowns which are ‘select regions’, ‘compare by years’ and ‘compare by resources’. When<br></br> the filters are applied, the user is taken to another page full of data where he can see the data he chose to compare<br></br> in the filter dropdowns all in one place.
</IonLabel>
                   </div>
                   <div className='start-container'>
                      <div className='containerArla3'>
                        <div>
                            <IonImg src={wireframe1}></IonImg>
                        </div>
                      </div>
                      <div className='containerArla3'>
                        <div>
                            <IonImg src={wireframe2}></IonImg>
                        </div>
                      </div>
                   </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Design</IonLabel>
                    </div>
                   <div className='top5vh arlaSubtitle'>
                    <IonLabel><div className='textColorOrange'>COLORS</div><br></br>

While Arla’s design guide has quite a big range of colors, I decided to stick only with green and yellow colors and<br></br> their various shades. The main reason for that is the meaning of the colors and they are usually associated with.<br></br> Color green is the dominant color of our solution. It is really often considered to be a color of life, renewal, nature<br></br> and nature much like what Arla is associated with meanings of growth, harmony, freshness, safety, fertility, and<br></br> environment.<br></br>
Green is also traditionally associated with money, finances, banking, ambition.Color yellow more of a secondary<br></br> color but it is still as important. Yellow is the most luminous of all the colors of the spectrum. It’s the color that<br></br>
captures our attention more than any other color. For that reason we used it to for the icons of important data<br></br> categories. It is also usually associated with happiness, optimism and enlightenment, all of which I thought are<br></br> closely related with Arla’s vision of a sustainable future.</IonLabel>
                   </div>
                   <div>
                    <IonImg src={design1}></IonImg>
                   </div>
                   <div className='top5vh arlaSubtitle'>
                    <IonLabel><div className='textColorOrange'>BUTTON COLORS</div><br></br>

In this solution I used 2 colors for buttons. The dark green colored buttons were used to confirm/apply filter<br></br> selections and the light green colored buttons function as call-to-action buttons. There is also a single white<br></br> colored button used to cancel the input form.<br></br>


<div className='textColorOrange'>TEXT COLOUR</div><br></br>

In order to avoid a lot of white space in our solution the best text color option for us was black with only a<br></br> couple of exceptions. We used white text only on the call-to-action buttons for a better looking contrast. The<br></br> other very minor exceptions are red color for ‘cancel’ button in input page and dark green color for highlighting<br></br> the total carbon footprint in the output page.

</IonLabel>
                   </div>
                   <div className='personas top10vh'>
                    <IonImg src={design2}></IonImg>
                   </div>
                   <div className='top5vh arlaSubtitle'>
                    <IonLabel><div className='textColorOrange'>FONTS</div><br></br>

Arla has a custom font made for all text on their interfaces. Within our solution I chose to<br></br> use the “Arla Interface” font. Since its the font that Arla has provided us with we just stuck<br></br> with it and used it all across the solution.</IonLabel>
                   </div>
                   <div className='personas top10vh'>
                    <IonImg src={design3}></IonImg>
                   </div>
                </div>
                <div className='containerArla top5vh margLeft5vh'>
                    <div className='arlaTitle '>
                        <IonLabel>Final Prototype</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>While we don’t have actual mockups for the solution, our prototype served as our final mockups. The<br></br> prototype was made using Adobe XD and it gives a good general idea of what the final solution is going<br></br> to be like. While I  didn't or simply couldn't manage to achieve some of the features like a working filter<br></br> or dropdown menus I wanted due to limitations of Adobe XD ,  it still worked well enough to<br></br> understand when it came to user testing with the agricultural students. Below is a screenshot of what<br></br> the final layouts look like for the solution.</IonLabel>
                    </div>
                    <div className='top5vh start-container'>
                        <div className='containerArla2'>
                            <IonImg src={prototype1}></IonImg>
                        </div>
                        <div className='containerArla2'>
                            <IonImg src={prototype2}></IonImg>
                        </div>
                        <div className='containerArla2'>
                            <IonImg src={prototype3}></IonImg>
                        </div>
                        <div className='containerArla2'>
                            <IonImg src={prototype4}></IonImg>
                        </div>
                    </div>
                    <div className='top5vh arlaSubtitle textColorOrange'>
                        <IonLabel>PAGE 1: CHOICE PAGE INPUT OR COMPARE DATA, DESKTOP /MOBILE VERSION:</IonLabel>
                    </div>
                    <div className='start-container top5vh'>
                        <div>
                            <IonImg src={prototype5}></IonImg>
                        </div>
                        <div className='margLeft5vh'>
                            <IonImg src={prototype6}></IonImg>
                        </div>
                    </div>
                    <div className='top5vh arlaSubtitle textColorOrange'>
                        <IonLabel>PAGE 2: DESKTOP/ MOBILE VERSIONS</IonLabel>
                    </div>
                    <div className='start-container top5vh'>
                        <div>
                            <IonImg src={prototype7}></IonImg>
                        </div>
                        <div className='margLeft5vh'>
                            <IonImg src={prototype8}></IonImg>
                        </div>
                    </div>
                    <div className='top5vh arlaSubtitle textColorOrange'>
                        <IonLabel>PAGE 3: DATA INPUT DESKTOP & MOBILE VERSION</IonLabel>
                    </div>
                    <div className='start-container top5vh'>
                        <div>
                            <IonImg src={prototype9}></IonImg>
                        </div>
                        <div className='margLeft5vh'>
                            <IonImg src={prototype10}></IonImg>
                        </div>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Coding</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>Since we were not able to get the results we wanted using just the WordPress even after installing a few plugins, we<br></br> decided to write some from-scratch code to overcome that obstacle.With the help of HTML, CSS and JavaScript in form<br></br> of jQuery we were able to solve that problem and get a well-functioning solution with features like filters and<br></br> dropdown menus, which we were not able to do in our Adobe XD prototype.Also, since the project required us to create<br></br> a solution for both mobile and desktop devices and our prototype was made only for the mobile version of the website,<br></br> we made the code for desktops and other devices with bigger screens.</IonLabel>
                    </div>
                </div>
                <div className='containerArla top10vh margLeft5vh'>
                    <div className='arlaTitle'>
                        <IonLabel>Reflection & Next Steps</IonLabel>
                    </div>
                    <div className='top5vh arlaSubtitle'>
                        <IonLabel>Over all after much discussion and testing me and my team feel that  we have made a good solution to encourage<br></br> farmers to enter data in a non confronting way, helping Arla and the farmers to compare data easily. Ultimately<br></br> solving the problems that Arla faced with their farmers. We analysed the two primary user profiles and tried to<br></br> adapt our solution to best fit to both extremes. We implemented design elements that Arla already had and<br></br> designed it to be a simple, attractive, achieving goals and overall well functioning for all types of users.<br></br>

I managed to create a concept for an online solution that would make it possible to use from the comfort of one’s<br></br> own home on their desktop, whilst mobile devices if needed to be used around the farm land. I created a prototype<br></br> to promote our solution and create the basis for a more detailed development of the features. With this solution<br></br> the user will be more efficient and less frustrated.<br></br>


After our testing session we agreed on the future improvements for our solution, some of them we thought about<br></br> them before the testing session, but was not able to add them in Adobe XD.
<div className='textColorOrange'>Improvements:</div>
<ul>
    <li>Breadcrumbs trails which will also help the farmers go back to what they already answered;</li>
    <li>Progress bar so that the farmers know how long they have completed from the survey;</li>
    <li>Option to hover on the map and see the number of farmers in that specific region;</li>
    <li>Option to select the way they visualise the results in the output section with column charts or pie charts, some<br></br> of them have different preferences about this part and it is a good feature to have;</li>
</ul>
</IonLabel>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Arla;