import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const movies = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Movies</ThemedText>
    </ThemedView>
  );
};

export default movies;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
