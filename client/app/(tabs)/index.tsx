import { ScrollView, StyleSheet, View } from "react-native";
import { BeerGrid } from "@/components/blocks/BeerGrid";
import { IconButton } from "@/components/atoms/IconButton";
import { NAVBAR_HEIGHT } from "./_layout";
import { ProfilePicture } from "@/components/atoms/ProfilePicture";
import { PARAGRAPH_VARIANT, Paragraph } from "@/components/atoms/Paragraph";
import { Input } from "@/components/atoms/Input";
import { DrinkCategory } from "@/components/blocks/DrinkCategory";
import { useDimensions } from "@/hooks/useDimensions";
import { useEffect, useRef, useState } from "react";
import { ProductService } from "@/services/ProductService";
import { API_REFRESH_TIME_MS } from "@/services/serverConfig";
import { ProductThumbnail } from "@/model/productThumbnail";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function HomeView() {
	const Dimensions = useDimensions();

	const dynamicStyles = StyleSheet.create({
		home: {
			maxHeight: Dimensions.height - NAVBAR_HEIGHT,
		},
	});

	const [products, setProducts] = useState<ProductThumbnail[]>([]);
	const interval = useRef<NodeJS.Timeout | undefined>(undefined);

	const handleDetailsPress = (id: number, brandCode: string) => {
		cleanup();
		router.push(`/product/${id}-${brandCode}`);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const newProducts = await ProductService.getProducts();
				setProducts(newProducts);
			} catch (error) {
				cleanup();
				router.replace("/not-found");
			}
		};

		fetchProducts();
		interval.current = setInterval(fetchProducts, API_REFRESH_TIME_MS);

		return cleanup;
	}, []);

	const cleanup = () => {
		clearInterval(interval.current);
		setProducts([]);
	};

	return (
		<View style={[styles.home, dynamicStyles.home]}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.header}>
					<IconButton color={Colors.darkBlue01} name="menu" />
					<View>
						<ProfilePicture
							size={40}
							src={require("@/assets/images/user.jpg")}
						/>
					</View>
				</View>

				<Paragraph
					style={styles.introduction}
					variant={PARAGRAPH_VARIANT.Detail}
				>
					Hi Mr. Michael,
				</Paragraph>
				<Paragraph style={styles.title} variant={PARAGRAPH_VARIANT.Title}>
					Welcome Back!
				</Paragraph>

				<Input
					style={styles.input}
					placeholder="Search burger, pizza, drink or etc..."
				/>

				<DrinkCategory />

				<BeerGrid onHandleDetailsPress={handleDetailsPress} items={products} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	home: {
		backgroundColor: Colors.background,
	},
	scrollContent: {
		paddingTop: 40,
		paddingHorizontal: 24,
		width: "100%",
		minHeight: "auto",
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 24,
	},
	introduction: {
		marginBottom: 5,
	},
	title: {
		marginBottom: 24,
	},
	input: {
		marginBottom: 24,
	},
});
