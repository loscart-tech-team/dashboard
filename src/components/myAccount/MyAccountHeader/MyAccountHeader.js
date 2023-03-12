import React, { useState } from "react";
import { TbUsers, TbLock, TbFileText, TbBell, TbLink } from "react-icons/tb";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyAccountHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative bg-white">
      <div className="flex items-center justify-end px-4 py-3 md:hidden">
        <button onClick={handleMenuClick}>
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden `}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-end">
            <button onClick={handleMenuClick}>
              <HiX size={24} />
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/hesabım"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbUsers className="inline-block mr-2" />

              <span className="text-sm md:text-base ml-2">Profili Düzenle</span>
            </Link>
            <Link
              to="/hesabım/membership-plan"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbLock className="inline-block mr-2" />
              <span className="text-sm md:text-base ml-2">Üyelik Planı</span>
            </Link>

            <Link
              to="/hesabım/technical-support"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbFileText className="inline-block mr-2" />
              <span className="text-sm md:text-base ml-2">Teknik Destek</span>
            </Link>

            <Link
              to="/hesabım/settings"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbBell className="inline-block mr-2" />
              <span className="text-sm md:text-base ml-2">Ayarlar</span>
            </Link>

            <Link
              to="/hesabım/frequently-asked-questions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbLink className="inline-block mr-2" />
              <span className="text-sm md:text-base ml-2">
                Sıkça sorulan sorular
              </span>
            </Link>

            <Link
              to="/hesabım/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <TbLink className="inline-block mr-2" />
              <span className="text-sm md:text-base ml-2">Bize ulaşın</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="py-3">
          <div className="flex gap-6">
            <Link
              to="/hesabım"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbUsers />
              <span className="text-sm md:text-base ml-2">Profili Düzenle</span>
            </Link>

            <Link
              to="/hesabım/membership-plan"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbLock />
              <span className="text-sm md:text-base ml-2">Üyelik Planı</span>
            </Link>

            <Link
              to="/hesabım/technical-support"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbFileText />
              <span className="text-sm md:text-base ml-2">Teknik Destek</span>
            </Link>

            <Link
              to="/hesabım/settings"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbBell />
              <span className="text-sm md:text-base ml-2">Ayarlar</span>
            </Link>

            <Link
              to="/hesabım/frequently-asked-questions"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbLink />
              <span className="text-sm md:text-base ml-2">
                Sıkça sorulan sorular
              </span>
            </Link>

            <Link
              to="/hesabım/contact-us"
              className="flex flex-row items-center justify-center w-full md:w-auto hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md px-4 py-1 focus:bg-blue-700 focus:text-white"
            >
              <TbLink />
              <span className="text-sm md:text-base ml-2">Bize ulaşın</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountHeader;
