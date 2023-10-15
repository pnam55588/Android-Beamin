import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from "react-native";
import Banner from './Banner';

export default function Slider({ navigation, txtItems}) {
    return (
        <SafeAreaView style={[styles.safeArea]}>
            <ScrollView horizontal  style={[styles.scrollView]} scrollEventThrottle={16}>
                <Banner />
                <View style={styles.space}></View>
                <Banner />
                <View style={styles.space}></View>
                <Banner />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea:{
        display:"flex",
    },
    space:{
        width:10,
    }
})

