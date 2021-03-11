import styles from '../styles/components/LoginPage.module.css';

export function LoginPage() {

  return (
    <div className={styles.container}>
      <section>      
        <div>
          <label htmlFor="input">Login</label>
          <input type="text" placeholder='Nome de usuário' />
          <label htmlFor="input">Senha</label>
          <input type="password" placeholder='Senha'/>
          <button type='button'>Fazer Login</button>
        </div>
        <div>
          <img src="./login.png" alt="Icone de usuário"/>
        </div>
      </section>
    </div>
  )
}