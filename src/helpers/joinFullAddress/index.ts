export default function joinFullAddress(
  county?: string,
  city?: string,
  state?: string,
  zip?: string,
): string {
  const addressParts: string[] = [];

  if (county) {
    addressParts.push(county);
  }
  if (city) {
    addressParts.push(city);
  }

  const stateZip = [state, zip].filter(Boolean).join(' ');
  if (stateZip) {
    addressParts.push(stateZip);
  }

  return addressParts.join(', ');
}
