import { View, Text, Image, Dimensions } from "react-native";
export default function HomePageHeader() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../assets/images/komponen.png")}
        resizeMode="center"
        style={{
          height: Dimensions.get("screen").width / 6.05,
        }}
      />
      <View
        style={{
          position: "absolute",
          padding: 0,
          borderRadius: 20,
          backgroundColor: "#051936",
        }}
      >
        <Image
          source={require("../assets/images/splash_icon.png")}
          style={{
            width: Dimensions.get("screen").width / 3,

            zIndex: 1,
          }}
          resizeMode="center"
        />
      </View>
    </View>
  );
}
