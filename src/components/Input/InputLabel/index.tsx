import styles from "./InputLabel.module.scss";

const index: React.FC<React.HTMLProps<HTMLLabelElement>> = ({
  htmlFor,
  label,
  ...props
}): JSX.Element => {
  return (
    <label className={styles.root} htmlFor={htmlFor} {...props}>
      {label}
    </label>
  );
};

export default index;
