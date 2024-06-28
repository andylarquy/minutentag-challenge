import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Icon, IconType } from "@/components/atoms/Icon";
import { IconShadow } from "../atoms/IconShadow";
interface TabBarIconProps {
  name: IconType;
  focused?: boolean;
}

export function TabBarIcon({ name, focused }: TabBarIconProps) {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
    },
    icon: {
      position: "absolute",
      color: Colors.grey02,
    },
    focused: {
      color: Colors.primary,
    },
    focusShadow: {
      position: "absolute",
      top: -4,
      left: -5,
    },
  });

  return (
    <View style={styles.container}>
      <Icon
        style={StyleSheet.flatten([styles.icon, focused && styles.focused])}
        name={name}
      />
      {focused && <IconShadow style={styles.focusShadow} />}
    </View>
  );
}
