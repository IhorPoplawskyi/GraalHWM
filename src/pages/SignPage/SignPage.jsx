import s from "./SignPage.module.scss";
import pain from "../../common/painwaiting.gif";

import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { clearError, changeForm, clearResult, clearStatus } from "../../redux/userSlice";

export const SignPage = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.user.form);
  const error = useAppSelector((state) => state.user.error);
  const result = useAppSelector((state) => state.user.result);
  const status = useAppSelector((state) => state.user.status);
  const logged = useAppSelector((state) => state.user.user.token);
  console.log(form)
  
  useEffect(() => {
    dispatch(clearError());
    dispatch(clearResult());
    dispatch(clearStatus())
  }, []);

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
                    onClick={() => {
                      dispatch(changeForm("signin"));
                      dispatch(clearError());
                    }}
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
                    onClick={() => {
                      dispatch(changeForm("signup"));
                      dispatch(clearError());
                    }}
                  >
                    Sign up
                  </div>
                </div>
              )}
            </div>
            {form === "signin" && (
              <SignInForm
                error={error}
                dispatch={dispatch}
                clearError={clearError}
              />
            )}
            {form === "signup" && (
              <SignUpForm
                error={error}
                result={result}
                dispatch={dispatch}
                clearError={clearError}
                clearResult={clearResult}
                changeForm={changeForm}
              />
            )}
          </div>
          <div className={s.signPageRight}>
            <img src={pain} />
          </div>
        </div>
      </>
    );
  return <Navigate to={"/home"} />;
};
