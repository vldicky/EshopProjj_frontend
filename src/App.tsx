import './App.css'
import './index.css'
import {RouterProvider} from 'react-router-dom';
import {useEffect, useState} from "react";
import UserData from "./data/user/User.type.ts";
import {router} from "./config/router/ReactRouterConfig.tsx"
import * as FirebaseAuthService from "../src/authService/FirebaseAuthService.ts"
import {LoginUserContext} from "./context/LoginUserContext.ts";


function App() {
  const[loginUser, setLoginUser] = useState<UserData|null|undefined>(undefined);

  useEffect(()=>{
    FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
  },[])

  return (
    <>
      <LoginUserContext.Provider value ={loginUser}>
        <RouterProvider router={router}/>
      </LoginUserContext.Provider>
    </>
  )
}

export default App
