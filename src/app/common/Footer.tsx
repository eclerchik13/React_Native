import React, {useContext} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {ThemeType} from "./Components";

const Footer: React.FC= () => {
    const year = new Date().getFullYear();
    // @ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)

    return(
        <View style={styles.container}>
            <Text style={[styles.text, mainTheme.colorText]}> Кафедра №42 &apos;Криптология и кибербезопасность&apos;</Text>
            <Text style={[styles.text, mainTheme.colorText]}>Национальный исследовательский</Text>
            <Text style={[styles.text,mainTheme.colorText]}>ядерный университет МИФИ</Text>
            <Text style={[styles.date, mainTheme.colorText]}>{year}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        margin: 10
    },
    text: {
        textAlign: "center"
    },
    date:{
        color: "grey"
    }
});
