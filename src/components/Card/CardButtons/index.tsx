import React from "react";
import cn from "classnames";
import styles from "./CardButtons.module.scss";
import { useAppDispatch } from "../../../hooks";
import { setTimes } from "../../../store/slices/infoSlice";

const staticInputs = [
  {
    value: "first",
    fromTime: "09:20",
    toTime: "11:05",
  },
  {
    value: "second",
    fromTime: "10:20",
    toTime: "12:05",
  },
  {
    value: "third",
    fromTime: "11:20",
    toTime: "13:05",
  },
];

const CardButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isActive, setActive] = React.useState("first");
  const [isTime, setTime] = React.useState({
    fromTime: "09:20",
    toTime: "11:05",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fromTime: string,
    toTime: string
  ) => {
    setActive(e.target.value);
    setTime({ fromTime, toTime });
  };

  React.useEffect(() => {
    dispatch(setTimes(isTime));
  }, [isTime]);

  return (
    <>
      {staticInputs.map(({ fromTime, toTime, value }, id) => (
        <label
          className={cn(styles.btn, {
            [styles.checked]: isActive === value,
          })}
          key={id}
        >
          <input
            className={styles.input}
            value={value}
            type="radio"
            name="button"
            onChange={(e) => onChange(e, fromTime, toTime)}
            checked={isActive === value}
            data-from={fromTime}
            data-to={toTime}
          />
          <span className={styles.from}>{fromTime}</span>
          <span className={styles.to}>{toTime}</span>
        </label>
      ))}
    </>
  );
};

export default CardButton;
