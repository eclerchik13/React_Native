import React, {useState} from "react";
import {TextInput} from "react-native";

// @ts-ignore
const AuthContext = React.createContext();

const InputField: React.FC<any> = (props) =>{
    const [styleButton, setStyle] = useState({
        color: '#C0C0C0',
        border: 1
    })
    return(
        <>
            <TextInput onFocus={() => setStyle({color:'#3f51b5',border: 2})}
                       onBlur={() => setStyle({color:'#C0C0C0', border: 1})}
                       style={{
                           borderColor: styleButton.color,
                           height: 60,
                           width: 300,
                           //borderColor: 'gray',
                           borderWidth: styleButton.border,
                           borderRadius:7,
                           margin: 5,
                       }} placeholder={props.argument}
                       onChangeText={props.onChangeText}/>
        </>
    )
}

export {InputField, AuthContext}