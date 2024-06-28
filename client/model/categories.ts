export enum CATEGORY {
	All = "All",
	Beer = "Beer",
	Wine = "Wine"
}

// 'All' in purpose as undefined, to express
// it doesn't have an icon associated
export const CategoryIcon = {
	[CATEGORY.Beer]: "../assets/images/beer.png",
	[CATEGORY.Wine]: "../assets/images/wine.png",
	[CATEGORY.All]: undefined
}
