import {useState} from "react";
import logo from "./../../../image/logo.png";
import { NavLink, Form, useNavigate } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";

export default function ForgotPass() {
  const [securityCode, setSecurityCode] = useState("");
  const navigate = useNavigate();
  
  const onaylaSubmit = (e) => {
    e.preventDefault();
    console.log("pass reset submitlendi");
    navigate("/new-password")
  }

  const phoneNumber = "5056456697";
  const lastFourDigits = phoneNumber.substr(-4);

  const inputChange = (value) => {
    setSecurityCode(value)
  }

  const inputComplete = (value) => {
    console.log(value)
  }

  return (
    <>
    <div className=" bg-gray-200">
    <div className=" max-w-[589px] bg-white">
    <div className="grid grid-cols-1 h-screen w-full">
      <div className=" flex flex-col justify-center">
        <Form onSubmit={onaylaSubmit} className="max-w-[400px] w-full mx-auto bg-white p-2">
          <div className="flex pb-5">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="w-[400px] h-[30px] flex font-semibold text-[26px] text-gray-600">
            Yeni Şifre Oluştur 🔒
          </h1>
          <h2 className="w-50 font-normal pb-4 pt-3 test-[15px]">
          Cep telefonuna bir doğrulama kodu gönderdik. Aşağıdaki alana telefonuna gönderilen kodu gir. <br />
            <span className="text-sm font-bold text-black">
              ******{lastFourDigits}
            </span>
          </h2>

          <div className="flex flex-col py-2  ">
            <label className="pb-1 font-semibold text-[15px] text-gray-500">6 basamaklı güvenlik kodunu gir</label>
            <div className="flex flex-row">
            <PinInput value={securityCode} onChange={inputChange} onComplete={inputComplete} colorScheme="purple" >
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              <PinInputField required className=" max-w-[57px] min-h-[48px] rounded-md mr-3 border-t-slate-400 border-[2px]"/>
              
            </PinInput>
          </div>
          </div>

          <button type="submit" className={`border rounded-lg w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white`}>
            Onayla
          </button>
          <div className="pl-[92px] flex">
            <p className=" text-center">Kod gelmedi mi? </p>
            <NavLink to="/security-password" className="text-blue-600 pl-1 ">Tekrar Gönder</NavLink>
          </div>
        </Form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}