import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Styles} from './style'

const Login = () => {

    const navigation = useNavigation()

    const handleLogin = async () => {
        navigation.navigate('Cards');
    }


    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

        /*    VERIFICAÇÃO DE USUÁRIO E SENHA 
        const [ email, setEmail ] = useState('');
        const [ password, setPassword ] = useState('');


        const handleLogin = async () => {

            const user = await AsyncStorage.getItem('user');
            if(!user){
                alert('Nenhum usuário cadastrado')
                return
            }
            const userJson = JSON.parse(user)
            if(userJson.email === email && userJson.password === password){
                navigation.navigate('Cards')
            }else{
                alert('E-mail ou senha inválidos')
            }
        }
        */

    

    return (
        <View style={Styles.container}>
            <TextInput
                style={ Styles.input }
                placeholder="E-mail"
                //value={email}    
                //onChangeText={setEmail}
            />
            <TextInput
                style={ Styles.input }
                placeholder="Senha"
                //secureTextEntry={true}
                //value={password}    
                //onChangeText={setPassword}
            />
            <TouchableOpacity style={Styles.button} onPress={handleLogin} >
                <Text style={ Styles.buttonText }>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={handleCadastro} >
                <Text style={ Styles.buttonText }>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )

}


export default Login;