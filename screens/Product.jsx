import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import ArressBar from "../components/AddressBar";
import Slider from "../components/Slider";
import { SearchBar } from "react-native-screens";
import { box, text } from "../util/styles";
import BannerMember from "../components/BannerMember";



export default function Product({ navigation }) {
    const arr = [1, 2, 3, 4,]

    return (
        <View>
            <Image source={require('../assets/product/food1.png')} style={[box("100vw",280,"auto",0)]} />
            <View style={[{flexDirection:"row", padding: 10, alignItems:"center"}]}>
                <Text style={[text("black",30,700,"left")]}>Set đồ ăn siêu cấp đặc biệt</Text>
                <Text style={[text("black",20,400,"left")]}>72.000đ</Text>
            </View>
            <Text style={[text("gray",18,400,"left"), {padding:10}]}>Giá gốc 72.000đ</Text>
            <Text style={[text("gray",18,400,"left"), {padding:10}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <TouchableOpacity style={[{flexDirection:"row", padding: 10, alignItems:"center"}]}>
                <Image source={require('../assets/order icon.png')} style={[box(30,30,"auto",0)]} />
                <View style={styles.space}></View>
                <Text> Bạn có gì muốn nhắn tới nhà hàng <br/> không?</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    space: {
        width: 20
    },
})