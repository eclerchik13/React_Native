import React, {useState} from "react";
import {TextInput} from "react-native";

const InputField: React.FC<any> = (props) =>{
    const [styleButton, setStyle] = useState({
        color: 'grey',
        border: 1
    })
    return(
        <>
            <TextInput onFocus={() => setStyle({color:'#3f51b5',border: 2})}
                       onBlur={() => setStyle({color:'grey', border: 1})}
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

export default InputField