/**
 * Paleta inspirada no pôr do sol da imagem de capa: azul do crepúsculo e âmbar.
 * Toda cor usada no app deve vir daqui — nada de hex solto nos componentes.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1E2433',
    textSecondary: '#5B6272',
    background: '#F6F3EE',
    surface: '#FFFFFF',
    surfaceMuted: '#EFEAE2',
    border: '#E2DCD2',
    primary: '#2F4A7A',
    onPrimary: '#FFFFFF',
    accent: '#C9781E',
    danger: '#B3261E',
  },
  dark: {
    text: '#ECEEF2',
    textSecondary: '#A3A9B6',
    background: '#11151C',
    surface: '#1A2029',
    surfaceMuted: '#232A35',
    border: '#2E3643',
    primary: '#9DB6E6',
    onPrimary: '#0F1A2E',
    accent: '#E8A65A',
    danger: '#F2B8B5',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 8,
  medium: 14,
  large: 22,
  full: 999,
} as const;

/** Espaço ocupado pela barra de abas nativa, que fica sobre o conteúdo. */
export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
