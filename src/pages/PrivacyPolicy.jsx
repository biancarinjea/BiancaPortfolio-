import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonGrid, IonCol, IonLabel, IonRow, IonButton, IonIcon, IonList,IonItem,IonInput,IonTextarea,IonItemDivider } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import './PrivacyPolicy.css';
import logo from '../images/logo.svg'

const PrivacyPolicy = () =>{
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
                <div className='container5 bckPolicy'>
                    <div className='privacyPolicyTitle'>
                        <IonLabel>Privacy policy</IonLabel>
                    </div>
                    <div className='privacyPolicySubtitle'>
                        <IonLabel>Last updated: May 2018</IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>1. General information</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>The privacy of your personal data is one of the main concerns of D.F.B.B based in Denmark, Aarhus, Pollenvaenget 23, Tilst, 8381<br></br> as a data controller.<br></br>This document is intended to inform you about the processing of your personal data, in the context of using the website<br></br> www.https://rinjeabianca.com. </IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>2.Data security</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>To protect your data, D.F.B.B has taken technical and organizational measures to protect this data, especially against loss,<br></br> manipulation or unauthorized access. The adopted measures are checked regularly and are constantly adapted to the state of<br></br> the art. In case of a violation of the protection of your personal data, which is estimated to have consequences. a major risk to<br></br> your rights and freedoms we will notify you immediately, as much as possible within 72 hours</IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>3.Processing of minors' data</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>We expressly point out that all processing of personal data refers exclusively to persons who have reached the age of 16. The use<br></br> of systems and tools, as well as the results of data processing of users who do not have this minimum age, is prohibited without<br></br> the consent of parents/guardians. If a processing of personal data still takes place, we will stop the processing of this data once<br></br> we become aware of this fact.</IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>4.Collection and processing of personal data</IonLabel>
                    </div>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>4.1 Data provided by the user</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>Personal data are processed by us according to the legal provisions in force regarding the protection of personal data. If you<br></br> correspond with us or fill out a form with data on our web page, please keep in mind that the data you provide on the<br></br> respective form will be processed for the purposes described below.<br></br>

Data processing for which consent is not required - Contact form:<br></br>

When sending the respective contact form, your personal data from the categories will be processed (contact and<br></br> identification data, as well as the text of your request).<br></br>
<ul>
    <li>Purpose: Answer to your request.</li>
    <li>Grounds: Legitimate interest to process your questions individually and to be able to answer credibly.</li>
    <li>Storage period: 12 months</li>
    <li>Consequences of refusal: if you do not provide these data, you will not be able to provide us with the requested information.</li>
</ul>
</IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>5. Data collected by us</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>We collect personal data automatically through the use of cookies.</IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>6. What are your rights? </IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>
                            <ul>
                                <li>The right to information - you can request a confirmation of the processing of your personal data and how<br></br> they are used.</li>
                                <li>The right to correction - you can request the correction or completion of incomplete or incorrect personal data<br></br> at any time</li>
                                <li>The right to erasure - you can request the erasure of your personal data if the purpose for which they were<br></br> collected only exists, if their processing contravenes the legal provisions, if their processing excessively<br></br> affects your interests or if the processing is based on your agreement, agreement on which I revoked you. You<br></br> must remember that there may be other reasons that prevent the immediate deletion of your data, for<br></br> example, mandatory archiving periods, claims, the exercise or defense of legal rights, etc.</li>
                                <li>The right to data transmission - you can ask us to provide you with your personal data that you have provided<br></br> us in a structured format, usually readable by technical means, to the extent that we process this data based<br></br> on your consent or for the execution of a contract between us, the processing being done through<br></br> automated processes.</li>
                                <li>The right to challenge - if we process your personal data for the performance of tasks of public interest, for<br></br> the exercise of a public authority or if we refer to the need to defend a legitimate interest, you can challenge<br></br> the processing of this data, in to the extent that there is an overriding legitimate interest in your personal<br></br> data. You can revoke the consent for the transmission of advertising messages at any time without<br></br> indicating a reason.</li>
                                <li>The right to complain - if you believe that we have violated the provisions of European law in the processing<br></br> of your personal data, thus infringing your rights, please contact us to clarify your questions. Of course, you<br></br> have the right to ask for protection the data of a European supervisory authority</li>
                            </ul>
                            These rights can be exercised directly against D.F.B.B through a notification to the email address<br></br> contact@dfbb.com.<br></br>
                            D.F.B.B does not disclose your personal data to third parties. We value your trust and make every effort to<br></br> protect your data.
                        </IonLabel>
                    </div>
                </div>
                <div className='container5 margLeft5vh top5vh'>
                    <div className='privacyPolicyTextTitle'>
                        <IonLabel>7. Right to change policies with prior notice.</IonLabel>
                    </div>
                    <div className='privacyPolicyTextSubtitle'>
                        <IonLabel>
Desifn Future by Rinjea Bianca reserves the right to modify its privacy policies at any time in accordance<br></br> with the legal regulations regarding data protection. We will publish the respective changes on this page<br></br> to inform you about the types of information we collect and how we use them.<br></br>

If you have questions about our privacy policy, do not hesitate to write to us at contact@dfbb.com.</IonLabel>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default PrivacyPolicy;