<<<<<<< HEAD
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { router } from "expo-router";
=======
import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

const logo = require('../../assets/images/logo.png');

const carouselImages = [
  require('../../assets/images/gambar_1.png'),
  require('../../assets/images/gambar_1.png'),
  require('../../assets/images/gambar_1.png'),
];

const { width } = Dimensions.get('window');
>>>>>>> 9381eb50b13bec7886d3f0ee61bde568d95635c2

export default function TabOneScreen() {

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
<<<<<<< HEAD
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity onPress={() => router.push("/Login")}>
        <Text>Anjay</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/HomePage")}>
        <Text>Anjay</Text>
      </TouchableOpacity>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
=======
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
              style={[styles.dot, index === activeIndex ? styles.dotActive : styles.dotInactive]}
            />
          ))}
        </View>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.selamatDatang}>Selamat Datang di {'\n'}Recom Movie</Text>
      </View>
      <TouchableOpacity style={styles.buttonMasukContainer}>
          <Text style={styles.buttonMasuk}>MASUK</Text>
      </TouchableOpacity>
      <View style={styles.putihBawah} />
>>>>>>> 9381eb50b13bec7886d3f0ee61bde568d95635c2
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "center",
=======
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#062148'
  },
  logo: {
    height: 40
  },
  carouselContent: {
    height: '52%',
    width: '100%',
  },
  carouselContainer: {
    height: '100%',
    width: width,
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: 'contain',
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#3AB6D1',
  },
  dotActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  dotInactive: {
    
  },
  buttonMasukContainer: {
    backgroundColor: "#FCA806",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: -20,
    zIndex: 10
  },
  buttonMasuk: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#fff",
>>>>>>> 9381eb50b13bec7886d3f0ee61bde568d95635c2
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
    backgroundColor: '#fff',
    marginBottom: -350,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#062148'
  },
  selamatDatang: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
});
