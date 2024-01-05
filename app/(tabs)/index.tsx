import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
} from "react-native";

const logo = require("../../assets/images/logo.png");

const carouselImages = [
  require("../../assets/images/gambar_1.png"),
  require("../../assets/images/gambar_1.png"),
  require("../../assets/images/gambar_1.png"),
];

const { width } = Dimensions.get("window");
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value != null && value != undefined) {
      console.log(value);
      router.replace("/HomePage");
    }
  } catch (e) {
    // error reading value
  }
};

export default function TabOneScreen() {
  getData();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ScrollView>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#041329"} barStyle={"dark-content"} />
      <View style={styles.content}>
        <View style={styles.carouselContent}>
          <ScrollView
            ref={carouselRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            style={styles.carouselContainer}
          >
            {carouselImages.map((image, index) => (
              <Image key={index} source={image} style={styles.carouselImage} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.paginationWrapper}>
          {carouselImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.selamatDatang}>
          Selamat Datang di {"\n"}Recom Movie
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonMasukContainer}
        onPress={() => router.replace("/Login")}
      >
        <Text style={styles.buttonMasuk}>MASUK</Text>
      </TouchableOpacity>
      <View style={styles.putihBawah} />
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
  logo: {
    height: 40,
  },
  carouselContent: {
    height: "52%",
    width: "100%",
  },
  carouselContainer: {
    height: "100%",
    width: width,
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: "contain",
  },
  paginationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#3AB6D1",
  },
  dotActive: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  dotInactive: {},
  buttonMasukContainer: {
    backgroundColor: "#FCA806",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: -20,
    zIndex: 10,
  },
  buttonMasuk: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  putihBawah: {
    width: 500,
    height: 500,
    borderRadius: 2000,
    backgroundColor: "#fff",
    marginBottom: -350,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#062148",
  },
  selamatDatang: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
