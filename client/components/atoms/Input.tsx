import { Colors } from "@/constants/Colors";
import React, { FunctionComponent } from "react";
import { TextInput, StyleSheet, View, Platform, ViewStyle } from "react-native";

import { Icon } from "./Icon";

interface InputProps {
  placeholder?: string;
  style?: ViewStyle;
}

export const Input: FunctionComponent<InputProps> = ({
  style,
  placeholder,
}) => (
  <View style={[style, styles.inputGroup]}>
    <Icon style={styles.icon} name="search" size={18} />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.grey04}
    />
  </View>
);

const styles = StyleSheet.create({
  inputGroup: {
    display: "flex",
    gap: 12,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  icon: {
    color: Colors.grey04,
  },
  input: {
		fontFamily: "DMSans",
    ...(Platform.OS === "web" && { outlineStyle: "none" }),
    width: "100%",
  },
});
