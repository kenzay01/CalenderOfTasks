import TimeOfDay from "./TimeOfDay";
import "./css/ColumnOfDays.css";
export default function ColumnOfDays({
  color,
  day,
  id,
}: {
  color: string;
  day: string;
  id: number;
}) {
  const hours = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  const renderTimeOfDay = hours.map((hour, index) => {
    return (
      <TimeOfDay key={index} hour={hour} color={color} id={`${id}${index}`} />
    );
  });
  return (
    <div className="column-container">
      <div className="day">{day}</div>
      <div className="column-of-days">{renderTimeOfDay}</div>
    </div>
  );
}
