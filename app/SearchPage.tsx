import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SafeArea from "../components/SafeArea";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView>
        <SafeArea />
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
          <View>
            {movie.overview != null && movie.overview != ''  &&
              <View style={styles.card}>
                <View key={movie.id} style={styles.detailCard}>
                  <Text style={{fontSize: 22, fontWeight: "bold", color: 'white'}}>{movie.title || movie.name}</Text>
                  <Text style={{}}>{movie.overview}</Text>
                </View>
              </View>}
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
  card: {
    backgroundColor: '#596B85',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    padding: 15,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  detailCard: {
    color: 'white',
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAA06",
    margin: 15,
    borderRadius: 10,
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
