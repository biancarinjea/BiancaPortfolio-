import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Menu } from './components/Menu';
import Work from './pages/Work';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Calculator from './pages/Calculator';
import CalculatorFinal from './pages/CalculatorFinal';
import SendSuccessful from './pages/SendSuccessful';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Arla from './pages/Arla';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet  id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/work" component={Work} exact={true} />
        <Route path="/aboutUs" component={AboutUs} exact={true}/>
        <Route path="/contact" component={ContactUs} exact={true}/>
        <Route path="/calculator" component={Calculator} exact={true}/>
        <Route path="/calculatorFinal" component={CalculatorFinal}/>
        <Route path="/sendSuccessful" component={SendSuccessful}/>
        <Route path="/privacyPolicy" component = {PrivacyPolicy}/>
        <Route path="/arla" component = {Arla}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
