import React from "react";
import { TbUsers, TbLock, TbFileText, TbBell, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyAccountHeader = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-3 mb-3 text-[15px]">
      <Link
        to="/hesabım"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbUsers />
        <span className="text-sm md:text-base ml-2">Profili Düzenle</span>
      </Link>

      <Link
        to="/hesabım/membership-plan"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbLock />
        <span className="text-sm md:text-base ml-2">Üyelik Planı</span>
      </Link>

      <Link
        to="/hesabım/technical-support"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbFileText />
        <span className="text-sm md:text-base ml-2">Teknik Destek</span>
      </Link>

      <Link
        to="/hesabım/settings"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbBell />
        <span className="text-sm md:text-base ml-2">Ayarlar</span>
      </Link>

      <Link
        to="/hesabım/frequently-asked-questions"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbLink />
        <span className="text-sm md:text-base ml-2">Sıkça sorulan sorular</span>
      </Link>

      <Link
        to="/hesabım/contact-us"
        className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-6 py-2 focus:bg-blue-700 focus:text-white"
      >
        <TbLink />
        <span className="text-sm md:text-base ml-2">Bize ulaşın</span>
      </Link>
    </div>
  );
};

export default MyAccountHeader;
