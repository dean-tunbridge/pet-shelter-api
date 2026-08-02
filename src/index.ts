import express, { request } from 'express'
import type { Express, Request, Response } from 'express'
import cors from 'cors'

import { pets } from './data/pets'
import type { Pets } from './data/pets'

const app: Express = express()
const PORT = 8000

app.use(cors())

// GET //
app.get('/', (req: Request, res: Response<Pets[]>): void => {
  res.json(pets)
})

// GET BY ID //
app.get('/:id', (req: Request, res: Response): void => {
  const { id } = req.params
  const pet = pets.find((pet) => pet.id.toString() === id)
  res.json(pet)
})

// ERROR //
app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'No route found' })
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
