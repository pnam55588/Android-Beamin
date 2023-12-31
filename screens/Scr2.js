import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, SafeAreaView } from "react-native";
import Item from '../components/Item';
import { FlatList } from 'react-native';

export default function Scr2({navigation, route }) {

    const { shopName, shopName1, shopList, user} = route.params;
    console.log(shopList)

    let imglogo = require('../assets/logo.jpg');


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Image source={imglogo} style={styles.imglogo} ></Image>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.content1}>
                    <Text style={{ fontSize: 13, fontFamily: "arial", fontWeight: 500, color: "#58dbe1" }} >ĐỐI TÁC CỦA BEAMIN</Text>
                    <Text numberOfLines={1} style={{ fontSize: 25, fontFamily: "arial", fontWeight: 500, marginTop: 8 }} >{shopName}</Text>
                    <Text style={{ fontSize: 12, fontFamily: "arial", fontWeight: 500, color: "#B1B9B9", marginTop: 8 }} >0.4km 116d Lê Lợi, Phường 4, Quận Gò Vấp</Text>
                </View>
                <View style={styles.content2} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50 }}>
                        <View style={{ flexDirection: "row" }} >
                            <Image source={require('../assets/logo.jpg')} style={styles.imgIcon1}></Image>
                            <Text style={{ fontFamily: "arial", fontSize: 16, fontWeight: 300, marginTop: 7, marginLeft: 10 }} >Giao bởi tài xế</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#58dbe1", marginTop: 5 }} >Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50 }}>
                        <View style={{ flexDirection: "row" }} >
                            <Image source={require('../assets/logo.jpg')} style={styles.imgIcon1}></Image>
                            <Text style={{ fontFamily: "arial", fontSize: 16, fontWeight: 300, marginTop: 7, marginLeft: 10 }} >Đơn nhóm</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#58dbe1", marginTop: 5 }} >Tạo đơn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50 }}>
                        <View style={{ flexDirection: "row" }} >
                            <Image source={require('../assets/logo.jpg')} style={styles.imgIcon1}></Image>
                            <Text style={{ fontFamily: "arial", fontSize: 16, fontWeight: 300, marginTop: 7, marginLeft: 10 }}>Khao 30k cho đơn từ 200k</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#58dbe1", marginTop: 5 }} >Xem thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50 }}>
                        <View style={{ flexDirection: "row" }} >
                            <Image source={require('../assets/logo.jpg')} style={styles.imgIcon1}></Image>
                            <Text style={{ fontFamily: "arial", fontSize: 16, fontWeight: 300, marginTop: 7, marginLeft: 10 }}>1 đã bán </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#B1B9B9", marginTop: 5 }} >Chưa có nhận xét</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom1}>
                    <Text style={{ fontSize: 20, fontFamily: "arial", fontWeight: 550, marginTop: 8 }} >{shopName1}</Text>
                </View>
                <ScrollView >
                    {/* <Item txtItems={txtItems}/>
                <Item txtItems={txtItems}/> */}
                    <View style={styles.bottom2} >
                        <View style={{ width: "90%", borderBottomWidth: 1, borderColor: "#D9D9D9D9" }}>
                            <FlatList
                                key='#'
                                data={shopList}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={()=>{navigation.navigate('Product', {item, user})}}>
                                            <Item img={item.img} txtItems1={item.name1} gia={item.gia} txtItems={item.name} />
                                        </TouchableOpacity>
                                    );
                                }}
                                keyExtractor={(item) => item.key}
                            ></FlatList>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
    top: {
        marginTop: 5,
        // borderWidth:1,
        // borderColor:"black",
        width: "100%",
        height: 130
    },
    imglogo: {
        width: 387,
        height: 128
    },
    content: {
        marginTop: 5,
        // borderWidth:1,
        // borderColor:"black",
        width: "100%",
        height: 300,
        alignItems: "center"
    },
    content1: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,

        width: "90%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    content2: {
        marginTop: 15,
        // borderWidth:1,
        // borderColor:"black",
        width: "90%",
        height: 100,


    },
    imgIcon1: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    bottom: {
        marginTop: 25,
        // borderWidth:1,
        // borderColor:"black",
        width: "100%",
        alignItems: "center",
        height: 195

    },
    bottom1: {
        width: "90%",
        height: "auto"
    },
    bottom2: {
        borderWidth: 1,

        width: 390,
        marginTop: 15,
        borderWidth: 1, borderColor: "#D9D9D9D9",
        alignItems: 'center',

    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    imgItems: {
        width: 80,
        height: 80,
        marginTop: 8
    },
    items1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },

});