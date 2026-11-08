import { StyleSheet, View } from 'react-native';

import { Card } from '@/components/ui/card';
import { ThemedText } from '@/components/ui/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import type { Passo } from '@/data/passos';
import { useTheme } from '@/hooks/use-theme';

type PassoCardProps = {
  passo: Passo;
};

export function PassoCard({ passo }: PassoCardProps) {
  const theme = useTheme();

  return (
    <Card style={styles.card}>
      <View style={styles.cabecalho}>
        <View style={[styles.numero, { backgroundColor: theme.primary }]}>
          <ThemedText type="smallBold" themeColor="onPrimary">
            {passo.numero}
          </ThemedText>
        </View>
        <ThemedText type="caption" themeColor="textSecondary">
          Passo {passo.numero}
        </ThemedText>
      </View>

      <ThemedText>{passo.texto}</ThemedText>

      <View style={[styles.versiculo, { borderLeftColor: theme.accent }]}>
        <ThemedText type="leitura" style={styles.italico}>
          “{passo.versiculo}”
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {passo.referencia}
        </ThemedText>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.three,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  numero: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versiculo: {
    borderLeftWidth: 3,
    paddingLeft: Spacing.three,
    gap: Spacing.one,
  },
  italico: {
    fontStyle: 'italic',
  },
});
