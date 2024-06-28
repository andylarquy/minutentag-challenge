import React, { FunctionComponent, PropsWithChildren } from "react";
import ReadMore from "react-native-read-more-text";
import { PARAGRAPH_VARIANT, Paragraph } from "./Paragraph";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

interface LabelProps {
  handlePress: () => void;
  text: string;
}

const Label: FunctionComponent<LabelProps> = ({ text, handlePress }) => (
  <TouchableOpacity onPress={handlePress}>
    <Paragraph style={{ color: Colors.primary, marginTop: 5 }}>
      {text}
    </Paragraph>
  </TouchableOpacity>
);

interface ReadMoreTextProps extends PropsWithChildren {
  variant?: PARAGRAPH_VARIANT;
  onTextReady?: () => void;
  numberOfLines?: number;
}

export const ReadMoreText: FunctionComponent<ReadMoreTextProps> = ({
  variant = PARAGRAPH_VARIANT.Detail,
  onTextReady,
  children,
  numberOfLines = 4,
}) => (
  <ReadMore
    numberOfLines={numberOfLines}
    renderTruncatedFooter={(handlePress) => (
      <Label text="Read more" handlePress={handlePress} />
    )}
    renderRevealedFooter={(handlePress) => (
      <Label text="Read less" handlePress={handlePress} />
    )}
    onReady={onTextReady}
  >
    <Paragraph variant={variant}>{children}</Paragraph>
  </ReadMore>
);
