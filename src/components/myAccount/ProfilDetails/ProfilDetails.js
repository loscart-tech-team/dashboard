import React from "react";
import ProfilImages from "../ProfilImages/ProfilImages";

const ProfilDetails = () => {
  return (
    <>
      <div className="border-gray-200 rounded-lg shadow p-6 text-[15px]">
        <div>
          <p className="font-semibold text-lg md:text-xl">Profil Details</p>
        </div>
        <ProfilImages />
      </div>
      <div className="w-full mt-3 border-gray-200 rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Marka Ado
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Loscart"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Kullanıcı Adı
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Furkan"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              ID
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Sistem atar"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Organization
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="PIXINVENT"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Telefon numarası
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="674 758 7365"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              E-posta adresi
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <button className="flex flex-row mb-3 md:mb-0 mr-0 md:mr-3 gap-x-2 w-full md:w-[144px] h-[38px] items-center justify-center  hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md focus:bg-blue-700 focus:text-white bg-zinc-200">
            Save Changes
          </button>
          <button className="flex flex-row w-full md:w-[91px] h-[38px] items-center justify-center  hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md focus:bg-blue-700 focus:text-white bg-zinc-200">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilDetails;
