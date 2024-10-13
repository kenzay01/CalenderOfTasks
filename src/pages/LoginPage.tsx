import "./css/LoginRegPage.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Input from "../components/Input";
import SeePswd from "../components/Login&Registr/SeePswd";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state ? location.state.message : "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [showMessage, setShowMessage] = useState(!!message);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    setSeePassword(!seePassword);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);

    //TODO: Add login logic
    navigate("/");
  };
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div className="login-page">
      {showMessage && (
        <div className={`error-message ${message ? "" : "notneed"}`}>
          {message}
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input username">
          <Input
            text={username}
            placeholder="Username"
            onChangeText={handleUsernameChange}
            type="text"
            autoFocus
          />
        </div>
        <div className="input psswd">
          <Input
            text={password}
            placeholder="Password"
            onChangeText={handlePasswordChange}
            type={seePassword ? "text" : "password"}
          />
          <SeePswd handleClick={handleClick} see={seePassword} />
        </div>
        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
        <p className="to-somewhere">
          Have you been {<Link to="/registration">registration</Link>}?
        </p>
      </form>
    </div>
  );
}
