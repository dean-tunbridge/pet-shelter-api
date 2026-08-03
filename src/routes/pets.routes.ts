import express from 'express'
import type { Router } from 'express'

import { getPets, getPetById } from '../controllers/pets.controllers'

// PET ROUTER //
export const petRouter: Router = express.Router()

// GET BY ID //
petRouter.get('/:id', getPetById)

// GET VIA QUERY //
petRouter.get('/', getPets)
