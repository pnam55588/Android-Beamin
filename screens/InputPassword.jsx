import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { text, box, border } from "../util/styles.jsx";

export default function InputPassword({route, navigation }) {
    const [password, setPassword] = useState()
    const { sdt } = route.params;
    const onPress = () => {
        navigation.navigate('info', { sdt: sdt })
    }

    return (
        <View style={styles.container}>
        <View>
            <Text style={[text("black", 28, 700, "left")]}>Nhập mật khẩu</Text>
            <Text style={[text("black", 15, 400, "left")]}>Số điện thoại là +84 {sdt}</Text>
            <View style={[box(350, 50, "auto", 5), border(1, "#3ac5c9", 5), styles.input]}>
                <TextInput onChangeText={setPassword} placeholder="Mật khẩu" style={[{ padding: 10, width: "100vw", color:"gray"}]} />
            </View>
        </View>
        <TouchableOpacity onPress={onPress} disabled={!password} style={[box(350, 50, "#3ac5c9", 5), { justifyContent: "center" }]}>
            <Text style={[text("#fff", 18, 300, "center")]}>Đăng nhập</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        padding: 20
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 20
    },

})