import styled from 'styled-components/native';

export const Container = styled.View`
height: 120px;
background-color: #FFF;
flex-direction: row;
border-color: #AAA;
border-bottom-width: 3px;

`;
export const ContainerData = styled.View`
height: 120px;
width: 20%;
justify-content: center;
align-items: center;

`;
export const ContainerTexto = styled.View`
height: 120px;
width: 80%;
justify-content: center;
align-items: center;
margin-top: 5px;
`;

export const Texto = styled.Text`
font-size: 14px;
`;

export const TextoDia = styled.Text`
font-size: 50px;
font-weight: bold;
flex: 3;
`;
export const TextoMes = styled.Text`
font-size: 16px;
flex: 1;

`;
export const TextoAno = styled.Text`
font-size: 18px;
flex: 1;

`;
export const Delete = styled.TouchableOpacity`
background-color: red;
flex-direction: row;
align-items: center;
justify-content: center;
padding-right: 20px;
padding-left: 20px;
`;

