import { btn, btn__icon } from "./button.module.css";
import iconButton from "../../assets/img/icons/icon-button.svg";

const Button = ({ event }) => {
  return (
    <>
      <button className={btn} onClick={event}>
        <img className={btn__icon} src={iconButton} alt="icon calculate" />
        Calculate
      </button>
    </>
  );
};

export { Button };
