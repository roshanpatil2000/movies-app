import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";

const IMAGE_URL = process.env.IMAGE_URL;
export default function HomeScreen() {
  var logoImage = `${IMAGE_URL}/1E5baAaEse26fej7uHcjOgEE2t2.jpg`; //
  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: logoImage }}
        contentFit="contain"
        style={styles.reactLogo}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  reactLogo: {
    height: 300,
    width: "100%",
    // resizeMode: "contain",
  },
});
