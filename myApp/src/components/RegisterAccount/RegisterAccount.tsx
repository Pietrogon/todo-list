import {
  IonApp, IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent
} from '@ionic/react';

import './RegisterAccount.css';

const RegisterAccount: React.FC = () => (
  <IonCard color='primary' className='RegisterAccount-Content ion-no-margin'>
    <IonCard className='RegisterAccount-Card'>
      <IonCardContent>
        <IonItem>
          <IonLabel position='floating'>Email</IonLabel>
          <IonInput clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Nome</IonLabel>
          <IonInput clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Senha</IonLabel>
          <IonInput clearInput type='password'></IonInput>
        </IonItem>
        <IonItem lines='none'>
          <IonButtons slot='end'>
            <IonButton color='primary' fill='solid'>Cadastrar</IonButton>
          </IonButtons>
        </IonItem>
      </IonCardContent>
    </IonCard>
  </IonCard>
);

export default RegisterAccount;