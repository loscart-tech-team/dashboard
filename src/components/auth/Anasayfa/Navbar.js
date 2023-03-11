import React, { useState } from "react";
import logo from "./../../../image/logo.png";
import { TbSmartHome, TbLayoutGrid } from "react-icons/tb";
import {
  HiOutlineViewGridAdd,
  HiOutlineChartBar,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { FiFile, FiToggleLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  function hesabımClick() {
    navigate("/hesabım");
  }

  function anasayfaClick() {
    navigate("/anasayfa");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img className="h-8 w-auto mr-2" src={logo} alt="Loscart Logo" />
              <h2 className="text-[22px] ml-4 font-bold text-[#4B465C]">
                Loscart
              </h2>
            </div>
            <div className="flex sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="hidden sm:block flex flex-row gap-x-2">
              <div className="flex flex-row gap-x-2 text-[16px]">
                <button
                  onClick={anasayfaClick}
                  className="flex flex-row gap-x-2 items-center justify-center hover:bg-slate-100 p-2 rounded-md active:bg-blue-600 focus:text-white focus:bg-blue-700"
                >
                  <TbSmartHome />
                  Ana Sayfa
                </button>
                <button className="flex flex-row gap-x-2 focus:text-white hover:bg-slate-100 focus:bg-blue-700 p-2 rounded-md active:bg-blue-600 items-center justify-center">
                  <HiOutlineViewGridAdd />
                  Asistan
                </button>
                <button className="flex flex-row gap-x-2 focus:text-white hover:bg-slate-100 focus:bg-blue-700 p-2 rounded-md active:bg-blue-600 items-center justify-center ">
                  <FiFile />
                  Emirler
                </button>
                <button className="flex flex-row gap-x-2 focus:text-white hover:bg-slate-100 focus:bg-blue-700 p-2 rounded-md active:bg-blue-600 items-center justify-center ">
                  <HiOutlineChartBar />
                  Raporlar
                </button>
                <button className="flex flex-row gap-x-2 focus:text-white hover:bg-slate-100 focus:bg-blue-700 p-2 rounded-md active:bg-blue-600 items-center justify-center ">
                  <FiToggleLeft />
                  Ayarlar
                </button>
                <button
                  onClick={hesabımClick}
                  className="flex focus:text-white flex-row gap-x-2 focus:bg-blue-700 hover:bg-slate-100 p-2 rounded-md active:bg-blue-600 items-center justify-center "
                >
                  <TbLayoutGrid />
                  Hesabım
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-slate-200" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={anasayfaClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white"
              >
                Ana Sayfa
              </button>
              <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white">
                Asistan
              </button>{" "}
              <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white">
                Emirler
              </button>{" "}
              <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white">
                Raporlar
              </button>{" "}
              <button className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white">
                Ayarlar
              </button>{" "}
              <button
                onClick={hesabımClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:bg-blue-700 focus:text-white"
              >
                Hesabım
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
