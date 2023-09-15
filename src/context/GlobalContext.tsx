import React, { createContext, ReactNode, useState } from "react";
import { AdditionalStop } from "../components/hooks/hooks.types";

interface GlobalontextData {
  listOfFields: AdditionalStop[];
  setListOfFields: (InputValue: AdditionalStop[]) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}
export const GlobalContext = createContext<GlobalontextData>(
  {} as GlobalontextData
);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [listOfFields, setListOfFields] = useState<AdditionalStop[]>([
    { id: 1, value: "", la: "", lo: "" },
    { id: 2, value: "", la: "", lo: "" },
  ]);
  return (
    <GlobalContext.Provider
      value={{
        listOfFields,
        setListOfFields,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
