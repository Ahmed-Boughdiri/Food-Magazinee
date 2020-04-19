import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import { Input, Btn } from "../component/FormComponents";
import * as yup from "yup";
import { emailVerif } from "../global/verif";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.loadFonts = async() => await Font.loadAsync({
          Lobster: require("../assets/Lobster.ttf"),
        });
        this.state = {
            font: ""
        }
        this.validation = yup.object({
            email: yup.string().required().test("emailVerif", "Your Email is Badly Formatted", (val) => emailVerif(val)),
            password: yup.string().required().min(8),
            confirmPassword: yup.string().required().min(8)
        })
      }
    
      componentWillMount(){
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
                            password: "",
                            confirmPassword: ""
                        }}
                        onSubmit={(values) =>{
                            console.log(values)
                        }}
                        validationSchema = {this.validation}
                    >
                        {
                            (formikProps) =>(
                                <View>
                                    <Input name="Enter Your Email" icon={require("../assets/email.png")} changeHandler={formikProps.handleChange("email")} secureData={false} givenValue={formikProps.values.email} />
                                    <Input name="Enter Your Password" icon={require("../assets/password.png")} changeHandler={formikProps.handleChange("password")} secureData={true} givenValue={formikProps.values.password} />
                                    <Input name="Confirm Your Password" icon={require("../assets/password.png")} changeHandler={formikProps.handleChange("confirmPassword")} secureData={true} givenValue={formikProps.values.confirmPassword} />
                                    <Btn name="Sign up" onPressEvent={formikProps.handleSubmit} />
                                    <Text>{
                                        formikProps.touched && formikProps.errors.email ||
                                        formikProps.touched && formikProps.errors.email ||
                                        formikProps.touched && formikProps.errors.email     
                                    }</Text>
                                </View>
                            )
                        }
                    </Formik>
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
    }
})
