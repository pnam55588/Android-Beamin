import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export default function Item({ navigation, txtItems,img,txtItems1,gia}) {
    return (
        <View style={styles.items}>
            <View  >
                <Text style={{ fontSize: 17, fontFamily: "arial", fontWeight: 500, marginTop: 8 }}>{txtItems}</Text>
                <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 500, color: "#B1B9B9", marginTop: 8 }}>{txtItems1}</Text>
                <Text style={{ fontSize: 15, fontFamily: "arial", fontWeight: 400, marginTop: 8 }} >{gia}</Text>
            </View>
            <Image source={img} style={styles.imgItems}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    items:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        alignItems:"center",
        height:100
        
    },
    imgItems:{
        width:80,
        height:80,
     
    },
})