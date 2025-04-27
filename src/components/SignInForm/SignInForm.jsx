import s from "./SignInForm.module.scss";

import { useForm as useFormImport } from "react-hook-form";

export const SignInForm = () => {
  const useForm = useFormImport;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.text}>Log in to your account</div>

      <label className={s.label}>Email</label>
      <input
        className={s.input}
        placeholder="abcexample@.gmail.com"
        {...register("email", { required: true })}
      />
      {errors.email && <span className={s.error}>Email cannot be blank</span>}

      <label className={s.label}>Password</label>
      <input
        className={s.input}
        placeholder="qwerty123"
        {...register("password", { required: true })}
      />
      {errors.password && <span className={s.error}>Password is required</span>}
      <button className={s.submitBtn} type="submit">
        Sign in
      </button>
    </form>
  );
};
