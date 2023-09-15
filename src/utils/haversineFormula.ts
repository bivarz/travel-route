function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number | undefined {
  const earthRadiusKm = 6371;

  const latitudeDifference = degreesToRadians(lat2 - lat1);
  const longitudeDifference = degreesToRadians(lon2 - lon1);

  const halfChordLengthSquared =
    Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(longitudeDifference / 2) *
      Math.sin(longitudeDifference / 2);

  const angularDistance =
    2 *
    Math.atan2(
      Math.sqrt(halfChordLengthSquared),
      Math.sqrt(1 - halfChordLengthSquared)
    );

  const distance = earthRadiusKm * angularDistance;

  return distance;
}
