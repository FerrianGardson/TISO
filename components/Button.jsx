import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "solid", // solid | outline
  size = "md",        // sm | md | lg
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.btn,
        styles[`btn__${variant}`],
        styles[`btn__${size}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
