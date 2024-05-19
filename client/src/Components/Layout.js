import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function Layout({ baseURL }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <main>
      {path !== "/login" && path !== "/signup" && <Header baseURL={baseURL} />}
      <Outlet />
    </main>
  );
}
