import s from "./Input.module.scss";

export const Input = ({ label, register, required, errors, placeholder, errorText }) => (
  <>
    <label className={s.label}>{label}</label>
    <input
      className={s.input}
      {...register(label, required )}
      placeholder={placeholder}
    />
    {errors[label] && (
      <span className={s.error}>{errorText}</span>
    )}
  </>
);
