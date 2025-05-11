import s from "./AdminGraalPanel.module.scss";

import { useState } from "react";
import { Button } from "../Button/Button";
import { setUserAttemptsThunk, setUserRoleThunk, setUserStatusThunk } from "../../redux/thunks";

export const AdminGraalPanel = ({ dispatch, token, checkedUsers }) => {
  
  const [values, setValues] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const addPrizes = () => {

    setPrizes(state => [...state, ...values.split(",")]);
  };


  return (
    <>
      <div className={s.panelWrapper}>
        <div className={s.operationBlock}>
          <input
            className={s.prizesInput}
            placeholder="enter prizes"
            type="text"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
          <Button text="Add prizes" func={addPrizes} />
        </div>
        <ul>
          {prizes.map(prize => <li>{prize}</li>)}
        </ul>
      </div>
    </>
  );
};
