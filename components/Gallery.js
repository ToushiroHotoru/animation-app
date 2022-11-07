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
import { useRef } from "react";

const data = [
  "https://i.pinimg.com/originals/0f/1a/fd/0f1afd53a425dbcab1ee8109b9f18d29.jpg",
  "https://s2.best-wallpaper.net/wallpaper/iphone/2011/Forest-trees-flowers-light-rays-art-picture_iphone_1080x1920.jpg",
  "https://images.hdqwalls.com/download/samurai-digital-art-4k-t6-1080x1920.jpg",
];

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function Gallery() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: image }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={20}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 0.5,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 20,
              }}
            >
              <Image
                source={{ uri: item }}
                style={{
                  height: imageH,
                  width: imageW,
                  resizeMode: "cover",
                  borderRadius: 16,
                }}
              />
            </View>
          );
        }}
      />
    </>
  );
}
