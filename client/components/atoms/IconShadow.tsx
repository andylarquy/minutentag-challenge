import hexToRgba from "hex-to-rgba";
import React, { FunctionComponent } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Colors } from "@/constants/Colors";

interface IconShadowProps extends ViewProps {
  size?: number;
}

export const IconShadow: FunctionComponent<IconShadowProps> = ({
  style,
  size = 36,
}) => {
  const dynamicStyles = StyleSheet.create({
    iconShadow: {
      width: size,
      height: size,
    },
  });

  return <View style={[styles.iconShadow, dynamicStyles.iconShadow, style]} />;
};
const styles = StyleSheet.create({
  iconShadow: {
    top: "auto",
    left: "auto",
    borderRadius: 100,
    opacity: 0.55,
    backgroundColor: hexToRgba(Colors.primary, 0.4),
    shadowColor: Colors.primary,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 32,
  },
});
