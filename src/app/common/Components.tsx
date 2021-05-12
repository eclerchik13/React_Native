import React, {useContext, useState} from "react";
import {StyleSheet, TextInput} from "react-native";
import {Select, SelectItem} from "@ui-kitten/components";

// @ts-ignore
const AuthContext = React.createContext();
// @ts-ignore
const Theme_Web = React.createContext()

const teachers = [
    "Гусев Дмитрий Анатольевич",
    "Горичный Алексей Дмитриевич",
    "Гошокова Марина Анатольевна",
    "Курагин Павель Валерьевич",
    "Лукашков Никита Эдуардович",
    "Макаров Георгий Андреевич",
    "Поворин Денис Юрьевич",
    "Романов Никита Андреевич",
    "Ростоманов Антон Демидович",
    "Сутулая Ирина Геннадьевна",
    "Собакина Собака Собачкина",
    "Тульский Анатолий Павлович",
    "Фараонова Карина Валерьевна",
    "Шаваранова Кристина Луканова",
    "Шуршунова Екатерина Сергеевна",
    "Шуха Марина Валентиновна",
    "Яблочкин Михаил Валентинович",
    "Япо Ольга Валерьевна"
]

const data = [
    "Б18-505",
    "Б18-565",
    'Б19-505',
    "Б19-565"
];

const dark = StyleSheet.create({
    containerMainHeader: {
        backgroundColor:"#424242"
    },
    backGroundColorPage:{
        backgroundColor: "#303030"
    },
    colorText:{
        color:"#FDFFFF"
    },
    placeholderColor:{
        color: '#C0C0C0'
    },
    colorIconTime:{
        color: '#3C3F41'
    },
    colorContainerNew:{
        borderColor: '#303030',
        backgroundColor: "#303030"
    },
    colorBackGroundContainerNew:{
        backgroundColor: "#212121"
    },
    colorCherta:{
        borderBottomColor: "#494949"
    },
    colorDrawerSection:{
        backgroundColor: "#303030"
    },
    colorIconDrawerSection:{
        color:'#8A85FF'
    },
    colorIconHelp:{
        color: "white"
    },
    colorHtext:{
        borderColor: '#424242',
        backgroundColor: "#424242"
    },
    colorButton:{
        backgroundColor: '#8A85FF'
    },
    colorForCheckBox:{
        color: "#8A85FF"
    },
    selectionColor:{
        color: '#ffffff'
    }
});

const light = StyleSheet.create({
    containerMainHeader: {
        backgroundColor:"#3f51b5",
    },
    backGroundColorPage:{
        backgroundColor: '#f4f6f8'
    },
    colorText:{
        color:"#000000"
    },
    placeholderColor:{
        color: '#C0C0C0'
    },
    colorIconTime:{
        color: '#5622b6'
    },
    colorContainerNew:{
        borderColor: '#fafafa',
        backgroundColor: "#fafafa"
    },
    colorBackGroundContainerNew:{
        backgroundColor: "#f4f6f8"
    },
    colorCherta:{
        borderBottomColor: "#dbdbdb"
    },
    colorDrawerSection:{
        backgroundColor: "white"
    },
    colorIconDrawerSection:{
        color:'#ff0044'
    },
    colorIconHelp:{
        color: "black"
    },
    colorHtext:{
        borderColor: '#3f51b5',
        backgroundColor: "#3f51b5"
    },
    colorButton:{
        backgroundColor: "#FF4D4D"
    },
    colorForCheckBox: {
        color: "#FF4D4D"
    },
    selectionColor:{
        color: '#000000'
    }
});

const themes = {light, dark}

const ThemeType = React.createContext(themes.light)

const SelectGroup: React.FC<any> = (props) => {
    const renderOption = (number: string) => (
        <SelectItem title={number} key={number}/>
    );
    return(
        <Select  placeholder={"Группы"} onSelect={props.onSelect}
                 style={{
                         width: 150,
                         marginTop: 10
                     }}
                status={"basic"}
                 value={props.value}
        >
            {data.map(renderOption)}
            {
                //props.data.map(renderOption)
            }
        </Select>
    )
}

const SelectTeacher : React.FC<any> = (props ) =>{
    const renderOption = (number: string) => (
        <SelectItem title={number} key={number}/>
    );
    return(
        <Select placeholder={"Выберите научного руководителя"}
                label={"Преподаватели"} onSelect={props.onSelect}
                style={{
                    width: 300
                }}
                status={"basic"}
                value={props.value}>
            {teachers.map(renderOption)}
        </Select>
    )
}

interface ITitleHeader {
    title: string
}

let TitleHeader : ITitleHeader = {
    title: "Криптология и"+"\n"+"кибербезопасность"
}

const InputField: React.FC<any> = (props) =>{
    const [styleButton, setStyle] = useState({
        color: '#C0C0C0',
        border: 1
    })

    const [mainTheme] = useContext<any>(ThemeType)
    let color: string = mainTheme.selectionColor.color.toString()
    return(
        <>
            <TextInput onFocus={() => setStyle({color:'#3f51b5',border: 2})}
                       onBlur={() => setStyle({color:'#C0C0C0', border: 1})}
                       style={{
                           borderColor: styleButton.color,
                           height: 60,
                           width: 300,
                           borderWidth: styleButton.border,
                           borderRadius:7,
                           margin: 5,
                           color: mainTheme.colorText.color
                       }} placeholder={props.argument}
                       placeholderTextColor={mainTheme.placeholderColor.color}
                       selectionColor={color}
                       textAlign={"center"}
                       clearButtonMode={"always"}
                       secureTextEntry={props.pas} showSoftInputOnFocus={props.pas}
                       onChangeText={props.onChangeText}
            />
        </>
    )
}

export {InputField, AuthContext, Theme_Web, TitleHeader, ThemeType, themes, data, SelectGroup, teachers, SelectTeacher}