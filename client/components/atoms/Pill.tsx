import React, { FunctionComponent, PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { PARAGRAPH_VARIANT, Paragraph } from "./Paragraph";

import { Colors } from "@/constants/Colors";

interface PillProps extends TouchableOpacityProps {
  focused?: boolean;
}

export const Pill: FunctionComponent<PillProps> = ({
  focused,
  children,
  ...props
}) => {
  const dynamicStyles = StyleSheet.create({
    pill: {
      borderColor: Colors[focused ? "primary" : "grey05"],
    },
  });

  return (
    <TouchableOpacity style={[styles.pill, dynamicStyles.pill]} {...props}>
      <Paragraph
        style={focused ? styles.focusedText : styles.text}
        variant={PARAGRAPH_VARIANT.Small}
      >
        {children}
      </Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    alignSelf: "flex-start",
    borderRadius: 15.5,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
  },
  focusedText: {
    width: "auto",
    color: Colors.primary,
  },
  text: {
    color: Colors.grey05,
  },
});
