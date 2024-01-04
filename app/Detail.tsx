import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailFilm}>DETAIL FILM</Text>
      <View style={styles.card}>
        <ScrollView>
          <View style={styles.info}>
            <Text>17+</Text>
            <View>
              <Text style={styles.movieTitle}>INTERSTELLAR</Text>
              <Text style={styles.movieGenre}>Sci-fi, Action</Text>
            </View>
          </View>
          <View style={styles.contentImage}>
            <View style={styles.gambar1}>
              {/* <Image source={require("../assets/images/posterFilm.png")} /> */}
            </View>
            <View style={styles.deskripsi}>
              <View style={styles.waktu}>
                <MaterialIcons name="history" />
                <Text style={styles.metaInfo}>169 Menit</Text>
              </View>
              <Text style={styles.Producer}>Producer:</Text>
              <Text style={styles.ProducerContent}>
                Nina Jacobson, Francis- Lawrence, Brad Simpson
              </Text>
              <Text style={styles.Writer}>Writer:</Text>
              <Text style={styles.WriterContent}>
                Nina Jacobson, Francis- Lawrence, Brad Simpson
              </Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.trailerButton}>
                  <Text style={styles.buttonText}>TRAILER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                  <Text style={styles.buttonText}>PLAY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sipnopsis}>
            <Text style={styles.Cerita}>Sipnopsis Cerita</Text>
            <Text style={styles.isiCerita}>
              When Earth becomes uninhabitable in the future, a farmer and
              ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft,
              along with a team of researchers, to find a new planet for humans.
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#062148",
  },
  detailFilm: {
    color: "#FFAA06",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    marginRight: 210,
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
    margin: 20,
    flexDirection: "row",
    gap: 10,
  },
  icon1: {
    width: 40,
    height: 40,
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
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  gambar1: {
    width: "45%",
    height: 200,
  },
  deskripsi: {
    paddingLeft: 60,
    paddingTop: 10,
    width: "55%",
    height: "auto",
  },
  waktu: {
    flexDirection: "row",
    gap: 10,
  },
  metaInfo: {
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  Producer: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  ProducerContent: {
    color: "#999",
    marginBottom: 10,
  },
  Writer: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  WriterContent: {
    color: "#999",
    marginBottom: 10,
  },
  buttonGroup: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  trailerButton: {
    backgroundColor: "#FFAA06",
    padding: 10,
    borderRadius: 10,
    width: 80,
    marginTop: 25,
  },
  playButton: {
    padding: 10,
    borderColor: "#FFAA06",
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  sipnopsis: {
    padding: 15,
  },
  Cerita: {
    color: "#FFAA06",
    marginTop: 30,
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
    marginTop: 30,
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

export default FlexboxExample;
