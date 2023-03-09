import React from "react";
import { TbUsers, TbLock, TbFileText, TbBell, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyAccountHeader = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-3 mb-3">
      <Link
        to="/hesabım"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1"
      >
        <TbUsers />
        <span className="text-sm md:text-base">Profili Düzenle</span>
      </Link>

      <Link
        to="/hesabım/membership-plan"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1 hover:bg-blue-700 active:bg-blue-900"
      >
        <TbLock />
        <span className="text-sm md:text-base">Üyelik Planı</span>
      </Link>

      <Link
        to="/hesabım/technical-support"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1 hover:bg-blue-700 active:bg-blue-900"
      >
        <TbFileText />
        <span className="text-sm md:text-base">Teknik Destek</span>
      </Link>

      <Link
        to="/hesabım/settings"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1 hover:bg-blue-700 active:bg-blue-900"
      >
        <TbBell />
        <span className="text-sm md:text-base">Ayarlar</span>
      </Link>

      <Link
        to="/hesabım/frequently-asked-questions"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1 hover:bg-blue-700 active:bg-blue-900"
      >
        <TbLink />
        <span className="text-sm md:text-base">Sıkça sorulan sorular</span>
      </Link>

      <Link
        to="/hesabım/contact-us"
        className="flex flex-row items-center justify-center w-full md:w-auto bg-blue-800 text-white rounded-md px-2 py-1 hover:bg-blue-700 active:bg-blue-900"
      >
        <TbLink />
        <span className="text-sm md:text-base">Bize ulaşın</span>
      </Link>
    </div>
  );
};

export default MyAccountHeader;
