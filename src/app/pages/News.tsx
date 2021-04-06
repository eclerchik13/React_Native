import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Footer from "../common/Footer";
import Header from "../common/Header";
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface Article {
    title: string,
    data: string,
    date: string
}

interface Time{
    date: string
}

const Time: React.FC<Time> = (props) =>{
    return(
        <Text style={styles.time}>
            <Text ><MaterialCommunityIcons name="clock-time-two-outline" size={24} color="#5622b6"/></Text>
            <Text style={styles.date}>{props.date}</Text>
        </Text>
    )
}

const New: React.FC<Article> = (props) => {
    return(
        <View style={styles.containerNew}>
            <View style={styles.cherta}>
            <Text style={styles.title}>{props.title}</Text>
            </View>
            <Text style={styles.data}>{props.data}</Text>
            <Time date={props.date}/>
        </View>
    )
}

const NewForm: React.FC = () => {
    return(

        <SafeAreaView style={styles.container}>
            <View>
                <New data={"В среду Денис Макрушин снова приглашает на открытую лекцию.\n" +
                "\n" +
                "В этот раз вести её будет Александр Барабанов, Principal Security Architect в команде Huawei Advanced Security Research.\n" +
                "\n" +
                "Тема лекции - Безопасность микросервисной архитектуры и её типовые уязвимости.\n" +
                "\n" +
                "Topic: Denis Makrushin's Open Lecture \n" +
                "Time: Nov 18, 2020 05:55 PM Moscow \n" +
                " \n" +
                "Join Zoom Meeting \n" +
                "https://zoom.us/j/95098133837?pwd=eHBVYzlBSkhjTlM5NXgvYmF1SldxZz09"}
                     title="Открытая лекция Дениса Макрушина!" date={'13.10.2021'}/>
                <New data={"В этом году CyberCrimeCon проходит онлайн!\n" +
                "\n" +
                "CyberCrimeCon объединяет передовых профессионалов в области кибербезопасности и независимых исследователей из финансового и технического секторов, крупных розничных и промышленных компаний, а также правоохранительных органов.\n" +
                "\n" +
                "Его цель - представить результаты последних исследований и поделиться опытом с целью предотвращения, обнаружения и реагирования на проблемы безопасности.\n" +
                "\n" +
                "CyberCrimeCon предназначен для широкого круга участников: CISO, CIO, охотников за угрозами и исследователей угроз, специалистов по реагированию на инциденты и исследователей, экспертов SOC, аналитиков TI, пентестеров и других.\n" +
                "\n" +
                "Конференция - это возможность узнать и обменяться практическими идеями и технологиями.\n" +
                "\n" +
                "Среди спикеров - наша выпускница - Веста Матвеева!\n" +
                "\n" +
                "Даты проведения: 25-26 ноября.\n" +
                "\n" +
                "Подробности и регистрация по ссылке! https://virtual.group-ib.com/"}
                     title="CyberCrimeCon 2020" date={'13.10.2021'}/>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const NewPage: React.FC= () =>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <Header title={"Новости"}/>
            <NewForm />
            <Footer/>
        </View>
        </ScrollView>
    )
}

export default NewPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#f4f6f8"
    },
    containerNew:{
        borderColor: '#fafafa',
        borderWidth: 1,
        backgroundColor: "#fafafa",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 10
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
        margin:10,
    },
    title:{
        fontSize: 25,
        margin: 10
    },
    date:{
        alignItems: 'center',
        position: "relative"
        //paddingBottom: 0.5
    },
    icon:{

    },
    time:{
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 15
    },
    cherta:{
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb"
    }
});
