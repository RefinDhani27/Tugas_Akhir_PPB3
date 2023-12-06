import {
  Image,
  TextInput,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import BackgroundLogin from "../components/BackgroundLogin";
import SafeArea from "../components/SafeArea";
import { router } from "expo-router";
import HomePage from "./HomePage";

export default function Login() {
  return (
    <View
      style={{ width: "100%", height: "100%", alignItems: "center", gap: 30 }}
    >
      <SafeArea />
      <StatusBar backgroundColor={"#041329"} barStyle={"dark-content"} />
      <BackgroundLogin />
      <View style={{ height: "10%" }} />
      <Image
        source={require("../assets/images/splash_icon.png")}
        style={{ alignSelf: "center" }}
      />
      <Text style={{ color: "#fff", width: "70%", textAlign: "center" }}>
        Masukkan akun untuk melanjutkan ke Recom Movie
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TextInput
          style={styles.TextInput}
          placeholder="Alamat Email"
          placeholderTextColor={"#fff"}
        />
        <TextInput
          style={[styles.TextInput]}
          secureTextEntry={true}
          placeholder="Masukan Password"
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity
          style={[styles.Button, { backgroundColor: "#FFAA06" }]}
          onPress={() => router.push("/HomePage")}
        >
          <Text style={{ color: "#fff" }}>Masuk</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.Text}>Belum memiliki akun?</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Daftar</Text>
          </TouchableOpacity>
        </View>
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
  TextInput: {
    height: 41,
    width: "80%",
    backgroundColor: "#304665",
    borderRadius: 10,
    color: "#fff",
    paddingHorizontal: 10,
  },
  Button: {
    height: 41,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#898989",
    textAlign: "center",
  },
  link: {
    color: "#3AB6D1",
  },
});
