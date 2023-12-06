import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchPage() {
    const [query, setQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <FontAwesome style={styles.searchIcon} name="search" size={25} color="white" />
                <TextInput
                    style={styles.input}
                    placeholder="Cari Film Pilihanmu"
                    placeholderTextColor={"white"}
                    onChangeText={(text) => setQuery(text)}
                    value={query}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#062148',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFAA06',
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
        color: 'white',
        borderRadius: 20,
    },
});
