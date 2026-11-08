import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { useColorScheme } from 'react-native';

import { migrarBanco, NOME_DO_BANCO } from '@/db/migracoes';
import { useTheme } from '@/hooks/use-theme';

export default function RootLayout() {
  const scheme = useColorScheme();
  const theme = useTheme();

  return (
    <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SQLiteProvider databaseName={NOME_DO_BANCO} onInit={migrarBanco}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.primary,
            headerTitleStyle: { color: theme.text },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: theme.background },
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="entrada/nova"
            options={{ title: 'Inventário de hoje', presentation: 'modal' }}
          />
          <Stack.Screen name="entrada/[id]/index" options={{ title: 'Inventário' }} />
          <Stack.Screen
            name="entrada/[id]/editar"
            options={{ title: 'Editar inventário', presentation: 'modal' }}
          />
        </Stack>
      </SQLiteProvider>
    </ThemeProvider>
  );
}
