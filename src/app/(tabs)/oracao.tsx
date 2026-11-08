import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '@/components/ui/card';
import { ScreenHeader } from '@/components/ui/screen-header';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { ORACAO_DA_SERENIDADE } from '@/data/oracao';

export default function OracaoScreen() {
  const insets = useSafeAreaInsets();
  const { titulo, autor, paragrafos } = ORACAO_DA_SERENIDADE;

  return (
    <ThemedView style={styles.tela}>
      <ScrollView
        contentContainerStyle={[
          styles.conteudo,
          { paddingTop: insets.top, paddingBottom: BottomTabInset + Spacing.four },
        ]}>
        <ScreenHeader titulo={titulo} />
        <Card style={styles.card}>
          {paragrafos.map((paragrafo) => (
            <ThemedText key={paragrafo} type="leitura">
              {paragrafo}
            </ThemedText>
          ))}
          <ThemedText type="small" themeColor="textSecondary" style={styles.autor}>
            — {autor}
          </ThemedText>
        </Card>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  conteudo: {
    paddingHorizontal: Spacing.three,
    gap: Spacing.three,
  },
  card: {
    padding: Spacing.four,
    gap: Spacing.three,
  },
  autor: {
    textAlign: 'right',
  },
});
