import React from "react";
import { TbUsers, TbLock, TbFileText, TbBell, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyAccountHeader = () => {
  return (
    <div className="flex flex-row gap-x-2 text-[15px] h-[38px] mt-3 mb-3">
      <Link
        to="/hesabım"
        className="flex flex-row gap-x-2 w-[175px] items-center justify-center bg-blue-800 text-white  rounded-md "
      >
        <TbUsers />
        Profili Düzenle
      </Link>

      <Link
        to="/hesabım/membership-plan"
        className="flex flex-row gap-x-2 w-[154px]  items-center justify-center hover:bg-blue-800 hover:text-white  rounded-md active:bg-blue-800"
      >
        <TbLock />
        Üyelik Planı
      </Link>

      <Link
        to="/hesabım/technical-support"
        className="flex flex-row gap-x-2 w-[171px]  items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800"
      >
        <TbFileText />
        Teknik Destek
      </Link>

      <Link
        to="/hesabım/settings"
        className="flex flex-row gap-x-2 w-[120px] items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800"
      >
        <TbBell />
        Ayarlar
      </Link>
      <Link
        to="/hesabım/frequently-asked-questions"
        className="flex flex-row gap-x-2 w-[223px]  items-center justify-center hover:bg-blue-800 hover:text-white rounded-md active:bg-blue-800"
      >
        <TbLink />
        Sıkça sorulan sorular
      </Link>
      <Link
        to="/hesabım/contact-us"
        className="flex flex-row gap-x-2 w-[146px]  items-center justify-center hover:bg-blue-800 hover:text-white  rounded-md active:bg-blue-800"
      >
        <TbLink />
        Bize ulaşın
      </Link>
    </div>
  );
};

export default MyAccountHeader;
