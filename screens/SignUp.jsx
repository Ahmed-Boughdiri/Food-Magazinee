import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import { Input, Btn } from "../component/FormComponents";
import * as yup from "yup";
import { emailVerif } from "../global/verif";
import { firstLayer, secondLayer } from "../global/officialColors";
import { Ionicons } from "@expo/vector-icons";
import { passwordCorrespond } from "../global/verif";
import { signUpUser, signUpSuccess } from "../global/authentification.js";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async () =>
      await Font.loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      font: "",
    };
    this.validation = yup.object({
      email: yup
        .string()
        .required()
        .test("emailVerif", "Your Email is Badly Formatted", (val) =>
          emailVerif(val)
        ),
      password: yup.string().required().min(8),
      confirmPassword: yup.string().required().min(8),
    });
  }

  componentWillMount() {
    this.loadFonts().then(() => this.setState({ font: "Lobster" }));
  }

  render() {
    return (
      <LinearGradient
        colors={[firstLayer, secondLayer]}
        style={styles.container}
      >
        <View style={styles.logo}>
          <Ionicons name="ios-restaurant" size={100} color="#ff5722" />
        </View>
        <Text style={{ ...styles.brand, fontFamily: "Lobster" }}>
          Food Magazine
        </Text>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values, action) => {
              if(passwordCorrespond(values.password,values.confirmPassword)) {
                signUpUser(values.email,values.password).then(() =>{
                  if(signUpSuccess){
                    this.props.navigation.navigate("Application")
                  }
                })
              }else {
                Alert.alert("Password Error", "The Two Passwords That You Have Entered are Not Correspondent");
                action.resetForm();
              }
            }}
            validationSchema={this.validation}
          >
            {(formikProps) => (
              <View>
                <Input
                  name="Enter Your Email"
                  icon="email"
                  changeHandler={formikProps.handleChange("email")}
                  secureData={false}
                  givenValue={formikProps.values.email}
                />
                <Input
                  name="Enter Your Password"
                  icon="password"
                  changeHandler={formikProps.handleChange("password")}
                  secureData={true}
                  givenValue={formikProps.values.password}
                />
                <Input
                  name="Confirm Your Password"
                  icon="password"
                  changeHandler={formikProps.handleChange("confirmPassword")}
                  secureData={true}
                  givenValue={formikProps.values.confirmPassword}
                />
                <Btn name="Sign up" onPressEvent={formikProps.handleSubmit} />
                <Text
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginTop: 3,
                  }}
                >
                  {(formikProps.touched && formikProps.errors.email) ||
                    (formikProps.touched && formikProps.errors.password) ||
                    (formikProps.touched && formikProps.errors.confirmPassword)}
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    marginTop: 15,
  },
  logo: {
    height: 170,
    width: 170,
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
