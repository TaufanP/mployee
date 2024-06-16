export default function isTokenExpired(expirationDate: number) {
  const currentTime = new Date().getTime();
  return currentTime > expirationDate;
}
