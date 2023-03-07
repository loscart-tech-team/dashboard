import React from "react";

const DeleteAccount = () => {
  return (
    <div className="p-6 border-gray-200 rounded-lg shadow mt-5">
      <p className="font-semibold text-[18px]">Delete Account</p>
      <div className="h-[80] bg-orange-200 rounded-md p-2">
        <h5 className="font-semibold text-[18px] text-amber-600">
          Are you sure you want to delete your account?
        </h5>
        <p className="text-[15px] font-medium text-amber-600">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </div>
      <div className="flex m-2">
        <input type="checkbox" className="mr-2 text-[15px]" />
        <p>I confirm my account deactivation</p>
      </div>
      <div className="flex">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-3">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
