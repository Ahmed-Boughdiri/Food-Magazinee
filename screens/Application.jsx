import React from "react";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import Home from "./Home";
import Favourites from "./Favourites";
import Settings from "./Settings";
import DrawerComponent from "../component/DrawerComponent";

const Drawer = createDrawerNavigator();

const Application = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Application;
