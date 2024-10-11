import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./css/Root.css";

export default function Root() {
  return (
    <div className="main-page">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
