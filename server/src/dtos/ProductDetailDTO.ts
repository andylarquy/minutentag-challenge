import { StockDetailDTO } from "./StockDetailDTO"

export type ProductDetailDTO = {
	id: number,
	brand: string,
	image: string,
	style: string,
	substyle: string,
	abv: string,
	origin: string,
	information: string,
	sizes: Array<StockDetailDTO>
}

