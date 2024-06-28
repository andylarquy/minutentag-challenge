import React, { FunctionComponent } from "react";
import {
	TouchableOpacity,
	StyleSheet,
	TouchableOpacityProps,
	ColorValue,
} from "react-native";
import { Icon, IconType } from "./Icon";

interface IconButtonProps extends TouchableOpacityProps {
	color?: ColorValue;
	name: IconType;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
	color,
	name,
	...props
}) => {
	return (
		<TouchableOpacity style={styles.iconButton} {...props}>
			<Icon {...(color && { style: { color } })} name={name} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	iconButton: {
		backgroundColor: "white",
		padding: 8,
		borderRadius: 12,
	},
});
