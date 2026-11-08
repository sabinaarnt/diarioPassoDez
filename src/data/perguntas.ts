export type Pergunta = {
  /** Chave usada para salvar a resposta. Não altere depois de publicado. */
  id: string;
  /** Rótulo curto, usado nas listas e no detalhe da entrada. */
  rotulo: string;
  texto: string;
};

export const PERGUNTAS = [
  {
    id: 'submissao',
    rotulo: 'Me submeti',
    texto:
      'Submeti minha vida hoje ao meu Poder Superior, Jesus, buscando fazer a Sua vontade, confiando que Ele é um Deus amoroso e cuidadoso?',
  },
  {
    id: 'saude',
    rotulo: 'Minha saúde',
    texto: 'Mantive hoje minha saúde física, emocional, financeira, social e espiritual?',
  },
  {
    id: 'sentimentos',
    rotulo: 'Sentimentos',
    texto: 'Quais sentimentos tive hoje?',
  },
  {
    id: 'amor',
    rotulo: 'Demonstrei amor',
    texto: 'Como demonstrei meu amor pelas outras pessoas?',
  },
  {
    id: 'conflitos',
    rotulo: 'Conflitos',
    texto:
      'Houve algum conflito em meus relacionamentos hoje? Quais? Qual foi a minha parcela? Devo reparações a alguém?',
  },
  {
    id: 'atitudes',
    rotulo: 'Minhas atitudes',
    texto:
      'Agi de maneira desagradável com alguém? Fui ressentido(a), egoísta, desonesto(a), medroso(a)?',
  },
  {
    id: 'serenidade',
    rotulo: 'Serenidade',
    texto: 'Como estava a minha serenidade? Alguma coisa aconteceu para que eu a perdesse?',
  },
  {
    id: 'padroes',
    rotulo: 'Velhos padrões',
    texto: 'Percebi alguns “velhos padrões” em minha vida hoje? Em que preciso mudar?',
  },
  {
    id: 'preocupacoes',
    rotulo: 'Preocupações',
    texto: 'Estou me preocupando com o ontem ou com o amanhã?',
  },
  {
    id: 'fizIndevido',
    rotulo: 'O que fiz',
    texto: 'O que fiz hoje que não gostaria de ter feito?',
  },
  {
    id: 'naoFiz',
    rotulo: 'O que não fiz',
    texto: 'O que não fiz hoje que gostaria de ter feito?',
  },
  {
    id: 'autocuidado',
    rotulo: 'Cuidei de mim',
    texto: 'Fui bom(boa) para mim hoje? Fiquei limpo(a)? Estou levando a vida com leveza?',
  },
  {
    id: 'gratidao',
    rotulo: 'Gratidão',
    texto: 'Pelo que posso ser grato(a) hoje?',
  },
] as const satisfies readonly Pergunta[];

export type PerguntaId = (typeof PERGUNTAS)[number]['id'];
