import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import SafeArea from "../../components/SafeArea";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isFavourite, setFavourite] = useState(false);
  console.log(id);

  const postData = async () => {
    try {
      const data = {
        movieId: id,
      };
      const token = await getToken();
      console.log(token); // Assuming getToken is an async function or returns a promise
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Adjust the content type as needed
        },
      };
      if (isFavourite == false) {
        const response = await axios.post(
          "http://192.168.1.73/api/bookmark/add",
          data,
          config
        ); // Replace with your API endpoint
        console.log(response.data);
      } else {
        const response = await axios.post(
          "http://192.168.1.73/api/bookmark/delete",
          data,
          config
        ); // Replace with your API endpoint
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const [movies, setMovies] = useState([]);

  async function getToken() {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
        return value;
      }
    } catch (e) {
      // handle error reading value
    }
    return null;
  }

  const getData = async () => {
    try {
      const token = await getToken();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        `http://192.168.1.73/api/movie/detail/${id}`,
        config
      );
      console.log(response.data);
      setMovies(response.data);

      console.log(response.data.results[0].overview);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getData();
  return (
    <View style={styles.container}>
      <SafeArea />

      <StatusBar backgroundColor={"#041329"} barStyle={"dark-content"} />
      <View style={styles.containerDetail}>
        <Text style={styles.detailFilm}>DETAIL FILM</Text>
      </View>
      <View style={styles.card}>
        <ScrollView>
          <View style={styles.info}>
            <View>
              <Text style={styles.movieTitle}>{movies.title}</Text>
              <Text style={styles.movieGenre}>
                {movies.genres != undefined &&
                  movies.genres.map((movie) => movie.name + " ")}
              </Text>
            </View>
          </View>
          <View style={styles.contentImage}>
            <View style={styles.containerGambar}>
              <Image
                source={{ uri: "http://192.168.1.73/api/movie/image/726209" }}
                style={{ borderRadius: 20 }}
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.trailerButton}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  TRAILER
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sipnopsis}>
            <Text style={styles.Cerita}>Sipnopsis Cerita</Text>
            <Text style={styles.isiCerita}>{movies.overview}</Text>
            <Text style={styles.koleksi}>Jadikan Koleksi</Text>
            <View style={styles.favorit}>
              <TouchableOpacity
                onPress={() => {
                  setFavourite(!isFavourite);
                  postData();
                }}
              >
                {isFavourite ? (
                  <Ionicons
                    color={"#FFAA06"}
                    size={24}
                    name="bookmark"
                  ></Ionicons>
                ) : (
                  <Ionicons color={"#FFF"} size={24} name="bookmark"></Ionicons>
                )}
              </TouchableOpacity>
              <Text style={styles.tambahkan}>Tambahkan Ke Koleksi</Text>
            </View>
          </View>
          <Image
            source={{ uri: "http://192.168.1.73/api/movie/image/726209" }}
            style={{ borderRadius: 20 }}
            onError={(e) => console.log("Error loading image:", e)}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#062148",
  },
  containerDetail: {
    alignSelf: "flex-start",
  },
  detailFilm: {
    color: "#FFAA06",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    marginRight: 0,
  },
  card: {
    width: "90%",
    height: "70%",
    backgroundColor: "#031126",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  info: {
    margin: 10,
    flexDirection: "row",
    gap: 10,
  },
  movieTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  movieGenre: {
    color: "white",
    fontWeight: "bold",
  },
  contentImage: {
    padding: 10,
  },
  containerGambar: {
    backgroundColor: "red",
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  trailerButton: {
    backgroundColor: "#031126",
    borderColor: "#FFAA06",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  sipnopsis: {
    padding: 10,
  },
  Cerita: {
    color: "#FFAA06",
    marginTop: 10,
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  isiCerita: {
    color: "white",
    marginTop: 15,
    marginRight: 10,
  },
  koleksi: {
    color: "#FFAA06",
    marginTop: 20,
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  favorit: {
    margin: 20,
    flexDirection: "row",
  },
  tambahkan: {
    color: "white",
    marginBottom: 40,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon3: {
    width: 41,
    height: 41,
    marginBottom: 20,
  },
});
