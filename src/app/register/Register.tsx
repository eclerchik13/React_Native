import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View,  SafeAreaView, TouchableOpacity, ScrollView, Alert} from 'react-native';
import  { CheckBox} from "@ui-kitten/components";
import Footer from "../common/Footer";
import {MainHeader} from "../common/Header";
import {InputField, TitleHeader, AuthContext, ThemeType, data, SelectGroup} from "../common/Components";


interface RUser {
    username: string,
    secondName: string,
    name: string,
    thirdName: string,
    email: string,
    telephone: string,
    password: string,
    role: boolean,
    group: string
}

const RegForm: React.FC= ({}) => {
    const [registration, setRegister] = useState<RUser>({
        username: '',
        secondName: '',
        name: '',
        thirdName: '',
        email: '',
        telephone: "",
        password: '',
        role: false,
        group:""
    })
    // @ts-ignore
    const [isAuth, setAuth] = useContext(AuthContext)

    //@ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    const [Group, setGroup] = useState('')
    const [isStudent, setStudent] = useState(false)

    //@ts-ignore
    const NotStudent:React.FC<any> = (next) => {
       setStudent(next)
        if (isStudent){
            setGroup('')
        }
    }

function CreateUser() {
    /*
    fetch('https://crudcrud.com/api/3665a51755b5433b9c05832ffe3f7299/registration',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({username: registration.username,
        secondName: registration.secondName,
        name: registration.name,
        thirdName: registration.thirdName,
        email: registration.email,
        telephone: registration.telephone,
        password: registration.password,
        role: isStudent,
        group: Group})
    })
        .then(response => response.json())
        .then(data => {
            if (data != undefined){
                setAuth(true)
            }
        })
}*/

    setAuth(true)
    Alert.alert(JSON.stringify({username: registration.username,
        secondName: registration.secondName,
        name: registration.name,
        thirdName: registration.thirdName,
        email: registration.email,
        telephone: registration.telephone,
        password: registration.password,
        role: isStudent,
        group: Group}))
}
//<CheckBox checked={registration.role} onChange={nextChecked => setRegister({...registration, role: nextChecked})} style={[styles.containerCheckBox]}>Я студент</CheckBox>
    return(
        <SafeAreaView >
            <View style={[styles.container,mainTheme.backGroundColorPage]}>
                <Text style={[styles.title, mainTheme.colorText]}>Регистрация</Text>
                <InputField argument={"  Username*"}
                            onChangeText={(e: string) =>(setRegister({...registration, username: e}))}/>
                <InputField argument={"  Фамилия*"}
                            onChangeText={(e: string) =>(setRegister({...registration, secondName: e}))}/>
                <InputField argument={"  Имя*"}
                            onChangeText={(e: string) =>(setRegister({...registration, name: e}))}/>
                <InputField argument={"  Отчество*"}
                            onChangeText={(e: string) =>(setRegister({...registration, thirdName: e}))}/>


                <View style={styles.containerChoose}>
                    {/*@ts-ignore */}
                    <CheckBox checked={isStudent} onChange={nextChecked => NotStudent(nextChecked)} style={[styles.containerCheckBox]}>Я студент</CheckBox>
                    {/*@ts-ignore <Select selectedIndex={selectedIndex} onSelect={index => (setSelectedIndex(index))}*/}
                {isStudent == true && <SelectGroup  onSelect={item => setGroup(data[item.row])} value={Group}/>}
                </View>


                <InputField argument={"  E-mail*"}
                            onChangeText={(e: string) =>(setRegister({...registration, email: e}))}/>
                <InputField argument={"  Телефон*"}
                            onChangeText={(e: string) =>(setRegister({...registration, telephone: e}))}/>
                <InputField argument={"  Password*"}
                            onChangeText={(e: string) =>(setRegister({...registration,password: e}))}/>
                <TouchableOpacity style={styles.button} onPress={() =>CreateUser() }>
                    <Text style={styles.textButton}>РЕГИСТРАЦИЯ</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

//style={[styles.container,mainTheme.backGroundColorPage]}

const RegPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.navigate("Вход")}
    //@ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    return(
        <View style={[styles.MainContainer, mainTheme.backGroundColorPage]}>
            <MainHeader title={"Кафедра №42"} titletwo={TitleHeader.title} onpress={onpress} text={"ВОЙТИ"}/>
            <ScrollView >
            <RegForm />
            <Footer/>
            </ScrollView >
        </View>
    )
}

export default RegPage

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: 'center',
    },
    containerChoose:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 270
        //alignItems: "flex-start"
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
    },
    containerCheckBox:{
        marginTop: 20,
        marginBottom: 20,
        color: 'white'
        //marginLeft: -90
        //display: "flex",
        //flexDirection: "row",
        //justifyContent: "flex-start",
        //alignItems: "center",
    },
    MainContainer:{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
    }
});
