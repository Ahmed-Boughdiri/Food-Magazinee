import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Btn } from "../component/FormComponents";
import { Formik } from "formik";
import * as yup from "yup";
import { emailVerif } from "../global/verif";


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.loadFonts = async() => await Font.loadAsync({
            Lobster: require("../assets/Lobster.ttf"),
            });
        this.state = {
            font: ""
        },
        this.validation = yup.object({
            email: yup.string().test("emailVerif","Your Email Adress is badly formatted", (val) =>emailVerif(val)).required(),
            password: yup.string().min(8).required()
        })
      }
    
      componentDidMount(){
        this.loadFonts().then(() => this.setState({font: "Lobster"}))
      }

    render(){

        return(
            <LinearGradient colors={["#ffb75e", "#ffa726"]} style={styles.container}>
                <Image source={require("../assets/logo.png")} style={{height: 200,width: 200}} />
                <Text style={{...styles.brand,fontFamily: "Lobster"}}>Food Magazine</Text>
                <View style={{alignItems: "center",marginTop: 15}}>
                    <Formik
                       initialValues={{
                           email: "",
                           password: ""
                       }} 
                       onSubmit={(values) =>{
                           console.log(values)
                       }}
                       validationSchema = {this.validation}
                    >
                        {
                            (formikProps) =>(
                                <View>
                                    <Input icon={require("../assets/email.png")} name="Enter Your Email" changeHandler={formikProps.handleChange("email")} secureData={false} givenValue={formikProps.values.email} />
                                    <Input icon={require("../assets/password.png")} name="Enter Your Password" changeHandler={formikProps.handleChange("password")} secureData={true} givenValue={formikProps.values.password} />
                                    <Btn name="Log in" onPressEvent={formikProps.handleSubmit} />
                                </View>
                            )
                        }
                    </Formik>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate("SignUp")}>
                        <Text style={{textAlign: "center",color: "#fff",fontSize: 16}}>I don't have an Account</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    brand: {
        textAlign: "center",
        fontSize: 40,
        color: "#fff",
        marginTop: 15,
    },
})
