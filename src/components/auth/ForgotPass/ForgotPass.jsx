import React from "react";
import logo from "./../../../image/logo.png";
import leftArrow from "./../../../image/arrow.png";
import { NavLink, Form, useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const navigate = useNavigate();
  
  const passResetSubmit = (e) => {
    e.preventDefault();
    console.log("pass reset submitlendi");
    navigate("/security-password")
  }

  return (
    <>
    <div className=" bg-gray-200">
    <div className=" max-w-[589px] bg-white">
    <div className="grid grid-cols-1 h-screen w-full">
      <div className=" flex flex-col justify-center">
        <Form onSubmit={passResetSubmit} className="max-w-[400px] w-full mx-auto bg-white p-2">
          <div className="flex pb-5">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="w-[400px] h-[30px] flex font-semibold text-[26px] text-gray-600">
            Şifremi unuttum 🔒
          </h1>
          <h2 className="w-50 font-normal pb-4 pt-3 test-[15px]">
            E-postanızı girin, ve şifrenizi sıfırlamanız için talimatları göndereceğiz
          </h2>

          <div className="flex flex-col py-2  ">
            <label className="pb-1 font-normal">Email</label>
            <input className="border p-2 rounded-lg" type="email" placeholder="john.doe@gmail.com" name="email" required />
          </div>

          <button type="submit" className="border rounded-lg w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Şifremi sıfırla
          </button>
          <div className="pl-[60px] flex ">
            <img
              className="pt-[3.5px] w-10 pl-5 ml-2 absolute"
              src={leftArrow}
              alt="left"
            />
            <NavLink to="/" className="text-blue-600 pl-12"> Giriş sayfasına geri dön </NavLink>
          </div>
        </Form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}