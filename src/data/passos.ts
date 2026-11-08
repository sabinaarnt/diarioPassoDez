export type Passo = {
  numero: number;
  texto: string;
  versiculo: string;
  referencia: string;
};

export const PASSOS: readonly Passo[] = [
  {
    numero: 1,
    texto:
      'Admitimos ser impotentes diante de nossos traumas, nossos vícios e nossos comportamentos compulsivos, que tornaram nossas vidas ingovernáveis.',
    versiculo:
      'Porque Deus está operando em vocês, ajudando-os a desejar obedecer-lhe, e depois ajudando-os a fazer aquilo que Ele quer.',
    referencia: 'Filipenses 2:13 BV',
  },
  {
    numero: 2,
    texto: 'Viemos a acreditar que nosso Poder Superior, Jesus, poderia restituir nossa sanidade.',
    versiculo:
      'Pois eu sei o que é bom não vive em mim, isso é, na minha natureza humana. Porque, ainda que a vontade de fazer o bem esteja em mim, eu não consigo fazê-lo.',
    referencia: 'Romanos 7:18 BLH',
  },
  {
    numero: 3,
    texto: 'Decidimos entregar nossas vidas e nossas vontades aos cuidados de Deus.',
    versiculo:
      'Se você confessar com a sua boca que Jesus é o Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo.',
    referencia: 'Romanos 10:9',
  },
  {
    numero: 4,
    texto: 'Fizemos um minucioso e destemido inventário moral de nós mesmos.',
    versiculo: 'Examinemos seriamente o que temos feito e voltemos para o Senhor.',
    referencia: 'Lamentações 3:40 NTLH',
  },
  {
    // TODO: conferir texto e versículo com o guia de estudo. A versão antiga
    // do app repetia aqui, por engano, o texto do Passo 1 e o versículo do Passo 2.
    numero: 5,
    texto:
      'Admitimos perante Deus, perante nós e perante outro ser humano a natureza exata das nossas falhas.',
    versiculo:
      'Portanto, confessem os seus pecados uns aos outros e façam oração uns pelos outros, para que vocês sejam curados. A oração de uma pessoa obediente a Deus tem muito poder.',
    referencia: 'Tiago 5:16',
  },
  {
    numero: 6,
    texto: 'Dispusemo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.',
    versiculo:
      'E então, quando vocês sentirem a sua indignidade diante do Senhor, Ele levantará, animará e ajudará vocês.',
    referencia: 'Tiago 4:10 BV',
  },
  {
    numero: 7,
    texto: 'Humildemente pedimos a Deus que removesse todas as nossas imperfeições.',
    versiculo:
      'Mas, se confessarmos os nossos pecados a Deus, Ele cumprirá a Sua promessa e fará o que é correto. Ele perdoará os nossos pecados e nos limpará de toda maldade.',
    referencia: '1 João 1:9 NTLH',
  },
  {
    numero: 8,
    texto:
      'Fizemos uma relação de todas as pessoas a quem prejudicamos e dispusemo-nos a fazer reparações a todas elas.',
    versiculo: 'Como vocês querem que os outros lhes façam, façam também vocês a eles.',
    referencia: 'Lucas 6:31',
  },
  {
    numero: 9,
    texto:
      'Fizemos reparações diretas a tais pessoas sempre que possível, exceto quando fazê-lo implicasse prejudicá-las ou a terceiros.',
    versiculo:
      'Não julguem, e vocês não serão julgados. Não condenem, e não serão condenados. Perdoem, e serão perdoados.',
    referencia: 'Lucas 6:37',
  },
  {
    numero: 10,
    texto:
      'Continuamos a fazer o inventário pessoal e, quando estávamos errados, nós o admitimos prontamente.',
    versiculo:
      'Portanto, tenham cuidado. Se você está pensando: “Eu nunca faria uma coisa dessas”, que isso lhe sirva de advertência. Porque você também pode cair em pecado.',
    referencia: '1 Coríntios 10:12 BV',
  },
  {
    numero: 11,
    texto:
      'Procuramos, através da oração e da meditação, melhorar o nosso contato consciente com Deus, pedindo apenas para conhecer a Sua vontade para nossas vidas e forças para realizá-la.',
    versiculo: 'Que a mensagem de Cristo, com toda a sua riqueza, viva no coração de vocês!',
    referencia: 'Colossenses 3:16 NTLH',
  },
  {
    numero: 12,
    texto:
      'Tendo experimentado um despertar espiritual como resultado destes passos, procuramos levar esta mensagem a outros e praticar estes princípios em todos os aspectos da nossa vida.',
    versiculo: 'Vocês receberam de graça, deem também de graça.',
    referencia: 'Mateus 10:8',
  },
];

export const PASSO_DEZ = PASSOS[9];

export const FONTE_DOS_TEXTOS =
  'Todos os textos deste aplicativo foram retirados da obra “12 Passos — Guia de Estudo para Grupos do Celebrando a Restauração”, produzida pela Igreja Batista Central de Fortaleza/CE.';
