import {
  form__label,
  form__field,
  form__input,
  measures,
} from "./dataEntry.module.css";

const Input = ({ field, event, value }) => {
  return (
    <>
      <label htmlFor={field} className={form__label}>
        Your {field}:
      </label>
      <div className={form__field}>
        <input
          type="number"
          value={
            field === "Height" && value
              ? value.replace(/^0+/, "").replace(/^(\d{1,2})(\d{2})$/, "$1.$2")
              : value
              ? value.replace(/^0+/, "")
              : ""
          }
          id={field}
          className={form__input}
          onInput={event}
        />
        <span className={measures}>
          {field.toLowerCase() === "height" ? "m" : "kg"}
        </span>
      </div>
    </>
  );
};

export { Input };
