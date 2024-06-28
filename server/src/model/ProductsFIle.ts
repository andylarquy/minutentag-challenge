export type ProductsFile = [
	{
		id: number,
		brand: string,
		image: string,
		style: string,
		substyle: string,
		abv: string,
		origin: string,
		information: string,
		skus: Array<{
			code: "10167",
			name: string
		}>
	}
]
