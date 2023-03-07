import React from "react";
import Navbar from "../auth/Anasayfa/Navbar";
import ProfilDetails from "./ProfilDetails/ProfilDetails";
import MyAccountHeader from "./MyAccountHeader/MyAccountHeader";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import MyAccountFooter from "./MyAccountFooter/MyAccountFooter";

const Test = () => {
  return (
    <>
      <Navbar />
      <div div class="mx-auto max-w-[1100px]">
        <MyAccountHeader />
        <ProfilDetails />
        <DeleteAccount />
        <MyAccountFooter />
      </div>
    </>
  );
};

export default Test;
