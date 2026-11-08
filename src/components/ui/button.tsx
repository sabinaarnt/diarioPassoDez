import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { Icon, type IconName } from './icon';
import { ThemedText } from './themed-text';

import { Radius, Spacing, type ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Variant = 'primary' | 'secondary' | 'danger';

const VARIANTES: Record<Variant, { fundo: ThemeColor; texto: ThemeColor; borda?: ThemeColor }> = {
  primary: { fundo: 'primary', texto: 'onPrimary' },
  secondary: { fundo: 'surface', texto: 'primary', borda: 'border' },
  danger: { fundo: 'surface', texto: 'danger', borda: 'border' },
};

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: Variant;
  icon?: IconName;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Button({ title, onPress, variant = 'primary', icon, disabled, style }: ButtonProps) {
  const theme = useTheme();
  const cores = VARIANTES[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: theme[cores.fundo],
          borderColor: cores.borda ? theme[cores.borda] : 'transparent',
        },
        (pressed || disabled) && styles.atenuado,
        style,
      ]}>
      {icon && <Icon name={icon} size={20} themeColor={cores.texto} />}
      <ThemedText type="smallBold" themeColor={cores.texto}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  atenuado: {
    opacity: 0.6,
  },
});
