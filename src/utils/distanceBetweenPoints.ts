import { AdditionalStop } from "../components/hooks/hooks.types";
import { haversineDistance } from "./haversineFormula";

export const distanceBetweenPoints = (
  pointA: AdditionalStop | undefined,
  pointB: AdditionalStop | undefined
): number | undefined => {
  if (
    pointA?.la === undefined ||
    pointA?.lo === undefined ||
    pointB?.la === undefined ||
    pointB?.lo === undefined
  ) {
    return undefined;
  }

  const distance = haversineDistance(
    parseFloat(pointA?.la),
    parseFloat(pointA?.lo),
    parseFloat(pointB?.la),
    parseFloat(pointB?.lo)
  );

  return distance;
};

export const arrayOfDistances = (array: AdditionalStop[]) => {
  const formattedPoints: AdditionalStop[] = [];
  const distances: number[] = [];

  for (let i = 0; i < array.length; i++) {
    const segment = array[i];
    formattedPoints.push({
      ...segment,
      la: segment.la || "",
      lo: segment.lo || "",
    });
  }

  formattedPoints.map((_, index: number) => {
    if (index > 0) {
      const d = distanceBetweenPoints(
        formattedPoints[index - 1],
        formattedPoints[index]
      );
      if (d !== undefined) {
        distances?.push(parseFloat(d?.toFixed(2)));
      }
    }
  });

  return distances;
};
