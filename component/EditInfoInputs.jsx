import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default class EditInfoInputs extends React.Component {
    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{alignItems: "center",justifyContent: "center"}}>
                    <View style={styles.inputContainer}>
                        <Text style={{textAlign: "left",color: "#444",fontSize: 15}}>UserName: </Text>
                        <TextInput placeholder="The New UserName" style={{height: 25,width: 200,marginLeft: 15}} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{textAlign: "left",color: "#444",fontSize: 15}}>Recent Password: </Text>
                        <TextInput placeholder="The Recent Password" secureTextEntry style={{height: 25,width: 200,marginLeft: 15}} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{textAlign: "left",color: "#444",fontSize: 15}}>New Password: </Text>
                        <TextInput placeholder="The New Password" secureTextEntry style={{height: 25,width: 200,marginLeft: 15}} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{textAlign: "left",color: "#444",fontSize: 15}}>Confirm Password: </Text>
                        <TextInput placeholder="Confirm Password" secureTextEntry style={{height: 25,width: 200,marginLeft: 15}} />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{textAlign: "center",color: "#fff",fontSize: 16}}>Submit Data</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    inputContainer: {
        height: 45,
        width: 280,
        borderBottomColor: "#d3d3d3",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: 5,
        marginBottom: 8
    },
    btn: {
        height: 53,
        width: 280,
        backgroundColor: "#ffa726",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

