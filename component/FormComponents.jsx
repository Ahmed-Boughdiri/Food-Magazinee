import React from "react";
import { View, StyleSheet, TextInput, Image, TouchableHighlight, Text } from "react-native";


export const Input = ({ icon, name, changeHandler, secureData, givenValue }) =>{
    return(
        <View style={styles.inputContainer}>
            <View style={{height: 55,width: 55}}>
                <Image source={require("../assets/input.png")} style={{height: 55,width: 70,position: "absolute",top: 0,left: 0,bottom: 0}} />
                <View style={{height: "100%",width: "100%",position: "absolute",top: 0,left: 0,bottom: 0,justifyContent: "center",alignItems: "center"}}>
                    <Image source={icon} style={{height: 35,width: 35}} />
                </View>
            </View>
            <TextInput placeholder={name} style={styles.input} placeholderTextColor="#757575" secureTextEntry={secureData} onChangeText={changeHandler} value={givenValue} />
        </View>
    )
}

export const Btn = ({ name, onPressEvent }) =>{
    return(
        <TouchableHighlight style={styles.btn} onPress={onPressEvent}>
            <Text style={{textAlign: "center",color: "#ffa726",fontSize: 17}}>{name}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 55,
        width: 300,
        backgroundColor: "rgba(255,255,255,0.45)",
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        height: 30,
        width: 250,
        marginLeft: 30,
        marginTop: 5,
        fontSize: 15
    },
    btn: {
        height: 55,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})


