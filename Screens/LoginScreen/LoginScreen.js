import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";

function LoginScreen({ navigation }) {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  formSubmit = () => {
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboard(false);
      }}
    >
      <ImageBackground
        style={styles.image}
        source={require("../image/PhotoBG.jpg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Адреса електронної пошти"
              onFocus={() => {
                setIsKeyboard(true);
                setIsLoginActive(true);
              }}
              onBlur={() => setIsLoginActive(false)}
              style={{
                ...styles.input,
                borderColor: isLoginActive ? "#FF6C00" : "#E8E8E8",
              }}
            />
            <TextInput
              value={password}
              onChangeText={(value) => {
                setPassword(value);
              }}
              secureTextEntry={true}
              placeholder="Пароль"
              style={{
                ...styles.input,
                borderColor: isPasswordActive ? "#FF6C00" : "#E8E8E8",
              }}
              onBlur={() => setPasswordActive(false)}
              onFocus={() => {
                setIsKeyboard(true);
                setPasswordActive(true);
              }}
            />
            {!isKeyboard && (
              <>
                <TouchableOpacity
                  onPress={formSubmit}
                  activeOpacity={0.7}
                  style={styles.btn}
                >
                  <Text style={styles.btnTitle}>Увійти</Text>
                </TouchableOpacity>
                <Text
                  style={styles.noAcountTitle}
                  onPress={() => navigation.navigate("Registration")}
                >
                  Ще немає акаунта? Зареєструватися
                </Text>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: { fontSize: 30, marginTop: 32, marginBottom: 32, textAlign: "center" },

  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    marginTop: 43,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  btnTitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  noAcountTitle: {
    marginTop: 16,
    marginBottom: 144,
    textAlign: "center",
  },
});
