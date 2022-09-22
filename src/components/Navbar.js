import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import {useLogout} from '../hooks/useLogout'
function Navbar() {

  const {user} = useAuthContext()

  const {logout} = useLogout()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Money</li>

        {!user && (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </>
        )}

        {user &&
        <>
          <li>Hello, {user.displayName}</li>
          <li><button className='btn' onClick={logout}>LogOut</button></li>
        </> 
        }
      </ul>
    </nav>
  )
}

export default Navbar