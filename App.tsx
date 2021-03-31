import React from 'react';
import { StyleSheet} from "react-native";
import AuthPage from "./src/app/auth/Authorization";
import RegPage from "./src/app/register/Register";
import NewPage from "./src/app/pages/News";
import {Drawer} from 'react-native-paper'
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons ,MaterialIcons, Entypo } from '@expo/vector-icons';
const Tab = createDrawerNavigator();

const DrawerContent =({navigation})=>{
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
                    onPress={() => {navigation.navigate('Новости')}}
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
                    onPress={() => {}}
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
            </Drawer.Section>
    )
}

const DabNavigation =()=>{
    return(
        <Tab.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
            <Tab.Screen name={"Вход"} component={AuthPage}/>
            <Tab.Screen name={'Регистрация'} component={RegPage}/>
            <Tab.Screen name={'Новости'} component={NewPage}/>
        </Tab.Navigator>
    )
}

const App: React.FC = () => {
    return(
        <PaperProvider>
            <NavigationContainer>
            <DabNavigation />
            </NavigationContainer>
        </PaperProvider>
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
