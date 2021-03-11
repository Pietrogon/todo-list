import styles from '../styles/pages/Index.module.css';

import { LoginPage } from '../components/LoginPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  )
}
