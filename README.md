# Diário Passo 10

Aplicativo de inventário diário baseado no Passo 10 do grupo de apoio Celebrando a Restauração.

Feito com Expo (SDK 57), Expo Router, TypeScript e SQLite local (os dados ficam só no aparelho).

## Rodando

```bash
npm install
npx expo start
```

Abra no celular com o app **Expo Go** (lendo o QR code) ou num emulador Android/iOS.
A versão web não é suportada por enquanto: o banco SQLite na web ainda é experimental.

## Estrutura

```
src/
  app/                  # telas (cada arquivo é uma rota do Expo Router)
    (tabs)/             # abas: Inventário, 12 Passos, Oração
    entrada/            # nova entrada, detalhe e edição
  components/
    ui/                 # peças genéricas: botão, cartão, texto, ícone…
    inventario/         # componentes do diário
    passos/             # componentes dos 12 passos
  data/                 # conteúdo fixo: passos, perguntas, oração
  db/                   # banco SQLite: migrações e consultas
  hooks/                # hooks de tema e de acesso às entradas
  constants/theme.ts    # cores, espaçamentos e fontes
  types/, utils/
```

- Para **mudar ou adicionar perguntas**, edite `src/data/perguntas.ts`. Não altere o `id` de perguntas existentes: ele é a chave das respostas salvas.
- Para **mudar o banco**, adicione uma nova migração em `src/db/migracoes.ts`.

## Verificações

```bash
npx tsc --noEmit   # tipos
npx expo lint      # lint
npx expo-doctor    # dependências e configuração
```
