import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { PARAGRAPH_VARIANT, Paragraph } from "@/components/atoms/Paragraph";
import { BadgeButton } from "../atoms/BadgeButton";
import { CATEGORY, CategoryIcon } from "@/model/categories";

export const DrinkCategory = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY.Beer);

  const handleCategoryChange = (newCategory: CATEGORY) => {
    setActiveCategory(newCategory);
  };

  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    categories: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      gap: 16,
      marginBottom: 32,
    },
  });

  return (
    <View>
      <View style={styles.header}>
        <Paragraph variant={PARAGRAPH_VARIANT.Subtitle}>Drink Category</Paragraph>

        <TouchableOpacity>
          <Paragraph variant={PARAGRAPH_VARIANT.Detail}>See All</Paragraph>
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        {Object.values(CATEGORY).map((category) => (
          <BadgeButton
            key={category}
            category={category}
            focused={activeCategory === category}
            onPress={() => handleCategoryChange(category)}
          />
        ))}
      </View>
    </View>
  );
};
