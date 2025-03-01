"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import Loader from "../shared/Loader/Loader";

type LoaderContextType = {
  loading: boolean;
  setLoading: (path: boolean) => void;
};
export const LoaderContext = createContext<LoaderContextType>({
  loading: false,
  setLoading: () => {},
});

export const useLoader = () => {
  const context = useContext(LoaderContext);
  return context;
};

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Loader />}
    </LoaderContext.Provider>
  );
};
