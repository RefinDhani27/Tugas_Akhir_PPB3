import { Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native"
import { Entypo, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UbahProfile = () => {
    return (
        <View style={{ backgroundColor: '#062148', minHeight: '100%' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Ionicons name="arrow-back" color={'white'} size={24} />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', textAlign: 'center' }}>Edit Profile</Text>
                <View style={{ width: 24 }} />
            </View>


            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 41 }}>
                <View style={{ width: 200, height: 200, backgroundColor: 'white', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ width: 160, height: 160, backgroundColor: '#FED8A3', borderRadius: 100, position: 'relative' }}>
                        {/* <View style={{ width: 50, backgroundColor: '#FFFA7E', height: 50, position: 'absolute', borderRadius: 40, bottom: 4, right: 0 }}>
                            <MaterialCommunityIcons name="pencil" size={24} color="black" />
                        </View> */}

                    </View>
                </View>
            </View>
            <View style={{ width: 136, height: 36, backgroundColor: '#1D135B', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 16 }}>
                <Text style={{ fontWeight: '700', color: 'white' }}>Zila</Text>
            </View>
            <View style={{ marginHorizontal: 38 }}>
                <TextInput
                    placeholder="Nama"
                    style={{
                        height: 35,
                        borderBottomColor: '#D9D9D9',
                        borderBottomWidth: 2,
                        paddingLeft: 10,
                        marginTop: 15,
                        opacity: 0.2,
                    }}
                    placeholderTextColor={'#D9D9D9'}
                />
                <TextInput
                    placeholder="Email"
                    style={{
                        height: 35,
                        opacity: 0.2,
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        paddingLeft: 10,
                        marginTop: 15,
                    }}
                    placeholderTextColor={'#D9D9D9'}
                />
                <TextInput
                    placeholder="Password"
                    style={{
                        height: 35,
                        opacity: 0.2,
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        paddingLeft: 10,
                        marginTop: 15,
                    }}
                    placeholderTextColor={'#D9D9D9'}
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