import good from "../../assets/img/icons/icon-result-good.svg";
import urgency from "../../assets/img/icons/icon-result-urgency.svg";
import alert from "../../assets/img/icons/icon-result-alert.svg";

import {
  result__icon,
  result__good,
  result__alert,
  result__urgency,
  result__text,
} from "./result.module.css";
import { Table } from "../Table";

const Result = ({ value, status }) => {
  const statusInGravity =
    status === "normal"
      ? "good"
      : status === "thinness" || status === "overweight"
      ? "alert"
      : "urgency";

  const gravityClass =
    {
      good: result__good,
      alert: result__alert,
      urgency: result__urgency,
    }[statusInGravity] || "";

  return (
    <>
      <div className={`${gravityClass}`}>
        <img
          className={result__icon}
          src={
            statusInGravity === "good"
              ? good
              : statusInGravity === "alert"
              ? alert
              : urgency
          }
          alt="Icon of result"
        />
      </div>
      <div>
        <span className={result__text}>{value.toFixed(2)} / </span>
        <span className={result__text}>{status.toUpperCase()}</span>
      </div>
      <Table status={status} />
    </>
  );
};

export { Result };
