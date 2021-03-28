import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Footer: React.FC= () => {
    const year = new Date().getFullYear();
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Кафедра №42 &apos;Криптология и кибербезопасность&apos;</Text>
            <Text style={styles.text}>Национальный исследовательский</Text>
            <Text style={styles.text}>ядерный университет МИФИ</Text>
            <Text style={styles.date}>{year}</Text>
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
