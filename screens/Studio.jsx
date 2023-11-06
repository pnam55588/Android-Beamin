import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import ArressBar from "../components/AddressBar";
import Slider from "../components/Slider";
import { SearchBar } from "react-native-screens";
import { box, text } from "../util/styles";
import BannerMember from "../components/BannerMember";



export default function Studio({ navigation }) {
    const arr = [1, 2, 3, 4,]

    return (
        <View style={styles.container}>
            <View style={[{ alignItems: "center"}]}>
                <Image source={require('../assets/studio.jpg')} style={[box("90vw", 400, "auto", 0)]} />

            </View>
            <View style={[styles.space20]}></View>
            <Text style={[text("black", 12.5, 800, "left")]}>NHÀ KHÔNG CÓ GÌ NGOÀI ĐỒ XINH CHẤT LƯỢNG XỊN</Text>
            <View style={[styles.space30]}></View>
            <Text style={[text("black", 20, 700, "left")]}>
                BAEMIN STUDIO,<br />
                NƠI TRÀN NGẬP NHỮNG<br />
                VẬT PHẨM XINH XỊN<br />
                MANG ĐẬM TINH THẦN BAEMIN<br />
            </Text>
            <View style={[styles.space20]}></View>
            <Text style={[text("black", 15, 400, "left")]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Text>
            <View style={[styles.space10]}></View>
            <Text style={[text("black", 15, 400, "left")]}><Text style={text("black",15,700,"left")}>BAEMIN Studio</Text> sẽ luôn ở đây đồng hành cùng bạn</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        padding: 25
    },
    space10: {
        height: 10
    },
    space20: {
        height: 20
    },
    space30: {
        height: 30
    },
    space40: {
        height: 40
    },
})