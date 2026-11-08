import { router } from 'expo-router';
import { SectionList, StyleSheet, View } from 'react-native';

import { CapaInventario } from '@/components/inventario/capa-inventario';
import { EntradaItem } from '@/components/inventario/entrada-item';
import { PassoCard } from '@/components/passos/passo-card';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { PASSO_DEZ } from '@/data/passos';
import { useEntradas } from '@/hooks/use-entradas';
import type { Entrada } from '@/types/entrada';
import { formatarMes } from '@/utils/datas';

function agruparPorMes(entradas: Entrada[]) {
  const grupos = new Map<string, Entrada[]>();
  for (const entrada of entradas) {
    const mes = formatarMes(entrada.data);
    grupos.set(mes, [...(grupos.get(mes) ?? []), entrada]);
  }
  return [...grupos].map(([title, data]) => ({ title, data }));
}

export default function InventarioScreen() {
  const { entradas, carregando } = useEntradas();

  return (
    <ThemedView style={styles.tela}>
      <SectionList
        sections={agruparPorMes(entradas)}
        keyExtractor={(entrada) => String(entrada.id)}
        contentContainerStyle={styles.lista}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <CapaInventario />
            <View style={styles.margem}>
              <PassoCard passo={PASSO_DEZ} />
            </View>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <ThemedText type="caption" themeColor="textSecondary" style={styles.tituloSecao}>
            {section.title}
          </ThemedText>
        )}
        renderItem={({ item }) => (
          <View style={styles.margem}>
            <EntradaItem
              entrada={item}
              onPress={() =>
                router.push({ pathname: '/entrada/[id]', params: { id: String(item.id) } })
              }
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListEmptyComponent={
          carregando ? null : (
            <EmptyState
              icon="weather-sunset"
              titulo="Nenhum inventário ainda"
              texto="Reserve alguns minutos no fim do dia para olhar para ele com honestidade."
            />
          )
        }
      />

      <Button
        title="Fazer inventário"
        icon="plus"
        onPress={() => router.push('/entrada/nova')}
        style={styles.botaoNovo}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  lista: {
    paddingBottom: BottomTabInset + Spacing.six * 2,
  },
  cabecalho: {
    gap: Spacing.four,
  },
  margem: {
    paddingHorizontal: Spacing.three,
  },
  tituloSecao: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.two,
  },
  separador: {
    height: Spacing.two,
  },
  botaoNovo: {
    position: 'absolute',
    right: Spacing.three,
    bottom: BottomTabInset + Spacing.three,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
});
