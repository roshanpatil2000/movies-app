import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <ThemedView>{children}</ThemedView>;
};

export default Header;

const styles = StyleSheet.create({});
