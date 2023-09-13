import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function useAdditionalStops() {
  const { listOfFields, setListOfFields } = useContext(GlobalContext);
  const addStop = () => {
    if (listOfFields?.length === 5) {
      return;
    }
    const newId =
      listOfFields.length >= 2
        ? listOfFields[listOfFields?.length - 1].id + 1
        : 0;
    setListOfFields([...listOfFields, { id: newId, value: "" }]);
  };

  const removeStop = (index: number) => {
    const newStops = listOfFields.filter((stop) => stop.id !== index);
    setListOfFields(newStops);
  };

  const updateStop = (index: number, value: string) => {
    const newStops = listOfFields.map((stop) =>
      stop.id === index ? { ...stop, value } : stop
    );
    setListOfFields(newStops);
  };

  const updateSelectedStop = (
    index: number,
    city: string,
    la: number,
    lo: number
  ) => {
    const newStops = listOfFields.map((stop) =>
      stop.id === index ? { ...stop, value: city, la: la, lo: lo } : stop
    );
    setListOfFields(newStops);
  };

  return { addStop, removeStop, updateStop, updateSelectedStop };
}

export default useAdditionalStops;
