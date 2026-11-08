import { StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';

type ScreenHeaderProps = {
  titulo: string;
  subtitulo?: string;
};

/** Cabeçalho das telas de aba (as abas nativas não têm cabeçalho próprio). */
export function ScreenHeader({ titulo, subtitulo }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <ThemedText type="title" accessibilityRole="header">
        {titulo}
      </ThemedText>
      {subtitulo && <ThemedText themeColor="textSecondary">{subtitulo}</ThemedText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
  },
});
