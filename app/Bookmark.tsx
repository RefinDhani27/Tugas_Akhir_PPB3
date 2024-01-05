
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Bookmark() {
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
        `http://192.168.1.73/api/bookmark`,
        config
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async (id: number) => {
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

      const response = await axios.post(
        "http://192.168.1.73/api/bookmark/delete",
        data,
        config
      ); // Replace with your API endpoint
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };


  getData();
  const films = [
    {
      title: "Interstellar",
      genre: "Film Action",
      image: require("../assets/images/Film_1.png"),
    },
    {
      title: "Asu Mare!",
      genre: "Film Komedi",
      image: require("../assets/images/Film_2.png"),
    },
    {
      title: "The Mother",
      genre: "Film Action",
      image: require("../assets/images/Film_3.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#1e3a5f" barStyle="light-content" />
        <Text style={styles.header}>KOLEKSI FILM</Text>
        <View>
          {movies.map((film) => (
            <View key={film.id} style={styles.card}>
              <View style={styles.cardContainer}>
                <Image
                  source={{
                    uri: "http://192.168.1.73/api/movie/image/" + film.movie_id,
                  }}
                  style={styles.image}
                />
                <View style={styles.details}>
                  <Text style={styles.textJenis}>{film.genre}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => router.push("/Detail/" + film.movie_id)}
                    >
                      <Text>Detail Movie</Text>
                    </TouchableOpacity>
                    <FontAwesome name="bookmark" size={24} color="white" />
                    <TouchableOpacity
                      onPress={() => {
                        postData(film.movie_id);
                      }}
                    >
                      <FontAwesome name="trash-o" size={24} color="white" />
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#062148",
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFAA06",
    padding: 20,
    marginBottom: 5,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#031126",
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 150,
    height: 240,
    resizeMode: "contain",
    borderRadius: 10,
  },
  details: {
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#FFAA06",
    padding: 7,
    borderRadius: 10,
    marginBottom: 15,
    width: 105,
  },
  button2: {
    padding: 7,
    borderRadius: 10,
    borderColor: "#FFAA06",
    borderWidth: 1,
    marginBottom: 15,
    width: 105,
  },
  buttonTrailer: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonJenis: {
    color: "#FFAA06",
    fontWeight: "bold",
    marginBottom: 2,
    borderColor: "#FFAA06",
    textAlign: "center",
  },
  textJenis: {
    fontSize: 13,
    color: "#898989",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
