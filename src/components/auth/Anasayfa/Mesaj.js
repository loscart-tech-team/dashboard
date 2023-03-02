import React from 'react';
import {BiUser} from "react-icons/bi";

function Mesaj() {
  return (
    <div className='flex justify-center items-center'>
        <div className='bg-[#3D30EA] bg-opacity-20 w-[918px] h-[50px] my-6 m flex items-center rounded-[6px]'>
            <div className=' bg-white ml-5 w-[26px] h-[26px] rounded-[6px] flex justify-center items-center'>
                <BiUser color='#3D30EA' fontSize="18px"/>
            </div>
            <div className='text-[#3D30EA] text-[16px] ml-3'>
                Mesaj
            </div>
        </div>
    </div>
  )
}

export default Mesaj