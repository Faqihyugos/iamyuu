export function formatDate(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return date.toLocaleDateString('id-ID', options);
}
