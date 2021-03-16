import { useState } from 'react';
import styles from './InitialPage.module.css';

import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterAccount } from '../RegisterAccount/RegisterAccount'

export function InitialPage() {
  let hasAccount = useState(true);

  return (
    <div className={styles.container}>
      <section> 
        {hasAccount ?
          <LoginPage />
        :
          <RegisterAccount />
        }   
        <div>
          <img src="./login.png" alt="Icone de usuário"/>
        </div>
      </section>
    </div>
  )
}