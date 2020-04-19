import React from "react"
import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableHighlight } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.LoadFont = async() => await loadAsync({
            "Lobster": require("../assets/Lobster.ttf")
        });
        this.state = {
            notifAvailable: false
        }
    }

    render(){

        const Notif = () =>{
            return(
                <View style={styles.notifCard}>
                    <Text style={{textAlign: "center"}}>No Notif Availaible</Text>
                    <View style={{
                        height: 20,
                        width: 20,
                        position: "absolute",
                        top: -9,
                        right: 10,
                        transform: [{rotate: "47deg"}],
                        backgroundColor: "#fff"
                    }}></View>
                </View>
            )
        }

        return(
            <View>
                <View style={styles.header}>
                    <View style={styles.topContainer}>
                        <TouchableHighlight style={styles.burger} underlayColor="#ffa726" onPress={() => this.props.openTheDrawer()}>
                            <Image source={require("../assets/burger.png")} style={{height: 50,width: 50}} />
                        </TouchableHighlight>
                        <Text style={{...styles.brand,fontFamily: "Lobster"}}>Food Magazine</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.inputContainer}>
                            <Image source={require("../assets/search.png")} style={{height: 20,width: 20}} />
                            <TextInput placeholder="e.g: Burger, Pizza ...." style={styles.input} placeholderTextColor="#757575" />
                        </View>
                        <TouchableHighlight style={styles.notif} underlayColor="rgba(0,0,0,0)" onPress={() => this.setState({notifAvailable: !this.state.notifAvailable})}>
                            <Image source={require("../assets/bell.png")} style={{height: 35,width: 35}} />
                        </TouchableHighlight>
                    </View>
                </View>
                {
                    (this.state.notifAvailable) && <Notif />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: HEIGHT * 0.22,
        width: WIDTH,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffa726"
    },
    topContainer: {
        height: "50%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 10,
    },
    burger: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    brand: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        alignSelf: "center",
        marginTop: 10,
        marginLeft: 10,
    },
    bottomContainer: {
        height: "50%",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -10
    },
    inputContainer: {
        height: 45,
        width: 290,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginLeft: 20
    },
    input: {
        textAlign: "left",
        height: 25,
        width: 280,
        marginLeft: 20,
        fontSize: 15
    },
    notif: {
        height: 38,
        width: 38,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5
    },
    notifCard: {
        minHeight: 50,
        width: 250,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 5,
        position: "absolute",
        top: (HEIGHT * 0.23) - 10,
        right: 5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});