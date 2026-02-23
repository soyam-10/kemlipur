const MAP_BOUNDS = {
  minLat: 26.936762457231428,
  maxLat: 26.96124577052696,
  minLng: 85.9625244140625,
  maxLng: 85.97900390625,
};

const PLANE_SIZE = 10;

export function geoToPlane(lat: number, lng: number): [number, number, number] {
  const x =
    ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) *
      PLANE_SIZE -
    PLANE_SIZE / 2;

  const z =
    ((lat - MAP_BOUNDS.minLat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) *
      PLANE_SIZE -
    PLANE_SIZE / 2;

  return [x, 0, -z];
}

export { MAP_BOUNDS, PLANE_SIZE };