import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { text, box, border } from "../util/styles.jsx";

export default function Info({ navigation }) {

    const user = {
        name: "Nguyễn Văn A",
        email: "pnam55588@gmail.com",
        phone: "0987654321",
        img: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
        adds: [
            "Số 1, đường 1, phường 1, quận 1, TP.HCM",
            "Số 2, đường 2, phường 2, quận 2, TP.HCM",
        ]
    }

    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={styles.user}>
                <Image source={{ uri: user.img }} style={[box(60, 60, "auto", 50)]}></Image>
                <Text style={[text("black", 20, 600, "left")]}>{user.name}</Text>
            </TouchableOpacity>
            <View style={[styles.top]}>
                <TouchableOpacity style={[styles.topItem, box("49%", "auto", "white", 0)]}>
                    <Image source={require('../assets/order icon.png')} style={[box(30, 30, "auto", 0)]}></Image>
                    <Text>đơn hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.topItem, box("49%", "auto", "white", 0)]}>
                    <Image source={require('../assets/map icon.png')} style={[box(30, 30, "auto", 0)]}></Image>
                    <Text>Sổ địa chỉ</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.mid]}>
                <TouchableOpacity style={[styles.midItem]}>
                    <Image source={require('../assets/map icon.png')} style={[box(20, 20, "auto", 0), { marginRight: 20 }]}></Image>
                    <Text>Đánh giá BEADMIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.midItem]}>
                    <Image source={require('../assets/map icon.png')} style={[box(20, 20, "auto", 0), { marginRight: 20 }]}></Image>
                    <Text>Thông báo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.midItem]}>
                    <Image source={require('../assets/map icon.png')} style={[box(20, 20, "auto", 0), { marginRight: 20 }]}></Image>
                    <Text>Hỗ trợ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.midItem]}>
                    <Image source={require('../assets/map icon.png')} style={[box(20, 20, "auto", 0), { marginRight: 20 }]}></Image>
                    <Text>Điều khoản và Chính sách</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.midItem]}>
                    <Image source={require('../assets/map icon.png')} style={[box(20, 20, "auto", 0), { marginRight: 20 }]}></Image>
                    <Text>Chính sách bảo vệ dữ liệu cá nhân</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <View>
                    <Text style={[text("black", 18, 700, "left")]}>ĐẶT HÀNG VỚI BEAMIN</Text>
                    <Text style={[text("black", 13, 400, "left")]}>Dể BEAMIN giúp bạn tăng doanh thu và <br />lợi nhuận nha</Text>
                </View>
                <Image source={require('../assets/icon 10.png')} style={[box(100, 100, "auto", 0)]}></Image>
            </View>
            <View style={[box("auto",50,"white",0),{ padding:20, marginBottom:30}]}>
                <Text>Phiên bản hiện tại: v2.14.0</Text>
            </View>
            <Text style={[text("#3ac5c9",20,800,"center"), ]}>BEAMIN</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
    user: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100vw",
        height: 80,
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 5,
    },
    top: {
        flexDirection: "row",
        // backgroundColor: "#fff",
        width: "100vw",
        height: 80,
        justifyContent: "space-around",
        marginBottom: 20,
    },
    topItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    mid: {

    },
    midItem: {
        width: "100vw",
        height: 50,
        padding: 20,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 1,
    },
    bottom: {
        backgroundColor: "#F4E869",
        height: 90,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    }
})