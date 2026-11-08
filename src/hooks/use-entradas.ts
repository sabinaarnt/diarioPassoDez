import { useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useState } from 'react';

import { buscarEntrada, listarEntradas } from '@/db/entradas';
import type { Entrada } from '@/types/entrada';

/** Lista todas as entradas e recarrega sempre que a tela volta ao foco. */
export function useEntradas() {
  const db = useSQLiteContext();
  const [entradas, setEntradas] = useState<Entrada[]>([]);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;
      listarEntradas(db)
        .then((resultado) => ativo && setEntradas(resultado))
        .catch(console.error)
        .finally(() => ativo && setCarregando(false));
      return () => {
        ativo = false;
      };
    }, [db])
  );

  return { entradas, carregando };
}

/** Busca uma entrada pelo id e recarrega sempre que a tela volta ao foco. */
export function useEntrada(id: number) {
  const db = useSQLiteContext();
  const [entrada, setEntrada] = useState<Entrada | null>(null);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;
      buscarEntrada(db, id)
        .then((resultado) => ativo && setEntrada(resultado))
        .catch(console.error)
        .finally(() => ativo && setCarregando(false));
      return () => {
        ativo = false;
      };
    }, [db, id])
  );

  return { entrada, carregando };
}
