import React from 'react'
import '../App.css'
import phone from '../assets/4.png'
import openai from '../assets/8.png'
import google from '../assets/9.png'
import question from '../assets/question.png'
import design from '../assets/design-thinking.png'
import laptop from '../assets/laptop.png'
import bgbtn from '../assets/6.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import { Link } from 'react-router-dom'
import Footerlinks from '../components/Footerlinks'

const LandingPage = () => {
    return (
        <>
            <div class='bg-black pb-5 pt-20'>
                <div class='px-5 flex items-center justify-center text-white relative overflow-hidden md:overflow-visible'>
                    <div>
                        <img class='absolute block md:hidden top-[-20%] left-[-30%]' src={one} alt="bg" />
                        <img class='absolute top-[-35%] right-[-30%]' src={two} alt="bg" />
                        <img class='absolute block md:hidden bottom-[-10%] right-[-10%]' src={three} alt="bg" />
                    </div>

                    <div class='z-40'>
                        <div >
                            <h1 class='font-bold text-4xl my-4 leading-[3rem]'>
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

                            <div class='relative'>
                                <div class='flex justify-center py-5'>
                                    <button style={{ backgroundColor: 'black', borderRadius: '10px', padding: '20px', width: '80%' }} class='z-40 font-semibold'>SCOPRI DI PIÙ</button>
                                </div>
                                <div class='absolute bottom-[-120%] md:hidden'><img src={bgbtn} alt='bgbtn' /></div>
                            </div>

                        </div>
                    </div>


                </div>

                <div class='text-white mt-5 px-3 flex flex-col'>
                    <p class='font-bold text-4xl leading-[3rem] text-left block md:hidden'>Aumenta la tua<br />
                        produttività<br />
                        del 200%</p>
                    <p class='font-bold text-4xl leading-[3rem] text-left md:text-center hidden md:block '>Aumenta la tua
                        produttività
                        del 200%</p>
                    <div class='flex justify-center'><img src={phone} alt="phone" /></div>
                </div>

                <div class='text-white px-3 relative block md:flex justify-center'>
                    <div class='w-full md:w-[50%]'>
                        <h1 class='text-4xl font-bold mb-5 md:mb-0'>Come funziona</h1>
                        <p class='font-semibold'>Miro è semplicissimo da usare:
                            ti basterà creare un account e avrai
                            subito accesso al tuo assistente
                            personale gratuitamente.
                            Puoi fargli qualsiasi domanda e
                            saprà risponderti con un testo di
                            lunghezza e complessità a tua scelta
                            che sembra scritto da un essere
                            umano</p>
                        <p class='font-bold text-lg py-2 mt-3'>provalo per crederci</p>
                        <div class='relative'>
                            <div class='flex justify-center py-5'>
                                <Link to='/crea-un-account' class='w-[80%] z-40'>
                                    <button style={{ backgroundColor: 'black', borderRadius: '10px', padding: '20px', width: '80%' }} class=' font-semibold'>CREA IL TUO ACCOUNT</button>
                                </Link>
                            </div>
                            <div class='absolute bottom-[-120%] md:bottom-[-350%]'><img src={bgbtn} alt='bgbtn' /></div>
                        </div>
                    </div>
                </div>

                <div class='relative bg-[#272727] opacity-nill md:opacity-75 overflow-hidden'>
                    <div class='absolute top-[-280%] left-[-100%]'><img src={two} alt="bg" /></div>
                    <div class='flex opacity-75 z-40'>
                        <div><img src={openai} width={100} height={100} alt='openai' /></div>
                        <div class='flex items-center'><img src={google} width={100} height={100} alt='google' /><p class='font-bold text-4xl text-white'>Partner</p></div>
                    </div>
                </div>

                <div class='my-3 md:my-10 px-3 z-40 relative flex justify-center '>
                    <div class='w-full md:w-[80%]'>
                        <div>
                            <img class='absolute opacity-70 top-[-25%] left-[-20%]' src={two} alt="bg" />
                            <img class='absolute opacity-70 top-[20%] right-[-30%]' src={three} alt="bg" />
                            <img class='absolute opacity-25 bottom-[-30%] left-[-30%]' src={one} alt="bg" />
                        </div>
                        <p class='font-bold text-4xl text-white text-left leading-[3rem] block md:hidden mb-2'>Cosa puoi<br />
                            chiedergli?</p>
                        <p class='font-bold text-4xl text-white text-center hidden md:block'>Cosa puoi
                            chiedergli?</p>
                        <div class='z-40'>
                            <div class='flex gap-4 py-6 w-full md:w-[45%]'>
                                <div><img src={question} alt="question" /></div>
                                <div class='text-white'>
                                    <h1 class='font-bold text-lg mb-4'>domande</h1>
                                    <p>Puoi fare qualsiasi domanda e
                                        Miro sarà sempre in grado di
                                        fornirti una risposta dettagliata
                                        e corretta</p>
                                </div>
                            </div>
                            <div class='flex justify-end'>
                                <div class='flex gap-4 py-4 w-full md:w-[45%]'>
                                    <div><img src={design} alt="design" /></div>
                                    <div class='text-white'>
                                        <h1 class='font-bold text-normal mb-4'>idee</h1>
                                        <p>Manchi di creatività? Non ti
                                            preoccupare, con il tuo nuovo
                                            assistente fare brainstorming
                                            non sarà più un problema</p>
                                    </div>
                                </div>
                            </div>
                            <div class='flex gap-4 py-4 w-full md:w-[45]'>
                                <div><img src={laptop} alt="laptop" /></div>
                                <div class='text-white'>
                                    <h1 class='font-bold text-lg mb-4'>scrivere</h1>
                                    <p>Miro è in grado di scrivere e
                                        modificare qualsiasi tipo di
                                        testo: da ricerche ad articoli, a
                                        contratti e molto altro</p>
                                </div>
                            </div>

                            <div>
                                <p class='font-bold text-lg text-white'>+ tante nuove funzioni in arrivo</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class='text-white my-3 px-3 flex justify-center'>
                    <div>
                        <h1 class='font-bold text-4xl my-3'>Il futuro è oggi.</h1>
                        <p class='text-lg font-semibold'>Crea ora il tuo account e inizia a
                            sfruttare l'intero universo di
                            conoscenza dell'umanità.</p>
                        <div class='relative'>
                            <div class='flex justify-center py-5 z-40'>
                                <Link to='/crea-un-account' class='w-[80%] z-40'>
                                    <button style={{ backgroundColor: 'black', borderRadius: '10px', padding: '20px', width: '80%' }} class='z-40 font-semibold'>CREA IL TUO ACCOUNT</button>
                                </Link>
                            </div>
                            <div class='absolute bottom-[-180%] md:bottom-[-350%] left-[-20%]'><img src={bgbtn} alt='bgbtn' /></div>
                        </div>
                    </div>
                </div>

                <div>
                    <Footerlinks />
                </div>
            </div>
        </>
    )
}

export default LandingPage