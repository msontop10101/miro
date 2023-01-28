import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigations';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';



import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/6.png'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
      </Routes>

    </>
  );
}

export default App;
