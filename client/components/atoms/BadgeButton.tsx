import React, { FunctionComponent } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
	Image,
	View,
} from "react-native";
import { Paragraph } from "@/components/atoms/Paragraph";
import { CATEGORY, CategoryIcon } from "@/model/categories";
import { Colors } from "@/constants/Colors";

interface BadgeButtonProps extends TouchableOpacityProps {
	category: CATEGORY;
	focused?: boolean;
}

export const BadgeButton: FunctionComponent<BadgeButtonProps> = ({
	category,
	focused,
	...props
}) => {
	const drinkCategory = CategoryIcon[category];

	return (
		<TouchableOpacity
			style={[styles.badgeButton, focused && styles.focusedBadgeButton]}
			{...props}
		>
			<View style={styles.content}>
				{drinkCategory && (
					<Image style={styles.image} source={{ uri: drinkCategory }} />
				)}
				<Paragraph style={focused ? styles.focusedText : undefined}>
					{category}
				</Paragraph>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	focusedBadgeButton: {
		backgroundColor: Colors.primary,
		flex: 3,
	},
	badgeButton: {
		flexDirection: "row",
		alignItems: "center",
		flex: 2,
		gap: 12,
		borderRadius: 12,
		paddingVertical: 12,
		paddingLeft: 18,
		paddingRight: 21,
		backgroundColor: "white",
	},
	content: {
		flexDirection: "row",
		gap: 8,
	},
	image: {
		width: 20,
		height: 20,
	},
	focusedText: {
		color: Colors.white,
	},
});
