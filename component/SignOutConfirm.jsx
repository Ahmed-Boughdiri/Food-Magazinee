import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SignOutConfirm = ({ cancelSignOut }) =>{
    return(
        <View style={styles.container}>
            <View style={styles.confirmBox}>
                <Text style={{...styles.confirmation,marginTop: 25}}>Are You Sure About Signing Out?</Text>
                <Text style={styles.confirmation}>Do You Want To Porceed The Process ?</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign: "center",color: "#fff",fontSize: 17}}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancel} onPress={cancelSignOut}>
                    <MaterialIcons name="cancel" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    confirmBox: {
        height: 220,
        width: 300,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    confirmation: {
        textAlign: "center",
        color: "#000",
        fontSize: 15,
        width: "80%",
        lineHeight: 21
    },
    btn: {
        height: 50,
        width: "80%",
        backgroundColor: "#ffa726",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    cancel: {
        height: 40,
        width: 40,
        position: "absolute",
        top: 10,
        left: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SignOutConfirm;
