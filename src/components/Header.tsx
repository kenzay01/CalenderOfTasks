import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import "./css/Header.css";
import type { User } from "../types/User";
export default function Header({
  userKey,
  userData,
}: {
  userKey: boolean;
  userData: User | null;
}) {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menu]);

  return (
    <div className="header">
      <ul className={`header-list ${menu ? "menu-open" : ""}`}>
        <li>
          <IoMenu onClick={handleMenu} />
        </li>
        <li>
          <h1>
            <Link to="/" onClick={handleCloseMenu}>
              Name
            </Link>
          </h1>
        </li>
        <li className="username-icon">
          <Link
            to={userKey ? `/personal/${userData?.username}` : "/login"}
            onClick={handleCloseMenu}
          >
            {" "}
            <div className="full-username">{userData?.fullname}</div>
            <MdAccountCircle />
          </Link>
        </li>
      </ul>
      {menu && (
        <>
          <div className="blur-background" onClick={handleCloseMenu}></div>
          <Menu onLinksClick={handleCloseMenu} />
        </>
      )}
    </div>
  );
}
