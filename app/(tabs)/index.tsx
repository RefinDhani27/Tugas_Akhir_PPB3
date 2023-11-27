import { Text, View } from '../../components/Themed';
import { ScrollView, TextInput, Image, StyleSheet} from 'react-native';

const logo = require('../../assets/images/logo.png');
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={{ height: 40}} resizeMode="contain" />
        <Text style={styles.selamatDatang}>Selamat Datang di {'\n'}Recom Movie</Text>
      </View>
      <View style={styles.putihBawah}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#062148'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
    marginTop: 180,
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
