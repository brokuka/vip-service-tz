import { ReactNode } from "react";
import InputText from "./InputText";
import InputLabel from "./InputLabel";

import styles from "./Input.module.scss";

interface InputExtensions {
  Label: typeof InputLabel;
  Text: typeof InputText;
}

interface Props {
  children: ReactNode;
}

const Input: React.FC<Props> & InputExtensions = ({
  children,
}): JSX.Element => {
  return <div className={styles.root}>{children}</div>;
};

export default Input;

Input.Label = InputLabel;
Input.Text = InputText;
