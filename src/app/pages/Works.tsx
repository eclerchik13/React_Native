import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Footer from "../common/Footer";
import {Header}from "../common/Header";
import {teachers, SelectTeacher, ThemeType} from "../common/Components"
import {Button} from "react-native-material-ui";
import {
    Card as CardNative,
    CardItem as CardItemNative,
    Body as BodyNative,
    Form as FormNative
} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons';
//import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
//import { AntDesign } from '@expo/vector-icons';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const CreateNewWork: React.FC<any> = (props) => {
    const [mainTheme] = useContext<any>(ThemeType)
    const [chosenTeacher, setTeachers] = useState<any>(undefined)
    let color = mainTheme.colorIconHelp.color
    const [styleButton, setStyle] = useState({
        color: '#C0C0C0',
        border: 1
    })
    const [newWork, setNewWork] = useState("")
    const [msg, setMsg] = useState("")



    function CreateWork() {

        if (chosenTeacher == undefined || newWork == ''){
            setMsg("You need fill all fields!")
                //return false
        }
        else{
            return props.onpress
            /*
                fetch('https://crudcrud.com/api/3665a51755b5433b9c05832ffe3f7299/unicorns',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({teacher: chosenTeacher,
                        description: newWork})
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.msg == "error"){
                            setMsg('Error: repeat send')
                        }else{
                            //navigation
                        }})*/
           // console.log(props.onpress)

        }
        }

    return (
        <View >
            <CardNative style={{width: 350,
                                height: 280,
                                backgroundColor: mainTheme.colorContainerNew.backgroundColor,
                                borderRadius: 7}}>
                <CardItemNative header style={[styles.header,mainTheme.colorContainerNew,{borderRadius: 7}]}>
                    <Text style={[styles.title, mainTheme.colorText]}>Создание НИР</Text>
                    <FontAwesome5 name="pen" size={24} color={color} style={{marginLeft: 15}}/>
                </CardItemNative>

                <CardItemNative style={[mainTheme.colorContainerNew]}>
                    <BodyNative style={[styles.containerBody]}>
                        <FormNative style={styles.containerBody}>
                            {/*@ts-ignore*/}
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
                                        selectionColor={color}
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

const WorkCards: React.FC<any> = (props) => {
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>

        <View style={[styles.containerForCards,  mainTheme.colorBackGroundContainerNew]}>
            <CreateNewWork onpress={props.onpress}/>
            <Button text={"here"} onPress={props.onpress}/>
        </View>
        </View>
    )
}

const WorkPage: React.FC<any>= ({navigation}) =>{
    const onpress_ =()=> {navigation.navigate("Работа студента")}
    const onpress = () => {navigation.openDrawer()}
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"Работа"} titletwo={'Кафедра №42'} onpress={onpress}/>
            <WorkCards onpress={onpress_}/>
            <Footer/>
        </View>

    )
}

export default WorkPage

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