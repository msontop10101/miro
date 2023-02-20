import './App.css';
import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Chat from './pages/Chat';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccountSettings from './pages/AccountSettings';
// import { useAuthContext } from './context/auth/auth';
import { useLocation } from 'react-router-dom';


function App() {
  // const {isAuth} = useAuthContext()
  const location = useLocation()
  // console.log(location.pathname)
  const [currentPath, setCurrentPath] = useState()
  useEffect(() => {
    setCurrentPath(location.pathname)
  },[location]) 
  // console.log(currentPath)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
        <Route path='/chat' element={<Chat currentPath={currentPath}/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/account-settings' element={<AccountSettings />}></Route>
      </Routes>
    </>
  );
}

export default App;
