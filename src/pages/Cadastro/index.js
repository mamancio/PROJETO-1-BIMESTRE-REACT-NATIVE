import React, { useState } from 'react';

import {
    Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Styles } from './style'

const Cadastro = () => {
    const [ name, setName ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ curso, setCurso ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigation = useNavigation();

    const handleCadastro = async () => {
        const user = {
            name,
            telefone,
            cpf,
            email,
            curso,
            password,
        }
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('Login')
    }

    return (
        <View style={Styles.container}>
            <TextInput
            style={Styles.input}
            placeholder="name"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={Styles.input}
            placeholder="telefone"
            value={telefone}
            onChangeText={setTelefone}
            />
            <TextInput
            style={Styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            />
            <TextInput
            style={Styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={Styles.input}
            placeholder="Curso"
            value={curso}
            onChangeText={setCurso}
            />
            <TextInput
            style={Styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
        <TouchableOpacity style={Styles.button} onPress={handleCadastro}>
            <Text style={Styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        </View>
    )

}

export default Cadastro;