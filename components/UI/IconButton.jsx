import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
      {/* <Text>Hey</Text> */}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});