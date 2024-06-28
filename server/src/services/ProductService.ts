import { NotFound, BadRequest } from 'http-errors'
import { Product } from 'model/Product'
import { StockService } from './StockService'
import { plainToClass } from 'class-transformer'
import { kebabCase } from 'lodash'
import { ProductThumbnailDTO } from 'dtos/ProductThumbnailDTO'
import { ProductDetailDTO } from 'dtos/ProductDetailDTO'
import { isNumeric } from 'api/utils/isNumeric'
import fs from 'fs'
import { ProductsFile } from 'model/ProductsFIle'

// This should be a query to a database, but I mocked
// it for this challenge
const getProductMock = (): ProductsFile => {
	const productsPath = process.env.PRODUCTS_PATH

	if (!productsPath) {
		throw Error('PRODUCT_PATH env var is not set')
	}

	return JSON.parse(fs.readFileSync(productsPath, 'utf8'))
}

export const getProductsList = async (): Promise<ProductThumbnailDTO[]> => {
	const products = getProductMock()

	return Promise.all(products.map(async _product => {
		const product = plainToClass(Product, _product)
		const thumbnailSkuCode = product.getThumbnailSkuCode()
		const price = await StockService.getBeerPriceByCode(thumbnailSkuCode)

		return ({
			id: product.id,
			brand: product.brand,
			brandCode: kebabCase(product.brand),
			image: product.image,
			price
		})
	}))
}


export const getProductDetailsByCode = async (code: string): Promise<ProductDetailDTO> => {
	if (!isNumeric(code)) {
		throw BadRequest("Code should be a number")
	}

	const products = getProductMock()

	// Should be a query to a database but for this challenge is just mocked
	const product = products.find(product => product.id === +code)

	if (!product) {
		throw NotFound("Beer with the given code doesn't exist")
	}


	// Remove skus property to rename it as sizes
	const { skus, ...restProduct } = product

	return {
		...restProduct,
		sizes: await Promise.all(skus.map(sku => StockService.getStockDetailsBySku(sku)))
	}
}


export const ProductService = { getProductsList, getProductDetailsByCode }
