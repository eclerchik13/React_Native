import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

interface Title{
    title: string
}

const Header: React.FC<Title>= (props) => {
    return(
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor:'#5622b6',
        width:420,
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 17
    },
    logo:{
        width: 80,
        height: 48,
        margin: 2,
    },
    title:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    }
});
