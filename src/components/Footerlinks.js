import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Footerlinks = () => {
  return (
    <>
        <ul class='footerlinks text-white px-3'>
            <Link to ='/'><li>crea un account</li></Link>
            <Link to ='/'><li>accedi</li></Link>
            <Link to ='/'><li>istruzioni</li></Link>
            <Link to ='/'><li>privacy policy</li></Link>
        </ul>
    </>
  )
}

export default Footerlinks