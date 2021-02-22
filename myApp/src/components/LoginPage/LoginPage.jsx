import {
  IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent
} from '@ionic/react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

class LoginPage extends Component {

  user = {}

  handleInput = (event) => {
    this.user = {...this.user,[event.target.name]: event.target.value};
  }

  login = () => {
    fetch('http://localhost:3300/api/login',
      {
        method: "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.user)
      }
    ).then(async res => {  
      let verify = 'true' == await res.json();
      verify && (window.location.href='http://'+window.location.host+'/Home');
    });
  }

  render() {
    return (
      <div className='loginPage-content'>
        <IonCard className='loginPage-card'>
          <IonCardContent>
            <IonItem>
              <IonLabel position='floating'>Email</IonLabel>
              <IonInput name='email' onIonChange={(event) => this.handleInput(event)} clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='floating'>Senha</IonLabel>
              <IonInput name='password' onIonChange={(event) => this.handleInput(event)} clearInput type='password'></IonInput>
            </IonItem>
            <IonItem lines='none' className='ion-margin-top'>
              <IonButtons slot='start'>
                <Link to="/RegisterAccount"><IonButton color='primary' size='small' fill='clear'>Criar Conta</IonButton></Link>
              </IonButtons>
              <IonButtons slot='end'>
                <IonButton onClick={this.login} color='primary' fill='solid'>Entrar</IonButton>
              </IonButtons>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </div>
    )
  }
}

export default LoginPage;