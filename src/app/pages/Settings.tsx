import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import Footer from "../common/Footer";
import {Header}from "../common/Header";
import {ThemeType} from "../common/Components"
import {Button} from "react-native-material-ui";

const Changes: React.FC = () => {
    //@ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    const [value, setValue] = useState({
        oldPassword: "",
        newPassword:"",
        confirmPassword:'',
        showOld: false,
        showNew: false,
        showConfirm: false,
        error:''
    })

    function ChangePassword(){
        if (value.newPassword != value.confirmPassword){
            setValue({...value, error: "Пароли не совпадают!"})
        }
    }
    let color: string = mainTheme.selectionColor.color.toString()
    //style={[styles.container, mainTheme.colorBackGroundContainerNew]
    return(
        <SafeAreaView style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
        <View style={[styles.containerSetting,mainTheme.colorContainerNew]}>
            <Text style={[styles.title, mainTheme.colorText]}>Изменение пароля</Text>
            <View style={[styles.cherta,mainTheme.colorCherta]}></View>
            <Text style={styles.shortInformation}>Старый пароль</Text>
                    <TextInput value={"It's old password"}
                           style={{
                               borderColor: "gray",
                               height: 60,
                               width: 300,
                               borderWidth: 1,
                               borderRadius:7,
                               margin: 5,
                               marginLeft: 10,
                               color: mainTheme.colorText.color
                           }} textAlign={"center"}
                           secureTextEntry={true} showSoftInputOnFocus={true} selectionColor={color}
                />
                <TextInput placeholder={"Новый пароль*"}
                           placeholderTextColor={mainTheme.placeholderColor.color}
                           style={{
                               borderColor: "gray",
                               height: 60,
                               width: 300,
                               borderWidth: 1,
                               borderRadius:7,
                               margin: 5,
                               marginLeft: 10,
                               color: mainTheme.colorText.color
                           }} selectionColor={color}
                           textAlign={"center"}
                           clearButtonMode={"always"}
                           onChangeText={(e:string) =>(setValue({...value, newPassword: e}))}/>
            <TextInput placeholder={"  Подтвердите новый пароль*"}
                       placeholderTextColor={mainTheme.placeholderColor.color}
                       style={{
                           borderColor: "gray",
                           height: 60,
                           width: 300,
                           borderWidth: 1,
                           borderRadius:7,
                           margin: 5,
                           marginLeft: 10,
                           marginBottom: 15,
                           color: mainTheme.colorText.color
                       }} selectionColor={color}
                       textAlign={"center"}
                       clearButtonMode={"always"}
                       onChangeText={(e:string) =>(setValue({...value, newPassword: e}))}/>
            <View style={[styles.cherta,mainTheme.colorCherta]}/>
            <Button style={{container: [styles.button, mainTheme.colorButton],text: styles.textButton}}
                    text={"Отправить"} onPress={ChangePassword}/>
        </View>
            <Text style={styles.error}>{value.error}</Text>
        </SafeAreaView>
    )
}

const SettingPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.openDrawer()}
    //@ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"Настройки"} titletwo={'Кафедра №42'} onpress={onpress}/>
            <Changes/>
            <Footer/>
        </View>

    )
}

export default SettingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    containerSetting:{
        borderWidth: 1,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        //margin: 20
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
        margin: 10,
        marginLeft: 45
    },
    cherta:{
        borderBottomWidth: 1,
        margin: 1
    },
    shortInformation: {
        color: "grey",
        fontSize: 12,
        marginLeft: 15,
        marginTop: 10
    },
    containerSet: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    error:{
        color: "#FF4D4D",
        margin: 5
    }
});