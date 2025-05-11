import s from "./AdminUsersPanel.module.scss";

import { useState } from "react";
import { Button } from "../Button/Button";
import { setUserAttemptsThunk, setUserRoleThunk, setUserStatusThunk } from "../../redux/thunks";

export const AdminUsersPanel = ({ dispatch, token, checkedUsers, role }) => {
  const [attempts, setAttemps] = useState(0);
  const setUserRoleFunc = (role) => dispatch(setUserRoleThunk({token, id:  checkedUsers[0]?._id, role}));
  const setUserStatusFunc = (status) => dispatch(setUserStatusThunk({token, id:  checkedUsers[0]?._id, status}));
  const setUserAttempsFunc = () => dispatch(setUserAttemptsThunk({token, id:  checkedUsers[0]?._id, attempts: attempts}));

  return (
    <>
      <div className={s.panelWrapper}>
        <div className={s.attemptsBlock}>
          <div className={s.buttons}>
            <button onClick={() => setAttemps((state) => state + 1)}>+</button>
            <button onClick={() => setAttemps((state) => state - 1)}>-</button>
          </div>
          <input
            className={s.countInput}
            placeholder="attempts"
            type="number"
            value={attempts}
            onChange={(e) => setAttemps(Number(e.target.value))}
          />
        </div>
        <Button text="Set attempts" func={setUserAttempsFunc} />
        <Button text="Activate user" func={() => setUserStatusFunc(true)} />
        <Button text="Deactivate user" func={() => setUserStatusFunc(false)} />
        {role === "SUPER_ADMIN" && <Button text="Make admin" func={() => setUserRoleFunc("ADMIN")} />}
        {role === "SUPER_ADMIN" && <Button text="Make user" func={() => setUserRoleFunc("USER")} />}
      </div>
    </>
  );
};
