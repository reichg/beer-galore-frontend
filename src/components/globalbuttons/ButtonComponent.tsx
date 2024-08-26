import styles from "./buttoncomponent.module.css";

interface ButtonComponentProps {
  type?: "button" | "submit" | "reset",
  text: string,
  onClickFunction?: () => void
}

function ButtonComponent({ type, text, onClickFunction }: ButtonComponentProps) {
  return (
    <button type={type || "button"} className={styles.button} onClick={onClickFunction}>
      {text}
    </button>
  );
}

export default ButtonComponent;
