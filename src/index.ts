import express, { request } from 'express'
import type { Express, Request, Response } from 'express'
import cors from 'cors'

import { pets } from './data/pets'
import type { Pet } from './data/pets'

const app: Express = express()
const PORT = 8000

app.use(cors())

// GET //
app.get('/', (req: Request, res: Response<Pet[]>): void => {
  res.json(pets)
})

// GET BY ID //
app.get(
  '/:id',
  (
    req: Request<{ id: string }>,
    res: Response<Pet | { message: string }>,
  ): void => {
    const { id } = req.params
    const pet: Pet | undefined = pets.find(
      (pet: Pet): boolean => pet.id.toString() === id,
    )
    pet ? res.json(pet) : res.status(404).json({ message: 'Invalid ID' })
  },
)

type PetQueryParams = {
  species?: string
}

// GET BY SPECIES //
app.get(
  '/',
  (
    req: Request<{}, unknown, {}, PetQueryParams>,
    res: Response<Pet[] | { message: string }>,
  ): void => {
    const { species } = req.query
    let filterPets: Pet[] = pets

    if (species) {
      filterPets = filterPets.filter(
        (pet: Pet): boolean =>
          pet.species.toLowerCase() === pet.species.toLowerCase(),
      )
      res.json(filterPets)
    } else {
      res.status(404).json({ message: 'Invalid ID' })
    }
  },
)

// ERROR //
app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'No route found' })
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
