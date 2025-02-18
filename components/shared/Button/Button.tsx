import { ButtonHTMLAttributes, ComponentType } from "react";
import styles from "./Button.module.scss";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  height?: number;
  bgColor?: string;
  textColor?: string;
  icon?: ComponentType<{ color?: string }>;
}

const Button = ({
  name,
  height,
  bgColor,
  textColor,
  icon,
  ...props
}: Button) => {
  const Icon = icon;

  return (
    <button
      className={styles.button}
      style={{
        height: height,
        backgroundColor: bgColor,
      }}
      {...props}
    >
      <span
        style={{
          color: textColor,
        }}
      >
        {name}
      </span>
      {Icon && <Icon color={textColor} />}
    </button>
  );
};

export default Button;
