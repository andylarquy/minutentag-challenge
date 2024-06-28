import { StyleSheet, Text } from "react-native";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { FunctionComponent, PropsWithChildren } from "react";
import { Colors } from "@/constants/Colors";


// TODO: Fix this ugly naming convention
export enum PARAGRAPH_VARIANT {
  HighlightedTitle = "highlightedTitle",
  Title = "title",
  Subtitle = "subtitle",
  Regular = "regular",
  Detail = "detail",
  Small = "small",
}

interface ParagraphProps extends PropsWithChildren {
  variant?: PARAGRAPH_VARIANT;
  underline?: boolean;
  style?: TextStyle;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  variant = PARAGRAPH_VARIANT.Regular,
  underline,
  style,
  children,
  ...props
}) => (
  <Text
    style={[styles[variant], underline && styles.underline, styles.text, style]}
    {...props}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "DMSans",
  },
  highlightedTitle: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 700,
  },
  title: {
    color: Colors.grey01,
    fontSize: 24,
    fontWeight: 700,
  },
  subtitle: {
    color: Colors.grey01,
    fontSize: 18,
    fontWeight: 700,
  },
  regular: {
    color: Colors.grey01,
    fontSize: 16,
  },
  detail: {
    color: Colors.grey03,
    fontSize: 16,
    opacity: 0.6,
  },
  small: {
    color: Colors.grey05,
    fontSize: 14,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
