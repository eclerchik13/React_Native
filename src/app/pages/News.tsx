import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";

const NewForm: React.FC= () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Регистрация</Text>
                <TextInput style={styles.textInput} placeholder={"Username*"}/>
                <TextInput style={styles.textInput} placeholder={"Фамилия*"}/>
                <TextInput style={styles.textInput} placeholder={"Имя*"}/>
                <TextInput style={styles.textInput} placeholder={"Отчество*"}/>
                <TextInput style={styles.textInput} placeholder={"E-mail*"}/>
                <TextInput style={styles.textInput} placeholder={"Телефон*"}/>
                <TextInput style={styles.textInput} placeholder={"Password*"}/>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple press')}>
                    <Text style={styles.textButton}>РЕГИСТРАЦИЯ</Text>
                </TouchableOpacity>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const NewPage: React.FC= () =>{
    return(
        <View style={styles.container}>
            <Header/>
            <NewForm />
            <Footer/>
        </View>
    )
}

export default NewPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
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
    }
});
