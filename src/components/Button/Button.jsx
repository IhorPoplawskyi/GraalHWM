import s from "./Button.module.scss";

export const Button = ({ text, func }) => {
  return (
    <div className={s.button} onClick={() => func()}>
      <div>{text}</div>
    </div>
  );
};
