import { ScrollView, TextInput, Image, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

const logo = require('../../assets/images/logo.png')
export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={{ height: 40, marginTop: 80}} resizeMode="contain" />
        <Text style={styles.text}>Daftar akun untuk melanjutkan ke {'\n'}Rekom Movie</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="No HP"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi"
          placeholderTextColor="gray"
        />
        <Text style={styles.textDua}>
          Saya setuju dengan <Text style={styles.highlightedText}> Ketentuan Layanan </Text> {'\n'}Recom Movie, <Text style={styles.highlightedText}> Kebijakan Privasi </Text>, dan{'\n'}<Text style={styles.highlightedText}>Pengaturan Pemberitahuan default </Text>
        </Text>
        
        <Text style={styles.text}>
          Sudah memiliki akun? <Text style={styles.highlightedText}>Masuk</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#062148',
  },
  text: {
    color: 'white',
    marginTop: 40,
    marginBottom: 55,
    textAlign: 'center'
  },
  textDua: {
    color: 'white',
    marginTop: 40,
    marginBottom: 55,
    textAlign: 'left'
  },
  highlightedText: {
    color: '#3AB6D1'
  },
  input: {
    height: 45,
    borderColor: '#304665',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 17,
    width: '85%',
    marginTop: 15,
    marginHorizontal: 10,
    backgroundColor: '#304665'
  },
});
