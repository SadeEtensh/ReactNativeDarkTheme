import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <View className="flex-1 justify-center items-cente ">
      <View className="flex-row justify-center items-center ">
        <Text className="text-xl">Toggle Theme</Text>
        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>
      <Text className="text-center">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
