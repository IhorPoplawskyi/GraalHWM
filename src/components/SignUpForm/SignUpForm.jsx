import s from "./SignUpForm.module.scss";

import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { signUpThunk } from "../../redux/thunks";

export const SignUpForm = ({clearError, dispatch, error, result, clearResult,changeForm}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => dispatch(signUpThunk(data));

  return (
    <>
      <form
        className={s.formWrapper}
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          dispatch(clearError());
          dispatch(clearResult());
        }}
      >
        <div className={s.text}>Create your new account</div>
        <Input
          label="Username"
          register={register}
          required={{ required: true, maxLength: 50, min: 2 }}
          errors={errors}
          placeholder="xvxPAINxvx"
          errorText="Enter your own username from the game"
        />
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
        <div className={s.error}>{error}</div>
        {result && (
          <div>
            <div className={s.result}>
              {result}, you can now continue to sign in to your new account
            </div>
            <span onClick={() => dispatch(changeForm('signin'))} className={s.signInBtnSmall}>
              continue
            </span>
          </div>
        )}
        <button className={s.submitBtn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};
