import classNames from "classnames";
import React from "react";
import { ReactComponent as Calendar } from "../../../assets/calendar.svg";

import styles from "./InputText.module.scss";

type InputProps = {
  icon?: boolean;
} & React.HTMLProps<HTMLInputElement>;

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon = false, ...props }, ref) => {
    // return <input className={styles.root} ref={ref} {...props} />;
    return (
      <div className={styles.wrapper}>
        {icon && (
          <Calendar
            className={classNames(styles.icon, {
              [styles.fill]: props.value,
            })}
          />
        )}
        <input
          className={classNames(styles.root, {
            [styles.withIcon]: icon,
          })}
          type="text"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputText;
