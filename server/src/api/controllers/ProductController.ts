import { ProductService } from 'services/ProductService'
import { ProductThumbnailDTO } from 'dtos/ProductThumbnailDTO'
import { ProductDetailDTO } from 'dtos/ProductDetailDTO'

const getProductList = async (): Promise<ProductThumbnailDTO[]> => ProductService.getProductsList()

const getProductDetailsByCode = async (code: string): Promise<ProductDetailDTO> => ProductService.getProductDetailsByCode(code)

export const ProductController = { getProductList, getProductDetailsByCode }
