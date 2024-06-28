import request from 'supertest'
import { app } from 'api/app'

import productsResultMock from 'test/results/products.result.json'
import productsDetailMock from 'test/results/productDetail.result.json'


describe('Products suite', () => {
	beforeAll(async () => {
		process.env = {
			...process.env,
			STOCK_PRICE_PATH: "src/test/mocks/stock-price.mock.json",
			PRODUCTS_PATH: "src/test/mocks/products.mock.json"
		}
	})

	describe('When you send a GET /api/products', () => {
		it('Should return a status 200 OK', async () => {
			const result = await request(app).get('/api/products').send()


			expect(result.status).toBe(200)
		})

		it('Should return the data correctly', async () => {
			const result = await request(app).get('/api/products').send()

			const productsResult = JSON.parse(result.text)

			productsResultMock.forEach((mock, index) => {
				expect(productsResult[index]).toStrictEqual(mock)
			})
		})
	})

	describe('When you send a GET /api/stock-price/:code', () => {
		describe('With a valid code', () => {
			it('Should return a status 200 OK', async () => {
				const result = await request(app).get('/api/stock-price/1').send()

				expect(result.status).toBe(200)
			})

			it('Should return the data correctly', async () => {
				const result = await request(app).get('/api/stock-price/1').send()
				const productResult = JSON.parse(result.text)

				expect(productsDetailMock).toStrictEqual(productResult)
			})
		})

		describe('With an unexistent code', () => {
			it('Should return a status 404 Not Found', async () => {
				const result = await request(app).get('/api/stock-price/99999').send()

				expect(result.status).toBe(404)
			})
		})

		describe('With a bad formatted code', () => {
			it('Should return a status 400 Bad Request', async () => {
				const result = await request(app).get('/api/stock-price/invalidformat').send()

				expect(result.status).toBe(400)
			})
		})
	})
})
