import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Scr1 from "./screens/Src1";
import Scr2 from "./screens/Scr2";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scr2" screenOptions={{headerShown:false}} >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Scr1" component={Scr1} />
        <Stack.Screen name="Scr2" component={Scr2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


