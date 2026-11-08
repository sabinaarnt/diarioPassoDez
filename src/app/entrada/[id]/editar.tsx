import { router, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';

import { FormularioEntrada } from '@/components/inventario/formulario-entrada';
import { atualizarEntrada } from '@/db/entradas';
import { useEntrada } from '@/hooks/use-entradas';
import type { Respostas } from '@/types/entrada';

export default function EditarEntradaScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const { entrada, carregando } = useEntrada(Number(id));

  if (carregando || !entrada) {
    return null;
  }

  async function salvar(respostas: Respostas) {
    await atualizarEntrada(db, Number(id), respostas);
    router.back();
  }

  return <FormularioEntrada respostasIniciais={entrada.respostas} onSalvar={salvar} />;
}
