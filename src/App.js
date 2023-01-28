import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigations';
import Accedi from './pages/Accedi';
import CreateAccount from './pages/CreateAccount';
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/6.png'
import eleven from './assets/11.png'

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path='/crea-un-account' element={<CreateAccount />}>crea un account</Route>
        <Route path='/accedi' element={<Accedi />}>Accedi</Route>
      </Routes>
      <div class='flex justify-center relative'>
        <div class='absolute bg-black opacity-95 h-[100vh]'>
          <div class='flex'>
            <img src={one} alt='one' class='bgimgs' />
            <img src={two} alt='two' class='bgimgs' />
          </div>
          <div class='flex'>
            <img src={three} alt='three' class='bgimgs' />
            <img src={four} alt='four' class='bgimgs' />
          </div>
        </div>
        <div class='text-white z-40 px-5 flex items-center justify-center mt-10'>
          <div>
          <h1 class='font-bold text-4xl my-4'>
            Il tuo assistente
            personale,
            a portata di
            un click.
          </h1>
          <p class='font-semibold text-lg my-4'>
            Miro è un'intelligenza artificiale
            in grado di rispondere a qualsiasi
            tua domanda con testi semplici o
            complessi in pochi secondi.
          </p>
          <div class='hidden md:flex gap-2'>
            <div><p>disponibile 24/7</p></div>
            <div><p>facile da usare</p></div>
            <div><p>super-intelligente</p></div>
            <div><p>100% gratuito</p></div>
          </div>

          <div class=''>
          <div class=' w-[80%] flex flex-col font-bold gap-2 mt-2 md:hidden'>
            <div class='flex justify-between'>
            <p>disponibile 24/7</p>
            <p>facile da usare</p>
            </div>
            <div class='flex justify-between'>
            <p>super-intelligente</p>
            <p>100% gratuito</p>
            </div>
          </div>
          </div>

          {/* <div class='bgimg z-40'></div> */}
          <div class='flex justify-center'>
          {/* <div style={{position: 'relative'}}>
            <img src={eleven} alt='eleven'/>
            <p style={{position: 'absolute', top:'50%', left:'50%'}}>SCOPRI DI PIÙ</p>
          </div> */}
          </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default App;
