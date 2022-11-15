import { ReactComponent as Logo } from "../../../assets/logo.svg";

import styles from "./CardLogo.module.scss";

const CardLogo: React.FC = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Logo />
      <span>S7 Airlines</span>
    </div>
  );
};

export default CardLogo;
