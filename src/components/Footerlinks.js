import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import one from '../assets/1.png'

const Footerlinks = () => {
  return (
    <>
      <div className='overflow-hidden relative z-10' style={{border:'1px solid black'}}>
      <div className='absolute z-10 bottom-[-20] left-30'><img src={one} alt='bg' /></div>
        <div className='relative z-20'>
          <ul class='footerlinks text-white px-3 '>
            <Link to='/crea-un-account'><li>crea un account</li></Link>
            <Link to='/accedi'><li>accedi</li></Link>
            <Link to='/'><li>istruzioni</li></Link>
            <Link to='/privacy-policy'><li>privacy policy</li></Link>
          </ul>
        </div>
        
        {/* <div className='absolute bottom-0 z-10 w-[70px] h-[70px] bg-[red]'>a</div>
        <div className='relative opacity-25 z-20 w-full h-[40px] bg-[blue]'>B</div> */}
      </div>
    </>
  )
}

export default Footerlinks