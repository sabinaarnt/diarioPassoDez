import { Pressable, StyleSheet, View } from 'react-native';

import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { PERGUNTAS } from '@/data/perguntas';
import { useTheme } from '@/hooks/use-theme';
import type { Entrada } from '@/types/entrada';
import { partesDaData } from '@/utils/datas';
import { respostasPreenchidas } from '@/utils/respostas';

type EntradaItemProps = {
  entrada: Entrada;
  onPress: () => void;
};

export function EntradaItem({ entrada, onPress }: EntradaItemProps) {
  const theme = useTheme();
  const { dia, mes, diaDaSemana } = partesDaData(entrada.data);
  const preenchidas = respostasPreenchidas(entrada.respostas);
  const previa = preenchidas[0]?.resposta ?? 'Nenhuma resposta registrada.';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Inventário de ${diaDaSemana}, ${dia} de ${mes}`}
      style={({ pressed }) => pressed && styles.pressionado}>
      <Card style={styles.card}>
        <View style={[styles.data, { backgroundColor: theme.surfaceMuted }]}>
          <ThemedText type="subtitle">{dia}</ThemedText>
          <ThemedText type="caption" themeColor="textSecondary">
            {mes}
          </ThemedText>
        </View>

        <View style={styles.conteudo}>
          <ThemedText type="smallBold">{diaDaSemana}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={2}>
            {previa}
          </ThemedText>
          <ThemedText type="caption" themeColor="accent">
            {preenchidas.length} de {PERGUNTAS.length} respondidas
          </ThemedText>
        </View>

        <Icon name="chevron-right" themeColor="textSecondary" />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  data: {
    width: 56,
    paddingVertical: Spacing.two,
    borderRadius: Radius.small,
    alignItems: 'center',
  },
  conteudo: {
    flex: 1,
    gap: Spacing.half,
  },
  pressionado: {
    opacity: 0.7,
  },
});
