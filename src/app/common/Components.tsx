import React, {useContext, useState} from "react";
import {StyleSheet, TextInput} from "react-native";
import {Select, SelectItem} from "@ui-kitten/components";

// @ts-ignore
const AuthContext = React.createContext();
// @ts-ignore
const Theme_Web = React.createContext()

const data = [
    "Б18-505",
    "Б18-565",
    'Б19-505',
    "Б19-565"
];

const SelectGroup: React.FC<any> = (props) => {

    const renderOption = (title: string) => (
        <SelectItem title={title}/>
    );
    return(
        <Select  placeholder={"Группы"} onSelect={props.onSelect}
                 style={{
                         width: 150,
                         marginTop: 10
                     }}
                 value={props.value} >
            {data.map(renderOption)}
        </Select>
    )
}



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
    }
});

const themes = {light, dark}

//@ts-ignore
const ThemeType = React.createContext(themes.light)

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
    // @ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)

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
                       }} placeholder={props.argument} placeholderTextColor={mainTheme.placeholderColor.color}
                       onChangeText={props.onChangeText}/>
        </>
    )
}

export {InputField, AuthContext, Theme_Web, TitleHeader, ThemeType, themes, data, SelectGroup}