import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import ArressBar from "../components/AddressBar";
import Slider from "../components/Slider";
import { SearchBar } from "react-native-screens";
import { box, text } from "../util/styles";
import BannerMember from "../components/BannerMember";



export default function Home({ navigation, route }) {
    const arr = [1, 2, 3, 4,]
    const { user } = route.params

    return (
        <ScrollView>
            <ArressBar navigation={navigation} user={user} />
            <Slider />
            <SearchBar />
            <View style={[styles.shopping]}>
                <View style={[styles.top]}>
                    <TouchableOpacity style={[styles.left, box("45%", null, "white", 20)]} onPress={()=>{navigation.navigate('MART', {user})}}>
                        <Text style={[text(null, 18, 700, null)]}>FOOD</Text>
                        <Text style={[{ marginTop: 10 }]}>Giao đồ ăn tận nơi, order<br />ngay cho nóng</Text>
                        <SafeAreaView style={[{ marginTop: 20 }]}>
                            <ScrollView horizontal style={[styles.scrollView]} scrollEventThrottle={16}>
                                {arr.map((n) => {
                                    const src = "../assets/food/0001 (" + n + ")"
                                    return <Image source={require(`../assets/food/0001 (${n}).png`)} style={[box(35, 40, null, 0)]}></Image>
                                })}
                            </ScrollView>
                        </SafeAreaView>
                        <SafeAreaView>
                            <ScrollView horizontal style={[styles.scrollView]} scrollEventThrottle={16}>
                                {arr.map((n) => {
                                    return <Image source={require(`../assets/food/0001 (${10 - n}).png`)} style={[box(35, 35, null, 0)]}></Image>
                                })}
                            </ScrollView>
                        </SafeAreaView>
                    </TouchableOpacity>
                    <View style={[styles.right, box("45%", 250, null, 20)]}>
                        <TouchableOpacity style={[box(null, "48%", "white", 20), { padding: 15, position: "relative" }]} onPress={() => { navigation.navigate('MART', {user}) }}>
                            <Text style={[text(null, 18, 700, null)]}>MART</Text>
                            <Text style={[{ marginTop: 10 }]}>Đi chợ hộ, giao tận<br />nhà</Text>
                            <Image source={require("../assets/food/0002 (1).png")} style={[box(35, 35, null, 0), { position: "absolute", bottom: 10, right: 10 }]}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={[box(null, "48%", "white", 20), { padding: 15 }]} onPress={() => { navigation.navigate('Studio') }}>
                            <Text style={[text(null, 18, 700, null)]}>STUDIO</Text>
                            <Text style={[{ marginTop: 10 }]}>Vật phẩm độc lạ,<br />xinh, xịn</Text>
                            <Image source={require("../assets/food/0002 (2).png")} style={[box(35, 35, null, 0), { position: "absolute", bottom: 10, right: 10 }]}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bottom]}>
                    <TouchableOpacity style={[box(null, 100, "white", 20), { padding: 15 }]}>
                        <Text style={[text(null, 18, 700, null)]}>LAZY BEE</Text>
                        <Text style={[{ marginTop: 10 }]}>Mỹ phẩm tiện lợi nhập từ Hàn Quốc</Text>
                        <Image source={require("../assets/food/0002 (3).png")} style={[box(35, 35, null, 0), { position: "absolute", bottom: 10, right: 10 }]}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('MamNon')}}>
                <BannerMember />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.discount, box(null, 50, "white", 0)]}>
                <Image source={require('../assets/coupon icon.png')} style={[box(30, 30, null, 0), { marginRight: 10 }]} />
                <Text style={[text("#3ac5c9", 15, 400, null)]}>Bạn ơi, 72 mã giảm giá vẫy gọi nè</Text>
            </TouchableOpacity>
            <Text style={[text("gray", 15, 400, "center"), { marginTop: 50, marginBottom: 80 }]}>Dưới này không có gì ăn được</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    shopping: {

    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
    },
    left: {
        padding: 15,
    },
    right: {
        justifyContent: "space-between",
    },
    bottom: {
        margin: 15,
    },
    discount: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
    }
})