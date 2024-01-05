import {
  Image,
  TextInput,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import SafeArea from "../components/SafeArea";
import { router } from "expo-router";
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logo = require('../assets/images/logo.png');

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const storeData = async (value: string, name: string) => {
    try {
      await AsyncStorage.setItem("token", value);
      await AsyncStorage.setItem("name", name);
    } catch (e) {
      // saving error
    }
  };
  const postData = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://192.168.1.73/api/login", data); // Replace with your API endpoint
      console.log(response.data);

      if (response.data["data"]["token"] != null) {
        storeData(response.data["data"]["token"], response.data["user"]);
        console.log(response.data["user"]);

        console.log("anj");
        router.push("/HomePage");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeArea />
      <StatusBar backgroundColor={"#041329"} barStyle={"dark-content"} />
      <View style={styles.biruAtas}>
        <Image source={logo} style={{ height: 40, marginTop: 130 }} resizeMode="contain" />
        <Text style={styles.text}>Masukkan akun untuk melanjutkan ke {'\n'}Rekom Movie</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input]}
        secureTextEntry={true}
        placeholder="Masukan Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.buttonMasukContainer, { backgroundColor: "#FFAA06" }]}
        onPress={postData}
      >
        <Text style={styles.buttonMasuk}>Masuk</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 5, marginTop: 10}}>
        <Text style={styles.Text}>Belum memiliki akun?</Text>
        <TouchableOpacity onPress={() => router.push("/Detail")}>
          <Text style={styles.link}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ width: "85%" }}>
        <Text style={[styles.Text]}>
          Dengan melanjutkan, berarti Anda menyetujui{" "}
          <Text style={styles.link}>Persyaratan Layanan </Text>
          Recom Movie dan menyatakan bahwa Anda telah membaca{" "}
          <Text style={styles.link}>Kebijakan Privasi </Text>
          kami. <Text style={styles.link}>Pemberitahan di koleksi </Text>
        </Text>
      </View>
      <View style={{ height: "3%" }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#062148',
  },
  biruAtas: {
    height: 280,
    width: 420,
    backgroundColor: "#0C3358",
    alignItems: 'center',
    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
    marginBottom: 20
  },
  text: {
    color: 'white',
    marginTop: 40,
    marginBottom: 50,
    textAlign: 'center'
  },
  input: {
    color: 'white',
    height: 45,
    borderColor: '#304665',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 17,
    width: '85%',
    marginBottom: 15,
    marginHorizontal: 10,
    backgroundColor: '#304665'
  },
  buttonMasukContainer: {
    backgroundColor: "#FCA806",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 125
  },
  buttonMasuk: {
    fontSize: 18,
    color: "#fff",
  },
  Text: {
    color: "#898989",
    textAlign: "center",
  },
  link: {
    color: "#3AB6D1",
  },
});
