import "./css/Home.css";
import ButtonLink from "../components/ButtonLink";
export default function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>You're Welcome!</h1>
        <div className="description">
          <p>This site is made for studying React + TS by me.</p>
          <ButtonLink toLink="/schedule" style={{ marginTop: "30px" }}>
            To Shedule
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
