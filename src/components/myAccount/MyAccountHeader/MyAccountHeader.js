import React from "react";
import { TbUsers, TbLock, TbFileText, TbBell, TbLink } from "react-icons/tb";

const MyAccountHeader = () => {
  return (
    <div className="flex flex-row gap-x-2 text-[15px] h-[38px] mt-3 mb-3">
      <button className="flex flex-row gap-x-2 w-[175px] items-center justify-center bg-blue-800 text-white  rounded-md ">
        <TbUsers />
        Profili Düzenle
      </button>
      <button className="flex flex-row gap-x-2 w-[154px]  items-center justify-center hover:bg-blue-800 hover:text-white  rounded-md active:bg-blue-800">
        <TbLock />
        Üyelik Planı
      </button>
      <button className="flex flex-row gap-x-2 w-[171px]  items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800">
        <TbFileText />
        Teknik Destek
      </button>
      <button className="flex flex-row gap-x-2 w-[120px] items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800">
        <TbBell />
        Ayarlar
      </button>
      <button className="flex flex-row gap-x-2 w-[223px]  items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800">
        <TbLink />
        Sıkça sorulan sorular
      </button>
      <button className="flex flex-row gap-x-2 w-[146px]  items-center justify-center hover:bg-blue-800 hover:text-white  rounded-md active:bg-blue-800">
        <TbLink />
        Bize ulaşın
      </button>
    </div>
  );
};

export default MyAccountHeader;
