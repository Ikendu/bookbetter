import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import RegisterPage from "./Pages/RegisterPage";

import axios from "axios";
import UserContextProvider from "./Pages/UserContext";
import AccountPage from "./Pages/AccountPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <ToastContainer />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage/:action" element={<AccountPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
