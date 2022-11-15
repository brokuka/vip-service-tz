import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Bag } from "../../assets/bag.svg";
import { ReactComponent as Baggage } from "../../assets/baggage.svg";
import CardBadge from "./CardBadge";

import styles from "./Card.module.scss";

interface CardExtensions {
  Badge: CardBadge;
}

const Card: React.FC & CardExtensions = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
        <span>S7 Airlines</span>
      </div>

      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.whereInfo}>
            <time className={styles.whereTime}>09:20</time>

            <div className={styles.where}>
              <span className={styles.city}>Москва</span>
              <time className={styles.cityTime}>19.05.2022</time>
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
            <time className={styles.whereTime}>09:20</time>

            <div className={styles.where}>
              <span className={styles.city}>Ростов на Дону</span>
              <time className={styles.cityTime}>19.05.2022</time>
            </div>
          </div>

          <div className={styles.icons}>
            <Bag />
            <Baggage />
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
      <div className={styles.price}>4 150 ₽</div>
    </div>
  );
};

export default Card;

Card.Badge = CardBadge;
