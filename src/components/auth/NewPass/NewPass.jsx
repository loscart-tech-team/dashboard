import React from "react";
import logo from "./../../../image/logo.png";
import leftArrow from "./../../../image/arrow.png";
import { useNavigate, NavLink } from "react-router-dom";

export default function NewPass() {
  const email = "john.doe@mail.com";
  const navigate = useNavigate();

  const newPassSubmit = (e) => {
    e.preventDefault();
    console.log("new pass submitted");
    navigate("/new-password")
  }

  return (
    <div className=" bg-gray-200">
    <div className=" max-w-[589px] bg-white">
    <div className="grid grid-cols-1 h-screen w-full">
      <div className=" flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6" onSubmit={newPassSubmit}>
          <div className="flex pb-5">
            <img src={logo} alt="logo" />
          </div>
          <span className=" w-[500px] h-[40px] flex font-medium text-2xl ">
            Yeni şifre belirleme🔒
          </span>
          <span className="w-300 font-serif flex mb-3 ">
            for <span className=" font-semibold ml-2 text-sm pt-[3px]">{email}</span>
          </span>

          <div className="flex flex-col py-2  ">
            <label>Yeni Şifre</label>
            <input className="border p-2 rounded-lg" type="password" required />
          </div>
          <div className=" flex flex-col py-4">
            <span>Şifreyi Onayla</span>
            <input className="border p-2 rounded-lg" type="password" required/>
          </div>
          <ul className=" list-disc relative ml-4 text-slate-400 font-extralight text-[15px] mt-[-15px]  ">
            <li className=" list-none ml-[-15px]">
              Şifrede olması gereken özellikler
              <br />
            </li>
            <li>
              Büyük/küçük harf <br />
            </li>
            <li>
              Sayı içermeli <br />
            </li>
            <li> vsvsvsvs</li>
          </ul>
          <button type="submit" className="border rounded-lg w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Yeni şifremi kaydet
          </button>
          <div className="pl-[98px] flex ">
            <img
              className="pt-0 w-10 pl-5 absolute "
              src={leftArrow}
              alt="left "
            />
            <NavLink to="/" className="text-blue-600 pl-11 font-serif  text-sm">
              Girişe geri dön
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}
