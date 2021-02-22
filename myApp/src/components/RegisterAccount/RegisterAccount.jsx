import {
  IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent
} from '@ionic/react';
import { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './RegisterAccount.css';

class RegisterAccount extends Component {

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
      verify && (window.location.href='http://'+window.location.host+'/Home')
    });
  }

  createUser = () => {
    console.log(JSON.stringify(this.user));  
    fetch('http://localhost:3300/api/users',
      {
        method: "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.user)
      }
    ).then(res => {
      this.login();
    });
  }

  render() {
    return (
      <div className='registerAccount-content'>
        <IonCard className='registerAccount-card'>
          <IonCardContent>
            <IonItem>
              <IonLabel position='floating'>Email</IonLabel>
              <IonInput name='email' onIonChange={(event) => this.handleInput(event)} clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='floating'>Nome</IonLabel>
              <IonInput name='name' onIonChange={(event) => this.handleInput(event)} clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='floating'>Senha</IonLabel>
              <IonInput name='password' onIonChange={(event) => this.handleInput(event)} clearInput type='password'></IonInput>
            </IonItem>
            <IonItem lines='none' className='ion-margin-top'>
              <IonButtons slot='start'>
                <Link to="/"><IonButton color='primary' size='small' fill='clear'>Login</IonButton></Link>
              </IonButtons>
              <IonButtons slot='end'>
                <IonButton onClick={this.createUser} color='primary' fill='solid'>Cadastrar</IonButton>
              </IonButtons>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </div>
    )
  }
  
}

export default RegisterAccount;