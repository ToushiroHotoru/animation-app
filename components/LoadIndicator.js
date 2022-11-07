import { MotiView } from "moti";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function LoadingIndicator({ size }) {
  return (
    <MotiView
      from={{ width: size, height: size, borderRadius: size / 2 }}
      animate={{
        width: size + 50,
        height: size + 50,
        borderRadius: (size + 20) / 2,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
}
