import React, { FunctionComponent } from "react";
import {
	Image,
	StyleSheet,
	View,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { Paragraph } from "../atoms/Paragraph";
import { Icon } from "../atoms/Icon";
import { Colors } from "@/constants/Colors";
import { BASE_URL } from "@/services/serverConfig";

interface BeerCardProps extends Omit<TouchableOpacityProps, "id"> {
	id: number;
	brandCode: string;
	title: string;
	image: {
		src: string;
		alt: string;
	};
	price: string;
	onHandleDetailsPress: (id: number, brandCode: string) => void;
}

export const BeerCard: FunctionComponent<BeerCardProps> = ({
	id,
	brandCode,
	title,
	image,
	price,
	style,
	onHandleDetailsPress,
}) => {
	const handleDetailsPress = () => {
		onHandleDetailsPress(id, brandCode);
	};

	return (
		<TouchableOpacity style={[styles.card, style]} onPress={handleDetailsPress}>
			<Paragraph>{title}</Paragraph>
			<Image
				crossOrigin="anonymous"
				style={styles.image}
				source={{ uri: `${BASE_URL}${image.src}` }}
			/>

			<View style={styles.cardFooter}>
				<Paragraph>{price}</Paragraph>

				<TouchableOpacity style={styles.cta} onPress={handleDetailsPress}>
					<Icon style={styles.icon} name="plus" />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

const cardPaddingHorizontal = 16;
const cardPaddingVertical = 8;

const styles = StyleSheet.create({
	card: {
		position: "relative",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.1,
		shadowRadius: 16,

		alignSelf: "flex-start",
		paddingHorizontal: cardPaddingHorizontal,
		paddingVertical: cardPaddingVertical,
		backgroundColor: "white",
		borderRadius: 12,
		borderTopRightRadius: 32,
	},
	image: {
		aspectRatio: 1,
		width: "100%",
		resizeMode: "contain",
	},
	cardFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 8,
	},
	cta: {
		position: "absolute",
		bottom: -cardPaddingVertical,
		right: -cardPaddingHorizontal,
		borderTopLeftRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: Colors.primary,
		padding: 8,
	},
	icon: {
		color: "white",
	},
});
