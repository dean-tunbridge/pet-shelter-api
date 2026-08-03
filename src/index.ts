import express, { request } from 'express'
import type { Express, Request, Response } from 'express'
import cors from 'cors'

import { pets } from './data/pets'
import type { Pet } from './data/pets'

const app: Express = express()
const PORT = 8000

app.use(cors())

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

// PET PARAMS TYPE //
type PetQueryParams = {
  species?: string
  adopted?: 'true' | 'false'
  minAge?: string
  maxAge?: string
}

// GET BY SPECIES & GET BY ADOPTED STATUS//
app.get(
  '/',
  (
    req: Request<{}, unknown, {}, PetQueryParams>,
    res: Response<Pet[]>,
  ): void => {
    const { species, adopted } = req.query

    let filteredPets: Pet[] = pets

    if (species) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
          pet.species.toLowerCase() === species.toLowerCase(),
      )
    }

    if (adopted) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean => pet.adopted === JSON.parse(adopted),
      )
    }

    res.json(filteredPets)
  },
)

// GET PETS WITHIN SPECIFIED AGE RANGE //
app.get(
  '/',
  (
    req: Request<{}, unknown, {}, PetQueryParams>,
    res: Response<Pet[]>,
  ): void => {
    const { minAge, maxAge } = req.query

    let filteredPets: Pet[] = pets

    if (minAge) {
      filteredPets.filter((pet: Pet) => pet.age >= JSON.parse(minAge))
    }

    if (maxAge) {
      filteredPets.filter((pet: Pet) => pet.age <= JSON.parse(maxAge))
    }
  },
)
// ERROR //
app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'No route found' })
})

// PORT //
app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
