import React from "react";
export default function NewPass() {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
          <div className="flex pb-5">
            <img src="/image/logo.png" alt="logo" />
          </div>
          <span className=" w-[500px] h-[40px] flex font-medium text-2xl ">
            Yeni şifre belirleme🔒
          </span>
          <span className="w-300 font-serif flex mb-3 ">
            for john.doe@email.com
          </span>

          <div className="flex flex-col py-2  ">
            <label>New Password</label>
            <input className="border p-2 " type="text" />
          </div>
          <div className=" flex flex-col py-4">
            <span>Confirm Password</span>
            <input className="border p-2 " type="password" />
          </div>
          <ul className=" list-disc relative ml-4 text-slate-400 font-extralight text-xs  ">
            <li>
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
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Yeni şifremi kaydet
          </button>
          <div className="pl-[98px] flex ">
            <img
              className="pt-0 w-10 pl-5 absolute "
              src="/image/arrow.png"
              alt="left "
            />
            <p className="text-blue-600 pl-11 font-serif  text-sm">
              Girişe geri dön
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
