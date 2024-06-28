import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { FunctionComponent } from "react";

interface ProfilePictureProps {
	src: ImageSourcePropType;
	size: number;
}

export const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({
	size,
	src,
}) => {
	const styles = StyleSheet.create({
		image: {
			width: size,
			height: size,
			borderRadius: 100,
		},
	});

	return <Image style={styles.image} source={src}></Image>;
};
