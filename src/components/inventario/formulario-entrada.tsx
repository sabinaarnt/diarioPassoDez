import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ThemedText } from '@/components/ui/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { PERGUNTAS } from '@/data/perguntas';
import { useTheme } from '@/hooks/use-theme';
import type { Respostas } from '@/types/entrada';
import { limparRespostas } from '@/utils/respostas';

type FormularioEntradaProps = {
  respostasIniciais?: Respostas;
  onSalvar: (respostas: Respostas) => Promise<void>;
};

/** Mostra uma pergunta por vez. Todas são opcionais: dá para avançar sem responder. */
export function FormularioEntrada({ respostasIniciais = {}, onSalvar }: FormularioEntradaProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>(respostasIniciais);
  const [salvando, setSalvando] = useState(false);

  const pergunta = PERGUNTAS[indice];
  const ehPrimeira = indice === 0;
  const ehUltima = indice === PERGUNTAS.length - 1;

  async function salvar() {
    setSalvando(true);
    try {
      await onSalvar(limparRespostas(respostas));
    } finally {
      setSalvando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled">
        <View style={styles.progresso}>
          <ThemedText type="caption" themeColor="textSecondary">
            Pergunta {indice + 1} de {PERGUNTAS.length} · {pergunta.rotulo}
          </ThemedText>
          <ProgressBar progresso={(indice + 1) / PERGUNTAS.length} />
        </View>

        <ThemedText type="leitura" accessibilityRole="header">
          {pergunta.texto}
        </ThemedText>

        <TextInput
          // A key força um campo novo a cada pergunta, para o foco e o cursor recomeçarem.
          key={pergunta.id}
          value={respostas[pergunta.id] ?? ''}
          onChangeText={(texto) => setRespostas((atual) => ({ ...atual, [pergunta.id]: texto }))}
          placeholder="Escreva aqui… (opcional)"
          placeholderTextColor={theme.textSecondary}
          accessibilityLabel={pergunta.texto}
          multiline
          autoFocus
          textAlignVertical="top"
          style={[
            styles.campo,
            { color: theme.text, backgroundColor: theme.surface, borderColor: theme.border },
          ]}
        />
      </ScrollView>

      <View
        style={[
          styles.rodape,
          { borderTopColor: theme.border, paddingBottom: insets.bottom + Spacing.three },
        ]}>
        <Button
          title="Anterior"
          variant="secondary"
          icon="arrow-left"
          onPress={() => setIndice(indice - 1)}
          disabled={ehPrimeira || salvando}
          style={styles.flex}
        />
        {ehUltima ? (
          <Button
            title={salvando ? 'Salvando…' : 'Salvar'}
            icon="check"
            onPress={salvar}
            disabled={salvando}
            style={styles.flex}
          />
        ) : (
          <Button
            title="Próxima"
            icon="arrow-right"
            onPress={() => setIndice(indice + 1)}
            style={styles.flex}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  conteudo: {
    padding: Spacing.four,
    gap: Spacing.four,
  },
  progresso: {
    gap: Spacing.two,
  },
  campo: {
    minHeight: 180,
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.three,
    fontSize: 16,
    lineHeight: 24,
  },
  rodape: {
    flexDirection: 'row',
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
