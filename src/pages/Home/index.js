import React, { Component, useState } from 'react'
import { ContainerResp, Container, ContainerCard, Fundo, Texto, ContainerTexto, TextoData, ContainerCartoes, Botao } from './styles.js'
import ImagemFundo from '../../../assets/FundoApp.jpg'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment'
import 'moment/locale/pt-br'
import Cartao from '../../componentes/Cartao'
import CartaoRespostas from '../../componentes/CartaoRespostas'
import Perguntas from '../Perguntas'
import AsyncStorage from '@react-native-community/async-storage'

const hoje = moment().locale('pt-br').format('ddd, D [de] MMMM')
const hojeItem = moment().locale('pt-br').format('DD/MMMM/YYYY')
const [diaItem, mesItem, anoItem] = hojeItem.split('/')

const initialState = {
    showAddPerguntas: false,
    tasks: []
}

export default class Home extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
    }

    addTask = newTask => {
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: ['Me Submeti: ', newTask.desc.respA, `\r`, 'Mantive minha saúde: ', newTask.desc.respB, `\r`, 'Sentimentos: ', newTask.desc.respC,
                `\r`, 'Demosntrei meu amor: ', newTask.desc.respD, `\r`, 'Conflitos de hoje: ', newTask.desc.respE, `\r`, 'Agi de maneira desagradável: ',
                newTask.desc.respF, `\r`, 'Minha serenidade: ', newTask.desc.respG, `\r`, 'Velhos padrôes: ', newTask.desc.respH, `\r`, 'Preocupações: ',
                newTask.desc.respI, `\r`, 'O que fiz: ', newTask.desc.respJ, `\r`, 'O que não fiz: ', newTask.desc.respK, `\r`, 'Fui bom para mim: ',
                newTask.desc.respL, `\r`, 'Sou grato(a) por: ', newTask.desc.respM],
            diaItem,
            mesItem,
            anoItem,
            dataHoje: new Date()

        })

        this.setState({ tasks, showAddPerguntas: false }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = [...this.state.tasks]
        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        return (
            <Container>
                <Perguntas
                    onSave={this.addTask}
                    isVisible={this.state.showAddPerguntas}
                    values={this.addRespostas}
                    onCancel={() => this.setState({ showAddPerguntas: false })} >
                </Perguntas>

                <Fundo source={ImagemFundo}>
                    <ContainerTexto>
                        <Texto> Inventário Diário</Texto>
                        <TextoData> {hoje} </TextoData>
                    </ContainerTexto>
                </Fundo>

                <ContainerCard>
                    <Cartao />
                </ContainerCard>

                <ContainerCartoes>
                    <ContainerResp data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <CartaoRespostas {...item} onDelete={this.deleteTask} />} >
                    </ContainerResp>
                </ContainerCartoes>

                <Botao onPress={() => this.setState({ showAddPerguntas: true })} >
                    <AntDesign name="plus" size={30} color="white" />
                </Botao>

            </Container>
        )
    }
}