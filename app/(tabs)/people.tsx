import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const people = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">People</ThemedText>
    </ThemedView>
  );
};

export default people;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
