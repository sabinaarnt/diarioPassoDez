import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const opcoes = { locale: ptBR };

function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/** Data de hoje no formato salvo no banco (`yyyy-MM-dd`), calculada no momento da chamada. */
export function dataDeHoje() {
  return format(new Date(), 'yyyy-MM-dd');
}

/** Ex.: "Sábado, 10 de outubro" */
export function hojePorExtenso() {
  return capitalizar(format(new Date(), "EEEE, d 'de' MMMM", opcoes));
}

/** Ex.: "Sábado, 10 de outubro de 2026" */
export function formatarDataLonga(data: string) {
  return capitalizar(format(parseISO(data), "EEEE, d 'de' MMMM 'de' yyyy", opcoes));
}

/** Ex.: "Outubro de 2026" — usado para agrupar a lista por mês. */
export function formatarMes(data: string) {
  return capitalizar(format(parseISO(data), "MMMM 'de' yyyy", opcoes));
}

/** Partes usadas no bloco de data dos cartões da lista. */
export function partesDaData(data: string) {
  const d = parseISO(data);
  return {
    dia: format(d, 'dd'),
    mes: format(d, 'MMM', opcoes).replace('.', ''),
    diaDaSemana: capitalizar(format(d, 'EEEE', opcoes)),
  };
}
