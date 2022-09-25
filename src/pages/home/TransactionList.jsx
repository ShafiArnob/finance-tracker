
//css
import styles from './Home.module.css'

function TransactionList({transactions}) {
  console.log(transactions);
  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => 
        <li key={transaction.key}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
        </li>
      )}
    </ul>
  )
}

export default TransactionList