import { ReactNode } from "react";
import styles from "./CardPlate.module.scss";

interface Props {
  children: ReactNode;
}

const CardPlate: React.FC<Props> = ({ children }): JSX.Element => {
  return <div className={styles.root}>{children}</div>;
};

export default CardPlate;
