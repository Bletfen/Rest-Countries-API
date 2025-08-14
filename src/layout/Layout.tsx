import { Outlet } from "react-router";
import Header from "../components/Header";
export default function Layout() {
  return (
    <div className="dark:bg-[#202c36] transition duration-300 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
