import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ForgotPassPage from "./pages/forgotPass/ForgotPassPage";
import NewPassPage from "./pages/NewPass/NewPassPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/new-password" element={<NewPassPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
