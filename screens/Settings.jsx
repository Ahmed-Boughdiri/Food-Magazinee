import React from "react";
import { View, StyleSheet, Dimensions, Switch, Modal } from "react-native";
import { loadAsync } from "expo-font";
import { Switcher, Setting } from "../component/Setting";
import SignOutConfirm from "../component/SignOutConfirm";
import { secondLayer } from "../global/officialColors";
import AppHeader from "../component/AppHeader";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.loadFont = async () =>
      await loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      signOut: false,
      font: "",
    };
  }

  componentWillMount() {
    this.loadFont().then(() => this.setState({ font: "Lobster" }));
  }

  editInfo = () => this.props.navigation.navigate("EditInfo");
  goToAboutUs = () => this.props.navigation.navigate("AboutUs");
  goToSupport = () => this.props.navigation.navigate("Support");
  showSignOutConfirm = () => this.setState({ signOut: true });
  cancelSignOut = () => this.setState({ signOut: false });
  goToWelcome = () => {
    this.setState({ signOut: false });
    this.props.navigation.navigate("Welcome");
  };
  openDrawer = () => this.props.navigation.openDrawer();

  render() {
    return (
      <View style={styles.container}>
        <AppHeader name="Settings" openDrawer={this.openDrawer} />
        <View style={styles.settingsContainer}>
          <Setting
            name="Account"
            icon={require("../assets/user.png")}
            last="edit"
            size={30}
            touchable={false}
            eventFn={this.editInfo}
          />
          <Setting
            name="Notifications"
            icon={require("../assets/notifications.png")}
            last=""
            size={30}
            switcher={<Switcher />}
            touchable={false}
          />
          <Setting
            name="Dark Mode"
            icon={require("../assets/dark.png")}
            last=""
            size={30}
            touchable={false}
            switcher={<Switcher />}
          />
          <Setting
            name="Support"
            icon={require("../assets/support.png")}
            last=""
            size={30}
            touchable={true}
            onPressEvent={this.goToSupport}
          />
          <Setting
            name="About Us"
            icon={require("../assets/info.png")}
            last=""
            size={25}
            touchable={true}
            onPressEvent={this.goToAboutUs}
          />
          <Setting
            name="Sign Out"
            icon={require("../assets/signOut.png")}
            last=""
            size={25}
            touchable={true}
            onPressEvent={this.showSignOutConfirm}
          />
        </View>
        <Modal
          visible={this.state.signOut}
          transparent={true}
          animationType="slide"
        >
          <SignOutConfirm
            cancelSignOut={this.cancelSignOut}
            goToWelcome={this.goToWelcome}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: WIDTH,
    height: 85,
    backgroundColor: secondLayer,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "flex-end",
    paddingBottom: 5,
  },
  drawer: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "270deg" }],
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    color: "#fff",
    marginLeft: 10,
    marginBottom: 8,
  },
  settingsContainer: {
    height: HEIGHT - 100,
    width: WIDTH,
    alignItems: "center",
    marginTop: 30,
  },
});
