import { StyleSheet, View, Text } from "react-native";

export default function BackgroundLogin() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#062148",
      }}
    >
      <View style={styles.biruAtas} />
    </View>
  );
}
const styles = StyleSheet.create({
  biruAtas: {
    height: "37%",
    width: "120%",
    alignSelf: "center",
    backgroundColor: "#0C3358",
    borderBottomLeftRadius: 10000,
    borderBottomEndRadius: 10000,
  },
});
