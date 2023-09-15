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
