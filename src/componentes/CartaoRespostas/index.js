import React from 'react'
import { Delete, Container, ContainerData, ContainerTexto, Texto, TextoDia, TextoMes, TextoAno } from './styles.js'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native'

export default props => {

    const getRightContent = () => {
        return (
            <Delete
                onPress={() => props.onDelete && props.onDelete(props.id)} >
                <FontAwesome name="trash" size={30} color="white" />
            </Delete>
        )
    }
    return (
        <Swipeable renderRightActions={getRightContent} >
            <Container>
                <ContainerData>
                    <TextoAno> {props.anoItem} </TextoAno>
                    <TextoDia> {props.diaItem} </TextoDia>
                    <TextoMes> {props.mesItem} </TextoMes>
                </ContainerData>

                <ContainerTexto>
                    <ScrollView>
                        <Texto> {props.desc} </Texto>
                    </ScrollView>
                </ContainerTexto>
            </Container>

        </Swipeable>
    )
}