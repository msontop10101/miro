import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigations';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
