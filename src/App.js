import {Routes,Route} from 'react-router-dom'

//pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route patch='/' element={<Home></Home>}></Route>
        <Route patch='/login' element={<Login></Login>}></Route>
        <Route patch='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
