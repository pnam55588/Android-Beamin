import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import {text, box, border} from "../util/styles.jsx";

export default function Login({navigation}) {

    const USER_DEFAULT = {name: "Trần công minh", phone: "111222333", pass:456,add:"Long Bình, Biên Hòa, Đồng Nai", img: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"}

    const handlePhoneInput = () => {
        navigation.navigate('InputPhone')
    }
    const handleFacebookBtn = () => {
        navigation.navigate('Home', {user: USER_DEFAULT})
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/login icon.png')} style={[box(200,200,"auto",0)]}></Image>
            <Text style={[text("black",20,700,"center")]}>BAEMIN NÓNG GIÒN ĐÂY!</Text>
            <Text style={[text("black",15,500,"center")]}>Hãy nhập số điện thoại để tiếp tục nhé!</Text>
            <TouchableOpacity onPress={handlePhoneInput} style={[box(300,50,"auto",5), border(1,"gray",5),styles.input]}>
                <Image source={require('../assets/VietNam flag.png')} style={[box(20, 15,"auto",0)]}></Image>
                <Text style={[{padding:5, borderRightWidth:1, borderRightColor:"gray"}]}>+84</Text>
                <TextInput placeholder="Số điện thoại" style={[{padding:10, width:"100vw"}]}/>
            </TouchableOpacity>
            <Text style={styles.line}>
                <Text>Hoặc đăng nhập bằng</Text>
            </Text>
            <TouchableOpacity onPress={handleFacebookBtn}>
                <Image source={require('../assets/Facebook icon.png')} style={[box(60,60,"auto",0)]}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linear-gradient(90deg, rgba(199,244,246,1) 35%, rgba(209,244,246,1) 100%)",
        alignItems:"center",
        justifyContent: "center"
    },
    input:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 20
    },
    line:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    }
})