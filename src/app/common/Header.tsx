import React, {useContext} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Button, Icon, Toggle} from "@ui-kitten/components";
import {Theme_Web, ThemeType, themes, AuthContext} from "./Components";

interface Title{
    title: string,
    titletwo:string
}

const TextMainHeader: React.FC<Title> = (props ) => {
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.lowtitle}>{props.titletwo}</Text>
        </View>
    )
}

const TextHeader: React.FC<Title> = (props ) => {
    return(
        <View>
            <Text style={styles.title_}>{props.title}</Text>
            <Text style={styles.lowtitle_}>{props.titletwo}</Text>
        </View>
    )
}

const Header: React.FC<any> = (props) => {

    const [theme, setTheme] = useContext<any>(Theme_Web)

    const [mainTheme, setMainTheme] = useContext<any>(ThemeType)
    //@ts-ignore
    const [isAuth, setAuth] = useContext<any>(AuthContext)
    function ThemeChange(){
        if (theme == true){
            setTheme(false)
            setMainTheme(themes.light)
        }
        else {
            setTheme(true)
            setMainTheme(themes.dark)
        }
    }
    return(
        <View style={[mainTheme.containerMainHeader, styles.container]}>
            <Button style={styles.button_menu} appearance={'ghost'}
                    accessoryLeft={()=> <Icon name='menu-outline' style={styles.icon} fill={"white"} />}
                    onPress={props.onpress}
            />
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <TextHeader title={props.title} titletwo={props.titletwo}/>
            <Toggle onChange={ThemeChange} status={"control"} checked={theme} style={styles.toggleContainer_}/>
            <Button style={styles.iconOut} appearance={'ghost'}
                    accessoryLeft={()=> <Icon name='log-out-outline' style={styles.icon} fill={"white"} />}
                    onPress={()=> setAuth(false)}
            />
        </View>
    )
}

const MainHeader: React.FC<any> = (props) => {

    const [theme, setTheme] = useContext<any>(Theme_Web)

    const [mainTheme, setMainTheme] = useContext<any>(ThemeType)

    function ThemeChange(){
        if (theme == true){
            setTheme(false)
            setMainTheme(themes.light)
        }
        else {
            setTheme(true)
            setMainTheme(themes.dark)
        }
    }
    //<Image source={require('../images/logo.png')} style={styles.logo_}/>
    // <View style={[styles.container, {backgroundColor: mainTheme.backgroundColor}]}>
    return(
        <View style={[mainTheme.containerMainHeader, styles.container]}>
            <TextMainHeader title={props.title} titletwo={props.titletwo}/>
            <Button style={styles.button} appearance={'ghost'} onPress={props.onpress} size={'tiny'} status={"control"}>
                {props.text}
            </Button>
            <Toggle onChange={ThemeChange} status={"control"} checked={theme} style={styles.toggleContainer}/>
        </View>
    )
}

export {Header, MainHeader}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        //backgroundColor:"#3f51b5",
        width:420,
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 17
    },
    logo:{
        width: 60,
        height: 37,
        margin: -20
    },
    title:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 15,
        color: "#f4f6f8",
        fontWeight: "bold",
    },
    title_:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 15,
        color: "#f4f6f8",
        fontWeight: "bold",
        marginLeft: 40,
        marginRight: 20
    },
    lowtitle:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 12,
        color: "#f4f6f8",
        //marginLeft: 10
    },
    lowtitle_:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 12,
        color: "#f4f6f8",
        marginLeft: 40,
        marginRight: 25
    },
    button:{
        position: "relative",
        left:15,
        marginRight:20,
        marginLeft: 80
    },
    button_menu:{
        position: "relative",
        left:-15,
        marginRight:10
    },
    text_:{
        color: "white"
    },
    icon:{
        width: 40,
        height: 40,
    },
    toggleContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    toggleContainer_:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 40
    },
    iconOut:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
       // marginLeft: 50
    }
});
