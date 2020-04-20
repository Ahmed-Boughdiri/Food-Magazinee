import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { secondLayer } from "../global/officialColors";
import { Formik } from "formik";
import * as yup from "yup";

export default class EditInfoInputs extends React.Component {
  constructor(props) {
    super(props);
    this.validation = yup.object({
      userName: yup.string(),
      recentPassword: yup.string().min(8),
      newPassword: yup.string().min(8),
      confirmPassword: yup.string().min(8),
    });
  }
  render() {
    const Input = ({
      inputName,
      inputPlaceholder,
      changeHandler,
      givenValue,
      secureData,
    }) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={{ textAlign: "left", color: "#444", fontSize: 15 }}>
            {inputName}
          </Text>
          <TextInput
            placeholder={inputPlaceholder}
            secureTextEntry={secureData}
            style={{ height: 25, width: 200, marginLeft: 15 }}
            onChangeText={changeHandler}
            value={givenValue}
          />
        </View>
      );
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Formik
            initialValues={{
              userName: "",
              recentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={this.validation}
          >
            {(formikProps) => (
              <View>
                <Input
                  inputName="UserName"
                  inputPlaceholder="The New UserName"
                  changeHandler={formikProps.handleChange("userName")}
                  givenValue={formikProps.values.userName}
                  secureData={false}
                />
                <Input
                  inputName="Recent Password"
                  inputPlaceholder="The Recent Password"
                  changeHandler={formikProps.handleChange("recentPassword")}
                  givenValue={formikProps.values.recentPassword}
                  secureData={true}
                />
                <Input
                  inputName="New Password"
                  inputPlaceholder="The New Password"
                  changeHandler={formikProps.handleChange("newPassword")}
                  givenValue={formikProps.values.newPassword}
                  secureData={true}
                />
                <Input
                  inputName="Confirm Password"
                  inputPlaceholder="Confirm Password"
                  changeHandler={formikProps.handleChange("confirmPassword")}
                  givenValue={formikProps.values.confirmPassword}
                  secureData={true}
                />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={formikProps.handleSubmit}
                >
                  <Text
                    style={{ textAlign: "center", color: "#fff", fontSize: 16 }}
                  >
                    Submit Data
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginTop: 3,
                  }}
                >
                  {(formikProps.touched && formikProps.errors.userName) ||
                    (formikProps.touched &&
                      formikProps.errors.recentPassword) ||
                    (formikProps.touched && formikProps.errors.newPassword) ||
                    (formikProps.touched && formikProps.errors.confirmPassword)}
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
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
    marginBottom: 8,
  },
  btn: {
    height: 53,
    width: 280,
    backgroundColor: secondLayer,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
