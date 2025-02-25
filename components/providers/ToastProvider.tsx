"use client";
import styles from "@/components/shared/Toast/Toast.module.scss";

type ToastContextValue = {
  open: (message: string) => void;
  close: (id: number) => void;
};

type ToastProviderProps = {
  children: React.ReactElement;
};
type ToastType = {
  id: number;
  message: string;
};

import React, { createContext, useContext, useMemo, useState } from "react";
import Toast from "../shared/Toast/Toast";

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function openToast(message: string) {
    const newToast = {
      id: Date.now(),
      message: message,
    };
    setToasts((prevState) => {
      return [...prevState, newToast];
    });
  }

  function closeToast(id: number) {
    setToasts((prevState) => {
      return prevState?.filter((toast) => toast.id !== id);
    });
  }

  const contextValue = useMemo(
    () => ({ open: openToast, close: closeToast }),
    []
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className={styles.toasts}>
        {toasts &&
          toasts.map((toast) => {
            return (
              <Toast
                key={toast.id}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            );
          })}
      </div>
    </ToastContext.Provider>
  );
}
