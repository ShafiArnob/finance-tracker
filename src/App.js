import {Routes,Route} from 'react-router-dom'
import React from 'react';
//pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
