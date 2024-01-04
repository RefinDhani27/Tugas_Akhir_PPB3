import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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
        `http://192.168.1.73/api/movie/${search}`,
        config
      );
      setMovies(response.data.results);

      console.log(response.data.results[0].overview);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Menunda pemanggilan getData setelah pengguna berhenti mengetik selama 500 ms
    const delaySearch = setTimeout(() => {
      getData();
    }, 500);

    // Membersihkan timeout setiap kali nilai search berubah
    return () => clearTimeout(delaySearch);
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={25}
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Cari Film Pilihanmu"
          placeholderTextColor={"white"}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
      </View>
      <View>
        {movies != undefined &&
          movies.map((movie) => (
            <View key={movie.id}>
              <Text>{movie.name}</Text>
              <Text>{movie.overview}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#062148",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAA06",
    margin: 10,
    borderRadius: 18,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    color: "white",
    borderRadius: 20,
  },
});
