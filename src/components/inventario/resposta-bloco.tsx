import { StyleSheet } from 'react-native';

import { Card } from '@/components/ui/card';
import { ThemedText } from '@/components/ui/themed-text';
import type { Pergunta } from '@/data/perguntas';

type RespostaBlocoProps = {
  pergunta: Pergunta;
  resposta: string;
};

export function RespostaBloco({ pergunta, resposta }: RespostaBlocoProps) {
  return (
    <Card>
      <ThemedText type="caption" themeColor="accent">
        {pergunta.rotulo}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {pergunta.texto}
      </ThemedText>
      <ThemedText style={styles.resposta}>{resposta}</ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  resposta: {
    marginTop: 4,
  },
});
