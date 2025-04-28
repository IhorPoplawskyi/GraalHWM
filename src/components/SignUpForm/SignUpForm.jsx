import s from "./SignUpForm.module.scss";

import { useForm } from "react-hook-form";
import { signUp } from "../../redux/thunks"
 
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => signUp(data);

  return (
    <>
      <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.text}>Create your new account</div>
        <label className={s.label}>Username</label>
        <input
          className={s.input}
          {...register("username", { required: true, maxLength: 50, min: 2})}
          style={errors.username ? { border: "1px solid red" } : {}}
          placeholder="xvxPAINxvx"
        />
        {errors.username && (
          <span className={s.error}>Enter your own username from the game</span>
        )}

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
        {errors.password && (
          <span className={s.error}>Password is required</span>
        )}
        <button className={s.submitBtn} type="submit">Sign up</button>
      </form>
    </>
  );
};
