import { withErrorHandling } from 'api/utils/errorHandler'
import express, { Application, Request, Response } from 'express'
import { ProductController } from 'api/controllers/ProductController'
import { index } from 'api/controllers/IndexController'
import helmet from 'helmet'
import fs from 'fs'
import 'dotenv/config'

export const app: Application = express()

app.use(express.json())

app.use(helmet({
	crossOriginEmbedderPolicy: false,
}))

// Enable cors for all domains since this project won't be deployed
// But if that were the case of course this config would be dangerous
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	res.header("Cross-Origin-Resource-Policy", "cross-origin")
	next()
})

app.get('/', (req: Request, res: Response) => {
	res.send(index())
})

app.get('/api/products', async (req: Request, res: Response) => {
	withErrorHandling(res, async () => {
		const response = await ProductController.getProductList()
		res.json(response)
	})
})

app.get('/api/stock-price/:code', async (req: Request, res: Response) => {
	withErrorHandling(res, async () => {
		const response = await ProductController.getProductDetailsByCode(req.params.code)
		res.json(response)
	})
})

app.get('/products/:name', async (req: Request, res: Response) => {
	withErrorHandling(res, async () => {
		const imagePath = `${__dirname}/images/${req.params.name}`

		if (!fs.existsSync(imagePath)) {
			// Return just a 404 status since this is a plain resource endpoint
			// just to avoid filtering any server information as a security best practice
			res.sendStatus(404)
		}

		res.sendFile(imagePath)
	})
})
