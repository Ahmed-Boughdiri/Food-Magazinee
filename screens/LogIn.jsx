import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Btn } from "../component/FormComponents";
import { Formik } from "formik";
import * as yup from "yup";
import { emailVerif } from "../global/verif";
import { firstLayer, secondLayer } from "../global/officialColors";
import { Ionicons } from "@expo/vector-icons";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async () =>
      await Font.loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    (this.state = {
      font: "",
    }),
      (this.validation = yup.object({
        email: yup
          .string()
          .test("emailVerif", "Your Email Adress is badly formatted", (val) =>
            emailVerif(val)
          )
          .required(),
        password: yup.string().min(8).required(),
      }));
  }

  componentDidMount() {
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
            }}
            onSubmit={(values) => {
              this.props.navigation.navigate("Application");
            }}
            validationSchema={this.validation}
          >
            {(formikProps) => (
              <View>
                <Input
                  icon="email"
                  name="Enter Your Email"
                  changeHandler={formikProps.handleChange("email")}
                  secureData={false}
                  givenValue={formikProps.values.email}
                />
                <Input
                  icon="password"
                  name="Enter Your Password"
                  changeHandler={formikProps.handleChange("password")}
                  secureData={true}
                  givenValue={formikProps.values.password}
                />
                <Btn name="Log in" onPressEvent={formikProps.handleSubmit} />
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text
                    style={{ textAlign: "center", color: "#fff", fontSize: 16 }}
                  >
                    I don't have an Account
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginTop: 2,
                  }}
                >
                  {(formikProps.touched && formikProps.errors.email) ||
                    (formikProps.touched && formikProps.password)}
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
