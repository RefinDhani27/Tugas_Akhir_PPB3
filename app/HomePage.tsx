import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import SafeArea from "../components/SafeArea";
import HomePageHeader from "../components/HomePageHeader";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const [token, setToken] = useState("");
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  async function getData() {
    try {
      // Assuming getData is a function that returns the bearer token
      getToken(); // Call the function to get the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // You may need to adjust the content type based on your API requirements
        },
      };
      console.log("Request Config:", config); // Log request configuration

      const response = await axios.get(
        "http://192.168.1.73/api/movie/",
        config
      );
      console.log("ok");
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
  console.log(getData);

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
            <View style={{ gap: 3 }}>
              <Text style={{ color: "#fff" }}>
                Halo, <Text style={{ fontWeight: "bold" }}>Kak Zila</Text>
              </Text>
              <Text style={{ color: "rgba(255,255,255,0.5)" }}>
                Pilih film favorit kamu
              </Text>
            </View>
          </View>

          <Ionicons
            name="notifications-circle-outline"
            size={40}
            color={"#fff"}
          />
        </View>
        <Image
          source={require("../assets/images/fotoFilmBanyak.png")}
          style={{ width: "100%" }}
        />
        <TouchableOpacity
          style={{
            borderColor: "#FFAA06",
            borderWidth: 1,
            paddingHorizontal: 5,
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            margin: 5,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#FFAA06",
            }}
          >
            Lihat Semua
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            alignItems: "center",

            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/posterFilm.png")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
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
        <Ionicons name="search" size={24} color={"#fff"} />
        <Ionicons name="bookmark" size={24} color={"#fff"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "red",
    height: Dimensions.get("screen").width / 2.2 / 0.625,
    borderRadius: 20,
    marginTop: 10,
  },
});
