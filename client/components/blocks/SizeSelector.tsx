import React, { FunctionComponent, useState } from "react";
import { PARAGRAPH_VARIANT, Paragraph } from "../atoms/Paragraph";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { Pill } from "../atoms/Pill";

interface SizeSelectorProps {
  activeSize: number;
  sizes: string[];
  style?: ViewStyle;
	onPillPress: (pillIndex: number) => void;
}

export const SizeSelector: FunctionComponent<SizeSelectorProps> = ({
  activeSize,
  sizes,
  style,
	onPillPress,
}) => {

  return (
    <View style={style}>
      <Paragraph style={styles.title} variant={PARAGRAPH_VARIANT.Subtitle}>
        Size
      </Paragraph>

      <ScrollView horizontal={true}>
        <View style={styles.sizesContainer}>
          {sizes.map((size, index) => (
            <Pill
              onPress={() => onPillPress(index)}
              key={size}
              focused={index === activeSize}
            >
              {size}
            </Pill>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
  sizesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 16,
  },
});
