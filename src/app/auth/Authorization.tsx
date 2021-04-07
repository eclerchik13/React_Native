import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";

interface IUser {
    username: string,
    password: string
}

const AuthForm: React.FC= () => {
    const [auth, setAuth] = useState<IUser>({
        username: '',
        password: ''
    })

    function CreateUser() {
        Alert.alert(JSON.stringify({username: auth.username,
            password: auth.password}))
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../images/logo.png")} style={styles.logo}/>
                <Text style={styles.title}>Авторизация</Text>
                <TextInput style={styles.textInput} placeholder={"Username*"}
                           onChangeText={e =>(setAuth({...auth, username: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Password*"}
                           onChangeText={e =>(setAuth({...auth, password: e}))}/>
                <TouchableOpacity style={styles.button} onPress={() => CreateUser()}>
                    <Text style={styles.textButton}>ВОЙТИ</Text>
                </TouchableOpacity>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const AuthPage: React.FC = () =>{
    return(
        <View style={styles.container}>
            <Header title={"Кафедра №42"}/>
            <AuthForm />
            <Footer/>
        </View>
    )
}

export default AuthPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#f4f6f8"
    },
    button:{
        backgroundColor: "#FF0044",
        borderRadius: 7,
        width: 300,
        margin: 10,
        alignItems: 'center',
        height: 60
    },
    textInput: {
        height: 60,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:7,
        margin: 5,
    },
    textButton:{
        padding:20,
        fontSize: 15,
        color: "#ffff",
        fontWeight: "bold"
    },
    title:{
        fontSize: 25,
        margin:10
    },
    logo:{
        margin: 10
    }
});


