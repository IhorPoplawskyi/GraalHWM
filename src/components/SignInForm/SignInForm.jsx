import s from "./SignInForm.module.scss";

import { useForm  } from "react-hook-form";
import { signInThunk } from "../../redux/thunks";
import { useAppDispatch } from "../../redux/store";


export const SignInForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => dispatch(signInThunk(data));

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
