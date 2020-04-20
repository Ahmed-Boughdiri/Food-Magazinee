import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Application from "./screens/Application";
import EditInfo from "./screens/EditInfo";
import EditInfoHeader from "./component/EditInfoHeader";
import Recipe from "./screens/Recipe";
import AboutUs from "./screens/AboutUs";
import Support from "./screens/Support";
import { secondLayer } from "./global/officialColors";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Application" children={Application} options={{
          headerShown: false
        }} />
        <Stack.Screen name="EditInfo" component={EditInfo} options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: secondLayer
          },
          headerTitle: () => <EditInfoHeader />
        }} />
        <Stack.Screen name="Recipe" component={Recipe} options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: "transparent"
          },
          headerTitle: ""
        }} />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Support" component={Support} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;