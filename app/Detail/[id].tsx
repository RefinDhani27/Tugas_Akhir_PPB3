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
  Dimensions,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Detail() {

  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);

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
              <Text style={styles.movieGenre}>{movies.genres != undefined && movies.genres.map((movie) => (
                movie.name + ' '
              ))}</Text>
            </View>
          </View>
          <View style={styles.contentImage}>
            <View style={styles.containerGambar}>
              <Image
                source={{ uri: "http://192.168.1.73/api/movie/image/" + id }}
                style={styles.imageStyle}
                resizeMode="contain"
              />
          </View>
      </View>
      <View style={styles.sipnopsis}>
        <Text style={styles.Cerita}>Sipnopsis Cerita</Text>
        <Text style={styles.isiCerita}>
          {movies.overview}
        </Text>
        <Text style={styles.koleksi}>Jadikan Koleksi</Text>
        <View style={styles.favorit}>
          <TouchableOpacity onPress={() => null}>
            <Ionicons name="bookmark"></Ionicons>
          </TouchableOpacity>
          <Text style={styles.tambahkan}>Tambahkan Ke Koleksi</Text>
        </View>
      </View>
    </ScrollView>
      </View >
    </View >
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
    justifyContent: "center",
    alignItems: "center",
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
  imageStyle: {
    width: Dimensions.get("screen").width / 2.0,

    height: Dimensions.get("screen").width / 2.0 / 0.625,
    borderRadius: 20,
    marginTop: 20,
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
