import LoginPage from "./pages/login/LoginPage";
import ForgotPassPage from "./pages/forgotPass/ForgotPassPage";
import NewPassPage from "./pages/NewPass/NewPassPage";
import SecurityCodePage from "./pages/securityCode/SecurityCodePage";
import AnasayfaPage from "./pages/Anasayfa/AnasayfaPage";
import MyAccountLayout from "./layouts/MyAccountLayout/MyAccountLayout";
import MyAcoountEditProfile from "./pages/MyAcoountEditProfile/MyAcoountEditProfile";
import MembershipPlan from "./pages/MembershipPlan/MembershipPlan";
import TechnicalSupport from "./pages/TechnicalSupport/TechnicalSupport";
import Settings from "./pages/Settings/Settings";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ContactUs from "./pages/ContactUs/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassPage />,
    },
    {
        path: "/new-password",
        element: <NewPassPage />,
    },
    {
        path: "/security-password",
        element: <SecurityCodePage />,
    },
    {
        path: "/anasayfa",
        element: <AnasayfaPage />,
    },
    {
        path: "/hesabım",
        element: <MyAccountLayout />,
        children: [
            {
                index: true,
                element: <MyAcoountEditProfile />,
            },
            {
                path: "/hesabım/membership-plan",
                element: <MembershipPlan />,
            },
            {
                path: "/hesabım/technical-support",
                element: <TechnicalSupport />,
            },
            {
                path: "/hesabım/settings",
                element: <Settings />,
            },
            {
                path: "/hesabım/frequently-asked-questions",
                element: <FrequentlyAskedQuestions />,
            },
            {
                path: "/hesabım/contact-us",
                element: <ContactUs />,
            },
        ],
    },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
