import React from "react";
import { Outlet } from "react-router-dom";
import MyAccountHeader from "../../components/myAccount/MyAccountHeader/MyAccountHeader";
import MyAccountFooter from "../../components/myAccount/MyAccountFooter/MyAccountFooter";
import Navbar from "../../components/auth/Anasayfa/Navbar";

const MyAccountLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1100px] flex flex-col min-h-screen">
        <MyAccountHeader />
        <div className="flex-grow">
          <Outlet />
        </div>
        <div
          className=" h-16  border-t-2 border-white
           bottom-0
             "
        >
          <MyAccountFooter />
        </div>
      </div>
    </>
  );
};

export default MyAccountLayout;
