import { useState } from "react";
import { setUserAttemptsThunk } from "../../redux/thunks";
import s from "./AdminPanel.module.scss";
import { getCurrentUser } from "../../api";

export const AdminPanel = ({dispatch, token, checkedUsers}) => {
  const [attempts, setAttemps] = useState(0);

  return (
    <>
      <div className={s.panelWrapper}>
        <div
          className={s.button}
          onClick={() => {
            dispatch(
              setUserAttemptsThunk({
                token,
                id: checkedUsers[0]._id,
                attempts: attempts,
              })
            );
          }}
        >
          Set attempts
        </div>
        <input
          className={s.countInput}
          placeholder="number of attempts"
          type="number"
          value={attempts}
          onChange={(e) => setAttemps(Number(e.target.value))}
        />
        <div className={s.button}>Activate user</div>
        <div className={s.button}>Deactivate user</div>
        <button onClick={() => getCurrentUser(token)}>get user</button>
      </div>
    </>
  );
};
