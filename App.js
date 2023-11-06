import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";

import InputPhone from "./screens/InputPhone";
import InputPassword from "./screens/InputPassword";
import Home from "./screens/Home";
import Info from "./screens/Info";
import Scr1 from "./screens/Src1";
import Scr2 from "./screens/Scr2";
import Product from "./screens/Product";
import Payment from "./screens/Payment";
import Studio from "./screens/Studio";
import MART from "./screens/MART";
import MamNon from "./screens/mamnon";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="InputPhone" component={InputPhone} />
        <Stack.Screen name="InputPassword" component={InputPassword} />
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scr1" component={Scr1} />
        <Stack.Screen name="Scr2" component={Scr2} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Studio" component={Studio} />
        <Stack.Screen name="MART" component={MART} />
        <Stack.Screen name="MamNon" component={MamNon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


