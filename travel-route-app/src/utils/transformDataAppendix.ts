/* eslint-disable @typescript-eslint/no-unused-vars */
import { SelectValueType } from "../components/Select/select.types";

type AppendixItem = [string, number, number];

type ObjectItem = {
  label: string;
  fullName?: string;
  latitude?: number;
  longitude?: number;
};

const transformArrayToSelectValue = (item: AppendixItem): ObjectItem => {
  return {
    label: item[0],
    latitude: item[1],
    longitude: item[2],
  };
};

export const transformAppendix = (
  data: (AppendixItem | SelectValueType)[]
): SelectValueType[] => {
  return data.map((item) => {
    if (Array.isArray(item)) {
      return transformArrayToSelectValue(item);
    } else if (typeof item === "string" || typeof item === "number") {
      return item;
    } else {
      return {
        label: item.label,
        fullName: item.fullName,
        latitude: item.latitude,
        longitude: item.longitude,
      };
    }
  });
};

const originalAppendix: (AppendixItem | SelectValueType)[] = [
  ["Paris", 48.856614, 2.352222],
  ["Marseille", 43.296482, 5.36978],
  ["Lyon", 45.764043, 4.835659],
  ["Toulouse", 43.604652, 1.444209],
  ["Nice", 43.710173, 7.261953],
  ["Nantes", 47.218371, -1.553621],
  ["Strasbourg", 48.573405, 7.752111],
  ["Montpellier", 43.610769, 3.876716],
  ["Bordeaux", 44.837789, -0.57918],
  ["Lille", 50.62925, 3.057256],
  ["Rennes", 48.117266, -1.677793],
  ["Reims", 49.258329, 4.031696],
  ["Le Havre", 49.49437, 0.107929],
  ["Saint-Étienne", 45.439695, 4.387178],
  ["Toulon", 43.124228, 5.928],
  ["Angers", 47.478419, -0.563166],
  ["Grenoble", 45.188529, 5.724524],
  ["Dijon", 47.322047, 5.04148],
  ["Nîmes", 43.836699, 4.360054],
  ["Aix-en-Provence", 43.529742, 5.447427],
];

export const transformedArray: SelectValueType[] =
  transformAppendix(originalAppendix);
