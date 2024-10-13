import ListOfDays from "../components/HomeComponents/ListOfDays";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
export default function Schedule({ userKey }: { userKey: boolean }) {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!userKey) {
      navigate("/login", { state: { message: "You need to login first." } });
    }
  }, [userKey, navigate]);
  return (
    <div>
      <ListOfDays />
    </div>
  );
}
