import Card from "..";
import { ITime } from "../../../store/slices/infoSlice";
import { IForm } from "../../../store/slices/searchSlice";
import { ReactComponent as Bag } from "../../../assets/bag.svg";
import { ReactComponent as Baggage } from "../../../assets/baggage.svg";

import styles from "./CardInfo.module.scss";

const CardInfo: React.FC<IForm & ITime> = ({
  fromTime,
  to,
  toDate,
  where,
  whereDate,
  toTime,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.infoHeader}>
        <div className={styles.whereInfo}>
          <time className={styles.whereTime}>{fromTime}</time>

          <div className={styles.where}>
            <span className={styles.city}>{where}</span>
            <time className={styles.cityTime}>{whereDate}</time>
          </div>
        </div>

        <div className={styles.whereToLine}>
          <div className={styles.name}>
            <span>SVO</span>
            <span>ROV</span>
          </div>

          <div className={styles.lineGroup}>
            <span className={styles.line} />
          </div>

          <span className={styles.totalTime}>В пути 1 ч 55 мин</span>
        </div>

        <div className={styles.whereInfo}>
          <time className={styles.whereTime}>{toTime}</time>

          <div className={styles.where}>
            <span className={styles.city}>{to}</span>
            <time className={styles.cityTime}>
              {toDate ? toDate : whereDate}
            </time>
          </div>
        </div>

        <div className={styles.icons}>
          <Bag />
          <Baggage />
        </div>
      </div>
      {!toDate && (
        <div className={styles.footer}>
          <Card.Buttons />
        </div>
      )}
    </div>
  );
};

export default CardInfo;
