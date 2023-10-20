import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center items-cente  dark:bg-neutral-900 space-y-6 ">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="flex-row justify-center items-center ">
        <Text className="text-xl dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>
      <Text className="mx-4 text-justify dark:text-white">
        React Native Themes, The light and Dart mode Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
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
