import styles from '../styles/pages/Index.module.css';

import { InitialPage } from '../components/InitialPage'
import { InitialPageProvider } from '../contexts/InitialPageContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <InitialPageProvider>
        <InitialPage />
      </InitialPageProvider>
    </div>
  )
}
