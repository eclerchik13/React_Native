import React, {useContext, useState} from 'react';
import {StyleSheet,  View,  Image,  Text, SafeAreaView} from 'react-native'
import Footer from "../common/Footer";
import {MainHeader}from "../common/Header";
import { Button } from 'react-native-material-ui';
import {InputField, AuthContext, TitleHeader, ThemeType} from "../common/Components";

interface IUser {
    username: string,
    password: string
}

const AuthForm: React.FC= () => {

    // @ts-ignore
    const [isAuth, setAuth] = useContext(AuthContext)
    // @ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)

    const [msg, setMsg] = useState("")

    const [log, setLog] = useState<IUser>({
        username: '',
        password: ''
    })

    function CreateUser() {
            /*fetch('https://crudcrud.com/api/3665a51755b5433b9c05832ffe3f7299/unicorns',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({username: log.username,
                    password: log.password})
            })
                .then(response => response.json())
                .then(data => {
                    if (data.id == 0){
                    //if (data != undefined){
                        setAuth(true)
                    }
                    else{
                        setMsg("You are not registered!")
                    }
                })*/
        setMsg("You are not registered!")
    }

    return(
        <SafeAreaView style={[styles.container, mainTheme.backGroundColorPage]}>
        <View style={[styles.container, mainTheme.backGroundColorPage]}>
                <View style={styles.paper}>
                    <Image style={styles.picture} source={require("../images/logo.png")} />
                    <Text style={[styles.title, mainTheme.colorText]}>Авторизация</Text>
                    <InputField argument={"  Username*"}
                                onChangeText={(e:string) =>(setLog({...log, username: e}))}/>
                    <InputField argument={"  Password*"}
                                onChangeText={(e:string) =>(setLog({...log, password: e}))}/>
                        <Button style={{container: styles.button,text: styles.textButton}} onPress={CreateUser}
                                text={"Войти"}/>
                    <Text style={styles.error_msg}>{msg}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const AuthPage: React.FC<any> = ({navigation}) =>{
    //@ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    const onpress = () => { navigation.navigate("Регистрация")}
    return(
        <View style={[styles.container, mainTheme.backGroundColorPage]}>
            <MainHeader title={"Кафедра №42"} titletwo={TitleHeader.title} onpress={onpress} text={"РЕГИСТРАЦИЯ"}/>
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
        //backgroundColor: "#f4f6f8"
    },
    button:{
        backgroundColor: "#FF4D4D",
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
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        //right: '10px'
    },
    paper: {
        //margin: theme.spacing(12, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    picture: {
        //margin: theme.spacing(1),
    },
    buttonContainer:{
        backgroundColor: "#3f51b5"
    },
    textButtonReg:{
        color: "#f4f6f8"
    },
    error_msg:{
        color: "#FF4D4D"
}
});

/*
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
        </SafeAreaView>*/
/*

<Image source={require("../images/logo.png")}/>
                        <Text>
                            Кафедра №42
                        </Text>
                        <Text>
                            Криптология и кибербезопасность
                        </Text>
<View style={styles.right}>
                        <Button  style={{container: styles.buttonContainer, text: styles.textButtonReg}} text="Регистрация" />
                    </View>
*/