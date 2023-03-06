import React from 'react';
import logo from "./../../../image/logo.png";
import {TbSmartHome, TbLayoutGrid} from "react-icons/tb";
import {HiOutlineViewGridAdd, HiOutlineChartBar} from "react-icons/hi";
import {FiFile, FiToggleLeft} from "react-icons/fi";

function Navbar() {
  return (
    <>
      <nav className='h-[62px] flex flex-row items-center justify-center gap-x-[600px] border-b-2'>
        <div className='flex flex-row items-center justify-center'>
          <img src={logo} alt="logo" />
          <h2 className='text-[22px] ml-4 font-bold text-[#4B465C]'>Loscart</h2>
        </div>

        <div className='flex flex-row gap-x-2 text-[16px]'>
          <button className='flex flex-row gap-x-2 items-center justify-center hover:bg-slate-200 p-2 rounded-md active:bg-blue-600'><TbSmartHome/>Ana sayfa</button>
          <button className='flex flex-row gap-x-2 hover:bg-slate-200 p-2 rounded-md active:bg-blue-600 items-center justify-center '><HiOutlineViewGridAdd/>Asistan</button>
          <button className='flex flex-row gap-x-2 hover:bg-slate-200 p-2 rounded-md active:bg-blue-600 items-center justify-center '><FiFile/>Emirler</button>
          <button className='flex flex-row gap-x-2 hover:bg-slate-200 p-2 rounded-md active:bg-blue-600 items-center justify-center '><HiOutlineChartBar/>Raporlar</button>
          <button className='flex flex-row gap-x-2 hover:bg-slate-200 p-2 rounded-md active:bg-blue-600 items-center justify-center '><FiToggleLeft/>Ayarlar</button>
          <button className='flex flex-row gap-x-2 hover:bg-slate-200 p-2 rounded-md active:bg-blue-600 items-center justify-center '><TbLayoutGrid/>Hesabım</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;