"use client";

import { useEffect, useRef } from "react";
import styles from "./Toast.module.scss";
import { CloseIcon } from "@/assets/images/shared.vector";
export type ToastProps = {
  message: string;
  close: () => void;
};
function useTimeout(callback: () => void) {
  const savedCallbacks = useRef(callback);

  useEffect(() => {
    savedCallbacks.current = callback;
  }, [callback]);

  useEffect(() => {
    const functionId = setTimeout(() => {
      savedCallbacks.current();
    }, 3500);

    return () => clearTimeout(functionId);
  }, []);
}

export default function Toast({ message, close }: ToastProps) {
  useTimeout(() => {
    close();
  });
  return (
    <div className={styles.toast}>
      <span className={styles.message}>{message}</span>
      <button type={"button"} onClick={close} className={styles.close__btn}>
        <CloseIcon />
      </button>
      <div className={styles.progress}></div>
    </div>
  );
}
