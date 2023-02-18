import React from 'react'
import Footerlinks from './Footerlinks';


const Sitefooter = ({currentPath}) => {
  return (
    <>
        <div class='text-center font-bold text-lg bg-[#1c2022] text-white'>
            <div className={currentPath === '/chat' ? 'hidden' : 'text-start'}>
            <Footerlinks/>
            </div>
            <p style={{borderTop: "1px solid white"}}>Miro App It &copy; 2023</p>
        </div>
    </>
  )
}

export default Sitefooter;