import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { text, box, border } from "../util/styles.jsx";

export default function AddressBar({ navigation, route }) {
    const location = "251/93/132 Đ.dương quảng hàm, P.10, Q.Gò Vấp, TP.HCM"

    return(
        <View style={[box(null,60,"white",null),styles.container]}>
            <Image source={require('../assets/location icon.png')} style={[box(20, 20, "auto", 0)]}></Image>
            <Text style={[text("black",18,600,null)]}>{location.length<25 ? location : location.slice(0,25) + "..."}</Text>
            <Image source={require('../assets/mail icon.png')} style={[box(20, 20, "auto", 0)]}></Image>
            <Image source={require('../assets/menu icon.png')} style={[box(20, 20, "auto", 0)]}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

})