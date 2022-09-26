
//css
import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

function TransactionList({transactions}) {
  const {deleteDocument, response} = useFirestore("transaction")
  console.log(response);
  // console.log(transactions);
  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => 
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={()=>deleteDocument(transaction.id)}>X</button>
        </li>
      )}
    </ul>
  )
}

export default TransactionList