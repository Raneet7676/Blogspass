import React from 'react';
import LOGO from '../assets/PNG section/logo.svg';
import '../UI/CSS files/Logo.css'

function Logo() {
  return (
    <>
        <div className="logo">
            <img src={LOGO} alt="#Logo" />
            <b>LOGO</b>
        </div>
    </>
  )
}

export default Logo