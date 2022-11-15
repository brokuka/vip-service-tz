import { useAppSelector } from "../../../hooks";
import { selectData } from "../../../store/slices/searchSlice";

import styles from "./CardPrice.module.scss";

const CardPrice: React.FC = (): JSX.Element => {
  const { toDate } = useAppSelector(selectData);

  return <div className={styles.root}>{toDate ? "9 300 ₽" : "4 150 ₽"}</div>;
};

export default CardPrice;
