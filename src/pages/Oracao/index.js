import React from 'react';
import { Container, TextoOração, ContainerTexto } from './styles';
import Header from '../../componentes/Header'

export default function Oracao() {

  return (
    <Container>
      <Header title={'Oração da Serenidade'} />
      <ContainerTexto>

        <TextoOração>
          Deus,
          {'\n'}
          {'\n'}
          conceda-me a serenidade para aceitar aquilo que não posso mudar, a coragem para mudar o que me for possível e a sabedoria para discernir entre as duas.
          Vivendo um dia de cada vez, apreciando um momento de cada vez, recebendo as dificuldades como um caminho para a paz, aceitando esse mundo cheio de pecados como ele é, assim como fez Jesus, e não como gostaria que ele fosse;
          confiando que o Senhor fará tudo dar certo se eu me entregar à Sua vontade; pois assim poderei ser razoavelmente feliz nessa vida e supremamente feliz ao Seu lado na eternidade. Amém!
          {'\n'}
          {'\n'}

          Reinhold Niebuhr
          </TextoOração>

      </ContainerTexto>
    </Container>
  );
}

