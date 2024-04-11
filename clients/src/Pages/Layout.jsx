import HeaderPage from "./HeaderPage";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="p-6">
      <HeaderPage />
      <Outlet />
    </div>
  );
}
export default Layout;
