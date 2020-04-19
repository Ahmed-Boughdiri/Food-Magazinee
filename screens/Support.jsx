import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Caption } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Support extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../assets/contact_us.png")} style={{height: 200,width: 300}} />
                </View>
                <Text style={{textAlign: "center",fontSize: 30,fontWeight: "bold",color: "#000"}}>Contact Us</Text>
                <View style={{marginTop: 20,alignSelf: "center"}}>
                    <View style={styles.contactContainer}>
                        <Entypo name="facebook" size={40} color="#000" />
                        <Caption style={{fontSize: 20,marginLeft: 45}}>Facebook</Caption>
                    </View>
                    <View style={styles.contactContainer}>
                        <AntDesign name="instagram" size={40} color="#000" />
                        <Caption style={{fontSize: 20,marginLeft: 45}}>Instagram</Caption>
                    </View>
                    <View style={styles.contactContainer}>
                        <AntDesign name="twitter" size={40} color="#000" />
                        <Caption style={{fontSize: 20,marginLeft: 45}}>Twitter</Caption>
                    </View>
                    <View style={styles.contactContainer}>
                        <MaterialCommunityIcons name="gmail" size={40} color="#000" />
                        <Caption style={{fontSize: 20,marginLeft: 45}}>Gmail</Caption>
                    </View>
                </View>
                <TouchableOpacity style={styles.cancel} onPress={() => this.props.navigation.goBack()}>
                    <Entypo name="cross" color="#000" size={30} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        width: WIDTH,
        height: HEIGHT * 0.45,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    contactContainer: {
        height: 45,
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 10
    },
    cancel: {
        height: 50,
        width: 50,
        position: "absolute",
        top: 20,
        left: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
