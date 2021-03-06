import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Footer from "../common/Footer";
import {Header} from "../common/Header";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ThemeType} from "../common/Components";

let New_One: Article =  {
    data: "В среду Денис Макрушин снова приглашает на открытую лекцию.\n" +
    "\n" +
    "В этот раз вести её будет Александр Барабанов, Principal Security Architect в команде Huawei Advanced Security Research.\n" +
    "\n" +
    "Тема лекции - Безопасность микросервисной архитектуры и её типовые уязвимости.\n" +
    "\n" +
    "Topic: Denis Makrushin's Open Lecture \n" +
    "Time: Nov 18, 2020 05:55 PM Moscow \n" +
    " \n" +
    "Join Zoom Meeting \n" +
    "https://zoom.us/j/95098133837?pwd=eHBVYzlBSkhjTlM5NXgvYmF1SldxZz09",
    title: "Открытая лекция Дениса Макрушина!",
    date: '13.10.2021'
}

let New_Two: Article = {
    data: "В этом году CyberCrimeCon проходит онлайн!\n" +
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
        "Подробности и регистрация по ссылке! https://virtual.group-ib.com/",
    title: "CyberCrimeCon 2020",
    date: '13.10.2021'
}

interface Article {
    title: string,
    data: string,
    date: string
}

interface Time{
    date: string
}

const ITime: React.FC<Time> = (props) =>{
    const [mainTheme] = useContext<any>(ThemeType)
    let stringColor = mainTheme.colorIconTime.color.toString()
    return(
        <View style={styles.time}>
            <Text ><MaterialCommunityIcons name="clock-time-two-outline" size={24} color={stringColor}/></Text>
            <Text style={[styles.date, mainTheme.colorText]}>{props.date}</Text>
        </View>
    )
}

const New: React.FC<Article> = (props) => {
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.containerNew, mainTheme.colorContainerNew]}>
            <View style={[styles.cherta,mainTheme.colorCherta]}>
            <Text style={[styles.title, mainTheme.colorText]}>{props.title}</Text>
            </View>
            <Text style={[styles.data, mainTheme.colorText]}>{props.data}</Text>
            <View style={[styles.cherta,mainTheme.colorCherta]}/>
            <ITime date={props.date}/>
        </View>
    )
}

const NewForm: React.FC = () => {
    //  @ts-ignore
    const [mainTheme, setMainTheme] = useContext(ThemeType)
    return(
        <SafeAreaView style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <View>
                <New data={New_One.data}
                     title={New_One.title} date={New_One.date}/>
                <New data={New_Two.data}
                     title={New_Two.title} date={New_Two.date}/>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const NewPage: React.FC<any>= ({navigation}) =>{
    const onpress = () => { navigation.openDrawer()}
    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"Новости"} titletwo={'Кафедра №42'} onpress={onpress}/>
            <ScrollView>
            <NewForm />
            <Footer/>
            </ScrollView>
        </View>

    )
}

export { NewPage, ITime}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    containerNew:{
        borderWidth: 1,
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
        position: "relative",
        fontWeight: "bold",
        marginLeft: 7
    },
    icon:{

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
    cherta:{
        borderBottomWidth: 1
    }
});
