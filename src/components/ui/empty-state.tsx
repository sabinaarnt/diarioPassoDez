import { StyleSheet, View } from 'react-native';

import { Icon, type IconName } from './icon';
import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';

type EmptyStateProps = {
  icon: IconName;
  titulo: string;
  texto: string;
};

export function EmptyState({ icon, titulo, texto }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={40} themeColor="accent" />
      <ThemedText type="subtitle" style={styles.centro}>
        {titulo}
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.centro}>
        {texto}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.two,
    paddingVertical: Spacing.five,
    paddingHorizontal: Spacing.four,
  },
  centro: {
    textAlign: 'center',
  },
});
