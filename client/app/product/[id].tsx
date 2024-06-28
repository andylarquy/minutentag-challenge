import { ScrollView, StyleSheet, View, Image } from "react-native";
import { IconButton } from "@/components/atoms/IconButton";
import { PARAGRAPH_VARIANT, Paragraph } from "@/components/atoms/Paragraph";
import { useDimensions } from "@/hooks/useDimensions";
import { ReadMoreText } from "@/components/atoms/ReadMoreText";
import { SizeSelector } from "@/components/blocks/SizeSelector";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { router, useGlobalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ProductService } from "@/services/ProductService";
import { API_REFRESH_TIME_MS, BASE_URL } from "@/services/serverConfig";
import { ProductDetails } from "@/model/productDetails";

export default function ProductDetailView() {
	const { id } = useGlobalSearchParams();
	const Dimensions = useDimensions();
	const [activeSize, setActiveSize] = useState(0);
	const [productInfo, setProductInfo] = useState<ProductDetails | undefined>(
		undefined
	);

	const interval = useRef<NodeJS.Timeout | undefined>(undefined);

	const productCode = id && !Array.isArray(id) && id.split("-")[0];
	if (!productCode) router.replace("/not-found");

	const handleGoBackPress = () => {
		router.replace("/");
	};

	const handleSizeChange = (newSize: number) => {
		setActiveSize(newSize);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			if (!productCode) return;

			try {
				const newProducts = await ProductService.getProductByCode(productCode);
				setProductInfo(newProducts);
			} catch {
				router.replace("/not-found");
			}
		};

		if (!productCode) return;

		fetchProducts();
		interval.current = setInterval(fetchProducts, API_REFRESH_TIME_MS);

		return () => {
			console.log("hace clear");
			clearInterval(interval.current);
			setProductInfo(undefined);
		};
	}, [productCode]);

	const dynamicStyles = StyleSheet.create({
		productDetail: {
			height: Dimensions.height,
		},
	});

	if (!productInfo) return;

	return (
		<View style={[styles.productDetail, dynamicStyles.productDetail]}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View>
					<View style={styles.header}>
						<IconButton
							color={Colors.grey01}
							onPress={handleGoBackPress}
							name="leftArrow"
						/>
						<Paragraph variant={PARAGRAPH_VARIANT.Subtitle}>Detail</Paragraph>
						<IconButton color={Colors.grey01} name="dots" />
					</View>

					<View style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={{ uri: `${BASE_URL}${productInfo.image}` }}
						></Image>
					</View>
				</View>

				<View style={styles.bottomSection}>
					<View style={styles.titleContainer}>
						<Paragraph style={styles.title} variant={PARAGRAPH_VARIANT.Title}>
							{productInfo.brand}
						</Paragraph>

						<Paragraph
							style={styles.title}
							variant={PARAGRAPH_VARIANT.HighlightedTitle}
						>
							{productInfo.sizes[activeSize].price}
						</Paragraph>
					</View>

					<Paragraph style={styles.origin} variant={PARAGRAPH_VARIANT.Detail}>
						Origin: {productInfo.origin} | Stock{" "}
						{productInfo.sizes[activeSize].stock}
					</Paragraph>

					<ReadMoreText>{productInfo.information}</ReadMoreText>

					<SizeSelector
						activeSize={activeSize}
						style={styles.sizeSelector}
						sizes={productInfo.sizes.map((size) => size.name)}
						onPillPress={handleSizeChange}
					/>

					<View style={styles.footerCtas}>
						<PrimaryButton icon="bag" />

						<PrimaryButton text="Add to cart" />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	productDetail: {
		backgroundColor: Colors.background,
	},
	scrollContent: {
		paddingTop: 40,
		width: "100%",
		minHeight: "100%",
		justifyContent: "space-between",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 24,
	},
	introduction: {
		marginBottom: 5,
	},
	bottomSection: {
		paddingHorizontal: 24,
		paddingBottom: 32,
		paddingTop: 48,
		backgroundColor: Colors.white,
		borderTopRightRadius: 48,
		borderTopLeftRadius: 48,
	},
	titleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		marginBottom: 4,
	},
	sizeSelector: {
		marginTop: 24,
		marginBottom: 48,
	},
	input: {
		marginTop: 24,
		marginBottom: 24,
	},
	imageContainer: {
		paddingHorizontal: 66,
		marginBottom: 8,
	},
	image: {
		aspectRatio: 1,
		width: "100%",
		resizeMode: "contain",
	},
	origin: {
		marginBottom: 32,
	},
	footerCtas: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 16,
	},
});
