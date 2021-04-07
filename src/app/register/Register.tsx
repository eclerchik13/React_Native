import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Alert, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";

interface RUser {
    username: string,
    secondname: string,
    name: string,
    thirdname: string,
    email: string,
    telephone: string,
    password: string
}

const RegForm: React.FC= ({}) => {
    const [registr, setRegister] = useState<RUser>({
        username: '',
        secondname: '',
        name: '',
        thirdname: '',
        email: '',
        telephone: "",
        password: ''
    })

    function CreateUser() {
        Alert.alert(JSON.stringify({username: registr.username,
        secondname: registr.secondname,
        name: registr.name,
        thirdname: registr.thirdname,
        email: registr.email,
        telephone: registr.telephone,
        password: registr.password}))
    }

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Регистрация</Text>
                <TextInput style={styles.textInput} placeholder={"Username*"}
                    onChangeText={e =>(setRegister({...registr, username: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Фамилия*"}
                           onChangeText={e =>(setRegister({...registr, secondname: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Имя*"}
                           onChangeText={e =>(setRegister({...registr, name: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Отчество*"}
                           onChangeText={e =>(setRegister({...registr, thirdname: e}))}/>
                <TextInput style={styles.textInput} placeholder={"E-mail*"}
                           onChangeText={e =>(setRegister({...registr, email: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Телефон*"}
                           onChangeText={e =>(setRegister({...registr, telephone: e}))}/>
                <TextInput style={styles.textInput} placeholder={"Password*"}
                           onChangeText={e =>(setRegister({...registr, password: e}))}/>
                <TouchableOpacity style={styles.button} onPress={() =>CreateUser }>
                    <Text style={styles.textButton}>РЕГИСТРАЦИЯ</Text>
                </TouchableOpacity>
                <StatusBar style="dark" />
            </View>
            <Footer/>
        </SafeAreaView>
        </ScrollView>
    )
}

const RegPage: React.FC= () =>{
    return(
        <View style={styles.container}>
            <Header title={"Sign up"}/>
            <RegForm />
        </View>
    )
}

export default RegPage

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
    }
});
