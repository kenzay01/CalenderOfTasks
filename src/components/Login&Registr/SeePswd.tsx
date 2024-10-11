import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function SeePswd({
  handleClick,
  see,
}: {
  handleClick: () => void;
  see: boolean;
}) {
  return (
    <div onClick={handleClick} className={`psswd-see ${see ? "see" : ""}`}>
      {see ? <FaEye /> : <FaEyeSlash />}
    </div>
  );
}
