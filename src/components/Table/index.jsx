import { table, head, row, active, item } from "./table.module.css";
const Table = ({ status }) => {
  return (
    <table className={table}>
      <thead>
        <tr className={row}>
          <th className={head}>IMC</th>
          <th className={head}>Classification</th>
          <th className={head}>Obesity (degree)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={`${row} ${
            status.toLowerCase() === "thinness" ? active : ""
          }`}
        >
          <td className={item}>Less than 18,5</td>
          <td className={item}>Thinness</td>
          <td className={item}>0</td>
        </tr>
        <tr
          className={`${row} ${
            status.toLowerCase() === "normal" ? active : ""
          }`}
        >
          <td className={item}>Between 18,5 and 24,9</td>
          <td className={item}>Normal</td>
          <td className={item}>0</td>
        </tr>
        <tr
          className={`${row} ${
            status.toLowerCase() === "overweight" ? active : ""
          }`}
        >
          <td className={item}>Between 25,0 and 29,9</td>
          <td className={item}>Overweight</td>
          <td className={item}>0</td>
        </tr>
        <tr
          className={`${row} ${
            status.toLowerCase() === "obesity" ? active : ""
          }`}
        >
          <td className={item}>Between 30,0 and 34,9</td>
          <td className={item}>Obesity</td>
          <td className={item}>I</td>
        </tr>
        <tr
          className={`${row} ${
            status.toLowerCase() === "obesity ii" ? active : ""
          }`}
        >
          <td className={item}>Between 35,0 and 39,9</td>
          <td className={item}>Obesity</td>
          <td className={item}>II</td>
        </tr>
        <tr
          className={`${row} ${
            status.toLowerCase() === "severe obesity" ? active : ""
          }`}
        >
          <td className={item}>Greater than 40.0</td>
          <td className={item}>Severe Obesity</td>
          <td className={item}>III</td>
        </tr>
      </tbody>
    </table>
  );
};

export { Table };
