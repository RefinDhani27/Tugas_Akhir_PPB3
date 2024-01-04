import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import SafeArea from "../components/SafeArea";
import { Ionicons } from "@expo/vector-icons";
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
      const token = await getToken(); // Assuming getToken is an async function or returns a promise
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Adjust the content type as needed
        },
      };
      console.log("Request Config:", config); // Log request configuration

      const response = await axios.get("http://192.168.1.73/api/movie/", config);
      console.log("ok");
      return response.data; // Return the data from the response
    } catch (error) {
      console.error(error);
      return null; // Return null in case of an error
    }
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
            <View style={{ gap: 5 }}>
              <Text style={{ color: "#fff" }}>
                Halo, <Text style={{ fontWeight: "bold" }}>Kak Zila</Text>
              </Text>
              <Text style={{ color: "rgba(255,255,255,0.5)" }}>
                Pilih film favorit kamu
              </Text>
            </View>
          </View>
          <Ionicons
            name="log-out-outline"
            size={35}
            color={"#fff"}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <View style={{ height: 3, width: '100%', backgroundColor: '#304667' }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 20,
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
    width: Dimensions.get("screen").width / 2.4,
    backgroundColor: "red",
    height: Dimensions.get("screen").width / 2.5 / 0.625,
    borderRadius: 20,
    marginTop: 20,
  },
});
