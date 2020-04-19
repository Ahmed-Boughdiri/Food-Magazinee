import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Drawer } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default class DrawerComponent extends React.Component {
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <ImageBackground source={require("../assets/drawer_bg.jpg")} style={styles.header}>
                    <View style={styles.userInfo}>
                        <Avatar.Text size={60} label="AH" />
                        <View style={styles.UserDes}>
                            <Text style={styles.userName}>Ahmed Boughdiri</Text>
                            <Caption>Ahmed@gmail.com</Caption>
                        </View>
                    </View>
                </ImageBackground>
                <Drawer.Section style={{marginTop: 20}}>
                    <Drawer.Item
                        label="Home"
                        icon={({ color, size }) => <FontAwesome name="home" color={color} size={size} />} 
                        onPress={() => this.props.navigation.navigate("Home")}
                    />
                    <Drawer.Item
                        label="Favourites"
                        icon={({ color, size }) => <FontAwesome name="heart" color={color} size={size} />} 
                        onPress={() => this.props.navigation.navigate("Favourites")}
                    />
                    <Drawer.Item
                        label="Settings"
                        icon={({ color, size }) => <Ionicons name="md-settings" color={color} size={size} />}
                        onPress={() => this.props.navigation.navigate("Settings")} 
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 250,
        backgroundColor: "#000",
        marginTop: -30
    },
    userInfo: {
        height: 60,
        flexDirection: "row",
        position: "absolute",
        bottom: 30,
        left: 20,
    },
    UserDes: {
        height: "100%",
        marginLeft: 15,
        flexDirection: "column",
    },
    userName: {
        textAlign: "left",
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 7
    }
})
