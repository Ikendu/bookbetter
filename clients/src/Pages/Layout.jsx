import HeaderPage from "./HeaderPage";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <HeaderPage />
      <Outlet />
    </div>
  );
}
export default Layout;
