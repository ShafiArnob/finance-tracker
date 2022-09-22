import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext()

export const authReducer = (state, action)=>{
  switch(action.type){
    case 'LOGIN':
      return {...state, user: action.payload}
    case 'LOGOUT':
      return {...state, user:null}
    case 'AUTH_IS_READY':
      return {...state, user:action.payload, authIsReady:true}
    default:
      return state
  }
}

export const AuthContextProvider = ({children}) =>{

  const [state, dispatch] = useReducer(authReducer,{
    user:null, //initial state
    authIsReady:false
  })

  useEffect(()=>{
    //it run once when the application is opened. to check the user is logged in or not
    const unsub = projectAuth.onAuthStateChanged((user)=>{
      dispatch({type:'AUTH_IS_READY', payload:user})
      unsub() //when it is invoked the function dooes not run again
    })
  },[])
  
  console.log('Auth Context State: ', state);

  return(
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}