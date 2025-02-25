import { ButtonHTMLAttributes, ComponentType, CSSProperties } from "react";
import styles from "./Button.module.scss";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  style?: CSSProperties;
  icon?: ComponentType<{ color?: string; size?: number }>;
}

const Button = ({ name, icon, style, ...props }: Button) => {
  const Icon = icon;

  return (
    <button
      className={styles.button}
      style={{
        ...style,
        height: style?.height,
        backgroundColor: style?.backgroundColor,
      }}
      {...props}
    >
      <span
        style={{
          color: style?.color,
        }}
      >
        {name}
      </span>
      {Icon && <Icon color={style?.color} />}
    </button>
  );
};

export default Button;
