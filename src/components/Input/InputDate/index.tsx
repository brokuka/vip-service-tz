import classNames from "classnames";
import React from "react";
import { ReactComponent as Calendar } from "../../../assets/calendar.svg";
import { mergeRefs } from "react-merge-refs";

import styles from "./InputDate.module.scss";

type InputProps = React.HTMLProps<HTMLInputElement>;

const InputDate = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    console.log(props);
    const inputRef = React.useRef<HTMLInputElement | null>();

    return (
      <div className={styles.wrapper}>
        <Calendar
          className={classNames(styles.icon, {
            [styles.fill]: props.value,
          })}
        />
        <input
          className={styles.root}
          type="date"
          ref={mergeRefs([ref, inputRef])}
          placeholder="дд.мм.гг"
          {...props}
        />
      </div>
    );
  }
);

export default InputDate;
