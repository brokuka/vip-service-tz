import { ReactNode } from "react";
import CardBadge from "./CardBadge";
import CardButtons from "./CardButtons";
import CardInfo from "./CardInfo";

import styles from "./Card.module.scss";
import CardPrice from "./CardPrice";
import CardPlate from "./CardPlate";
import CardLogo from "./CardLogo";

interface CardExtensions {
  Plate: typeof CardPlate;
  Badge: typeof CardBadge;
  Buttons: typeof CardButtons;
  Info: typeof CardInfo;
  Price: typeof CardPrice;
  Logo: typeof CardLogo;
}

interface Props {
  children?: ReactNode;
}

const Card: React.FC<Props> & CardExtensions = ({ children }): JSX.Element => {
  return <div className={styles.root}>{children}</div>;
};

export default Card;

Card.Plate = CardPlate;
Card.Badge = CardBadge;
Card.Buttons = CardButtons;
Card.Info = CardInfo;
Card.Price = CardPrice;
Card.Logo = CardLogo;
