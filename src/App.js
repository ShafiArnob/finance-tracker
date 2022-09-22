import {Routes,Route,Navigate} from 'react-router-dom'
//pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import RequireAuth from './shared/RequireAuth';

function App() {
  const {user} = useAuthContext()

  const {authIsReady} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar></Navbar>
          <Routes>
            {/* <Route exact path='/' element={<Home></Home>}></Route> */}
            <Route exact path='/' element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }/>
            <Route path='/login' element={!user?<Login></Login>:<Navigate to='/'/>}></Route>
            <Route path='/signup' element={!user?<SignUp/>:<Navigate to='/'/>}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
