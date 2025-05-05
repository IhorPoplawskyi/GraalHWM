import s from "./Button.module.scss";

export const Button = ({ text, func, mystyle }) => {
  return (
    <div className={s.button} style={mystyle} onClick={() => func()}>
      <div>{text}</div>
    </div>
  );
};
