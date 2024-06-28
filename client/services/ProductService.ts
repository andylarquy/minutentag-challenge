import axios from "axios"
import { API_BASE_URL } from "./serverConfig"
import { ProductThumbnail } from "@/model/productThumbnail"
import { ProductDetails } from "@/model/productDetails"

enum PRODUCT_ENDPOINTS {
	Products = '/products',
	StockPrice = '/stock-price/'
}

const getProducts = async (): Promise<ProductThumbnail[]> => {
	const response = await axios.get(`${API_BASE_URL}${PRODUCT_ENDPOINTS.Products}`)

	return response.data
}

const getProductByCode = async (productCode: string): Promise<ProductDetails> => {
	const response = await axios.get(`${API_BASE_URL}${PRODUCT_ENDPOINTS.StockPrice}${productCode}`)

	return response.data
}

export const ProductService = { getProducts, getProductByCode }
