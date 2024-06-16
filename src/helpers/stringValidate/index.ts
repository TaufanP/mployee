export default function stringValidate(text: string) {
  if (!text) return '';
  else return text.trim().replace(/\s+/g, ' ');
}
