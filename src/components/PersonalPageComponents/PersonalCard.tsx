import "./css/PersonalCard.css";
import { CiEdit } from "react-icons/ci";
import type { User } from "../../types/User";

export default function PersonalCard({ userData }: { userData: User | null }) {
  const img = userData?.imgUrl;
  return (
    <div className="personal-container">
      <div className="photo-name">
        <div className="photo">
          {!!img ? (
            <img
              src="https://img.freepik.com/free-photo/view-of-3d-cool-modern-bird_23-2150946453.jpg"
              alt="photo"
            />
          ) : (
            <div>Photo?</div>
          )}
        </div>
        <div className="username-redact">
          <div className="profile-username">
            {userData?.username || "UserName"}
          </div>
          <div className="btn-redact">
            {" "}
            <CiEdit />
          </div>
        </div>
      </div>
      <div className="short-info">
        <div className="info">
          <h1 className="info-title">Info:</h1>
          <div className="info-text">
            <h2 className="full-name">Name: {userData?.fullname}</h2>
            <h3 className="age">Age: {userData?.age}</h3>
            <h3 className="age">Occupation: {userData?.occupation}</h3>
          </div>
        </div>
        <div className="contacts">
          <h1 className="contacts-title">Contacts:</h1>
          <div className="contacts-text">
            <h3 className="phone">
              Phone: {userData?.phone ? `+${userData.phone}` : ""}
            </h3>
            <h3 className="email">Email: {userData?.email}</h3>
            <h3 className="telegram">Telegram: {userData?.telegram}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
