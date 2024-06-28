import React, { FunctionComponent } from "react";
import {
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { BeerCard } from "./BeerCard";
import { PARAGRAPH_VARIANT, Paragraph } from "../atoms/Paragraph";
import { ProductThumbnail } from "@/model/productThumbnail";

interface BeerGridProps {
	items: ProductThumbnail[];
	onHandleDetailsPress: (id: number, brandCode: string) => void;
}

export const BeerGrid: FunctionComponent<BeerGridProps> = ({
	items,
	onHandleDetailsPress,
}) => {
	return (
		<View>
			<View style={styles.header}>
				<Paragraph variant={PARAGRAPH_VARIANT.Subtitle}>Populer</Paragraph>
				<TouchableOpacity>
					<Paragraph variant={PARAGRAPH_VARIANT.Detail}>See All</Paragraph>
				</TouchableOpacity>
			</View>

			<FlatList
				style={styles.grid}
				data={items}
				numColumns={2}
				contentContainerStyle={styles.gridContent}
				columnWrapperStyle={styles.gridColumnWrapper}
				renderItem={({ item }) => (
					<BeerCard
						style={styles.gridCard}
						id={item.id}
						brandCode={item.brandCode}
						title={item.brand}
						price={item.price}
						image={{ src: item.image, alt: `${item.brand} Image` }}
						onHandleDetailsPress={onHandleDetailsPress}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

const GRID_GAP = 16;

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 24,
	},
	gridCard: {
		flex: 1,
	},
	gridContent: {
		gap: GRID_GAP,
	},
	gridColumnWrapper: {
		gap: GRID_GAP,
	},
	grid: {
		paddingBottom: 32,
	},
});
