import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PassoCard } from '@/components/passos/passo-card';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { FONTE_DOS_TEXTOS, PASSOS } from '@/data/passos';

export default function PassosScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.tela}>
      <FlatList
        data={PASSOS}
        keyExtractor={(passo) => String(passo.numero)}
        renderItem={({ item }) => <PassoCard passo={item} />}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        contentContainerStyle={[
          styles.lista,
          { paddingTop: insets.top, paddingBottom: BottomTabInset + Spacing.four },
        ]}
        ListHeaderComponent={
          <ScreenHeader
            titulo="Os 12 Passos"
            subtitulo="E os versículos que os acompanham."
          />
        }
        ListFooterComponent={
          <ThemedText type="small" themeColor="textSecondary" style={styles.fonte}>
            {FONTE_DOS_TEXTOS}
          </ThemedText>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  lista: {
    paddingHorizontal: Spacing.three,
  },
  separador: {
    height: Spacing.three,
  },
  fonte: {
    textAlign: 'center',
    paddingVertical: Spacing.four,
  },
});
