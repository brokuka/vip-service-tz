import styles from "./ButtonPrimary.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonPrimary: React.FC<Props> = ({ label, ...props }): JSX.Element => {
  return (
    <button className={styles.root} {...props}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
