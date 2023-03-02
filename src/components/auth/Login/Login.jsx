import {useState} from "react";
import logo from "./../../../image/logo.png";
//import leftArrow from "./../../../image/arrow.png";
import { NavLink, useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [capsLockEmail, setCapsLockEmail] = useState(false);
  const [capsLockPass, setCapsLockPass] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    navigate("/anasayfa")
  }

  const keyUpEmail = (event) => {
    if(event.getModifierState("CapsLock")){
      setCapsLockEmail(true);
    }
    else{
      setCapsLockEmail(false);
    }
  }

  const keyUpPass = (event) => {
    if(event.getModifierState("CapsLock")){
      setCapsLockPass(true);
    }
    else{
      setCapsLockPass(false);
    }
  }

  return (
    <div className=" bg-gray-200">
    <div className=" max-w-[589px] bg-white">
      <div className="grid grid-cols-1 h-screen w-full">
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-white">
          <div className="flex pb-5">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="w-[400px] h-[30px] flex text-3xl mb-4 font-semibold text-gray-600">
            Loscart'a Hoş Geldin! 👋
          </h1>
          <h2 className="w-50 font-medium pb-4 text-gray-500">
            Lütfen hesabınıza giriş yapın ve maceraya başlayın
          </h2>

          <div className="flex flex-col py-2 text-md">
            <label>E-posta ya da Kullanıcı adı</label>
            <input className="border p-2 rounded-lg" name="email" type="email" placeholder="john.doe" onKeyUp={keyUpEmail} required/>
            {capsLockEmail && <p className="text-red-500 font-semibold">Warning! Capslock is ON!</p>}
          </div>
          <div className=" flex flex-col py-4">
            <span className=" text-[15px] pt-[2px] text-right text-blue-600 ">
              <NavLink to="../forgot-password">Şifremi unuttum </NavLink>
            </span>
            <label className="absolute flex ">Şifre </label>
            <input className="border p-2 rounded-lg placeholder:text-xs" type="password" name="password" placeholder="**********" onKeyUp={keyUpPass} required/>
            {capsLockPass && <p className="text-red-500 font-semibold">Warning! Capslock is ON!</p>}
          </div>
          <p className="flex items-center ">
            <input className="mr-2 mt-[3px] flex checked:bg-purple-600 w-[20px] h-[20px]" type="checkbox"  /> Beni hatırla
          </p>
          <button type="submit" className="border rounded-lg w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Giriş Yap
          </button>
          <div className="pl-[60px] flex ">
            <p className="">Sorun mu Yaşıyorsun? </p>
            <NavLink to="/" className="text-blue-600 pl-1 "> İletişime geç</NavLink>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
}
