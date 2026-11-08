import { StyleSheet, View } from 'react-native';

import { Radius } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ProgressBarProps = {
  /** Valor entre 0 e 1. */
  progresso: number;
};

export function ProgressBar({ progresso }: ProgressBarProps) {
  const theme = useTheme();
  const porcentagem = Math.round(Math.min(Math.max(progresso, 0), 1) * 100);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: porcentagem }}
      style={[styles.trilho, { backgroundColor: theme.surfaceMuted }]}>
      <View style={[styles.barra, { width: `${porcentagem}%`, backgroundColor: theme.accent }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  trilho: {
    height: 6,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  barra: {
    height: '100%',
    borderRadius: Radius.full,
  },
});
