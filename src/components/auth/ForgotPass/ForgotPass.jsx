import React from "react";
export default function ForgotPass() {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
          <div className="flex pb-5">
            <img src="/image/logo.png" alt="logo" />
          </div>
          <h1 className="w-[400px] h-[30px] flex font-semibold">
            Şifremi unuttum 🔒
          </h1>
          <h2 className="w-50 font-normal pb-4">
            Enter your email, and we'll send you instructions to reset your
            password
          </h2>

          <div className="flex flex-col py-2  ">
            <label className="pb-2 font-normal">Email</label>
            <input className="border p-2 " type="text" />
          </div>

          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Şifremi sıfırla
          </button>
          <div className="pl-[60px] flex ">
            <img
              className="pt-1 w-10 pl-5 absolute"
              src="/image/arrow.png"
              alt="left"
            />
            <p className="text-blue-600 pl-12"> Giriş sayfasına geri dön </p>
          </div>
        </form>
      </div>
    </div>
  );
}
