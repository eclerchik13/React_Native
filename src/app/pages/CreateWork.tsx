import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, Alert} from 'react-native';
import Footer from "../common/Footer";
import {Header}from "../common/Header";
import {ThemeType} from "../common/Components"

//import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
//import { AntDesign } from '@expo/vector-icons';

/*
const CreateWork: React.FC = () => {
    const [mainTheme] = useContext<any>(ThemeType)
    const [styleButton, setStyle] = useState({
        color: '#C0C0C0',
        border: 1
    })
    const [newWork, setNewWork] = useState({
        theme: '',
        purpose: '',
        content: '',
        result: '',
        source: ''
    })
    const [msg, setMsg] = useState("")

    function CreateWork() {

        if (newWork.theme == '' ||
            newWork.purpose == ''||
            newWork.content == ''||
            newWork.result == '' ||
            newWork.source == '' ){
            setMsg("You need fill all fields!")
        }
        else{

            fetch('https://crudcrud.com/api/3665a51755b5433b9c05832ffe3f7299/unicorns',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    theme: newWork.theme,
                    purpose:  newWork.purpose,
                    content: newWork.content,
                    result: newWork.result,
                    source: newWork.source})
            })
                .then(response => response.json())
                .then(data => {
                    if (data.msg == "error"){
                        setMsg('Error: repeat send')
                    }else{
                        //navigation
                    }})}

    }

    return (
        <View >
            <CardNative style={{width: 350,
                height: 280,
                backgroundColor: mainTheme.colorContainerNew.backgroundColor,
                borderRadius: 7}}>
                <CardItemNative header style={[styles.header,mainTheme.colorContainerNew,{borderRadius: 7}]}>
                    <Text style={[styles.title, mainTheme.colorText]}>Создание НИР</Text>

                </CardItemNative>

                <CardItemNative style={[mainTheme.colorContainerNew]}>
                    <BodyNative style={[styles.containerBody]}>
                        <FormNative style={styles.containerBody}>
                            //{/*@ts-ignore
                            <SelectTeacher onSelect={item => setTeachers(teachers[item.row])} value={chosenTeacher}/>

                            <TextInput placeholder={"Описание работы"}
                                       onFocus={() => setStyle({color:'#3f51b5',border: 1})}
                                       onBlur={() => setStyle({color:'#C0C0C0', border: 1})}
                                       style={[{
                                           borderColor: styleButton.color,
                                           height: 45,
                                           width: 300,
                                           borderWidth: styleButton.border,
                                           borderRadius:7,
                                           color: mainTheme.colorText.color,
                                           marginTop: 10,
                                           marginBottom: 10,
                                           paddingLeft: 15
                                       }]}
                                       placeholderTextColor={mainTheme.placeholderColor.color}
                                       //selectionColor={color}
                                       textAlign={'left'}
                                       multiline={true}
                                //returnKeyType={"done"}
                                       blurOnSubmit={true}
                                       clearButtonMode={"always"}
                                       onChangeText={(e: string) =>(setNewWork(e))}

                            />
                            <Button style={{container: [styles.button, mainTheme.colorButton],text: styles.textButton}} onPress={CreateWork}
                                    text={"Добавить"}/>
                            <Text style={[{margin: 10 }, styles.error_msg]}>{msg}</Text>
                        </FormNative>
                    </BodyNative>
                </CardItemNative>

            </CardNative>
        </View>
    )
}

const CreateWork: React.FC = () => {
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>

            <View style={[styles.containerForCards,  mainTheme.colorBackGroundContainerNew]}>
                <CreateWork/>

            </View>
        </View>
    )
}*/

const Hello: React.FC = () => {
    return(
        <View>
            <Text>Hi</Text>
        </View>
    )
}

const  CreatePage: React.FC<any>= ({navigation}) =>{

    const onpress = () => {navigation.openDrawer()}
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"Создание работы"} titletwo={'Кафедра №42'} onpress={onpress}/>
            <Hello/>
            <Footer/>
        </View>

    )
}

export default CreatePage

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
    containerForCards:{
        display: 'flex',
        justifyContent: "space-around",
        flexDirection: "column"
    },
    button:{
        backgroundColor: "#FF4D4D",
        borderRadius: 7,
        width: 300,
        height: 45
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
        fontSize: 15,
        color: "#ffff",
        fontWeight: "bold"
    },
    title:{
        fontSize: 20
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
    },
    header:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    containerBody:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
    },
    error_msg:{
        color: "#FF4D4D"
    }
});