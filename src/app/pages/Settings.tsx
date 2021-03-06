import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import Footer from "../common/Footer";
import {Header}from "../common/Header";
import {ThemeType} from "../common/Components"
import {Button} from "react-native-material-ui";

/*
const TextInputs: React.FC<any> = (props) => {
    const [mainTheme] = useContext<any>(ThemeType)
    const [o, setO] = useState(props.oldPass)
    const [value, setValue] = useState({
        //oldPassword: "",
        newPassword:"",
        confirmPassword:'',
        showOld: false,
        showNew: false,
        showConfirm: false,
        error:'',
        color: "#FF4D4D"
    })

    function putNewPassword(){
        fetch('https://crudcrud.com/api/af0d1f36c67e4792afc20f94e52a2fb8/user_/60927a2d13120c03e81c9afb',{
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username: "Valeria",
                password: value.newPassword,
                role: true
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(()=>{

    })
}
*/

const Changes: React.FC = () => {
    const [mainTheme] = useContext<any>(ThemeType)

    const [value, setValue] = useState({
        //oldPassword: "",
        newPassword:"",
        confirmPassword:'',
        showOld: false,
        showNew: false,
        showConfirm: false,
        error:'',
        color: "#FF4D4D"
    })

    const [oldPas, setOldPas] = useState('')

    /*
    function AddUser(){
        fetch('https://crudcrud.com/api/af0d1f36c67e4792afc20f94e52a2fb8/user_',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username: "Valeria",
                password: "13102000",
                role: true
                })
        })
            .then(response => response.json())
            .then(data => {
               console.log(data)
            })
    }*/


    function ChooseUser(){
        /*fetch('https://crudcrud.com/api/af0d1f36c67e4792afc20f94e52a2fb8/user_/60927a2d13120c03e81c9afb',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
            },
        })
            .then(response =>  response.json())
            .then(data => {
                setOldPas(data.password)
            })*/
        setOldPas('56789')
    }

    /*
    function putNewPassword(){
        fetch('https://crudcrud.com/api/af0d1f36c67e4792afc20f94e52a2fb8/user_/60927a2d13120c03e81c9afb',{
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username: "Valeria",
                password: value.newPassword,
                role: true
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }*/

    useEffect(()=>{
        ChooseUser()
    },[])

    function ChangePassword(){
        if (value.newPassword === value.confirmPassword){
            setValue({...value, error: "Success!", color: "green"})

           // putNewPassword()

        }else{
            setValue({...value, error: "???????????? ???? ??????????????????!", color: "#FF4D4D"})
        }
    }

    let color: string = mainTheme.selectionColor.color.toString()

    return(
        <SafeAreaView style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
        <View style={[styles.containerSetting,mainTheme.colorContainerNew]}>
            <Text style={[styles.title, mainTheme.colorText]}>?????????????????? ????????????</Text>
            <View style={[styles.cherta,mainTheme.colorCherta]}></View>
            <Text style={styles.shortInformation}>???????????? ????????????</Text>
                    <TextInput value={oldPas}
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
                <TextInput placeholder={"?????????? ????????????*"}
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
            <TextInput placeholder={"?????????????????????? ?????????? ????????????*"}
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
                       onChangeText={(e:string) =>(setValue({...value, confirmPassword: e}))}/>
            <View style={[styles.cherta,mainTheme.colorCherta]}/>
            <Button style={{container: [styles.button, mainTheme.colorButton],text: styles.textButton}}
                    text={"??????????????????"} onPress={ChangePassword}/>
        </View>
            <Text style=
                      {[{color: value.color},styles.error]}>{value.error}</Text>
        </SafeAreaView>
    )
}

const SettingPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.openDrawer()}
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"??????????????????"} titletwo={'?????????????? ???42'} onpress={onpress}/>
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
        marginTop: 10
    }
});