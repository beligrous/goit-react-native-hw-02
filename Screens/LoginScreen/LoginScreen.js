import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
      <TextInput
        secureTextEntry={true}
        placeholder="Пароль"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTitle}>Увійти</Text>
      </TouchableOpacity>
      <Text style={styles.noAcountTitle}>Ще нема акаунта? Зареєструватися</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: 490,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: { fontSize: 30, marginTop: 32, marginBottom: 16, textAlign: "center" },

  input: {
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
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
    textAlign: "center",
  },
});
