import React from "react";

const ProfilDetails = () => {
  return (
    <>
      <div className="border-gray-200 rounded-lg shadow h-[194px] p-6">
        <div>
          <p className="font-semibold text-[18px]">Profil Details</p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:max-w-xl">
          <img
            className="rounded-lg h-[100px] w-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex">
              <button className="flex flex-row gap-x-2 w-[172px] mr-3 h-[38px] items-center justify-center bg-blue-800 text-white rounded-md ">
                Upload new photo
              </button>
              <button className="flex flex-row gap-x-2 w-[83px] h-[38px] items-center justify-center bg-blue-800 text-white rounded-md ">
                Reset
              </button>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-3 border-gray-200 rounded-lg shadow  p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Marka Ado
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Loscart"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Kullanıcı Adı
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Furkan"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Organization
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="PIXINVENT"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Telefon numarası
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="674 758 7365"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              E-posta adresi
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="flex">
          <button className="flex flex-row mr-3 gap-x-2 w-[144px] h-[38px] items-center justify-center bg-blue-800 text-white  rounded-md">
            Save Changes
          </button>
          <button className="flex flex-row gap-x-2 w-[91px]  h-[38px] items-center justify-center bg-blue-800 text-white  rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilDetails;
