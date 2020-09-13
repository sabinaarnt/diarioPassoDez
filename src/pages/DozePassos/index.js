
import * as React from 'react';
import { ScrollView } from 'react-native';
import { Container, Cartao, TituloCartao, TextoPasso, TextoVersiculo, ContainerCitacao, TextoCitacao } from './styles';
import Header from '../../componentes/Header'

export default function DozePassos() {
  return (
    <Container>
      <Header title={'Os 12 passos'} />
      <ScrollView>
        <Cartao>
          <TituloCartao> Passo 1 </TituloCartao>
          <TextoPasso>
            Admitimos ser impotentes diante de nossos traumas, nossos vícios e nossos comportamentos compulsivos que tornaram nossas vidas ingovernáveis.
          </TextoPasso>
          <TextoVersiculo>
            “Porque Deus está operando em vocês, ajudando-os a desejar obedecer-lhe, e depois ajudando-os a fazer aquilo que Ele quer.”  (Filipenses 2:13 BV)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#e9bbd1" }}>
          <TituloCartao> Passo 2 </TituloCartao>
          <TextoPasso>
            Viemos a acreditar que nosso  Poder Superior Jesus poderia restituir nossa sanidade.
          </TextoPasso>
          <TextoVersiculo >
            “Pois eu sei o que é bom não vive em mim, isso é, na minha natureza humana.Porque, ainda que a vontade de fazer o bem esteja em mim, eu não consigo fazê-lo.” ( Romanos 7:18 BLH)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#E25656" }}>
          <TituloCartao> Passo 3 </TituloCartao>
          <TextoPasso>
            Decidimos entregar nossas vidas e nossas vontades aos cuidados de Deus.
          </TextoPasso>
          <TextoVersiculo>
            “Se você confessar com a sua boca que Jesus é o Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo” (Romanos 10:9)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#95c3e4" }}>
          <TituloCartao> Passo 4 </TituloCartao>
          <TextoPasso>
            Fizemos um minucioso e destemido inventário moral de nós mesmos.
          </TextoPasso>
          <TextoVersiculo>
            “Examinemos seriamente o que temos feito e voltemos para o Senhor.” (Lamentações 3:40 NTLH)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#fef2a0" }}>
          <TituloCartao> Passo 5 </TituloCartao>
          <TextoPasso>
            Admitimos ser impotentes diante de nossos traumas, nossos vícios e nossos comportamentos compulsivos que tornaram nossas vidas ingovernáveis.
          </TextoPasso>
          <TextoVersiculo>
            “Pois eu sei o que é bom não vive em mim, isso é, na minha natureza humana.Porque, ainda que a vontade de fazer o bem esteja em mim, eu não consigo fazê-lo.” ( Romanos 7:18 BLH)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#a390bc" }}>
          <TituloCartao> Passo 6 </TituloCartao>
          <TextoPasso>
            Dispusemo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.
          </TextoPasso>
          <TextoVersiculo>
            “E então, quando vocês sentirem a sua indignidade diante do Senhor, Ele levantará, animará e ajudará vocês.” (Tiago 4:10 BV)
          </TextoVersiculo>
        </Cartao>

        <Cartao >
          <TituloCartao > Passo 7 </TituloCartao>
          <TextoPasso>
            Humildemente pedimos a Deus que removesse todas nossas imperfeições.
          </TextoPasso>
          <TextoVersiculo>
            “Mas, se confessarmos os nossos pecados a Deus, Ele cumprirá a Sua promessa e fará o que é correto. Ele perdoará os nossos pecados e nos limpará de toda maldade.” (I João 1:9 NTLH)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#e9bbd1" }}>
          <TituloCartao> Passo 8 </TituloCartao>
          <TextoPasso>
            Fizemos uma relação de todas as pessoas a quem prejudicamos e dispusemo-nos a fazer reparações a todas elas.
          </TextoPasso>
          <TextoVersiculo>
            “Como vocês querem que os outros lhes façam, façam também vocês a eles.” (Lucas 6:31)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#E25656" }}>
          <TituloCartao> Passo 9 </TituloCartao>
          <TextoPasso>
            Fizemos reparações diretas a tais pessoas sempre que possível, exceto quando faze-lo implicasse prejudicá-las ou a terceiros.
          </TextoPasso>
          <TextoVersiculo>
            “Não julguem, e vocês não serão julgados. Não condenem, e não serão condenados. Perdoem, e serão perdoados”. (Lucas 6:37)
           </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#95c3e4" }}>
          <TituloCartao> Passo 10 </TituloCartao>
          <TextoPasso>
            Continuamos a fazer o inventário pessoal e, quando estávamos errados, nós o admitimos prontamente.
          </TextoPasso>
          <TextoVersiculo>
            “Portanto, tenham cuidado. Se você está pensando:” Eu nunca faria uma coisa dessas”, que isso lhe sirva de advertência. Porque você também pode cair em pecado.” (I Coríntios 10:12 BV)
          </TextoVersiculo>
        </Cartao>

        <Cartao style={{ backgroundColor: "#fef2a0" }}>
          <TituloCartao> Passo 11 </TituloCartao>
          <TextoPasso>
            Procuramos, através da oração e da meditação, melhorar o nosso contato consciente com Deus, pedindo apenas para conhecer a Sua vontade para nossas vidas e forças para realizá-la.
          </TextoPasso>
          <TextoVersiculo>
            “Que a mensagem de Cristo, com toda a sua riqueza, viva no coração de vocês!” (Colossenses 3:16 NTLH)
          </TextoVersiculo>
        </Cartao  >

        <Cartao style={{ backgroundColor: "#a390bc" }}>
          <TituloCartao> Passo 12 </TituloCartao>
          <TextoPasso>
            Tendo experimentado um despertar espiritual como resultado destes passos, procuramos levar esta mensagem a outros e praticar esses princípios em todos os aspectos da nossa vida.
           </TextoPasso>
          <TextoVersiculo>
            “Vocês receberam de graça, dêem também de graça.”(Mateus 10:8)
          </TextoVersiculo>
        </Cartao>

        <ContainerCitacao>
          <TextoCitacao>
            Todos os textos desse aplicativo foram retirados da obra "12 passos Guia de Estudo para Grupos do Celebrando Restauração", produzida pela Igreja Batista Central de Fortaleza/CE.{'\n'}
          </TextoCitacao>
        </ContainerCitacao>

      </ScrollView>

    </Container>
  );
}

