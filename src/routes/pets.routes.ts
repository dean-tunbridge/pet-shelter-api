import express from 'express'
import type { Router, Request, Response } from 'express'

import { pets } from '../data/pets'
import type { Pet } from '../data/pets'

// PET ROUTER //
export const petRouter: Router = express.Router()

// GET BY ID //
petRouter.get(
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

// GET VIA QUERY //
petRouter.get('/')
