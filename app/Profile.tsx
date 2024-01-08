import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native";
import SafeArea from "../components/SafeArea";

export default function Profile() {
  return (
    <View style={{ backgroundColor: "#062148", width: "100%", height: "100%" }}>
      <SafeArea />
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View style={{ position: "absolute", left: 20, alignSelf: "center" }}>
          <Ionicons name="arrow-back" size={24} color={"#fff"} />
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
      <View
        style={{
          width: Dimensions.get("screen").width * 0.9,
          height: Dimensions.get("screen").width * 0.8,
          backgroundColor: "#FFC806",
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: Dimensions.get("window").width * 0.6,
            height: Dimensions.get("window").width * 0.6,
            borderRadius: 2000,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/images/Profile.png")}
            style={{
              width: Dimensions.get("window").width * 0.5,
              height: Dimensions.get("window").width * 0.5,
              borderRadius: 2000,
            }}
          />
        </View>
        <Text
          style={{
            paddingHorizontal: 50,
            paddingVertical: 3,
            backgroundColor: "#1D135B",
            color: "#fff",
            borderRadius: 20,
            fontSize: 20,
            fontWeight: "800",
          }}
        >
          Zila
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 25,
          backgroundColor: "#2E435D",
          width: Dimensions.get("screen").width * 0.82,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 20,
          alignSelf: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <MaterialCommunityIcons
          name="pencil-circle"
          size={24}
          color={"#FFFA7E"}
        />
        <Text
          style={{
            fontWeight: "800",
            fontSize: 16,
            color: "#fff",
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
