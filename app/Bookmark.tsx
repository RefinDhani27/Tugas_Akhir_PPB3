import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Bookmark() {

    const films = [
        {
            title: 'Interstellar',
            genre: 'Film Action',
            image: require('../assets/images/Film_1.png'),
        },
        {
            title: 'Asu Mare!',
            genre: 'Film Komedi',
            image: require('../assets/images/Film_2.png'),
        },
        {
            title: 'The Mother',
            genre: 'Film Action',
            image: require('../assets/images/Film_3.png'),
        }
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="#1e3a5f" barStyle="light-content" />
                <Text style={styles.header}>KOLEKSI FILM</Text>
                <View>
                    {films.map((film, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.cardContainer}>
                                <Image source={film.image} style={styles.image} />
                                <View style={styles.details}>
                                    <TouchableOpacity style={styles.button1}>
                                        <Text style={styles.buttonTrailer}>TRAILER</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button2}>
                                        <Text style={styles.buttonJenis}>JENIS FILM</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textJenis}>{film.genre}</Text>
                                    <View style={styles.buttonContainer}>
                                        <FontAwesome name="bookmark" size={24} color="white" />
                                        <FontAwesome name="trash-o" size={24} color="white" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#062148',
    },
    header: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFAA06',
        padding: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#031126',
        borderRadius: 8,
        overflow: 'hidden',
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
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 150,
        height: 240,
        resizeMode: 'contain',
        borderRadius: 10
    },
    details: {
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        backgroundColor: '#FFAA06',
        padding: 7,
        borderRadius: 10,
        marginBottom: 15,
        width: 105,
    },
    button2: {
        padding: 7,
        borderRadius: 10,
        borderColor: '#FFAA06',
        borderWidth: 1,
        marginBottom: 15,
        width: 105,
    },
    buttonTrailer: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonJenis: {
        color: '#FFAA06',
        fontWeight: 'bold',
        marginBottom: 2,
        borderColor: '#FFAA06',
        textAlign: 'center'
    },
    textJenis: {
        fontSize: 13,
        color: '#898989',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10
    },
});
