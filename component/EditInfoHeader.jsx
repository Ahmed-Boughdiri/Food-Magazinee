import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("window").width;

export default class EditInfoHeader extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Edit Account Info</Text>
                <TouchableOpacity style={styles.save}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH - 80,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        textAlign: "left",
        color: "#fff",
        fontSize: 22,
        marginLeft: -15,
        fontWeight: "bold"
    },
    save: {
        padding: 10,
        justifyContent: "flex-end"
    }
})

