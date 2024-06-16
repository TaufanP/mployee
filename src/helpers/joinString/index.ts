export default function joinStrings(
  str1?: string,
  str2?: string,
  type: 'address' | 'name' = 'address',
) {
  if (str1 && str2) {
    return type === 'name' ? `${str1} ${str2}` : `${str1}, ${str2}`;
  } else if (str1) {
    return str1;
  } else if (str2) {
    return str2;
  } else {
    return '';
  }
}
