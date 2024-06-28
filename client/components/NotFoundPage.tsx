import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { PARAGRAPH_VARIANT, Paragraph } from "./atoms/Paragraph";
import { Colors } from "@/constants/Colors";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View style={styles.container}>
				<Paragraph variant={PARAGRAPH_VARIANT.Title}>
					This screen doesn't exist.
				</Paragraph>
				<Paragraph variant={PARAGRAPH_VARIANT.Title}>
					Perhaps the server is down?
				</Paragraph>
				<Link href="/" style={styles.link}>
					<Paragraph style={styles.linkText}>Go to home screen!</Paragraph>
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		color: Colors.link,
	},
});
