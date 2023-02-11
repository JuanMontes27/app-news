import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

const USER = "test";
const PASSWORD = "test";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (!user || !password) {
      alert("Favor de ingresar los dos campos");
      return;
    }

    if (user !== USER || password !== PASSWORD) {
      alert("Datos incorrectos para ingresar");
      return;
    }
    
    setUser("");
    setPassword("");
    navigation.navigate("News");
  };

  return (
    <View style={styles.Login}>
      <Text style={styles.Title}>Login</Text>
      <TextInput
        style={styles.Labels}
        placeholder="   Username:"
        onChangeText={setUser}
        value={user}
      />
      <TextInput
        style={styles.Labels}
        placeholder="   Password:"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button
        color="#2543cc"
        title="Ingresar"
        onPress={handleSubmit}
      />
    </View>
  );
};

// style={styles.Login}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 50,
    color: "#2543cc",
    fontWeight: "bold",
    marginBottom: 20,
  },
  Labels: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#2543cc",
    fontSize: 16,
    marginBottom: 20,
    height: 40,
    width: "90%",
  }
});

export default Login;
