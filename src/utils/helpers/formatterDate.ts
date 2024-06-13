export function formatterDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const formatadorData: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    "pt-BR",
    options
  );
  const dataFormatada: string = formatadorData.format(date);

  return dataFormatada;
}
