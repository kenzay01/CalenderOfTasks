import "./css/ListOfDays.css";
import ColumnOfDays from "./ColumnOfDays";
export default function ListOfDays() {
  const colors = ["#72BF78", "#7E60BF", "#FF6600", "#EE66A6", "#024CAA"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const renderColumns = colors.map((color, index) => {
    return (
      <ColumnOfDays key={index} color={color} day={days[index]} id={index} />
    );
  });
  return <div className="list-days">{renderColumns}</div>;
}
