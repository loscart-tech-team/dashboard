import React from "react";

const ProfilImages = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:max-w-xl">
        <img
          className="rounded-lg h-24 w-24 md:h-40 md:w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex flex-col md:flex-row">
            <button className="w-full md:w-40 flex flex-row gap-x-2 h-8 md:h-10 items-center justify-center bg-zinc-200 hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md focus:bg-blue-700 focus:text-white">
              Upload new photo
            </button>
            <button className="w-full md:w-40 flex flex-row gap-x-2 h-8 md:h-10 items-center justify-center bg-zinc-200 hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded-md focus:bg-blue-700 focus:text-white mt-2 md:mt-0 md:ml-2">
              Reset
            </button>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilImages;
