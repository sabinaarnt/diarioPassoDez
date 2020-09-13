import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const Fundo = styled.ImageBackground`
opacity: 0.8;
flex: 3;
`;
export const ContainerResp = styled.FlatList`
`;

export const ContainerCartoes = styled.View`
flex: 5;
`;

export const ContainerCard = styled.View`
`;

export const ContainerTexto = styled.View`
flex: 1;
justify-content: flex-end;
`;

export const Texto = styled.Text`
font-size: 35px;
color: #FFF;
margin-left: 10px;
`;

export const TextoData = styled.Text`
font-size: 15px;
color: #FFF;
margin-left: 25px;
margin-bottom: 30px;

`;

export const Botao = styled.TouchableOpacity`
    position: absolute;
    width: 60px;
    height: 60px;
    background-Color: #4C79D0;
    align-Items: center;
    justify-Content: center;
    border-Radius: 30px;
    right: 25px;
    bottom: 25px;
`;

