import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";
import InputField from "../common/Components";

interface RUser {
    username: string,
    secondName: string,
    name: string,
    thirdName: string,
    email: string,
    telephone: string,
    password: string
}

const RegForm: React.FC= ({}) => {
    const [registration, setRegister] = useState<RUser>({
        username: '',
        secondName: '',
        name: '',
        thirdName: '',
        email: '',
        telephone: "",
        password: ''
    })

    function CreateUser() {
        Alert.alert(JSON.stringify({username: registration.username,
        secondName: registration.secondName,
        name: registration.name,
        thirdName: registration.thirdName,
        email: registration.email,
        telephone: registration.telephone,
        password: registration.password}))
    }

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Регистрация</Text>
                <InputField argument={"Username*"}
                            onChangeText={(e: string) =>(setRegister({...registration, username: e}))}/>
                <InputField argument={"Фамилия*"}
                            onChangeText={(e: string) =>(setRegister({...registration, secondName: e}))}/>
                <InputField argument={"Имя*"}
                            onChangeText={(e: string) =>(setRegister({...registration, name: e}))}/>
                <InputField argument={"Отчество*"}
                            onChangeText={(e: string) =>(setRegister({...registration, thirdName: e}))}/>
                <InputField argument={"E-mail*"}
                            onChangeText={(e: string) =>(setRegister({...registration, email: e}))}/>
                <InputField argument={"Телефон*"}
                            onChangeText={(e: string) =>(setRegister({...registration, telephone: e}))}/>
                <InputField argument={"Password*"}
                            onChangeText={(e: string) =>(setRegister({...registration,password: e}))}/>
                <TouchableOpacity style={styles.button} onPress={() =>CreateUser() }>
                    <Text style={styles.textButton}>РЕГИСТРАЦИЯ</Text>
                </TouchableOpacity>
                <StatusBar style="dark" />
            </View>
            <Footer/>
        </SafeAreaView>
        </ScrollView>
    )
}

const RegPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.openDrawer()}
    return(
        <View style={styles.container}>
            <Header title={"Кафедра №42"} titletwo={"Криптология и кибербезопасность"} onpress={onpress}/>
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
        //borderColor: 'gray',
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
