import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { secondLayer } from "../global/officialColors";

export const FavouriteCard = ({ name, label, calories, img }) =>{
    return(
        <View style={styles.favouriteCard}>
            <Image source={img} style={styles.cardImg} />
            <View style={styles.cardDescContainer}>
                <View style={{flexDirection: "row",width: "80%",justifyContent: "space-around"}}>
                    <Text style={{textAlign: "left",color: "#000",fontSize: 20,fontWeight: "bold"}}>{name} - </Text>
                    <Text style={{textAlign: "left",color: "#000",fontSize: 17,marginTop: 3}}>{label}</Text>
                </View>
                <Text style={{textAlign: "left",color: "#000",fontSize: 17,width: "80%"}}>Calories: {calories}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign: "center",color: "#fff",fontSize: 17}}>Show Recipe</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.delete}>
                <Entypo name="circle-with-cross" color="#000" size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    favouriteCard: {
        height: 300,
        width: 320,
        backgroundColor: "#000",
        borderRadius: 20,
        marginBottom: 15,
        overflow: "hidden",
        alignSelf: "center",
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    cardImg: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    cardDescContainer: {
        height: 150,
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        height: 50,
        width: "80%",
        backgroundColor: secondLayer,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    delete: {
        height: 35,
        width: 35,
        position: "absolute",
        top: 10,
        left: 10
    },
})
