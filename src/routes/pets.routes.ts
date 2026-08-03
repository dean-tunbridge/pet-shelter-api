import express from 'express'
import type { Router } from 'express'

import { getPets, getPetById } from '../controllers/pets.controllers'
import { validateID } from '../middleware/pets.middleware'

// PET ROUTER //
export const petRouter: Router = express.Router()

// GET VIA QUERY //
petRouter.get('/', getPets)

// GET BY ID //
petRouter.get('/:id', validateID, getPetById)
