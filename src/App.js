import './App.css';
import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Chat from './pages/Chat';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import { useAuthContext } from './context/auth/auth';


function App() {
  // const {isAuth} = useAuthContext()
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
      </Routes>
    </>
  );
}

export default App;
