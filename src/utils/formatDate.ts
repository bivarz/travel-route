export function formatDateToDDMMYYYY(dateString: Date) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adicione +1, pois os meses começam em 0 (janeiro)
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
