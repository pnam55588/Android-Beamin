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


export default function MamNon({ navigation }) {

    const data = [
        { key: 1, src: require('../assets/food/0001.png'), name: "Coupon thăng hạng giáo sư", xu: "10" },
        { key: 2, src: require('../assets/food/0001.png'), name: "Coupon thăng hạng sinh viên", xu: "10" },
    ]


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    onPress={() => navigation.goBack()}
                ></AntDesign>

            </View>
            <ScrollView>
                <BannerMember></BannerMember>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: "arial", fontWeight: 600, marginLeft: 15 }}>Khu đổi quà</Text>
                    <Text style={{ fontSize: 17, fontFamily: "arial", color: "grey", marginLeft: 15 }}>Qùa xịn dành riêng cho bạn đó</Text>
                </View>
                <View style={{ marginTop: 15 }}>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ borderBottomWidth: 1, borderColor: "#D9D9D9D9", }}  >
                                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, marginLeft: 15 }} >
                                        <View style={{ borderRadius: 10 }} >
                                            <Image source={item.src} style={{ width: 100, height: 100 }} ></Image>
                                        </View>
                                        <View style={{ marginLeft: 15, justifyContent: "center" }}>
                                            <View>
                                                <Text style={{ fontSize: 17, fontFamily: "arial", fontWeight: 500 }} >{item.name}</Text>

                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                                <Image source={require('../assets/sao.jpg')} style={{ width: 15, height: 15 }} ></Image>
                                                <Text style={{ marginLeft: 5, color: "grey", fontSize: 19 }}>{item.xu}</Text>
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
                <View style={{marginTop:20}}>
                    <Text style={{ fontSize: 20, fontFamily: "arial", fontWeight: 600, marginLeft: 15 }}>Khu thử thách</Text>
                    <Text style={{ fontSize: 17, fontFamily: "arial", color: "grey", marginLeft: 15 }}>Tham gia thử thách kiếm tiền xu thưởng</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, marginLeft: 15 }} >
                        <View style={{ borderRadius: 10 }} >
                            <Image source={require('../assets/food/0001.png')} style={{ width: 100, height: 100 }} ></Image>
                        </View>
                            <View style={{ marginLeft: 15, justifyContent: "center" }}>
                            <View >
                                <Text style={{ fontSize: 17, fontFamily: "arial", fontWeight: 500 }} >Nuôi mèo tích xu</Text>
                                <Text style={{ marginLeft: 5, color: "grey", fontSize: 19 }}>Kết thúc vào 01/01/2030</Text>
                                <View>
                                    <TouchableOpacity style={{borderRadius:15,width:120,height:40, borderWidth:1,borderColor:"#58dbe1", alignItems:"center", justifyContent:"center", marginTop:10}}>
                                        <Text style={{ fontSize: 17, fontFamily: "arial", color: "#58dbe1" }}>Chơi ngay</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
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
