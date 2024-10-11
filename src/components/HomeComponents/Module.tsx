import "./css/Module.css";
import Input from "../Input";
export default function Module({
  onClose,
  time,
  onChange,
  value,
}: {
  onClose: () => void;
  time: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <>
      <div className="blur-background-module" onClick={onClose}></div>

      <div className="module">
        <div className="module-header">
          <div className="module-title">
            <p>What you wanna do today?</p>
          </div>
          <div className="module-close" onClick={onClose}>
            <div className="close-sign">X</div>
          </div>
        </div>
        <div className="module-body">
          <div className="module-text-inpt">
            <div className="module-text">
              {value ? `${value}.` : "Here your text"}
            </div>
            <Input
              text={value}
              placeholder="Write your task"
              type="text"
              onChangeText={onChange}
              autoFocus
              maxLength={50}
            />
          </div>
          <div className="btn-module">
            <button onClick={() => onClose()}>Done</button>
          </div>
        </div>
        <div className="time">
          <p>{time}</p>
        </div>
      </div>
    </>
  );
}
