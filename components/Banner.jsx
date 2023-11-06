import React from "react";
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image } from "react-native";


export default function Banner() {
    let img = require('../assets/iconBeamin.jpg');
    let title = "MUA 1TẶNG 1"
    let title1 = "Độc quyền mua một tặng một tại Beamin"
    let imglogo = require('../assets/logo.jpg');

  return (
    <View style ={styles.container}>
        <View style = {styles.top} >
            <View style ={styles.topL} >
                <View style ={styles.topL1} >
                    <Image source={img}  style={styles.imgIconBeamin} ></Image>
                    <Text>HELLO WORD</Text>
                </View>
                <View >
                    <Text style = {styles.title} >{title}</Text>
                </View>
                <View style = {styles.topL3}>
                    <Text style={[{fontSize:10,fontWeight:400}]} >{title1}</Text>
                </View>
            </View>
            <View style ={styles.topR}>
                <View>
                    <Image source={imglogo} style= {styles.imglogo} ></Image>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:15,
      backgroundColor:"#3ac5c9",
    },
    imgIconBeamin:{
        width:30,
        height:30,
        borderRadius:30,
    },
    top:{
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:15,
        width:"95%"
    },
    topL:{
        marginLeft:10,
        width:"52%",
        height:180,
        justifyContent:"center",

        // borderWidth:1,
        // borderColor:"black"
    },
    topL1:{
        flexDirection:"row",
        alignItems:"center",

    },
    title:{
        fontSize:30,
        fontWeight:800 
    },
    topL3:{
        marginTop:20
    },
    topR:{
       
        width:"45%",
        height:180,
        // borderWidth:1,
        // borderColor:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    imglogo:{
        width:150,
        height:150,
        borderRadius:20
    },
    content:{
        width:"95%",
        height:100,
        // borderWidth:1,
        // borderColor:"black",
        marginTop:15

    },
    content1:{
        width:"30%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:3
   
    },
    imgContent1:{
        width:90,
        height:90,
        borderRadius:15
    }
  });

// import React from "react";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// import Banner from './Banner';

// export default function Slider({ navigation, txtItems }) {
//     const banners = [
//         {
//             img: require('../assets/iconBeamin.jpg'),
//             title: "MUA 1 TẶNG 1",
//             description: "Độc quyền mua một tặng một tại Beamin",
//         },
//         {
//             img: require('../assets/iconBeamin.jpg'),
//             title: "MUA 1 TẶNG 1",
//             description: "Độc quyền mua một tặng một tại Beamin",
//         },
//         {
//             img: require('../assets/iconBeamin.jpg'),
//             title: "MUA 1 TẶNG 1",
//             description: "Độc quyền mua một tặng một tại Beamin",
//         },
//     ];

//     return (
//         <View style={styles.container}>
//             <ScrollView horizontal style={styles.scrollView} scrollEventThrottle={16}>
//                 {banners.map((banner, index) => (
//                     <Banner key={index} img={banner.img} title={banner.title} description={banner.description} />
//                 ))}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         display: "flex",
//     },
//     scrollView: {
//         flexDirection: "row",
//     },
// });
