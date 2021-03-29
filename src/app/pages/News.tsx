import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";


interface Article {
    title: string,
    data: string,
    date: string
}

const New: React.FC<Article> = (props) => {
    return(
        <View style={styles.containerNew}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.data}>{props.data}</Text>
            <Text>{props.date}</Text>
        </View>
    )
}

const NewForm: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <New data={"В эту среду Денис Макрушин снова приглашает на октрытую лекцию."}
                     title="Открытая лекция Дениса Макрушина!" date={'13.10.2021'}/>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const NewPage: React.FC= () =>{
    return(
        <View style={styles.container}>
            <Header/>
            <NewForm />
            <Footer/>
        </View>
    )
}

export default NewPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    containerNew:{
        width: 350,
        height: 200,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: '#ffff',
        borderWidth: 1,
        backgroundColor: "#DBDBDB",
        borderRadius: 10
    },
    button:{
        backgroundColor: "#ff0044",
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
    data:{
        fontSize: 14,
        margin:10
    },
    title:{
        justifyContent: "center",
        fontSize: 25,
        //margin:10
    }
});
