import { useState } from "react";

export function useAdditionalStops(initialStops: AdditionalStop[]) {
  const [additionalStops, setAdditionalStops] =
    useState<AdditionalStop[]>(initialStops);

  const addStop = () => {
    if (additionalStops.length === 5) {
      return;
    }
    const newId =
      additionalStops.length > 0
        ? additionalStops[additionalStops.length - 1].id + 1
        : 0;
    setAdditionalStops([...additionalStops, { id: newId, value: "" }]);
  };

  const removeStop = (index: number) => {
    const newStops = additionalStops.filter((stop) => stop.id !== index);
    setAdditionalStops(newStops);
  };

  const updateStop = (index: number, value: string) => {
    const newStops = additionalStops.map((stop) =>
      stop.id === index ? { ...stop, value } : stop
    );
    setAdditionalStops(newStops);
  };

  return { additionalStops, addStop, removeStop, updateStop };
}

interface AdditionalStop {
  id: number;
  value: string;
}

export default useAdditionalStops;
