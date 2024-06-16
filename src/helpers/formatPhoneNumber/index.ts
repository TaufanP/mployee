export default function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  const length = cleaned.length;
  if (length < 10 || length > 15) {
    return '';
  }

  let formatted = '';
  if (length <= 10) {
    formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else {
    formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }

  if (length > 11) {
    const extraDigits = cleaned.slice(11);
    formatted = formatted + '-' + extraDigits;
  }

  return formatted;
}
