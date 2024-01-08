import { Text, View, Image, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native"
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SafeArea from "../components/SafeArea";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

const UbahProfile = () => {
    const [profile,setProfile] = useState(null)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
            `http://192.168.1.73/api/profile/`,
            config
          );
            
          setProfile(response.data);
         
          setName(response.data.name)
          setPassword(response.data.password)
          setEmail(response.data.email)
  
    
         
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      if(profile == null){
      getData();
      }
      if(profile != null){
        console.log("ok");
        console.log(profile);
      }
      const storeData = async ( name: string) => {
        try {
          await AsyncStorage.setItem("name", name);
        } catch (e) {
          // saving error
        }
      };
      
  const postData = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://192.168.1.73/api/login", data); // Replace with your API endpoint
      console.log(response.data);

     
        storeData(name);
       

     
     
    } catch (error) {
      console.error("Error posting data:", error);
    }
      const storeData = async (value: string, name: string) => {
    try {
      await AsyncStorage.setItem("token", value);
      await AsyncStorage.setItem("name", name);
    } catch (e) {
      // saving error
    }
  };

  
  };
      
    return (
        <View style={{ backgroundColor: '#062148', minHeight: '100%' }}>
            <SafeArea />
            <View style={{ flexDirection: "row", padding: 20 }}>
                <View style={{ position: "absolute", left: 20, alignSelf: "center", zIndex: 2 }}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color={"#fff"} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#fff",
                    }}
                >
                    Edit Profile
                </Text>
            </View>


            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 41 }}>
                <View style={{ width: 200, height: 200, backgroundColor: 'white', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ width: 160, height: 160, backgroundColor: '#FED8A3', borderRadius: 100, position: 'relative', justifyContent: "center", alignItems: "center"}}>
                        {/* <View style={{ width: 50, backgroundColor: '#FFFA7E', height: 50, position: 'absolute', borderRadius: 40, bottom: 4, right: 0 }}>
                            <MaterialCommunityIcons name="pencil" size={24} color="black" />
                        </View> */}
                        <Image
                            source={require("../assets/images/Profile.png")}
                        />
                    </View>
                </View>
            </View>
            <View style={{ width: 136, height: 36, backgroundColor: '#1D135B', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 16 }}>
                <Text style={{ fontWeight: '700', color: 'white', fontSize: 20, }}>{profile != null && profile.name}</Text>
            </View>
            <View style={{ marginHorizontal: 38 }}>
                <TextInput
                    placeholder="Nama"
                    
                    style={{
                        height: 35,
                        borderBottomWidth:2,
                        borderBottomColor: '#52637C',
                      
                     
                        paddingLeft: 10,
                        marginTop: 15,
                      
                        color: '#fff',
                    }}
                    value={name != null && name}
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor={'#52637C'}
                />
                <TextInput
                    placeholder="Email"
                    style={{
                        height: 35,
                   
                        borderBottomColor: '#52637C',
                        borderBottomWidth: 2,
                        paddingLeft: 10,
                        marginTop: 15,
                        color: '#fff',
                    }}
                    placeholderTextColor={'#52637C'}
                    value={email != null && email}
                    onChangeText={(text) => setEmail(text)}
                   
                />
                <TextInput
                    placeholder="Password"
                    style={{
                        height: 35,
                      
                        borderBottomColor: '#52637C',
                        borderBottomWidth: 2,
                        paddingLeft: 10,
                        marginTop: 15,
                        color: '#fff',
                        
                        
                    }}
                    secureTextEntry={true}  
                    placeholderTextColor={'#52637C'}
                    value={password != null && password}
                    onChangeText={(text) => setPassword(text)}
                    
                   
                />
                <View style={{ width: 138, marginTop: 28, alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FFC806',
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default UbahProfile