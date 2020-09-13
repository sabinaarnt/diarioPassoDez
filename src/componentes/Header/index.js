import React from 'react';
import { Container, Titulo, ContainerTexto } from './styles';

export default props => {

    return (
        <Container>
            <Titulo>{props.title}</Titulo>
        </Container>
    );
}

