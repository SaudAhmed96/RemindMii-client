
import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import Header from './components/Header/Header'

import GoalsPage from './pages/GoalsPage/GoalsPage'
import HomePage from './pages/HomePage/HomePage'
import RemindersPage from './pages/RemindersPage/RemindersPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {

  const [userAuth, setUserAuth] = useState(false)
  const [signUp, setSignUp] = useState(false);

 //Sign Up Page

 if(userAuth === false && signUp === true ){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace={true}/>}/>
        <Route path="/signup" element={<SignupPage userAuth = {userAuth}/>}/>
        <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  )
 }

  //Login Page
  if(userAuth === false){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true}/>}/>
          <Route path="/login" element={<HomePage userAuth = {userAuth}/>}/>
          <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
        </Routes>
    </BrowserRouter>
    ) 
  }

 

  return (
    <>
      <BrowserRouter>
      <h1>RemindMii</h1>
        <Routes>
          <Route path="/"/>
          <Route path="/reminders" element={<RemindersPage/>}/>
          <Route path="/goals" element={<GoalsPage/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="*" element={<Navigate to="/error" replace={true}/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
