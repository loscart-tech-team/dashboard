import React from "react";

const DeleteAccount = () => {
  return (
      <div className="p-6 border-gray-200 rounded-lg shadow mt-5">
          <p className="font-semibold text-lg md:text-xl">Delete Account</p>
          <div className="h-[80px] md:h-auto bg-orange-200 rounded-md p-2 mt-4 md:mt-6">
              <h5 className="font-semibold text-lg md:text-xl text-amber-600">
                  Are you sure you want to delete your account?
              </h5>
              <p className="text-md md:text-lg font-medium text-amber-600">
                  Once you delete your account, there is no going back. Please be certain.
              </p>
          </div>
          <div className="flex mt-4 md:mt-6">
              <input type="checkbox" className="mr-2 text-md md:text-lg" />
              <p className="text-md md:text-lg">I confirm my account deactivation</p>
          </div>
          <div className="flex mt-4 md:mt-6">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md text-md md:text-lg">
                  Delete Account
              </button>
          </div>
      </div>

  );
};

export default DeleteAccount;
