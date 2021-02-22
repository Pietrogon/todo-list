import { IonApp } from '@ionic/react';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const RegisterAccount = lazy(() => import('./components/RegisterAccount/RegisterAccount'));
const Home = lazy(() => import('./components/Home/Home'));

const App = () => (
  <IonApp>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/RegisterAccount" component={RegisterAccount}/>
        <Route path="/Home" component={Home}/>
      </Switch>
    </Suspense>
  </Router>
  </IonApp>
);

export default App;
