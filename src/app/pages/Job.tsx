import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Footer from "../common/Footer";
import {Header} from "../common/Header";
import { ITime} from "./News"
import {ThemeType} from "../common/Components";

let Job_One: Vacancy =  {
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
    shortInformation: "Совсем маленькая, но очень нужная информация",
    date: '13.10.2021'
}

let Job_Two: Vacancy = {
    data: "🔐 Компания КриптоПро – лидер разработки криптографических средств защиты информации и электронной подписи. Продуктом, стоящим в фундаменте всех наших разработок, является КриптоПро CSP."
        +"\n\n"+"Это кроссплатформенный набор библиотек, приложений и служб, которые:"+ "\n" + "● реализуют криптографические алгоритмы и протоколы" + "\n" +
        "● обеспечивают абстракцию от платформы " + "\n" +
        "● реализуют поддержку инфраструктуры открытых ключей/сертификатов, токенов и смарт-карт" + "\n" +
        "● предоставляют стандартизованные API для встраивания (CryptoAPI, CNG, PKCS#11, openssl) и GUI/TUI для людей"+ "\n" +
        "● успешно встроены в MS IE, MS IIS, MS Outlook, MS IPsec, MS EFS, Chromium, Firefox, openssl, ngnix, Apache и проч." + "\n\n" +
        "Всё это нужно для:" + "\n" +
        "● защиты государственных информационных систем" + "\n" +
        "● безопасного доступа к государственным порталам" + "\n" +
        "● электронных торгов и электронной налоговой отчётности" + "\n" +
        "● работы системы электронных паспортов (пока заграничных)"+ "\n" +

        "💫 В процессе работы вы:" + "\n" +
        "● поучаствуете в промышленной разработке бок о бок с лучшими специалистами в отрасли" + "\n" +
        "● познакомитесь с ОС Window/Linux/FreeBSD/Solaris/AIX/macOS/iOS/Android/Sailfish" + "\n" +
        "● поработаете на Intel/AMD/PowerPC/ARM/MIPS/Эльбрус" + "\n" +
        "● узнаете про POSIX/SVN/Jenkins/gdb/WinDbg/wxWidgets/cppunit/TDD/CI и многое другое" + "\n\n" +

        "📚 Требования:"+ "\n" +
        "● высшее техническое или математическое образование (в том числе студенты старших курсов)" + "\n" +
        "● понимание принципов устройства операционных систем Windows/*nix"+ "\n" +
        "● навыки разработки на Си, в меньшей степени – на C++ (Привет, Ваня!)"+ "\n\n" +
        "🚀 Условия работы:"+ "\n" +
        "Умирать каждый день" + "\n\n" +

        "📲 Для связи:"+"\n"+"raa@cryptopro.ru - Русев Андрей Андреевич, начальник отдела системных разработок"+ "\n\n" +

        "Все вакансии компании: https://www.cryptopro.ru/job",
        title: "Вакансия/стажировка в \"КриптоПро\" [2]",
        shortInformation: 'Младший разработчик на С/С++ в отдел системных раз',
        date: '13.10.2021'
}

interface Vacancy {
    title: string,
    shortInformation: string,
    data: string,
    date: string
}


const Job: React.FC<Vacancy> = (props) => {

    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <View style={[styles.containerNew, mainTheme.colorContainerNew]}>
            <Text style={[styles.title, mainTheme.colorText]}>{props.title}</Text>
            <Text style={styles.shortInformation}>{props.shortInformation}</Text>
            <Text style={[styles.data, mainTheme.colorText]}>{props.data}</Text>
            <View style={[styles.cherta, mainTheme.colorCherta]}/>
            <ITime date={props.date}/>
        </View>
    )
}

const NewForm: React.FC = () => {

    const [mainTheme] = useContext<any>(ThemeType)
    return(
        <SafeAreaView style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <View>
                <Job data={Job_One.data}
                     title={Job_One.title} date={Job_One.date} shortInformation={Job_One.shortInformation}/>
                <Job data={Job_Two.data}
                     title={Job_Two.title} date={Job_Two.date} shortInformation={Job_Two.shortInformation}/>
                <StatusBar style="dark" />
            </View>
        </SafeAreaView>
    )
}

const JobPage: React.FC<any>= ({navigation}) =>{
    const [mainTheme] = useContext<any>(ThemeType)
    const onpress = () => { navigation.openDrawer()}
    return(
        <View style={[styles.container, mainTheme.colorBackGroundContainerNew]}>
            <Header title={"Вакансии"} titletwo={'Кафедра №42'} onpress={onpress}/>
            <ScrollView>
                <NewForm />
                <Footer/>
            </ScrollView>
        </View>

    )
}

export default JobPage

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
    },
    shortInformation: {
        color: "grey",
        fontSize: 12,
        marginLeft: 10
    }
});