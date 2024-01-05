import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from "expo-router";
import { Text, View, ScrollView, TextInput, Image, StyleSheet, StatusBar } from 'react-native';
import SafeArea from '../components/SafeArea';

const logo = require("../assets/images/logo.png");

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isChecked, setChecked] = useState(false);

  const postData = async () => {
    try {
      const data = {
        email: email,
        password: password,
        name: name,
      };
      if (password == confirmPassword) {
        const response = await axios.post(
          "http://192.168.1.73/api/register",
          data
        ); // Replace with your API endpoint
        ToastAndroid.show("Daftar Berhasil", ToastAndroid.SHORT);
        router.replace("/Login");
        console.log(response.data);
      } else {
        ToastAndroid.show("Password Tidak Sama", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeArea />
        <StatusBar backgroundColor={"#041329"} barStyle={"dark-content"} />
        <View style={styles.biruAtas}>
          <Image
            source={logo}
            style={{ height: 40, marginTop: 130 }}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            Daftar akun untuk melanjutkan ke {"\n"}Rekom Movie
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          placeholderTextColor="gray"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.pass}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.inputPass}
            placeholder="Password"
            placeholderTextColor="gray"
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
        <View style={styles.pass}>
          <TextInput
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.inputPass}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#FCA806" : undefined}
          />
          <Text style={styles.textDua}>
            Saya setuju dengan{" "}
            <Text style={styles.highlightedText}> Ketentuan Layanan </Text>{" "}
            {"\n"}Recom Movie,{" "}
            <Text style={styles.highlightedText}> Kebijakan Privasi </Text>, dan
            {"\n"}
            <Text style={styles.highlightedText}>
              Pengaturan Pemberitahuan default{" "}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.buttonDaftarContainer, !isChecked && styles.buttonDisabled]}
          disabled={!isChecked}
        >
          <Text style={styles.buttonDaftar}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/Login")}>
          <Text style={{ color: 'gray', marginTop: 10, marginBottom: 55, }}>
            Sudah memiliki akun? <Text style={styles.highlightedText}>Masuk</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#062148",
  },
  biruAtas: {
    height: 280,
    width: 420,
    backgroundColor: "#0C3358",
    alignItems: "center",
    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
    marginBottom: 10,
  },
  text: {
    color: "white",
    marginTop: 40,
    marginBottom: 50,
    textAlign: "center",
  },
  textDua: {
    color: "gray",
    marginTop: 25,
    marginBottom: 25,
    textAlign: "left",
  },
  highlightedText: {
    color: "#3AB6D1",
  },
  input: {
    color: "white",
    height: 45,
    borderColor: "#304665",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 17,
    width: "85%",
    marginTop: 15,
    marginHorizontal: 10,
    backgroundColor: "#304665",
  },
  inputPass: {
    height: 45,
    paddingLeft: 10,
    fontSize: 17,
    marginHorizontal: 10,
    width: "80%",
    color: "white",
  },
  pass: {
    backgroundColor: "#304665",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#304665",
    borderRadius: 10,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 20,
    width: "20%",
  },
  buttonDaftarContainer: {
    backgroundColor: "#FCA806",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 125,
  },
  buttonDaftar: {
    fontSize: 18,
    color: "#fff",
  },
  buttonDisabled: {
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 125,
  },
  checkboxContainer: {
    backgroundColor: "#062148",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    marginRight: 10,
    marginTop: -20,
  },
});
