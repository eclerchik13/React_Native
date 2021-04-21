import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface Contacts{
    number: string,
    email: string,
    telegram: string
}

const Text_ = {
    date: "Обратитесь в нашу службу поддержки, если у Вас возникли трудности с работой в приложении."
}

const contact: Contacts = {
    number: '+7 (495) 788 56 99 доб. 9642',
    email: "admin@ikaf42.ru",
    telegram: "@meloman42"
}

const Tel: React.FC = () => {
    return(
        <View style={styles.marg2}>
            <Text style={styles.title_C}>Номер телефона</Text>
            <Text>{contact.number}</Text>
        </View>
    )
}

const Email:React.FC = () => {
    return(
        <View style={styles.marg}>
            <Text style={styles.title_C}>Почта</Text>
            <Text>{contact.email}</Text>
        </View>
    )
}

const Telegram:React.FC = () => {
    return (
        <View style={styles.marg3}>
            <Text style={styles.title_C}>Telegram</Text>
            <Text>{contact.telegram}</Text>
        </View>
    )
}
const Contact: React.FC = () => {
    return (
        <View style={styles.container_C}>
            <View style={styles.row}>
                <Foundation name="telephone" size={50} color="black" />
                <Tel/>
            </View>
            <View  style={styles.row}>
                <MaterialIcons name="local-post-office" size={50} color="black" />
               <Email/>
            </View>
            <View style={styles.row}>
                <FontAwesome5 name="telegram-plane" size={50} color="black" />
                <Telegram/>
            </View>
        </View>
    )
}

const Help: React.FC = () => {
    return(
        <View style={styles.Htext}>
            <Text style={styles.title}>Вам нужна наша помощь?</Text>
            <Text style={styles.minititle}>{Text_.date}</Text>
        </View>
    )
}

const HelpForm: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Help/>
                <Contact/>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const HelpPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.openDrawer()}
    return(
        <View style={styles.container}>
            <Header title={"Поддержка"} titletwo={''} onpress={onpress}/>
                <HelpForm/>
                <Footer/>
        </View>

    )
}


export default HelpPage

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: "#f4f6f8"
    },
    container_C: {
        marginBottom: 71
    },
    data:{
        fontSize: 14,
        margin:10,
    },
    title:{
        fontSize: 25,
        margin: 10,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    minititle:{
        fontSize: 15,
        margin: 10,
        color: "white",
        fontWeight: "bold",
        textAlign :"center"
    },
    time:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 7,
        marginTop: 7
    },
    row:{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    Htext:{
        marginTop: 80,
        marginBottom: 20,
        width:300,
        height: 200,
        alignItems: "center",
        borderColor: '#3f51b5',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#3f51b5",
        //flexDirection: "row",
        justifyContent: "center"
    },
    title_C:{
        fontSize: 20,
        fontWeight: "bold",
    },
    marg:{
        marginLeft: 11
    },
    marg2: {
        marginLeft: 25
    },
    marg3: {
        marginLeft: 17
    }
});