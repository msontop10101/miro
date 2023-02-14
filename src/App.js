import './App.css';
import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigations';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Sitefooter from './components/SiteFooter';
import Chat from './pages/Chat';
// import { useAuthContext } from './context/auth/auth';


function App() {
  // const {isAuth} = useAuthContext()
  const [sidebarState, setSidebarState] = useState()
  const [closeSidebarState, setCloseSidebarState] = useState()
  useEffect(() => {
    sidebarState && setCloseSidebarState(false)
    console.log(closeSidebarState)
  }, [closeSidebarState, sidebarState])
  
  return (
    <>
      <Navigations setSidebarState={setSidebarState} closeSidebarState={closeSidebarState}/>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
        <Route path='/chat' element={<Chat sidebarState={sidebarState} setCloseSidebarState={setCloseSidebarState}/>}></Route>
      </Routes>
      <Sitefooter/>
    </>
  );
}

export default App;
