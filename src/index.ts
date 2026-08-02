import express from 'express'
import type { Express, Request, Response } from 'express'
import cors from 'cors'

import { pets, Pets } from './data/pets'

const app: Express = express()
const PORT = 8000

app.use(cors())

//GET
app.get('/', (req: Request, res: Response<Pets[]>): void => {
  res.json(pets)
})

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'No route found' })
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
