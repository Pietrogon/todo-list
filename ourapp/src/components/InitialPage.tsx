import { useState } from 'react';
import styles from '../styles/components/InitialPage.module.css';

import { LoginPage } from './LoginPage';
import { RegisterAccount } from './RegisterAccount'

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