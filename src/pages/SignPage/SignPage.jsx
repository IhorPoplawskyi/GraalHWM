import s from "./SignPage.module.scss";
import pain from "../../common/painwaiting.gif";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export const SignPage = () => {
  const [form, setForm] = useState("signin");
  const logged = useAppSelector((state) => state.tempSlice.logged);

  if (!logged)
    return (
      <>
        <div className={s.signPageWrapper}>
          <div className={s.signPageLeft}>
            {form === "signin" && <SignInForm />}
            {form === "signup" && <SignUpForm />}
          </div>
          <div className={s.signPageRight}>
            <img src={pain} />
            <div className={s.signButtonsBlock}>
              {form === "signup" && (
                <div className={s.signButton} onClick={() => setForm("signin")}>
                  Sign in
                </div>
              )}
              {form === "signin" && (
                <div className={s.signButton} onClick={() => setForm("signup")}>
                  Sign up
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  return <Navigate to={"/"} />;
};
