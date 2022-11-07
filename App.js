import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import LoadingIndicator from "./components/LoadIndicator";
import Gallery from "./components/Gallery";
import Circle from "./components/Circle";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default function App() {
  const [test, setTest] = useState("");
  const getLocation = async () => {
    let regionName = await Location.reverseGeocodeAsync({
      latitude: 133.79998779296875,
      longitude: 47.2497706,
    });
    setTest(
      await Location.reverseGeocodeAsync({
        latitude: 133.79998779296875,
        longitude: 47.2497706,
      })
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text>{test}</Text>
      <Circle
        onPress={() => {
          console.log("do nothing");
        }}
      />
      <Gallery />
      {/* <LoadingIndicator size={150} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010100",
    justifyContent: "center",
    alignItems: "center",
  },
});
