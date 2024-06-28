import { plainToClass } from 'class-transformer'
import { BeerStock } from 'model/BeerStock'
import { NotFound } from 'http-errors'
import { StockDetailDTO } from 'dtos/StockDetailDTO'
import { Sku } from 'model/Product'
import fs from 'fs'
import { StockPriceFile } from 'model/StockPriceFile'

// This should be a query to a database, but I mocked
// it for this challenge
const getStockMock = (): StockPriceFile => {
	const stockPricePath = process.env.STOCK_PRICE_PATH

	if (!stockPricePath) {
		throw Error('STOCK_PRICE_PATH env var is not set')
	}

	return JSON.parse(fs.readFileSync(stockPricePath, 'utf8'))
}


export const getBeerPriceByCode = async (code: string): Promise<string> => {
	const stock = getStockMock()
	// This would be a query to a database, but I just mocked it
	const _beer = stock[code as unknown as keyof typeof stock]
	const beer = plainToClass(BeerStock, _beer)

	if (!stock) {
		throw NotFound("Beer with the given code doesn't exist in stock")
	}

	return beer.getPrice()
}

export const getStockDetailsBySku = async ({ code, name }: Sku): Promise<StockDetailDTO> => {
	const stock = getStockMock()
	// This would be a query to a database, but I just mocked it
	const _beer = stock[code as unknown as keyof typeof stock]
	const beer = plainToClass(BeerStock, _beer)

	if (!stock) {
		throw NotFound("Beer with the given code doesn't exist in stock")
	}

	return { ...beer, price: beer.getPrice(), name }
}

export const StockService = { getBeerPriceByCode, getStockDetailsBySku }
