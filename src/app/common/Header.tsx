import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Button, Icon} from "@ui-kitten/components";

interface Title{
    title: string,
    titletwo:string
}

const Text_C: React.FC<Title> = (props ) => {
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.lowtitle}>{props.titletwo}</Text>
        </View>
    )
}

const Header: React.FC<any> = (props) => {
    return(
        <View style={styles.container}>
            <Button style={styles.button} appearance={'ghost'}
                    accessoryLeft={()=> <Icon name='menu-outline' style={styles.icon} fill={"white"} />}
                    onPress={props.onpress}
            />
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Text_C title={props.title} titletwo={props.titletwo}/>
        </View>
    )
}

const MainHeader: React.FC<any> = (props) => {
    return(
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo_}/>
            <Text_C title={props.title} titletwo={props.titletwo}/>
            <Button style={styles.button} appearance={'ghost'} onPress={props.onpress} size={'tiny'} status={"control"}>
                {props.text}
            </Button>
        </View>
    )
}

export {Header, MainHeader}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor:"#3f51b5",
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
    logo_:{
        width:60,
        height:37,
        margin:-15
    },
    title:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 15,
        color: "#f4f6f8",
        fontWeight: "bold",
        marginLeft: 35
    },
    lowtitle:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 12,
        color: "#f4f6f8",
        marginLeft: 35
    },
    button:{
        position: "relative",
        left:15,
        marginRight:10
    },
    text_:{
        color: "white"
    },
    icon:{
        width: 40,
        height: 40,
    }
});
