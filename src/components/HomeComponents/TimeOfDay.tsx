import "./css/TimeOfDay.css";
import { useState, useEffect } from "react";
import Module from "./Module";
export default function TimeOfDay({
  hour,
  color,
  id,
}: {
  hour: string;
  color: string;
  id: string;
}) {
  const [module, setModule] = useState(false);
  const [task, setTask] = useState("");
  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    setModule(!module);
  };
  const closeModule = () => {
    setModule(false);
  };
  useEffect(() => {
    if (module) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [module]);

  return (
    <>
      <div
        className="hour-container"
        style={{ background: color }}
        onClick={handleClick}
      >
        <div>
          {task !== "" ? (
            <p className="to-do">What needs to be done:</p>
          ) : (
            <p className="nothing-todo">Nothing to do</p>
          )}
        </div>
        <div className="task">
          <p>{task}</p>
        </div>
        <div className={`hour ${task !== "" ? "active" : ""}`}>{hour}</div>
      </div>
      {module && (
        <Module
          onClose={closeModule}
          time={hour}
          onChange={handleTask}
          value={task}
        />
      )}
    </>
  );
}
