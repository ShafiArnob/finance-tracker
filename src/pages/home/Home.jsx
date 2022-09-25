import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

//components
import TransactionList from './TransactionList'

//css
import styles from'./Home.module.css'
import TransactionForm from './TransactionForm'

function Home() {
  const{user} = useAuthContext()
  const {documents, error} = useCollection('transactions')
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error&& <p>{error}</p>}
        {documents && <TransactionList transactions={documents}/>}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home