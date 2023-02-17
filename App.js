import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./Screens/image/PhotoBG.jpg")}
      >
        <Text>New app dffgngyjfgj</Text>
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
