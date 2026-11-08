import type { SQLiteDatabase } from 'expo-sqlite';

export const NOME_DO_BANCO = 'diario.db';

const VERSAO_ATUAL = 1;

/**
 * Cria e atualiza o esquema do banco. Para mudar o esquema, adicione um novo
 * bloco `if (versao === N)` e aumente `VERSAO_ATUAL` — nunca edite um bloco antigo.
 */
export async function migrarBanco(db: SQLiteDatabase) {
  const resultado = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  let versao = resultado?.user_version ?? 0;
  if (versao >= VERSAO_ATUAL) {
    return;
  }

  if (versao === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS entradas (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        data TEXT NOT NULL,
        respostas TEXT NOT NULL,
        criada_em TEXT NOT NULL,
        atualizada_em TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_entradas_data ON entradas (data);
    `);
    versao = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${VERSAO_ATUAL}`);
}
