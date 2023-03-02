import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ForgotPassPage from "./pages/forgotPass/ForgotPassPage";
import NewPassPage from "./pages/NewPass/NewPassPage";
import SecurityCodePage from "./pages/securityCode/SecurityCodePage";
import AnasayfaPage from "./pages/Anasayfa/AnasayfaPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route 
          path="/" 
          element={<LoginPage />} 
          />
    <Route
          path="/forgot-password" 
          element={<ForgotPassPage />} 
          />
    <Route 
          path="/new-password" 
          element={<NewPassPage />} 
          />
    <Route 
          path="/security-password" 
          element={<SecurityCodePage />} 
          />
    <Route 
          path="/anasayfa" 
          element={<AnasayfaPage />} 
          />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
