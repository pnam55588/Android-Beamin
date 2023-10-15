import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import InputPhone from "./screens/InputPhone";
import InputPassword from "./screens/InputPassword";
import Info from "./screens/Info";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="info">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="input_phone" component={InputPhone} />
        <Stack.Screen name="input_password" component={InputPassword} />
        <Stack.Screen name="info" component={Info}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


