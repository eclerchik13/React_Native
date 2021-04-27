import React, {useState} from 'react';
import { StyleSheet} from "react-native";
import AuthPage from "./src/app/auth/Authorization";
import RegPage from "./src/app/register/Register";
import {NewPage}from "./src/app/pages/News";
import JobPage from "./src/app/pages/Job";
import HelpPage from "./src/app/pages/Help";
import {Drawer} from 'react-native-paper'
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons ,MaterialIcons, Entypo } from '@expo/vector-icons';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {AuthContext} from "./src/app/common/Components";

const Tab = createDrawerNavigator();
const Stack = createStackNavigator();


const DrawerContent: React.FC<any> =({navigation})=>{
    return(
            <Drawer.Section style={styles.drawerSection} >
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={'#ff0044'}
                            size={size}
                        />
                    )}
                    label="Новости"
                    onPress={() => {navigation.navigate("Новости")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <Entypo name="layers" color={'#ff0044'} size={size} />
                    )}
                    label="Работы"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialIcons name="work" color={'#ff0044'} size={size} />
                    )}
                    label="Вакансии"
                    onPress={() => {navigation.navigate("Вакансии")}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <Ionicons name="settings-sharp" color={'#ff0044'} size={size} />
                    )}
                    label="Настройки"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons name="comment-question" size={size} color="#ff0044" />
                    )}
                    label="Поддержка"
                    onPress={() => {navigation.navigate("Поддержка")}}
                />
            </Drawer.Section>
    )
}

/*

/*
<DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons name="login" color={'#ff0044'} size={size}/>
                        )}
                    label="Вход"
                    onPress={() => {navigation.navigate("Вход")}}
                />
                <DrawerItem
                icon={({ size }) => (
                    <Ionicons name="people" color={'#ff0044'} size={size}/>
                )}
                label="Регистрация"
                onPress={() => {navigation.navigate("Регистрация")}}
            />
 */


/*
const DabNavigation =()=>{
    return(
        <Tab.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
            <Tab.Screen name={"Вход"} component={AuthPage}/>
            <Tab.Screen name={'Регистрация'} component={RegPage}/>
            <Tab.Screen name={'Новости'} component={NewPage}/>
            <Tab.Screen name={"Вакансии"} component={JobPage}/>
            <Tab.Screen name={"Поддержка"} component={HelpPage}/>
        </Tab.Navigator>
    )
}*/

const DabNavigation =()=> {
    return (
        <Tab.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
            <Tab.Screen name={'Новости'} component={NewPage}/>
            <Tab.Screen name={"Вакансии"} component={JobPage}/>
            <Tab.Screen name={"Поддержка"} component={HelpPage}/>
        </Tab.Navigator>
    )
}

const App: React.FC = () => {
        const [isAuth, setAuth] = useState(false)
    return(

            <AuthContext.Provider value={[isAuth,setAuth]}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthPage" screenOptions={{headerStyle:{backgroundColor: "#3f51b5"}}}>
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

    )
}


/*
const App: React.FC = () => {
    return(
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <PaperProvider>
                    <NavigationContainer>
                        <DabNavigation />
                    </NavigationContainer>
                </PaperProvider>
            </ApplicationProvider>
        </>
    )
}*/

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
        marginTop: 5
    }
});


//options={{tabBarLabel: "Pop", tabBarIcon:()=>(<AntDesign name="login" size={25} color="black"/>)}}
/*<Tab.Navigator barStyle={
                    {   backgroundColor: "red",
                        padding: 100,
                        display:"flex",
                        alignItems: "center",
                    }
                }>*/

/*<NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={AuthPage} />
                    <Tab.Screen name="Register" component={RegPage}/>
                </Tab.Navigator>;
            </NavigationContainer>*/

/*const TabNavigation: React.FC=()=>{
    return(
        <Tab.Navigator drawerStyle={{
            backgroundColor: '#ffffff',
        }} drawerContentOptions={{
            activeBackgroundColor: "#f1f1f1",
            activeTintColor: '#5622b6',
            itemStyle: { width: 250 ,marginVertical: 5}
        }}>
            <Tab.Screen name={"Вход"} component={AuthPage}/>
            <Tab.Screen name={'Регистрация'} component={RegPage}/>
            <Tab.Screen name={'Новости'} component={NewPage}/>
        </Tab.Navigator>
    )
}
*/
