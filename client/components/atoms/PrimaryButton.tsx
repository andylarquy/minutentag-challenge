import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Icon, IconType } from "./Icon";

interface PrimaryButtonProps extends TouchableOpacityProps {
  icon?: IconType;
  text?: string;
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  icon,
  text,
  ...props
}) => (
  <TouchableOpacity
    style={[styles.button, text ? styles.raisedButton : undefined]}
    {...props}
  >
    {icon && <Icon name={icon} />}
    {text && <Text style={styles.text}>{text}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    borderRadius: 12,
    padding: 16,
    backgroundColor: Colors.white,
    color: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
		fontFamily: "DMSans",
    color: Colors.white,
  },
  raisedButton: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  focusedBadgeButton: {
    backgroundColor: Colors.primary,
  },
  image: {
    width: 20,
    height: 20,
  },
  focusedText: {
    color: Colors.white,
  },
});
