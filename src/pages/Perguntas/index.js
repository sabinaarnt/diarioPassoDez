import React, { Component } from 'react';
import { Modal, View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { Formik } from 'formik';

const initialState = {}

export default class Perguntas extends Component {

    state = {
        ...initialState
    }

    save = (values) => {
        const newTask = {
            desc: values,
            date: this.state.date
        }
        this.props.onSave && this.props.onSave(newTask)
    }

    render() {
        return (

            <Modal truansparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'
            >

                <ScrollView>

                    <Formik
                        initialValues={{ respA: '', respB: '', respC: '', respD: '', respE: '', respF: '', respG: '', respH: '', respI: '', respJ: '', respK: '', respL: '', respM: '' }}
                        onSubmit={values => this.save(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={styles.container}>
                                <Text style={styles.pergunta}>
                                    Submeti minha vida Hoje ao meu Poder Superior Jesus, buscando fazer a sua vontade, confiando que Ele é um Deus amoroso e cuidadoso?
                                </Text>
                                <TextInput style={styles.input}
                                    multiline={true}
                                    onChangeText={handleChange('respA')}
                                    onBlur={handleBlur('respA')}
                                    value={values.respA}
                                />

                                <Text style={styles.pergunta}>
                                    Mantive hoje minha saúde física, emocional, financeira, social, e espiritual saudável?
                                </Text>
                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respB')}
                                    onBlur={handleBlur('respB')}
                                    value={values.respB}
                                />


                                <Text style={styles.pergunta}>
                                    Quais os Sentimentos que tive hoje?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respC')}
                                    onBlur={handleBlur('respC')}
                                    value={values.respC}
                                />

                                <Text style={styles.pergunta}>
                                    Como demonstrei meu amor pelas outras pessoas?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respD')}
                                    onBlur={handleBlur('respD')}
                                    value={values.respD}
                                />

                                <Text style={styles.pergunta}>
                                    Houve algum conflito em meus relacionamentos hoje? Quais? Qual foi a minha parcela? Devo reparações a alguém?
                                </Text>
                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respE')}
                                    onBlur={handleBlur('respE')}
                                    value={values.respE}
                                />
                                <Text style={styles.pergunta}>
                                    Agi de maneira desagradável com alguém? Fui ressentido(a), egoísta, desonesto(a), medroso(a)?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respF')}
                                    onBlur={handleBlur('respF')}
                                    value={values.respF}
                                />

                                <Text style={styles.pergunta}>
                                    Como estava a minha serenidade? Alguma coisa aconteceu para que a perdesse?
                                </Text>


                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respG')}
                                    onBlur={handleBlur('respG')}
                                    value={values.respG}
                                />

                                <Text style={styles.pergunta}>
                                    Percebi alguns “velhos padrões” em minha vida hoje? Em que preciso mudar?
                                </Text>


                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respH')}
                                    onBlur={handleBlur('respH')}
                                    value={values.respH}
                                />
                                <Text style={styles.pergunta}>
                                    Estou me preocupando com o ontem ou o amanhã?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respI')}
                                    onBlur={handleBlur('respI')}
                                    value={values.respI}
                                />

                                <Text style={styles.pergunta}>
                                    O que fiz hoje que não gostaria de ter feito?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respJ')}
                                    onBlur={handleBlur('respJ')}
                                    value={values.respJ}
                                />


                                <Text style={styles.pergunta}>
                                    O que não fiz hoje que gostaria de ter feito?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respK')}
                                    onBlur={handleBlur('respK')}
                                    value={values.respK}
                                />

                                <Text style={styles.pergunta}>
                                    Fui bom para mim hoje? Fiquei limpo? Estou levando a vida com leveza?
                                </Text>
                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respL')}
                                    onBlur={handleBlur('respL')}
                                    value={values.respL}
                                />


                                <Text style={styles.pergunta}>
                                    Pelo que posso ser grato hoje?
                                </Text>

                                <TextInput style={styles.input}
                                    multiline
                                    onChangeText={handleChange('respM')}
                                    onBlur={handleBlur('respM')}
                                    value={values.respM}
                                />
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10 }} >
                                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#fff', marginRight: 10 }}>Voltar</Text>

                                        <TouchableOpacity onPress={this.props.onCancel} style={styles.botoes}>
                                            <EvilIcons name="arrow-left" size={40} color='#4C79D0' />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                        <TouchableOpacity onPress={handleSubmit} style={styles.botoes}>
                                            <Feather name="save" size={30} color="#4C79D0" />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#fff', marginLeft: 10 }} >Salvar</Text>
                                    </View>


                                </View>

                                <View>
                                    <Text style={styles.textoCitacao}>
                                        Todos os textos desse aplicativo foram retirados da obra "12 passos Guia de Estudo para Grupos do Celebrando Restauração", produzida pela Igreja Batista Central de Fortaleza/CE.
                                </Text>

                                </View>

                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 40,
        backgroundColor: '#4C79D0'

    },

    input: {
        fontSize: 18,
        borderRadius: 4,
        backgroundColor: '#fff',
        height: 100,

    },
    pergunta: {
        marginTop: 10,
        marginBottom: 10,
        color: '#fff',
        fontSize: 14,
    },
    botoes: {
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,

    },
    textoCitacao: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center'
    }

})

