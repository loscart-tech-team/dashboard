import React from 'react';
import Navbar from "./Navbar"
import Mesaj from './Mesaj';
import Asistan from './Asistan';

function Anasayfa() {
  return (
    <>
      <Navbar/>
      <Mesaj/>
      <Asistan/>
    </>
  )
}

export default Anasayfa