import { flex, calculator, form, result } from "./calculator.module.css";
import { Title } from "../Title";
import { Input } from "../DataEntry";
import { Button } from "../Button";
import { Result } from "../Result";
import { useState } from "react";

const Calculator = () => {
  const [bmi, setBMI] = useState({});

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const weightValue = (val) => {
    setWeight(val.target.value);
  };

  const heightValue = (val) => {
    setHeight(val.target.value);
  };

  const calcBMI = () => {
    const m = height.replace(/^0+/, "").replace(/^(\d{1,2})(\d{2})$/, "$1.$2");
    return weight / (m * m);
  };

  const classification = (bmi) => {
    if (bmi <= 18.5) return "thinness";
    else if (bmi < 25) return "normal";
    else if (bmi < 30) return "overweight";
    else if (bmi < 35) return "obesity";
    else if (bmi < 40) return "obesity II";
    else return "severe obesity";
  };

  const btnClick = () => {
    const value = calcBMI();
    const status = classification(value);
    setBMI({ value: value, status: status });
  };

  return (
    <div className={`${calculator} ${flex}`}>
      <div className={form}>
        <Title />
        <Input field="Height" event={heightValue} value={height} />
        <Input field="Weight" event={weightValue} value={weight} />
        <Button event={btnClick} />
      </div>
      {Boolean(bmi.value && bmi.status) && (
        <div className={result}>
          <Result {...bmi} />
        </div>
      )}
    </div>
  );
};

export { Calculator };
