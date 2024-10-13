import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./css/Root.css";
import type { User } from "../types/User";
export default function Root({
  userKey,
  userData,
}: {
  userKey: boolean;
  userData: null | User;
}) {
  return (
    <div className="main-page">
      <Header userKey={userKey} userData={userData} />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
