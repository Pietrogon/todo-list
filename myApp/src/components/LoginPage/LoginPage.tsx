import {
  IonApp, IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent
} from '@ionic/react';

import './LoginPage.css';
import './Logic.tsx'
import { handleInput } from './Logic';

const LoginPage: React.FC = () => (
  <IonCard color='primary' className='LoginPage-Content ion-no-margin'>
    <IonCard className='LoginPage-Card'>
      <IonCardContent>
        <IonItem>
          <IonLabel position='floating'>Login</IonLabel>
          <IonInput clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Senha</IonLabel>
          <IonInput name='senha' onIonChange={(event) => handleInput(event)} clearInput type='password'></IonInput>
        </IonItem>
        <IonItem lines='none'>
          <IonButtons slot='end'>
            <IonButton color='primary' fill='solid'>Entrar</IonButton>
          </IonButtons>
        </IonItem>
      </IonCardContent>
    </IonCard>
  </IonCard>
);

export default LoginPage;