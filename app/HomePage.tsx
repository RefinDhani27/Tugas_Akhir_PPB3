import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SafeArea from "../components/SafeArea";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { router, Link } from "expo-router";

export default function HomePage() {
  const [imageData, setImageData] = useState(null);
  const [name, setName] = useState("");
  async function getToken() {
    try {
      const value = await AsyncStorage.getItem("token");
      console.log(await AsyncStorage.getItem("name"));
      setName(await AsyncStorage.getItem("name"));
      if (value == null) {
        router.replace("/Login");
      }

      return value;
    } catch (e) {
      // error reading value
    }
    return null;
  }
  async function getImage() {
    try {
      const token = await getToken();
      console.log(token); // Assuming getToken is an async function or returns a promise
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Adjust the content type as needed
        },
      };
      console.log("Request Config:", config);

      const response = await axios.get(
        "http://192.168.1.73/api/movie/image/453395",
        config
      );

      setImageData(response.data);
      return response;
    } catch (error) {
      console.error(error);
      return null; // Return null in case of an error
    }
  }
  getToken();
  getImage();
  async function logout() {
    AsyncStorage.removeItem("token");
    AsyncStorage.clear;
    router.replace("/Login");
  }
  return (
    <View style={{ backgroundColor: "#031126", width: "100%" }}>
      <ScrollView style={{ backgroundColor: "#062148", width: "100%" }}>
        <SafeArea />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              source={require("../assets/images/Profile.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 2000,
              }}
            />
            <View style={{ gap: 5 }}>
              <Text style={{ color: "#fff" }}>
                Halo, <Text style={{ fontWeight: "bold" }}>{name}</Text>
              </Text>
              <Text style={{ color: "rgba(255,255,255,0.5)" }}>
                Pilih film favorit kamu
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => logout()}>
            <Ionicons name="log-out-outline" size={35} color={"#fff"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <View
            style={{ height: 3, width: "100%", backgroundColor: "#304667" }}
          />
        </View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22, padding: 15}}>Top 10 Film Rekomendasi</Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginRight: 20,
            marginTop: -15,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity onPress={() => router.push("/Detail/453395")}>
            <Image
              style={styles.imageStyle}
              source={{ uri: "http://192.168.1.73/api/movie/image/453395" }}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/726209")}>
          <Image
            style={styles.imageStyle}
            source={{ uri: "http://192.168.1.73/api/movie/image/726209" }}
            resizeMode="contain"
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/572802")}>
          <Image
            style={styles.imageStyle}
            source={{ uri: "http://192.168.1.73/api/movie/image/572802" }}
            resizeMode="contain"
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/787699")}>
          <Image
            style={styles.imageStyle}
            source={{ uri: "http://192.168.1.73/api/movie/image/787699" }}
            resizeMode="contain"
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/872585")}>
          <Image
            source={{ uri: "http://192.168.1.73/api/movie/image/872585" }}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/157336")}>
            <Image
              source={{ uri: "http://192.168.1.73/api/movie/image/157336" }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/155")}>
            <Image
              source={{ uri: "http://192.168.1.73/api/movie/image/155" }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/361743")}>
            <Image
              source={{ uri: "http://192.168.1.73/api/movie/image/361743" }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/603692")}>
            <Image
              source={{ uri: "http://192.168.1.73/api/movie/image/603692" }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Detail/475557")}>
            <Image
              source={{ uri: "http://192.168.1.73/api/movie/image/475557" }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          height: "10%",
          width: "100%",
          justifyContent: "space-evenly",
          paddingTop: 14,
          marginBottom: 500,
        }}
      >
        <Ionicons name="home" size={24} color={"#fff"} />
        <TouchableOpacity onPress={() => router.push("/SearchPage")}>
          <Ionicons name="search" size={24} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/Bookmark")}>
          <Ionicons name="bookmark" size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get("screen").width / 2.4,

    height: Dimensions.get("screen").width / 2.5 / 0.625,
    borderRadius: 20,
    marginTop: 20,
  },
});
