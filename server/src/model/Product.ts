export type Sku = {
	code: string
	name: string
}

export class Product {
	constructor(
		public id: number,
		public brand: string,
		public image: string,
		public style: string,
		public substyle: string,
		public abv: string,
		public origin: string,
		public information: string,
		public skus: Array<Sku>
	) {
		this.id = id
		this.brand = brand
		this.image = image
		this.style = style
		this.substyle = substyle
		this.origin = origin
		this.information = information
		this.skus = skus
	}

	getThumbnailSkuCode(): string {
		return this.skus[0].code
	}
}

