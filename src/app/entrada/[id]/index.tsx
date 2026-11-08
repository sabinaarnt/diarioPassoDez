import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RespostaBloco } from '@/components/inventario/resposta-bloco';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { ThemedText } from '@/components/ui/themed-text';
import { Spacing } from '@/constants/theme';
import { excluirEntrada } from '@/db/entradas';
import { useEntrada } from '@/hooks/use-entradas';
import { formatarDataLonga } from '@/utils/datas';
import { respostasPreenchidas } from '@/utils/respostas';

export default function EntradaScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const insets = useSafeAreaInsets();
  const { entrada, carregando } = useEntrada(Number(id));

  if (carregando) {
    return null;
  }

  if (!entrada) {
    return (
      <EmptyState
        icon="file-question-outline"
        titulo="Inventário não encontrado"
        texto="Ele pode ter sido excluído."
      />
    );
  }

  const preenchidas = respostasPreenchidas(entrada.respostas);

  function confirmarExclusao() {
    Alert.alert('Excluir inventário?', 'Esta ação não pode ser desfeita.', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await excluirEntrada(db, Number(id));
          router.back();
        },
      },
    ]);
  }

  return (
    <ScrollView
      contentContainerStyle={[styles.conteudo, { paddingBottom: insets.bottom + Spacing.four }]}>
      <Stack.Screen options={{ title: formatarDataLonga(entrada.data) }} />

      {preenchidas.length === 0 ? (
        <ThemedText themeColor="textSecondary">Nenhuma pergunta foi respondida.</ThemedText>
      ) : (
        preenchidas.map(({ pergunta, resposta }) => (
          <RespostaBloco key={pergunta.id} pergunta={pergunta} resposta={resposta} />
        ))
      )}

      <View style={styles.acoes}>
        <Button
          title="Editar"
          icon="pencil-outline"
          variant="secondary"
          onPress={() => router.push({ pathname: '/entrada/[id]/editar', params: { id } })}
          style={styles.flex}
        />
        <Button
          title="Excluir"
          icon="trash-can-outline"
          variant="danger"
          onPress={confirmarExclusao}
          style={styles.flex}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    padding: Spacing.three,
    gap: Spacing.three,
  },
  acoes: {
    flexDirection: 'row',
    gap: Spacing.three,
    marginTop: Spacing.three,
  },
  flex: {
    flex: 1,
  },
});
