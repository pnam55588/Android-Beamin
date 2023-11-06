import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { text, box, border } from "../util/styles.jsx";

export default function InputPhone({ route, navigation }) {

    const [sdt, setSdt] = useState('')

    const onPress = () => {
        navigation.navigate('InputPassword', { sdt: sdt })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={[text("black", 28, 700, "left")]}>Hãy nhập số điện thoại <br />để tiếp tục nhé!</Text>
                <Text style={[text("black", 15, 400, "left")]}>Mã xác nhận sẽ gửi qua số điện thoại này</Text>
                <View style={[box(350, 50, "auto", 5), border(1, "#3ac5c9", 5), styles.input]}>
                    <Image source={require('../assets/VietNam flag.png')} style={[box(20, 15, "auto", 0)]}></Image>
                    <Text style={[{ padding: 5, borderRightWidth: 1, borderRightColor: "gray" }]}>+84</Text>
                    <TextInput onChangeText={setSdt} placeholder="Số điện thoại" style={[{ padding: 10, width: "100vw", color: "gray" }]} />
                </View>
            </View>
            <TouchableOpacity onPress={onPress} style={[box(350, 50, "#3ac5c9", 5), { justifyContent: "center" }]}>
                <Text style={[text("#fff", 18, 300, "center")]}>Tiếp theo</Text>
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