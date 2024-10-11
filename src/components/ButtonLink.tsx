import { Link } from "react-router-dom";
import "./css/ButtonLink.css";
export default function ButtonLink({
  children,
  toLink,
  style,
}: {
  children: string;
  toLink: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="btn-home" style={style}>
      <Link to={toLink}>{children}</Link>
    </div>
  );
}
