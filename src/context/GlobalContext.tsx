import React, { createContext, ReactNode, useState } from "react";
import { AdditionalStop } from "../components/hooks/hooks.types";
import { arrayOfDistances } from "../utils/distanceBetweenPoints";

interface GlobalontextData {
  listOfFields: AdditionalStop[];
  setListOfFields: (InputValue: AdditionalStop[]) => void;
  listOfDistances: number[];
  totalDistance: number;
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

  const listOfDistances = arrayOfDistances(listOfFields);
  const totalDistance = arrayOfDistances(listOfFields).reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  return (
    <GlobalContext.Provider
      value={{
        listOfFields,
        setListOfFields,
        listOfDistances,
        totalDistance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
