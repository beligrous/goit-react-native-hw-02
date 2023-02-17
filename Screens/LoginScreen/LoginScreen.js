import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
      <Button style={styles.btn} title="Увійти" />
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
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 16,
    marginTop: 16,
  },
  btn: {
    marginTop: 43,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});
