import "./css/LoginRegPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SeePswd from "../components/Login&Registr/SeePswd";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
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
    navigation(`/personal/${username}`);
  };
  return (
    <div className="login-page">
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
