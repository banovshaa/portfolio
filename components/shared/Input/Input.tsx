"use client";

import styles from "./Input.module.scss";
import {
  ComponentType,
  CSSProperties,
  InputHTMLAttributes,
  RefObject,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType | null;
  inputRef?: RefObject<HTMLInputElement>;
  style?: CSSProperties;
}

const Input = ({ icon: Icon, style, inputRef, ...props }: InputProps) => {
  return (
    <div className={styles.input__box}>
      {Icon ? (
        <span className={styles.icon}>
          <Icon />
        </span>
      ) : null}
      <input
        style={{
          height: style?.height,
        }}
        className={Icon ? styles.with__icon : ""}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};

export default Input;
