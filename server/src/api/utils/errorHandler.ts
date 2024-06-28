import { Response } from 'express'
import { HttpError } from 'http-errors'

export const withErrorHandling = async (res: Response, lambda: () => Promise<void>) => {
  try {
    await lambda()
  } catch (error) {
    errorHandler(error, res)
  }
}

export const errorHandler = (error: unknown, res: Response): void => {
  if (error instanceof HttpError) {
    if (error.statusCode) {
      // Handle server errors, with the chance to do error narrowing
      res.status(error.statusCode).json(JSON.parse(`{"message": "${error.message}"}`))
    }
  } else {
    // Handle unexpected errors
    const message = (error as Error).message || 'Unexpected error'
    res.status(500).json(message)
  }
}
