import styles from "./CardBadge.module.scss";

interface Props {
  label: string;
}

const CardBadge: React.FC<Props> = ({ label }): JSX.Element => {
  return <div className={styles.root}>{label}</div>;
};

export default CardBadge;
