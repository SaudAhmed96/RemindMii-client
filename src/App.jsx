
import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom';

import Header from './components/Header/Header'

import GoalsPage from './pages/GoalsPage/GoalsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RemindersPage from './pages/RemindersPage/RemindersPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {

  const [userAuth, setUserAuth] = useState(false)
  const [signUp, setSignUp] = useState(false);

 //Sign Up Page

 console.log(signUp)

 if(userAuth === false && signUp === true ){
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace={true}/>}/>
        <Route path="/signup" element={<SignupPage userAuth = {userAuth}/>}/>
        <Route path="*" element={<Navigate to="/signup" replace={true}/>}/>
      </Routes>
  )
 }

  //Login Page
  // if(userAuth === false){
  //   return(
  //       <Routes>
  //         <Route path="/" element={<Navigate to="/login" replace={true}/>}/>
  //         <Route path="/login" element={<LoginPage setSignUp = {setSignUp}/>}/>
  //         <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
  //       </Routes>
  //   ) 
  // }

  return (
    <>
      <h1>RemindMii</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/reminders" replace={true}/>}/>
          <Route path="/reminders" element={<RemindersPage/>}/>
          <Route path="/goals" element={<GoalsPage/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="*" element={<Navigate to="/error" replace={true}/>}/>
        </Routes>
    </>
  )
}

export default App
