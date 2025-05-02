import s from "./SignInForm.module.scss";

import { Input } from "../Input/Input";
import { useForm  } from "react-hook-form";
import { signInThunk } from "../../redux/thunks";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => dispatch(signInThunk(data));

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.text}>Log in to your account</div>

      <Input
        label="Email"
        register={register}
        required={{ required: true }}
        errors={errors}
        placeholder="abcexample@.gmail.com"
        errorText="Email cannot be blank"
      />

      <Input
        label="Password"
        register={register}
        required={{ required: true }}
        errors={errors}
        placeholder="qwerty123"
        errorText="Password is required"
      />

      <button className={s.submitBtn} type="submit">
        Sign in
      </button>
      <div>{error}</div>
    </form>
  );
};
