import { router } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';

import { FormularioEntrada } from '@/components/inventario/formulario-entrada';
import { criarEntrada } from '@/db/entradas';
import type { Respostas } from '@/types/entrada';
import { dataDeHoje } from '@/utils/datas';

export default function NovaEntradaScreen() {
  const db = useSQLiteContext();

  async function salvar(respostas: Respostas) {
    // A data é calculada ao salvar, não ao abrir o app.
    await criarEntrada(db, { data: dataDeHoje(), respostas });
    router.back();
  }

  return <FormularioEntrada onSalvar={salvar} />;
}
