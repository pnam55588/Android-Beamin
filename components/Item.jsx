import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export default function Item({ navigation, txtItems}) {
    return (
        <View style={styles.items}>
            <View >
                <Text style={{ fontSize: 17, fontFamily: "arial", fontWeight: 500, marginTop: 8 }}>{txtItems}</Text>
                <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#B1B9B9", marginTop: 8 }}>Black coffee</Text>
                <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 400, marginTop: 8 }} s>28.000đ</Text>
            </View>
            <Image source={require('../assets/logo.jpg')} style={styles.imgItems}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    items:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imgItems:{
        width:80,
        height:80,
        marginTop:8
    },
})