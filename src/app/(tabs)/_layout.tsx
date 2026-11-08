import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { useTheme } from '@/hooks/use-theme';

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <NativeTabs
      backgroundColor={theme.surface}
      indicatorColor={theme.surfaceMuted}
      labelStyle={{ selected: { color: theme.primary } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Inventário</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="square.and.pencil" md="edit_note" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="passos">
        <NativeTabs.Trigger.Label>12 Passos</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.number" md="format_list_numbered" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="oracao">
        <NativeTabs.Trigger.Label>Oração</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="hands.sparkles" md="self_improvement" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
