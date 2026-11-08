import type { PerguntaId } from '@/data/perguntas';

export type Respostas = Partial<Record<PerguntaId, string>>;

export type Entrada = {
  id: number;
  /** Dia do inventário, no formato `yyyy-MM-dd` (horário local). */
  data: string;
  respostas: Respostas;
  criadaEm: string;
  atualizadaEm: string;
};
