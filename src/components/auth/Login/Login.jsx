import React from "react";
export default function Login() {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
          <div className="flex pb-5">
            <img src="/image/logo.png" alt="logo" />
          </div>
          <h1 className="w-[400px] h-[30px] flex font-normal  ">
            Loscart'a Hoş Geldin! 👋
          </h1>
          <h2 className="w-50 font-normal pb-4">
            Please sign in to your account and start the adventure
          </h2>

          <div className="flex flex-col py-2  ">
            <label>Email or Username</label>
            <input className="border p-2 " type="text" />
          </div>
          <div className=" flex flex-col py-4">
            <span className=" text-right text-blue-600 ">Şifremi unuttum </span>
            <label className="absolute flex ">Password </label>

            <input className="border p-2 " type="password" />
          </div>
          <p className="flex items-center ">
            <input className="mr-2 mt-[3px]  flex " type="checkbox" /> Remember
            Me
          </p>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign in
          </button>
          <div className="pl-[60px] flex ">
            <p className="">Sorun mu Yaşıyorsun? </p>
            <p className="text-blue-600 pl-1 "> İletişime geç</p>
          </div>
        </form>
      </div>
    </div>
  );
}
