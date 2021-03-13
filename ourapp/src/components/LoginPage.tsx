import React from 'react';
import styles from '../styles/components/LoginPage.module.css';

export function LoginPage() {

  let user = {};

  function handleInput(event) {
    this.user = {...this.user, [event.target.name]: event.target.value}
  }

  function login() {
    fetch('http://localhost:3300/api/login',
      {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.user)
      }
    ).then(async res => {
      let verify = 'true' == await res.json();
      verify && (window.location.href='http://' + window.location.host + '/Home')
    });
  }
 
  return (
    <div className={styles.container}>
      <section>      
        <div>
          <label htmlFor="input">Login</label>
          <input name='login' type="text" placeholder='Nome de usuário' onChange={(event) => this.handleInput(event)} />
          <label htmlFor="input">Senha</label>
          <input name='senha' type="password" placeholder='Senha' onChange={(event) => this.handleInput(event)} />
          <button type='button' onClick={this.login()}>Fazer Login</button>
        </div>
        <div>
          <img src="./login.png" alt="Icone de usuário"/>
        </div>
      </section>
    </div>
  )
}