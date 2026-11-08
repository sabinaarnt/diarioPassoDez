import type { SQLiteDatabase } from 'expo-sqlite';

import type { Entrada, Respostas } from '@/types/entrada';

/** Única camada que conhece o SQL das entradas. As telas usam os hooks de `use-entradas`. */

type LinhaEntrada = {
  id: number;
  data: string;
  respostas: string;
  criada_em: string;
  atualizada_em: string;
};

function paraEntrada(linha: LinhaEntrada): Entrada {
  let respostas: Respostas = {};
  try {
    respostas = JSON.parse(linha.respostas);
  } catch {
    // Mantém a entrada visível mesmo se o JSON estiver corrompido.
  }
  return {
    id: linha.id,
    data: linha.data,
    respostas,
    criadaEm: linha.criada_em,
    atualizadaEm: linha.atualizada_em,
  };
}

export async function listarEntradas(db: SQLiteDatabase): Promise<Entrada[]> {
  const linhas = await db.getAllAsync<LinhaEntrada>(
    'SELECT * FROM entradas ORDER BY data DESC, id DESC'
  );
  return linhas.map(paraEntrada);
}

export async function buscarEntrada(db: SQLiteDatabase, id: number): Promise<Entrada | null> {
  const linha = await db.getFirstAsync<LinhaEntrada>('SELECT * FROM entradas WHERE id = ?', id);
  return linha ? paraEntrada(linha) : null;
}

export async function criarEntrada(
  db: SQLiteDatabase,
  { data, respostas }: { data: string; respostas: Respostas }
): Promise<number> {
  const agora = new Date().toISOString();
  const resultado = await db.runAsync(
    'INSERT INTO entradas (data, respostas, criada_em, atualizada_em) VALUES (?, ?, ?, ?)',
    data,
    JSON.stringify(respostas),
    agora,
    agora
  );
  return resultado.lastInsertRowId;
}

export async function atualizarEntrada(db: SQLiteDatabase, id: number, respostas: Respostas) {
  await db.runAsync(
    'UPDATE entradas SET respostas = ?, atualizada_em = ? WHERE id = ?',
    JSON.stringify(respostas),
    new Date().toISOString(),
    id
  );
}

export async function excluirEntrada(db: SQLiteDatabase, id: number) {
  await db.runAsync('DELETE FROM entradas WHERE id = ?', id);
}
