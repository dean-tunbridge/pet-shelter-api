import express from 'express'
import type { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express()
const PORT = 8000

app.use(cors())

// ERROR //
app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'No route found' })
})

// PORT //
app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
