import s from "./SignPage.module.scss";
import pain from "../../common/painwaiting.gif";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { Preloader } from "../../components/Preloader/Preloader";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export const SignPage = () => {
  const [form, setForm] = useState("signin");
  const status = useAppSelector((state) => state.user.status);
  const logged = useAppSelector((state) => state.user.user.token);

  if (!logged)
    return (
      <>
        <div className={s.signPageWrapper}>
          {status === "pending" && <Preloader />}
          <div className={s.signPageLeft}>
            <div className={s.signButtonsBlock}>
              {form === "signup" && (
                <div>
                  <div className={s.text}>Already have account?</div>
                  <div
                    className={s.signButton}
                    onClick={() => setForm("signin")}
                  >
                    Sign in
                  </div>
                </div>
              )}
              {form === "signin" && (
                <div>
                  <div className={s.text}>Don't have account?</div>
                  <div
                    className={s.signButton}
                    onClick={() => setForm("signup")}
                  >
                    Sign up
                  </div>
                </div>
              )}
            </div>
            {form === "signin" && <SignInForm />}
            {form === "signup" && <SignUpForm />}
          </div>
          <div className={s.signPageRight}>
            <img src={pain} />
          </div>
        </div>
      </>
    );
  return <Navigate to={"/"} />;
};
