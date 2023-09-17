import React, { createContext, ReactNode, useState } from "react";
import { AdditionalStop } from "../components/hooks/hooks.types";
import { arrayOfDistances } from "../utils/distanceBetweenPoints";

interface GlobalontextData {
  listOfFields: AdditionalStop[];
  setListOfFields: (InputValue: AdditionalStop[]) => void;
  listOfDistances: number[];
  totalDistance: number;
  passengers: number;
  setPassengers: (passengers: number) => void;
  dateValue: string;
  setDateValue: (date: string) => void;
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
  const [passengers, setPassengers] = useState(0);
  const [dateValue, setDateValue] = useState("");

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
        setPassengers,
        passengers,
        dateValue,
        setDateValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
