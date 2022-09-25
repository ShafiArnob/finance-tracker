import {useAuthContext} from '../../hooks/useAuthContext'

//css
import styles from'./Home.module.css'
import TransactionForm from './TransactionForm'

function Home() {
  const{user} = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        TransList
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home