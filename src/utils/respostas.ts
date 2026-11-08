import { PERGUNTAS } from '@/data/perguntas';
import type { Respostas } from '@/types/entrada';

/** Respostas não vazias, na ordem das perguntas. */
export function respostasPreenchidas(respostas: Respostas) {
  return PERGUNTAS.flatMap((pergunta) => {
    const resposta = respostas[pergunta.id]?.trim();
    return resposta ? [{ pergunta, resposta }] : [];
  });
}

/** Remove espaços sobrando e descarta respostas vazias antes de salvar. */
export function limparRespostas(respostas: Respostas): Respostas {
  return Object.fromEntries(
    respostasPreenchidas(respostas).map(({ pergunta, resposta }) => [pergunta.id, resposta])
  );
}
