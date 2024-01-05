import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HomeScreen",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color}  /> 
        }}
          /> 
  
          </Tabs>
  );
}
