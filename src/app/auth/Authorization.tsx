import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Alert, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";


const AuthForm: React.FC= () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../images/logo.png")} style={styles.logo}/>
                <Text style={styles.title}>Авторизация</Text>
                <TextInput style={styles.textInput} placeholder={"Username*"}/>
                <TextInput style={styles.textInput} placeholder={"Password*"}/>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple press')}>
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
            <Header/>
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
        backgroundColor: "#ff0044",
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


