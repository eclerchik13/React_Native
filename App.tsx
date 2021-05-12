import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import AuthPage from "./src/app/auth/Authorization";
import RegPage from "./src/app/register/Register";
import {NewPage}from "./src/app/pages/News";
import JobPage from "./src/app/pages/Job";
import HelpPage from "./src/app/pages/Help";
import SettingPage from "./src/app/pages/Settings";
import WorkPage from "./src/app/pages/Works";
import CreatePage from "./src/app/pages/CreateWork";
import { Avatar } from '@ui-kitten/components';
import { Drawer} from 'react-native-paper'
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons ,MaterialIcons, Entypo } from '@expo/vector-icons';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {AuthContext, Theme_Web, ThemeType, themes} from "./src/app/common/Components";
const Tab = createDrawerNavigator();
const Stack = createStackNavigator();
const StackTwo = createStackNavigator()

/*
 <DrawerItem
                    icon={({ size }) => (
                        <Entypo name="layers" color={colorIcon} size={size} />
                    )}
                    label="Работы" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Работы")}}
                />
                 */

const DrawerContent: React.FC<any> =({navigation})=>{

    const [mainTheme] = useContext<any>(ThemeType)
    let colorIcon = mainTheme.colorIconDrawerSection.color.toString()
    return(
            <Drawer.Section style={[styles.drawerSection, mainTheme.colorDrawerSection]}>
                <Avatar source={require('./src/app/images/woman_avatar.png')} size={"giant"}
                        style={{marginLeft:70}}/>
                <Text style={[mainTheme.colorText, {marginLeft:70, marginTop: 15}]}>Валерия</Text>
                <View style={[styles.cherta, mainTheme.colorCherta]}/>
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={colorIcon}
                            size={size}
                        />
                    )}
                    label="Новости" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Новости")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <Entypo name="layers" color={colorIcon} size={size} />
                    )}
                    label="Работы" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Работы")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialIcons name="work" color={colorIcon} size={size} />
                    )}
                    label="Вакансии" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Вакансии")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <Ionicons name="settings-sharp" color={colorIcon} size={size} />
                    )}
                    label="Настройки" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Настройки")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons name="comment-question" size={size} color={colorIcon} />
                    )}
                    label="Поддержка" labelStyle={mainTheme.colorText}
                    onPress={() => {navigation.navigate("Поддержка")}}
                />
            </Drawer.Section>
    )
}

/*
const DabNavigation =()=> {
    return (
        <Tab.Navigator drawerStyle={{width: '50%'}} drawerContent={(props) => <DrawerContent {...props}/>}>
            <Tab.Screen name={'Новости'} component={NewPage}/>
            <Tab.Screen name={"Вакансии"} component={JobPage}/>
            <Tab.Screen name={"Поддержка"} component={HelpPage}/>
            <Tab.Screen name={"Настройки"} component={SettingPage}/>
            //<Tab.Screen name={"Работы"} component={WorkPage}/>
        </Tab.Navigator>
    )
}*/


const StackNavigation = () => {
    return (
        <StackTwo.Navigator initialRouteName='WorkPage' screenOptions={{
            headerStyle:{backgroundColor: "#3f51b5"},
            headerShown: false
        }}>
            <StackTwo.Screen name={"Работы_"} component={WorkPage}/>
            <StackTwo.Screen name={"Работа студента"} component={CreatePage}/>
        </StackTwo.Navigator>
    )
}

const DabNavigation =()=> {
    return (
        <Tab.Navigator drawerStyle={{width: '50%'}} drawerContent={(props) => <DrawerContent {...props}/>}>
            <Tab.Screen name={'Новости'} component={NewPage}/>
            <Tab.Screen name={"Вакансии"} component={JobPage}/>
            <Tab.Screen name={"Поддержка"} component={HelpPage}/>
            <Tab.Screen name={"Настройки"} component={SettingPage}/>
            <Tab.Screen name={"Работы"} component={StackNavigation}/>
        </Tab.Navigator>
    )
}


const App: React.FC = () => {
    const [isAuth, setAuth] = useState()
    const [theme, setTheme] = useState(false)
    const [mainTheme, setMainTheme] = useState(themes.light)

    return(
            <Theme_Web.Provider value={[theme,setTheme]}>
                {/*@ts-ignore*/}
                <ThemeType.Provider value={[mainTheme, setMainTheme]}>
            <AuthContext.Provider value={[isAuth,setAuth]}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <PaperProvider>
        <NavigationContainer >
            <Stack.Navigator initialRouteName="AuthPage" screenOptions={{
                headerStyle:{backgroundColor: "#3f51b5"},
                headerShown: false
            }}>
                {!isAuth ? (
                <>
                    <Stack.Screen name="Вход" component={AuthPage} />
                    <Stack.Screen name="Регистрация" component={RegPage} />
                </>
                ): (
                    <Stack.Screen name={'Navigation'} component={DabNavigation}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
                </PaperProvider>
            </ApplicationProvider>
            </AuthContext.Provider>
                </ThemeType.Provider>
            </Theme_Web.Provider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    drawerSection: {
        flex: 1,
        justifyContent: "center",
        marginBottom: -5
    },
    cherta:{
        borderBottomWidth: 1,
        margin: 5,
        marginTop: 20
    },
});
