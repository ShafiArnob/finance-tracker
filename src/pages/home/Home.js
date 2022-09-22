

//css
import styles from'./Home.module.css'
import TransactionForm from './TransactionForm'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        TransList
      </div>

      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}

export default Home