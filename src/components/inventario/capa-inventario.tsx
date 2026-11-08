import { ImageBackground, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ui/themed-text';
import { Spacing } from '@/constants/theme';
import { hojePorExtenso } from '@/utils/datas';

const imagemDeFundo = require('@/assets/images/fundo.jpg');

/** Cabeçalho com a foto do pôr do sol e a data de hoje. */
export function CapaInventario() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={imagemDeFundo}
      resizeMode="cover"
      style={[styles.imagem, { paddingTop: insets.top + Spacing.five }]}
      accessibilityIgnoresInvertColors>
      {/* Escurece a foto para garantir contraste do texto branco. */}
      <View style={styles.veu} />
      <ThemedText type="caption" style={styles.texto}>
        {hojePorExtenso()}
      </ThemedText>
      <ThemedText type="title" style={styles.texto} accessibilityRole="header">
        Inventário diário
      </ThemedText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagem: {
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.four,
    minHeight: 220,
    gap: Spacing.one,
  },
  veu: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(12, 18, 32, 0.45)',
  },
  texto: {
    color: '#FFFFFF',
  },
});
