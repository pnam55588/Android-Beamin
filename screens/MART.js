import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import ArressBar from "../components/AddressBar";
import Slider from "../components/Slider";
import { SearchBar } from "react-native-screens";
import { box, text } from "../util/styles";
import BannerMember from "../components/BannerMember";
import { AntDesign } from "@expo/vector-icons";
import AddressBar from "../components/AddressBar";
import { FlatList } from "react-native-web";



export default function MART({ navigation }) {

    const data = [
        { key: 1, src: require('../assets/sieuthi.png'), name: "Siêu thị" },
        { key: 2, src: require('../assets/cuahangtienloi.jpg'), name: "CH tiện lợi" },
        { key: 3, src: require('../assets/trungsua .jpg'), name: "Trứng sữa" },
        { key: 4, src: require('../assets/traicay.jpg'), name: "Trái cây" },
        { key: 5, src: require('../assets/douong.png'), name: "Đồ uống" },
        { key: 6, src: require('../assets/tuoisong.jpg'), name: "Tươi sống" },
        { key: 7, src: require('../assets/banhkeo.jpg'), name: "Bánh kẹo" },
        { key: 8, src: require('../assets/giavi.jpg'), name: "Nguyên liệu" },
        { key: 9, src: require('../assets/chebien.jpg'), name: "Chế biến" },
        { key: 10, src: require('../assets/canhan.jpg'), name: "Cá nhân" },
        { key: 11, src: require('../assets/thu cung.png'), name: "Thú cưng" },
        { key: 12, src: require('../assets/hoa.jpg'), name: "Hoa" },
    ]

    const shops = [
        {
            key: 1, src: require('../assets/shop/ministop.png'), name: "Ministop - S58 - Nguyễn Du", name1: "Cửa hàng tiền lợi", danhgia: "4.7", km: "1.5",
            list: [
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },

            ]
        },
        {
            key: 2, src: require('../assets/shop/thucphamtuoisong.png'), name: "Thực phẩm tươi sống & các loại trứng", name1: "Cá đù một nắng, Trứng gà", danhgia: "4.7", km: "1.5",
            list: [
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },

            ]
        },
        {
            key: 3, src: require('../assets/shop/thitbomy.png'), name: "Chuyên thịt bò Mỹ Úc", name1: "Thịt lõi vai Bò Mỹ cắt steak", danhgia: "4.7", km: "1.5",
            list: [
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },

            ]
        },
        {
            key: 4, src: require('../assets/shop/thucphamdonglanh.jpg'), name: "Thực phẩm đông lạnh", name1: "Viên hải sản rau củ", danhgia: "4.7", km: "1.5",
            list: [
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },
                { name: "aaa", name1: "bbb", gia: "28000", img: require('../assets/logo.jpg') },

            ]
        },
        { key: 5, src: require('../assets/shop/ngoinhadinhduong.jpg'), name: "Ngôi nhà dinh dưỡng", name1: "Sản phẩm từ sữa", danhgia: "4.7", km: "1.5" },
        { key: 6, src: require('../assets/shop/gao.jpg'), name: "Vựa gạo sạch", name1: "Gạo ST25", danhgia: "4.7", km: "1.5" },
        { key: 7, src: require('../assets/shop/raucutuoi.jpg'), name: "Rau củ tươi", name1: "Nhiều loại rau củ tươi xanh sạch", danhgia: "4.7", km: "1.5" },
        { key: 8, src: require('../assets/shop/dauhunong.jpg'), name: "Đậu hủ nóng", name1: "Ngon bổ rẻ", danhgia: "4.7", km: "1.5" },

    ]
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    onPress={() => navigation.goBack()}
                ></AntDesign>
                <Text style={{ fontSize: 25, fontFamily: "arial", fontWeight: 600, marginLeft: 25 }} >MART</Text>
            </View>
            <AddressBar navigation={navigation}></AddressBar>
            <ScrollView>
                <Slider></Slider>

                <View style={styles.content}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.viewData}  >
                                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Image source={item.src} style={{ width: 40, height: 40 }} ></Image>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        numColumns={5}
                        keyExtractor={(item) => item.key}
                    ></FlatList>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 20, fontFamily: "arial", fontWeight: 600, marginLeft: 15, marginBottom: 15 }}>Cửa hàng khác</Text>
                    <FlatList
                        data={shops}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ borderWidth: 1, borderColor: "#D9D9D9D9", }}  >
                                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, marginLeft: 15 }} onPress={() => navigation.navigate('Scr2', { shopName: item.name, shopName1: item.name1, shopList: item.list },)} >
                                        <View style={{ borderRadius: 10 }} >
                                            <Image source={item.src} style={{ width: 70, height: 70 }} ></Image>
                                        </View>
                                        <View style={{ marginLeft: 15, justifyContent: "space-between" }}>
                                            <View style={{ width: 270 }} >
                                                <Text style={{ fontSize: 17, fontFamily: "arial", fontWeight: 500, }} >{item.name}</Text>
                                                <Text style={{ color: "grey" }}>{item.name1}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                                <Image source={require('../assets/sao.jpg')} style={{ width: 15, height: 15 }} ></Image>
                                                <Text style={{ marginLeft: 5 }}>{item.danhgia}(999+)</Text>
                                                <Text style={{ marginLeft: 10, color: "grey" }}>{item.km}km</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        // numColumns={5}
                        keyExtractor={(item) => item.key}
                    ></FlatList>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    content: {

        marginTop: 20,

    },
    viewData: {
        width: 75,
        margin: 10
    }
})
