import React from 'react';
import AuthPage from "./src/app/auth/Authorization";
import RegPage from "./src/app/register/Register";
import {NavigationContainer} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App: React.FC = () => {
    return(
            <NavigationContainer>
                <Tab.Navigator barStyle={
                    {backgroundColor: "red",
                    padding: 5,
                        display:"flex",
                        alignItems: "center"
                    }
                }>
                    <Tab.Screen name="Login" component={AuthPage} />
                    <Tab.Screen name="Register" component={RegPage} />
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your APP!
      Похоже, это прогресс...</Text>
      <TextInput
          style={{
            height: 100,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
      />
      <StatusBar style="dark" />
    </View>
  );
}*/
