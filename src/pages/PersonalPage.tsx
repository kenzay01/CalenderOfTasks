import PersonalCard from "../components/PersonalPageComponents/PersonalCard";
import "./css/PersonalPage.css";
import type { User } from "../types/User";
export default function PersonalPage({ userData }: { userData: User | null }) {
  return (
    <div className="personal-page">
      <PersonalCard userData={userData} />
    </div>
  );
}
