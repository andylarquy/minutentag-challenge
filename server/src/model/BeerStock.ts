export class BeerStock {
	constructor(
		public stock: number,
		public price: number,
	) { }

	// Convert from cents to dollars
	getPrice() {
		return `$${(this.price / 100).toFixed(2)}`
	}
}
