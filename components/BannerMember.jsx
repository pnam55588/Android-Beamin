import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { box, text } from "../util/styles";

export default function BannerMember() {
    return (
        <View style={[styles.container]}>
            <View>
                <Text style={[text("white", 15, 400, null)]}>Chương trình thành viên</Text>
                <Text style={[text("white", 20, 700, null)]}>MẦM NON SÀNH ĂN</Text>
                <View style={[{flexDirection:"row",alignItems:"center", marginTop:20}]}>
                    <Image source={require('../assets/coin icon.png')} style={[box(20, 20, null, 0), {marginRight:5}]} />
                    <Text style={[text("white", 15, 700, null)]}>0</Text>
                </View>
            </View>
            <Image source={require('../assets/icon 10.png')} style={[box(140,null, null, 0)]} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "brown",
        justifyContent: "space-between",
        borderRadius: 15,
        margin: 15,
        padding: 15,
    }
})