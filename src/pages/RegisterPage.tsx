import "./css/LoginRegPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SeePswd from "../components/Login&Registr/SeePswd";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  const handleClickPaswd = () => {
    setSeePassword(!seePassword);
  };
  const handleClickConfPaswd = () => {
    setSeeConfirmPassword(!seeConfirmPassword);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);

    //TODO: Add reg logic
    navigate("/");
  };
  return (
    <div className="reg-page">
      <form className="reg-form" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className="input username">
          <Input
            text={username}
            placeholder="Username"
            onChangeText={handleUsernameChange}
            type="text"
            autoFocus
          />
        </div>
        <div className="input">
          <Input
            text={password}
            placeholder="Password"
            onChangeText={handlePasswordChange}
            type={seePassword ? "text" : "password"}
          />
          <SeePswd handleClick={handleClickPaswd} see={seePassword} />
        </div>
        <div className="input">
          <Input
            text={confirmPassword}
            placeholder="Confirm Password"
            onChangeText={handleConfirmPasswordChange}
            type={seeConfirmPassword ? "text" : "password"}
          />
          <SeePswd
            handleClick={handleClickConfPaswd}
            see={seeConfirmPassword}
          />
        </div>

        <div className="btn-container">
          <button type="submit">Register</button>
        </div>
        <p className="to-somewhere">
          Go to {<Link to="/login">Login</Link>} or {<Link to="/">Home</Link>}?
        </p>
      </form>
    </div>
  );
}
