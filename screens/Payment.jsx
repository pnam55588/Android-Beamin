import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import ArressBar from "../components/AddressBar";
import Slider from "../components/Slider";
import { SearchBar } from "react-native-screens";
import { box, text } from "../util/styles";
import BannerMember from "../components/BannerMember";



export default function Payment({ navigation, route}) {
    const arr = [1, 2, 3, 4,]
    const { item, user} = route.params

    return (
        <View style={styles.container}>
            <View style={[box("100vw",140,"white",0),{ flexDirection: "row", padding: 10}]}>
                <Image source={require('../assets/iconBeamin.jpg')} style={[box(50, 50, "auto", 0)]} />
                <View style={styles.space}></View>
                <View style={[box("80%","100%","white",0)]}>
                    <Text style={[text("black", 20, 400, "left")]}>Giao hàng bởi tài xế</Text>
                    <Text style={[text("black", 30, 700, "left")]}>{user.add}</Text>
                </View>
            </View>
            <TouchableOpacity style={[box("100vw", 80, "#3ac5c9", 0), {flexDirection:"row", alignItems: "center", justifyContent:"center"}]}>
                <Image source={require('../assets/location.png')} style={[box(30, 30, "#3ac5c9", 0)]} />
                <Text style={[text("black", 18, 400, "left"), { padding: 10 }]}>Bạn có chắc địa chỉ giao hàng chính xác</Text>
            </TouchableOpacity>
            <Text style={[text("gray", 18, 400, "left"), { padding: 10 }]}>Đơn hàng</Text>
            <TouchableOpacity style={[box("100vw",80,"white",0),{ flexDirection: "row", padding: 10, alignItems: "center", justifyContent:"space-around"}]}>
                <Text  style={text("gray",15,400,"left")}>1x</Text>
                <Text  style={text("black",20,400,"left")}>{item.name}</Text>
                <Text style={text("black",20,400,"left")}> {item.gia}đ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[box("100vw",80,"white",0),{flexDirection:"row", padding: 10, alignItems:"center", marginTop:5}]}>
                <Image source={require('../assets/order icon.png')} style={[box(30,30,"auto",0)]} />
                <View style={styles.space}></View>
                <Text style={text("gray", 18, 400, "left")}> Bạn có gì muốn nhắn tới nhà hàng <br/> không?</Text>
            </TouchableOpacity>
            <View style={[box("100vw",80,"white",0),{padding: 10, marginTop:5, justifyContent:"center"}]}>
                <View style={[{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}]}>
                    <Text>Tạm tính</Text>
                    <Text>{item.gia}đ</Text>
                </View>
                <View style={[{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}]}>
                    <Text>Phí áp dụng</Text>
                    <Text>10.000đ</Text>
                </View>
            </View>
            <View style={[box("100vw",100,"white",0), styles.payment]}>
                <View>
                    <Text style={text("gray",13,400,"left")}>Tổng cộng</Text>
                    <Text style={text("black",25,600,"left")}>{item.gia}đ</Text>
                </View>
                <TouchableOpacity style={[box(200,60,"#3ac5c9",10),{justifyContent:"center",alignItems:'center'}]}>
                    <Text>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position:"relative",
        height:"100vh",
        backgroundColor:"#f5f5f5"
    },
    space: {
        width: 20
    },
    payment:{
        flexDirection:"row", alignItems:"center", padding:10, justifyContent:"space-between", position:"absolute",
        bottom:0,
    }
})