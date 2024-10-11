import { Link } from "react-router-dom";
export default function Menu({ onLinksClick }: { onLinksClick: () => void }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/" onClick={onLinksClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/schedule" onClick={onLinksClick}>
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/smth" onClick={onLinksClick}>
            Something
          </Link>
        </li>
      </ul>
    </div>
  );
}
