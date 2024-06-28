import { MEME } from "@/model/easterEggAdapter";
import React, { FunctionComponent } from "react";
import { Image, ImageProps, View, StyleSheet } from "react-native";
import { PARAGRAPH_VARIANT, Paragraph } from "../atoms/Paragraph";

interface NotFoundEasterEggProps extends ImageProps {
  meme: MEME;
}

export const NotFoundEasterEgg: FunctionComponent<NotFoundEasterEggProps> = ({
  meme,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={meme} />
        <Paragraph variant={PARAGRAPH_VARIANT.Title}>
          Oops! Page is not built
        </Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    height: "80%",
    resizeMode: "contain",
    marginBottom: 32,
  },
});
