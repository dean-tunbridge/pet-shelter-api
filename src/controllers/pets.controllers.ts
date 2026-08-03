import express from 'express'
import type { Request, Response } from 'express'

import { pets } from '../data/pets'
import type { Pet, PetQueryParams } from '../data/pets'

// GET PET VIA QUERY //
export const getPets = (
  req: Request<{}, unknown, {}, PetQueryParams>,
  res: Response<Pet[]>,
): void => {
  const { species, adopted, minAge, maxAge } = req.query

  let filteredPets: Pet[] = pets

  // GET BY SPECIES //
  if (species) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean =>
        pet.species.toLowerCase() === species.toLowerCase(),
    )
  }

  // GET BY ADOPTED STATUS //
  if (adopted) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.adopted === JSON.parse(adopted),
    )
  }

  // GET PETS WITHIN SPECIFIED AGE RANGE //
  if (minAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age >= JSON.parse(minAge),
    )
  }

  if (maxAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age <= JSON.parse(maxAge),
    )
  }

  res.json(filteredPets)
}

// GET PET BY ID //
export const getPetById = (
  req: Request<{ id: string }>,
  res: Response<Pet | { message: string }>,
): void => {
  const { id } = req.params
  const pet: Pet | undefined = pets.find(
    (pet: Pet): boolean => pet.id.toString() === id,
  )
  pet ? res.json(pet) : res.status(404).json({ message: 'Invalid ID' })
}
